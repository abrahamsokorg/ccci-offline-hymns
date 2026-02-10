import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Edit, Save, X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { hymns, Language } from '@/data/hymns';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Hymn } from '@/data/hymn-types';
import { useToast } from '@/hooks/use-toast';

interface LyricsOverride {
  [hymnId: number]: {
    lyrics?: { verses: string[]; chorus: string };
    translations?: {
      [lang: string]: { title?: string; lyrics?: { verses: string[]; chorus: string } };
    };
  };
}

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [lyricsOverrides, setLyricsOverrides] = useLocalStorage<LyricsOverride>('hymn-lyrics-overrides', {});
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;
  const [editingHymn, setEditingHymn] = useState<Hymn | null>(null);
  const [editLanguage, setEditLanguage] = useState<Language>('English');
  const [editVerses, setEditVerses] = useState<string[]>([]);
  const [editChorus, setEditChorus] = useState('');

  const filteredHymns = hymns.filter(hymn => 
    hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hymn.index.includes(searchQuery)
  );

  const startEditing = (hymn: Hymn, language: Language) => {
    setEditingHymn(hymn);
    setEditLanguage(language);
    
    // Get current lyrics (from overrides or original)
    const override = lyricsOverrides[hymn.id];
    if (language === 'English') {
      const lyrics = override?.lyrics || hymn.lyrics;
      setEditVerses([...lyrics.verses]);
      setEditChorus(lyrics.chorus);
    } else {
      const translation = override?.translations?.[language] || hymn.translations?.[language];
      const lyrics = translation?.lyrics || { verses: [''], chorus: '' };
      setEditVerses([...lyrics.verses]);
      setEditChorus(lyrics.chorus);
    }
  };

  const saveLyrics = () => {
    if (!editingHymn) return;

    const newOverrides = { ...lyricsOverrides };
    if (!newOverrides[editingHymn.id]) {
      newOverrides[editingHymn.id] = {};
    }

    if (editLanguage === 'English') {
      newOverrides[editingHymn.id].lyrics = {
        verses: editVerses.filter(v => v.trim()),
        chorus: editChorus
      };
    } else {
      if (!newOverrides[editingHymn.id].translations) {
        newOverrides[editingHymn.id].translations = {};
      }
      newOverrides[editingHymn.id].translations![editLanguage] = {
        lyrics: {
          verses: editVerses.filter(v => v.trim()),
          chorus: editChorus
        }
      };
    }

    setLyricsOverrides(newOverrides);
    setEditingHymn(null);
    toast({
      title: "Lyrics saved!",
      description: `Updated ${editLanguage} lyrics for "${editingHymn.title}"`
    });
  };

  const handleCSVImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
        
        const idIndex = headers.indexOf('id');
        const languageIndex = headers.indexOf('language');
        const versesIndex = headers.indexOf('verses');
        const chorusIndex = headers.indexOf('chorus');

        if (idIndex === -1 || versesIndex === -1) {
          throw new Error('CSV must have "id" and "verses" columns');
        }

        const newOverrides = { ...lyricsOverrides };
        let imported = 0;

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;

          // Simple CSV parsing (handles quoted fields)
          const values = parseCSVLine(line);
          
          const hymnId = parseInt(values[idIndex]);
          const language = (values[languageIndex] || 'English') as Language;
          const versesRaw = values[versesIndex] || '';
          const chorus = values[chorusIndex] || '';

          // Verses separated by || 
          const verses = versesRaw.split('||').map(v => v.trim()).filter(Boolean);

          if (!newOverrides[hymnId]) {
            newOverrides[hymnId] = {};
          }

          if (language === 'English') {
            newOverrides[hymnId].lyrics = { verses, chorus };
          } else {
            if (!newOverrides[hymnId].translations) {
              newOverrides[hymnId].translations = {};
            }
            newOverrides[hymnId].translations![language] = {
              lyrics: { verses, chorus }
            };
          }
          imported++;
        }

        setLyricsOverrides(newOverrides);
        toast({
          title: "Import successful!",
          description: `Imported lyrics for ${imported} hymns`
        });
      } catch (error) {
        toast({
          title: "Import failed",
          description: error instanceof Error ? error.message : "Invalid CSV format",
          variant: "destructive"
        });
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const addVerse = () => {
    setEditVerses([...editVerses, '']);
  };

  const updateVerse = (index: number, value: string) => {
    const newVerses = [...editVerses];
    newVerses[index] = value;
    setEditVerses(newVerses);
  };

  const removeVerse = (index: number) => {
    setEditVerses(editVerses.filter((_, i) => i !== index));
  };

  const hasOverride = (hymnId: number) => !!lyricsOverrides[hymnId];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center gap-4 p-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="font-serif text-xl font-bold">Lyrics Admin</h1>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* CSV Import */}
          <div className="bg-card border border-border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Import from CSV</h2>
            <p className="text-sm text-muted-foreground mb-3">
              CSV format: id, language, verses (separated by ||), chorus
            </p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVImport}
                className="hidden"
              />
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                Choose CSV File
              </Button>
            </label>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search hymns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Hymn List */}
          <div className="space-y-2">
            {filteredHymns.map(hymn => (
              <motion.div
                key={hymn.id}
                className="bg-card border border-border rounded-lg p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-muted-foreground">{hymn.index}</span>
                      <span className="font-medium truncate">{hymn.title}</span>
                      {hasOverride(hymn.id) && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                          Modified
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {(['English', 'Yoruba', 'French', 'Spanish'] as Language[]).map(lang => (
                      <Button
                        key={lang}
                        variant="ghost"
                        size="sm"
                        className="text-xs px-2"
                        onClick={() => startEditing(hymn, lang)}
                      >
                        <Edit className="w-3 h-3 mr-1" />
                        {lang.slice(0, 2)}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Edit Modal */}
        {editingHymn && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-background rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h2 className="font-semibold">{editingHymn.title}</h2>
                  <p className="text-sm text-muted-foreground">Editing {editLanguage} lyrics</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setEditingHymn(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Verses</label>
                  {editVerses.map((verse, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Textarea
                        value={verse}
                        onChange={(e) => updateVerse(index, e.target.value)}
                        placeholder={`Verse ${index + 1} (use \\n for line breaks)`}
                        rows={3}
                        className="flex-1"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeVerse(index)}
                        className="flex-shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={addVerse}>
                    Add Verse
                  </Button>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Chorus</label>
                  <Textarea
                    value={editChorus}
                    onChange={(e) => setEditChorus(e.target.value)}
                    placeholder="Chorus (use \n for line breaks)"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <Button variant="outline" onClick={() => setEditingHymn(null)}>
                  Cancel
                </Button>
                <Button onClick={saveLyrics} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Lyrics
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
}
