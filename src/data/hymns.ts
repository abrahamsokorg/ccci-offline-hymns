// Offline hymn database - all data bundled with the app

export interface Hymn {
  id: number;
  index: string;
  title: string;
  meter: string;
  author: string;
  authorId: number;
  bibleVerse: string;
  categoryIds: number[];
  lyrics: {
    verses: string[];
    chorus?: string;
  };
  translations: {
    [key: string]: {
      title: string;
      lyrics: {
        verses: string[];
        chorus?: string;
      };
    };
  };
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  shortBio: string;
  bibleVerse: string;
  imageUrl?: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export type Language = 'English' | 'Yoruba' | 'French' | 'Spanish';

export const languages: Language[] = ['English', 'Yoruba', 'French', 'Spanish'];

export const categories: Category[] = [
  { id: 1, name: "Trials and Victories", description: "Hymns of overcoming through faith" },
  { id: 2, name: "Unity and Peace", description: "Hymns celebrating harmony in Christ" },
  { id: 3, name: "Baptism", description: "Hymns for baptismal services" },
  { id: 4, name: "Ascension", description: "Hymns celebrating Christ's ascension" },
  { id: 5, name: "Farewell", description: "Hymns for parting occasions" },
  { id: 6, name: "Christmas", description: "Hymns celebrating Christ's birth" },
  { id: 7, name: "Evening", description: "Hymns for evening worship" },
  { id: 8, name: "Missionary", description: "Hymns for missions and evangelism" },
  { id: 9, name: "The Church in Heaven and Earth", description: "Hymns about the universal church" },
  { id: 10, name: "Time of Old Age", description: "Hymns for the elderly" },
  { id: 11, name: "Suffering and Death", description: "Hymns of comfort in trials" },
  { id: 12, name: "Warning, Petition and Gospel Call", description: "Hymns of invitation" },
  { id: 13, name: "Pentecostal Revival", description: "Hymns of Holy Spirit power" },
  { id: 14, name: "Servants of God", description: "Hymns honoring ministers" },
  { id: 15, name: "Labour and Service", description: "Hymns for Christian work" },
  { id: 16, name: "Building and Dedication", description: "Hymns for dedications" },
  { id: 17, name: "Resurrection", description: "Hymns celebrating Christ's resurrection" },
  { id: 18, name: "Closing and Opening of a Year", description: "New Year hymns" },
  { id: 19, name: "Lord's Day after Resurrection", description: "Sunday worship hymns" },
  { id: 20, name: "Praises", description: "Hymns of praise and adoration" },
  { id: 21, name: "Advent", description: "Hymns for the Advent season" },
  { id: 22, name: "Holy Communion", description: "Hymns for the Lord's Supper" },
  { id: 23, name: "Holy Ghost", description: "Hymns about the Holy Spirit" },
  { id: 24, name: "Various Hymns", description: "General worship hymns" },
  { id: 25, name: "Holy Matrimony", description: "Wedding hymns" },
  { id: 26, name: "Harvest and Anniversaries", description: "Thanksgiving hymns" },
  { id: 27, name: "The Lord's Day", description: "Sabbath and Sunday hymns" },
  { id: 28, name: "Palm Sunday", description: "Hymns for Palm Sunday" },
  { id: 29, name: "Divine Healing", description: "Hymns of healing and faith" },
];

export const authors: Author[] = [
  {
    id: 1,
    name: "John Newton",
    shortBio: "Former slave trader turned hymn writer",
    bio: "John Newton (1725-1807) was an English Anglican clergyman and abolitionist who served as a sailor and later as the captain of slave ships. After experiencing a dramatic conversion during a violent storm at sea, he eventually renounced the slave trade and became a minister. He is best known for writing 'Amazing Grace' and other beloved hymns that speak of God's redemptive power.",
    bibleVerse: "But by the grace of God I am what I am. - 1 Corinthians 15:10",
  },
  {
    id: 2,
    name: "Charles Wesley",
    shortBio: "Prolific hymn writer of the Methodist movement",
    bio: "Charles Wesley (1707-1788) was an English leader of the Methodist movement, and wrote over 6,500 hymns. Along with his brother John, he founded the Methodist movement which emphasized personal faith, holy living, and the singing of hymns. His hymns remain central to Christian worship across denominations worldwide.",
    bibleVerse: "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs. - Colossians 3:16",
  },
  {
    id: 3,
    name: "Fanny Crosby",
    shortBio: "Blind poetess who wrote over 8,000 hymns",
    bio: "Frances Jane Crosby (1820-1915), known as Fanny Crosby, was an American mission worker, poet, lyricist, and composer. Despite being blind from infancy, she wrote more than 8,000 hymns and gospel songs, with over 100 million copies printed. Her hymns including 'Blessed Assurance' and 'To God Be the Glory' continue to inspire Christians worldwide.",
    bibleVerse: "For we walk by faith, not by sight. - 2 Corinthians 5:7",
  },
  {
    id: 4,
    name: "Isaac Watts",
    shortBio: "Father of English hymnody",
    bio: "Isaac Watts (1674-1748) was an English Christian minister, hymn writer, theologian, and logician. He is credited with approximately 750 hymns and is considered the 'Father of English Hymnody'. His most famous works include 'Joy to the World' and 'When I Survey the Wondrous Cross'.",
    bibleVerse: "O sing unto the LORD a new song; for he hath done marvellous things. - Psalm 98:1",
  },
  {
    id: 5,
    name: "Thomas Ken",
    shortBio: "Bishop and hymn writer known for the Doxology",
    bio: "Thomas Ken (1637-1711) was an English clergyman who was considered the most eminent of the English non-juring bishops. He is best known for his morning, evening, and midnight hymns, particularly the famous Doxology 'Praise God from whom all blessings flow'.",
    bibleVerse: "Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power. - Psalm 150:1",
  },
];

export const hymns: Hymn[] = [
  {
    id: 1,
    index: "001",
    title: "Great Shepherd of Thy People",
    meter: "CM",
    author: "John Newton",
    authorId: 1,
    bibleVerse: "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    categoryIds: [20, 24],
    lyrics: {
      verses: [
        "Great Shepherd of Thy people, hear,\nThy presence now display;\nAs Thou hast given a place for prayer,\nSo give us hearts to pray.",
        "Within these walls let holy peace\nAnd love and concord dwell;\nHere give the troubled conscience ease,\nThe wounded spirit heal.",
        "The hearing ear, the seeing eye,\nThe contrite heart bestow;\nAnd shine upon us from on high,\nThat we in grace may grow.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Olùṣọ́ Àgùntàn Ńlá",
        lyrics: {
          verses: [
            "Olùṣọ́ àgùntàn ńlá, gbọ́,\nJẹ́ kí ìwà rẹ hàn;\nBí o ti fún wa ní ibi àdúrà,\nFún wa ní ọkàn láti gbàdúrà.",
            "Nínú ògiri yìí jẹ́ kí àlàáfíà mímọ́\nÀti ìfẹ́ àti ìṣọ̀kan wà;\nNíbí fún ẹ̀rí-ọkàn wàhálà ní ìsinmi,\nMú ẹ̀mí tí ó fara pa lára dá.",
          ],
        },
      },
      French: {
        title: "Grand Berger de Ton Peuple",
        lyrics: {
          verses: [
            "Grand Berger de ton peuple, entends,\nManifeste ta présence maintenant;\nComme tu as donné un lieu de prière,\nDonne-nous des cœurs pour prier.",
            "Dans ces murs, que la sainte paix\nEt l'amour et la concorde demeurent;\nIci donne à la conscience troublée le repos,\nGuéris l'esprit blessé.",
          ],
        },
      },
      Spanish: {
        title: "Gran Pastor de Tu Pueblo",
        lyrics: {
          verses: [
            "Gran Pastor de tu pueblo, escucha,\nMuestra ahora tu presencia;\nComo has dado un lugar para orar,\nDanos corazones para orar.",
            "Dentro de estos muros que la santa paz\nY el amor y la concordia moren;\nAquí da a la conciencia atribulada descanso,\nSana el espíritu herido.",
          ],
        },
      },
    },
  },
  {
    id: 2,
    index: "002",
    title: "Love Divine, All Loves Excelling",
    meter: "8.7.8.7 D",
    author: "Charles Wesley",
    authorId: 2,
    bibleVerse: "God is love; and he that dwelleth in love dwelleth in God, and God in him. - 1 John 4:16",
    categoryIds: [20, 23, 24],
    lyrics: {
      verses: [
        "Love divine, all loves excelling,\nJoy of heaven, to earth come down;\nFix in us Thy humble dwelling,\nAll Thy faithful mercies crown.",
        "Jesus, Thou art all compassion,\nPure unbounded love Thou art;\nVisit us with Thy salvation,\nEnter every trembling heart.",
        "Come, Almighty to deliver,\nLet us all Thy life receive;\nSuddenly return, and never,\nNever more Thy temples leave.",
        "Finish then Thy new creation,\nPure and spotless let us be;\nLet us see Thy great salvation\nPerfectly restored in Thee.",
      ],
      chorus: "Breathe, O breathe Thy loving Spirit\nInto every troubled breast;\nLet us all in Thee inherit,\nLet us find Thy promised rest.",
    },
    translations: {
      Yoruba: {
        title: "Ìfẹ́ Ọlọ́run, Ìfẹ́ Gbogbo Tayọ",
        lyrics: {
          verses: [
            "Ìfẹ́ Ọlọ́run, ìfẹ́ gbogbo tayọ,\nAyọ̀ ọ̀run, sọ̀kalẹ̀ wá sí ayé;\nFi ibùgbé rẹ̀ rírẹ̀lẹ̀ múlẹ̀ sínú wa,\nFí adé sí gbogbo àánú rẹ̀ olóòtítọ́.",
            "Jésù, Ìwọ ni àánú gbogbo,\nÌfẹ́ mímọ́ àìní ààlà ni Ìwọ;\nBẹ̀ wá wò pẹ̀lú ìgbàlà Rẹ,\nWọ inú ọkàn gbogbo tí ó wárìrì.",
          ],
          chorus: "Mí, O mí Ẹ̀mí ìfẹ́ Rẹ\nSínú gbogbo àyà wàhálà;\nJẹ́ kí gbogbo wa jogún nínú Rẹ,\nJẹ́ kí a rí ìsinmi tí O ṣelérí.",
        },
      },
      French: {
        title: "Amour Divin, Surpassant Tous les Amours",
        lyrics: {
          verses: [
            "Amour divin, surpassant tous les amours,\nJoie du ciel, descends sur terre;\nFixe en nous ta demeure humble,\nCouronne toutes tes fidèles miséricordes.",
            "Jésus, tu es toute compassion,\nPur amour sans bornes tu es;\nVisite-nous avec ton salut,\nEntre dans chaque cœur tremblant.",
          ],
          chorus: "Souffle, ô souffle ton Esprit d'amour\nDans chaque poitrine troublée;\nQue nous héritions tous en toi,\nQue nous trouvions ton repos promis.",
        },
      },
      Spanish: {
        title: "Amor Divino, Que Excede a Todos",
        lyrics: {
          verses: [
            "Amor divino, que excede a todos,\nGozo del cielo, baja a la tierra;\nFija en nosotros tu humilde morada,\nCorona todas tus fieles misericordias.",
            "Jesús, tú eres toda compasión,\nPuro amor sin límites eres;\nVisítanos con tu salvación,\nEntra en cada corazón tembloroso.",
          ],
          chorus: "Respira, oh respira tu Espíritu amoroso\nEn cada pecho atribulado;\nQue todos heredemos en ti,\nQue encontremos tu descanso prometido.",
        },
      },
    },
  },
  {
    id: 3,
    index: "003",
    title: "Awake, My Soul, and with the Sun",
    meter: "LM",
    author: "Thomas Ken",
    authorId: 5,
    bibleVerse: "Cause me to hear thy lovingkindness in the morning. - Psalm 143:8",
    categoryIds: [19, 20, 27],
    lyrics: {
      verses: [
        "Awake, my soul, and with the sun\nThy daily stage of duty run;\nShake off dull sloth, and joyful rise\nTo pay thy morning sacrifice.",
        "Redeem thy misspent time that's past,\nAnd live this day as if thy last;\nImprove thy talent with due care;\nFor the great Day thyself prepare.",
        "Let all thy converse be sincere,\nThy conscience as the noonday clear;\nThink how all-seeing God thy ways\nAnd all thy secret thoughts surveys.",
        "Glory to Thee, who safe hast kept\nAnd hast refreshed me while I slept;\nGrant, Lord, when I from death shall wake,\nI may of endless light partake.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Jí, Ọkàn Mi, Pẹ̀lú Oòrùn",
        lyrics: {
          verses: [
            "Jí, ọkàn mi, pẹ̀lú oòrùn\nṢe iṣẹ́ ọjọ́ rẹ lójoojúmọ́;\nGbọ̀n ọ̀lẹ àìṣòro kúrò, jí pẹ̀lú ayọ̀\nLáti san ẹbọ ọ̀sán rẹ.",
            "Rà àkókò rẹ tí ó lọ padà,\nSì gbé ọjọ́ yìí bí ẹni pé ó kẹ́yìn rẹ;\nMú ẹ̀bùn rẹ dára pẹ̀lú ìtọ́jú tó yẹ;\nMúra sílẹ̀ fún Ọjọ́ ńlá náà.",
          ],
        },
      },
      French: {
        title: "Éveille-toi, Mon Âme, avec le Soleil",
        lyrics: {
          verses: [
            "Éveille-toi, mon âme, et avec le soleil\nAccomplis ta course quotidienne de devoir;\nSecoue la paresse terne, et lève-toi joyeusement\nPour payer ton sacrifice du matin.",
            "Rachète ton temps mal dépensé du passé,\nEt vis ce jour comme s'il était le dernier;\nAméliore ton talent avec soin;\nPour le grand Jour prépare-toi.",
          ],
        },
      },
      Spanish: {
        title: "Despierta, Alma Mía, con el Sol",
        lyrics: {
          verses: [
            "Despierta, alma mía, y con el sol\nCorre tu carrera diaria de deber;\nSacude la pereza, y levántate gozoso\nPara pagar tu sacrificio matutino.",
            "Redime tu tiempo mal gastado del pasado,\nY vive este día como si fuera el último;\nMejora tu talento con debido cuidado;\nPara el gran Día prepárate.",
          ],
        },
      },
    },
  },
  {
    id: 4,
    index: "004",
    title: "Blessed Assurance, Jesus Is Mine",
    meter: "9.10.9.9",
    author: "Fanny Crosby",
    authorId: 3,
    bibleVerse: "The Spirit itself beareth witness with our spirit, that we are the children of God. - Romans 8:16",
    categoryIds: [1, 20, 24],
    lyrics: {
      verses: [
        "Blessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",
        "Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending, bring from above\nEchoes of mercy, whispers of love.",
        "Perfect submission, all is at rest,\nI in my Savior am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love.",
      ],
      chorus: "This is my story, this is my song,\nPraising my Savior all the day long;\nThis is my story, this is my song,\nPraising my Savior all the day long.",
    },
    translations: {
      Yoruba: {
        title: "Ìdánilójú Tó Dára, Jésù Ni Tirẹ̀",
        lyrics: {
          verses: [
            "Ìdánilójú tó dára, Jésù ni tirẹ̀!\nA, kíni àtọ̀ọ́wọ́dọ́wọ́ ògo ọlọ́run!\nArólé ìgbàlà, ohun rírà Ọlọ́run,\nTí a bí láti inú Ẹ̀mí Rẹ̀, tí a wẹ̀ nínú ẹ̀jẹ̀ Rẹ̀.",
            "Ìtẹríba pípé, ìgbádùn pípé,\nÌran ìyọ̀ǹda ń bẹ́ sí ojú mi;\nÀwọn àńgẹ́lì ń sọ̀kalẹ̀, mú wá láti òkè\nÀrọhùn àánú, ọ̀rọ̀ asọ̀ ìfẹ́.",
          ],
          chorus: "Èyí ni ìtàn mi, èyí ni orin mi,\nÌyìn Olùgbàlà mi ní gbogbo ọjọ́;\nÈyí ni ìtàn mi, èyí ni orin mi,\nÌyìn Olùgbàlà mi ní gbogbo ọjọ́.",
        },
      },
      French: {
        title: "Bienheureuse Assurance, Jésus Est à Moi",
        lyrics: {
          verses: [
            "Bienheureuse assurance, Jésus est à moi!\nOh, quel avant-goût de gloire divine!\nHéritier du salut, achat de Dieu,\nNé de son Esprit, lavé dans son sang.",
            "Soumission parfaite, délice parfait,\nVisions de ravissement éclatent maintenant à ma vue;\nAnges descendant, apportent d'en haut\nÉchos de miséricorde, murmures d'amour.",
          ],
          chorus: "C'est mon histoire, c'est mon chant,\nLouant mon Sauveur tout le jour;\nC'est mon histoire, c'est mon chant,\nLouant mon Sauveur tout le jour.",
        },
      },
      Spanish: {
        title: "Bendita Seguridad, Jesús Es Mío",
        lyrics: {
          verses: [
            "Bendita seguridad, ¡Jesús es mío!\n¡Oh, qué anticipo de gloria divina!\nHeredero de salvación, compra de Dios,\nNacido de su Espíritu, lavado en su sangre.",
            "Sumisión perfecta, deleite perfecto,\nVisiones de rapto ahora estallan ante mi vista;\nÁngeles descendiendo, traen desde arriba\nEcos de misericordia, susurros de amor.",
          ],
          chorus: "Esta es mi historia, este es mi canto,\nAlabando a mi Salvador todo el día;\nEsta es mi historia, este es mi canto,\nAlabando a mi Salvador todo el día.",
        },
      },
    },
  },
  {
    id: 5,
    index: "005",
    title: "When I Survey the Wondrous Cross",
    meter: "LM",
    author: "Isaac Watts",
    authorId: 4,
    bibleVerse: "God forbid that I should glory, save in the cross of our Lord Jesus Christ. - Galatians 6:14",
    categoryIds: [11, 20, 22],
    lyrics: {
      verses: [
        "When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.",
        "Forbid it, Lord, that I should boast,\nSave in the death of Christ my God!\nAll the vain things that charm me most,\nI sacrifice them to His blood.",
        "See from His head, His hands, His feet,\nSorrow and love flow mingled down!\nDid e'er such love and sorrow meet,\nOr thorns compose so rich a crown?",
        "Were the whole realm of nature mine,\nThat were a present far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Nígbà Tí Mo Wo Àgbélébùú Ìyanu",
        lyrics: {
          verses: [
            "Nígbà tí mo wo àgbélébùú ìyanu\nLórí èyí tí Ọba ògo kú,\nÈrè mi tó pọ̀ jùlọ ni mo ka sí ìpàdánù,\nMo sì dá gbogbo ìgbéraga mi lẹ́bi.",
            "Ó yẹ ká dá a lẹ́kọ̀ọ́, Olúwa, kí n má ṣe yìn,\nÀyàfi nínú ikú Kristi Ọlọ́run mi!\nGbogbo ohun asán tó wù mí jùlọ,\nMo fi wọ́n rúbọ sí ẹ̀jẹ̀ Rẹ̀.",
          ],
        },
      },
      French: {
        title: "Quand Je Contemple la Croix Merveilleuse",
        lyrics: {
          verses: [
            "Quand je contemple la croix merveilleuse\nSur laquelle le Prince de gloire est mort,\nMon plus riche gain je compte comme perte,\nEt je méprise tout mon orgueil.",
            "À Dieu ne plaise que je me glorifie,\nSauf dans la mort de Christ mon Dieu!\nToutes les choses vaines qui me charment le plus,\nJe les sacrifie à son sang.",
          ],
        },
      },
      Spanish: {
        title: "Cuando Contemplo la Cruz Maravillosa",
        lyrics: {
          verses: [
            "Cuando contemplo la cruz maravillosa\nEn la cual el Príncipe de gloria murió,\nMi mayor ganancia cuento como pérdida,\nY desprecio todo mi orgullo.",
            "Prohíbelo, Señor, que yo me gloríe,\n¡Salvo en la muerte de Cristo mi Dios!\nTodas las cosas vanas que más me encantan,\nLas sacrifico a su sangre.",
          ],
        },
      },
    },
  },
  {
    id: 6,
    index: "006",
    title: "Amazing Grace",
    meter: "CM",
    author: "John Newton",
    authorId: 1,
    bibleVerse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God. - Ephesians 2:8",
    categoryIds: [1, 12, 20, 24],
    lyrics: {
      verses: [
        "Amazing grace! how sweet the sound,\nThat saved a wretch like me!\nI once was lost, but now am found,\nWas blind, but now I see.",
        "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!",
        "Through many dangers, toils, and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.",
        "When we've been there ten thousand years,\nBright shining as the sun,\nWe've no less days to sing God's praise\nThan when we first begun.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Oore Ọ̀fẹ́ Ìyanu",
        lyrics: {
          verses: [
            "Oore ọ̀fẹ́ ìyanu! bí ó ti dùn tó,\nTí ó gbà ẹ̀dá burúkú bí emi là!\nMo ti ṣáko tẹ́lẹ̀, ṣùgbọ́n a ti rí mi báyìí,\nMo fọ́jú, ṣùgbọ́n mo rí báyìí.",
            "Oore ọ̀fẹ́ ni ó kọ́ ọkàn mi láti bẹ̀rù,\nOore ọ̀fẹ́ sì tú ìbẹ̀rù mi sílẹ̀;\nBawo ni oore ọ̀fẹ́ yẹn ṣe wúlò tó\nWákàtí tí mo ti gbàgbọ́ ní àkọ́kọ́!",
          ],
        },
      },
      French: {
        title: "Grâce Infinie",
        lyrics: {
          verses: [
            "Grâce infinie! quel doux son,\nQui a sauvé un misérable comme moi!\nJ'étais perdu, mais maintenant je suis trouvé,\nJ'étais aveugle, mais maintenant je vois.",
            "C'est la grâce qui a enseigné à mon cœur à craindre,\nEt la grâce a soulagé mes peurs;\nCombien précieuse cette grâce apparut\nL'heure où j'ai cru pour la première fois!",
          ],
        },
      },
      Spanish: {
        title: "Sublime Gracia",
        lyrics: {
          verses: [
            "¡Sublime gracia! qué dulce el sonido,\n¡Que salvó a un miserable como yo!\nUna vez estuve perdido, pero ahora soy hallado,\nEstuve ciego, pero ahora veo.",
            "Fue la gracia que enseñó a mi corazón a temer,\nY la gracia mis temores alivió;\nCuán preciosa esa gracia apareció\n¡La hora en que por primera vez creí!",
          ],
        },
      },
    },
  },
];

// Helper functions
export const getHymnsByLanguage = (language: Language): Hymn[] => {
  return hymns;
};

export const getHymnsByCategory = (categoryId: number): Hymn[] => {
  return hymns.filter(hymn => hymn.categoryIds.includes(categoryId));
};

export const getHymnsByAuthor = (authorId: number): Hymn[] => {
  return hymns.filter(hymn => hymn.authorId === authorId);
};

export const searchHymns = (query: string, language: Language): Hymn[] => {
  const lowerQuery = query.toLowerCase();
  return hymns.filter(hymn => {
    if (language === 'English') {
      return hymn.title.toLowerCase().includes(lowerQuery) ||
        hymn.index.includes(query) ||
        hymn.lyrics.verses.some(v => v.toLowerCase().includes(lowerQuery));
    }
    const translation = hymn.translations[language];
    if (translation) {
      return translation.title.toLowerCase().includes(lowerQuery) ||
        hymn.index.includes(query) ||
        translation.lyrics.verses.some(v => v.toLowerCase().includes(lowerQuery));
    }
    return false;
  });
};

export const getHymnTitle = (hymn: Hymn, language: Language): string => {
  if (language === 'English') return hymn.title;
  return hymn.translations[language]?.title || hymn.title;
};

export const getHymnLyrics = (hymn: Hymn, language: Language) => {
  if (language === 'English') return hymn.lyrics;
  return hymn.translations[language]?.lyrics || hymn.lyrics;
};
