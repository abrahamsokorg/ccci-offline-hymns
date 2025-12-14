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
  audioFile?: string; // Local audio file path
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
  {
    id: 6,
    name: "Reginald Heber",
    shortBio: "Bishop of Calcutta and hymn writer",
    bio: "Reginald Heber (1783-1826) was an English bishop, traveler, and hymn writer. He served as the Bishop of Calcutta and is remembered for his missionary work and the beautiful hymns he composed, including 'Holy, Holy, Holy'.",
    bibleVerse: "Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory. - Isaiah 6:3",
  },
  {
    id: 7,
    name: "Carl Boberg",
    shortBio: "Swedish poet and editor",
    bio: "Carl Gustav Boberg (1859-1940) was a Swedish poet and member of the Swedish parliament. He is best known for writing the poem 'O Store Gud' (O Great God) in 1885, which later became the beloved hymn 'How Great Thou Art' after being translated into English.",
    bibleVerse: "The heavens declare the glory of God; and the firmament sheweth his handywork. - Psalm 19:1",
  },
  {
    id: 8,
    name: "Joseph Scriven",
    shortBio: "Irish-Canadian hymn writer",
    bio: "Joseph Medlicott Scriven (1819-1886) was an Irish-Canadian poet and hymn writer. He wrote the poem 'What a Friend We Have in Jesus' to comfort his mother in Ireland while he was living in Canada. The poem was later set to music and became one of the most beloved hymns worldwide.",
    bibleVerse: "Casting all your care upon him; for he careth for you. - 1 Peter 5:7",
  },
  {
    id: 9,
    name: "Augustus Toplady",
    shortBio: "Anglican clergyman and hymn writer",
    bio: "Augustus Montague Toplady (1740-1778) was an Anglican clergyman and hymn writer. He is best known for writing the hymn 'Rock of Ages', which remains one of the most popular hymns in the English language.",
    bibleVerse: "The Lord is my rock, and my fortress, and my deliverer. - 2 Samuel 22:2",
  },
  {
    id: 10,
    name: "Edward Perronet",
    shortBio: "English evangelist and hymn writer",
    bio: "Edward Perronet (1726-1792) was an English evangelist and hymn writer who worked closely with the Wesley brothers. He is best known for writing 'All Hail the Power of Jesus' Name', often called the 'coronation hymn'.",
    bibleVerse: "That at the name of Jesus every knee should bow. - Philippians 2:10",
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
            "'Twas grace that taught my heart to fear,\nOore ọ̀fẹ́ sì tú ìbẹ̀rù mi sílẹ̀;\nBawo ni oore ọ̀fẹ́ yẹn ṣe wúlò tó\nWákàtí tí mo ti gbàgbọ́ ní àkọ́kọ́!",
            "Láti ọ̀pọ̀lọpọ̀ ewu, iṣẹ́, àti ìdẹ̀kùn,\nMo ti dé báyìí;\nOore ọ̀fẹ́ ni ó mú mi wá títí di isisiyi,\nOore ọ̀fẹ́ yóò sì darí mi lọ sílé.",
            "Nígbà tí a bá ti wà níbẹ̀ fún ẹgbẹ̀rún ọdún mẹ́wàá,\nTí a ń tàn gẹ́gẹ́ bí oòrùn,\nA kò ní ọjọ́ díẹ̀ láti yin Ọlọ́run\nJù bí a ti bẹ̀rẹ̀ ní àkọ́kọ́ lọ.",
          ],
        },
      },
      French: {
        title: "Grâce Infinie",
        lyrics: {
          verses: [
            "Grâce infinie! quel doux son,\nQui a sauvé un misérable comme moi!\nJ'étais perdu, mais maintenant je suis trouvé,\nJ'étais aveugle, mais maintenant je vois.",
            "C'est la grâce qui a enseigné à mon cœur à craindre,\nEt la grâce a soulagé mes peurs;\nCombien précieuse cette grâce apparut\nL'heure où j'ai cru pour la première fois!",
            "À travers de nombreux dangers, labeurs et pièges,\nJe suis déjà venu;\nC'est la grâce qui m'a amené sain et sauf jusqu'ici,\nEt la grâce me conduira à la maison.",
            "Quand nous aurons été là dix mille ans,\nBrillant comme le soleil,\nNous n'aurons pas moins de jours pour louer Dieu\nQue lorsque nous avons commencé.",
          ],
        },
      },
      Spanish: {
        title: "Sublime Gracia",
        lyrics: {
          verses: [
            "¡Sublime gracia! qué dulce el sonido,\n¡Que salvó a un miserable como yo!\nUna vez estuve perdido, pero ahora soy hallado,\nEstuve ciego, pero ahora veo.",
            "Fue la gracia que enseñó a mi corazón a temer,\nY la gracia mis temores alivió;\nCuán preciosa esa gracia apareció\n¡La hora en que por primera vez creí!",
            "A través de muchos peligros, trabajos y trampas,\nYa he venido;\nLa gracia me ha traído seguro hasta aquí,\nY la gracia me llevará a casa.",
            "Cuando hayamos estado allí diez mil años,\nBrillando como el sol,\nNo tendremos menos días para alabar a Dios\nQue cuando empezamos por primera vez.",
          ],
        },
      },
    },
  },
  {
    id: 7,
    index: "007",
    title: "Holy, Holy, Holy! Lord God Almighty",
    meter: "11.12.12.10",
    author: "Reginald Heber",
    authorId: 6,
    bibleVerse: "Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory. - Isaiah 6:3",
    categoryIds: [20, 24],
    lyrics: {
      verses: [
        "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy, merciful and mighty!\nGod in three Persons, blessèd Trinity!",
        "Holy, holy, holy! All the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWho wert, and art, and evermore shall be.",
        "Holy, holy, holy! Though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see,\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity.",
        "Holy, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy Name, in earth and sky and sea;\nHoly, holy, holy; merciful and mighty!\nGod in three Persons, blessèd Trinity!",
      ],
    },
    translations: {
      Yoruba: {
        title: "Mímọ́, Mímọ́, Mímọ́! Olúwa Ọlọ́run Alágbára",
        lyrics: {
          verses: [
            "Mímọ́, mímọ́, mímọ́! Olúwa Ọlọ́run Alágbára!\nNí kùtùkùtù òwúrọ̀ orin wa yóò gòkè sí Ọ;\nMímọ́, mímọ́, mímọ́, àánú àti alágbára!\nỌlọ́run nínú Ẹni mẹ́ta, Mẹ́talọ́kan àlàáfíà!",
            "Mímọ́, mímọ́, mímọ́! Gbogbo àwọn ènìyàn mímọ́ ń jọ́sìn Rẹ,\nWọ́n ń ju adé wúrà wọn sílẹ̀ yí okun gíláàsì ká;\nKérúbù àti séráfù ń wólẹ̀ níwájú Rẹ,\nẸni tí ó wà, tí ó sì wà, tí yóò sì wà láéláé.",
          ],
        },
      },
      French: {
        title: "Saint, Saint, Saint! Seigneur Dieu Tout-Puissant",
        lyrics: {
          verses: [
            "Saint, saint, saint! Seigneur Dieu Tout-Puissant!\nTôt le matin notre chant s'élèvera vers Toi;\nSaint, saint, saint, miséricordieux et puissant!\nDieu en trois Personnes, bienheureuse Trinité!",
            "Saint, saint, saint! Tous les saints T'adorent,\nJetant leurs couronnes d'or autour de la mer de cristal;\nChérubins et séraphins se prosternant devant Toi,\nQui étais, et es, et seras à jamais.",
          ],
        },
      },
      Spanish: {
        title: "¡Santo, Santo, Santo! Señor Omnipotente",
        lyrics: {
          verses: [
            "¡Santo, santo, santo! ¡Señor omnipotente!\nTemprano en la mañana nuestro canto se elevará a Ti;\n¡Santo, santo, santo, misericordioso y poderoso!\n¡Dios en tres Personas, bendita Trinidad!",
            "¡Santo, santo, santo! Todos los santos te adoran,\nEchando sus coronas de oro alrededor del mar de cristal;\nQuerubines y serafines cayendo ante Ti,\nQue eras, y eres, y siempre serás.",
          ],
        },
      },
    },
  },
  {
    id: 8,
    index: "008",
    title: "How Great Thou Art",
    meter: "11.10.11.10",
    author: "Carl Boberg",
    authorId: 7,
    bibleVerse: "O LORD my God, thou art very great; thou art clothed with honour and majesty. - Psalm 104:1",
    categoryIds: [20, 24],
    lyrics: {
      verses: [
        "O Lord my God, when I in awesome wonder\nConsider all the works Thy hands have made,\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
        "When through the woods and forest glades I wander\nAnd hear the birds sing sweetly in the trees,\nWhen I look down from lofty mountain grandeur,\nAnd hear the brook and feel the gentle breeze.",
        "And when I think that God, His Son not sparing,\nSent Him to die, I scarce can take it in,\nThat on the cross, my burden gladly bearing,\nHe bled and died to take away my sin.",
        "When Christ shall come with shout of acclamation\nAnd take me home, what joy shall fill my heart!\nThen I shall bow in humble adoration\nAnd there proclaim, my God, how great Thou art!",
      ],
      chorus: "Then sings my soul, my Savior God, to Thee:\nHow great Thou art! How great Thou art!\nThen sings my soul, my Savior God, to Thee:\nHow great Thou art! How great Thou art!",
    },
    translations: {
      Yoruba: {
        title: "Bí O Ṣe Tóbi Tó",
        lyrics: {
          verses: [
            "Olúwa Ọlọ́run mi, nígbà tí mo bá ronú ìyanu\nMo ro gbogbo iṣẹ́ tí ọwọ́ Rẹ ṣe,\nMo rí àwọn ìràwọ̀, mo gbọ́ àrá tí ó ń yí,\nAgbára Rẹ ní àgbáálá ayé hàn.",
            "Nígbà tí mo rin kọjá igbó àti àfonífojì,\nTí mo sì gbọ́ àwọn ẹyẹ ń kọrin ní àwọn igi,\nNígbà tí mo wo lulẹ̀ láti òkè gíga,\nTí mo sì gbọ́ odò tí mo sì ní àfẹ́fẹ́ tútù.",
          ],
          chorus: "Lẹ́yìn náà ọkàn mi kọrin, Olùgbàlà Ọlọ́run mi, sí Ọ:\nBí o ṣe tóbi tó! Bí o ṣe tóbi tó!\nLẹ́yìn náà ọkàn mi kọrin, Olùgbàlà Ọlọ́run mi, sí Ọ:\nBí o ṣe tóbi tó! Bí o ṣe tóbi tó!",
        },
      },
      French: {
        title: "Que Tu Es Grand",
        lyrics: {
          verses: [
            "Seigneur mon Dieu, quand je contemple avec émerveillement\nToutes les œuvres que tes mains ont faites,\nJe vois les étoiles, j'entends le tonnerre gronder,\nTa puissance se déploie dans tout l'univers.",
            "Quand je me promène dans les bois et les clairières\nEt que j'entends les oiseaux chanter doucement dans les arbres,\nQuand je regarde d'en haut la grandeur majestueuse,\nEt que j'entends le ruisseau et sens la douce brise.",
          ],
          chorus: "Alors mon âme chante, mon Sauveur Dieu, à Toi:\nQue tu es grand! Que tu es grand!\nAlors mon âme chante, mon Sauveur Dieu, à Toi:\nQue tu es grand! Que tu es grand!",
        },
      },
      Spanish: {
        title: "Cuán Grande Es Él",
        lyrics: {
          verses: [
            "Señor mi Dios, al contemplar los cielos,\nEl firmamento y las estrellas mil,\nAl oír tu voz en los potentes truenos\nY ver brillar el sol en su cenit.",
            "Al recorrer los montes y los valles\nY ver las bellas flores al pasar,\nAl escuchar el canto de las aves\nY el murmurar del claro manantial.",
          ],
          chorus: "Mi corazón entona la canción:\n¡Cuán grande es Él! ¡Cuán grande es Él!\nMi corazón entona la canción:\n¡Cuán grande es Él! ¡Cuán grande es Él!",
        },
      },
    },
  },
  {
    id: 9,
    index: "009",
    title: "What a Friend We Have in Jesus",
    meter: "8.7.8.7 D",
    author: "Joseph Scriven",
    authorId: 8,
    bibleVerse: "Greater love hath no man than this, that a man lay down his life for his friends. - John 15:13",
    categoryIds: [1, 11, 24],
    lyrics: {
      verses: [
        "What a Friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!",
        "Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged,\nTake it to the Lord in prayer.",
        "Are we weak and heavy laden,\nCumbered with a load of care?\nPrecious Savior, still our refuge,\nTake it to the Lord in prayer.",
      ],
      chorus: "O what peace we often forfeit,\nO what needless pain we bear,\nAll because we do not carry\nEverything to God in prayer!",
    },
    translations: {
      Yoruba: {
        title: "Ọ̀rẹ́ Wo Ni A Ní Nínú Jésù",
        lyrics: {
          verses: [
            "Ọ̀rẹ́ wo ni a ní nínú Jésù,\nLáti ru gbogbo ẹ̀ṣẹ̀ àti ìbànújẹ́ wa!\nÀǹfààní wo ni láti gbé\nGbogbo nǹkan lọ sí Ọlọ́run nínú àdúrà!",
            "Ṣé a ní ìdánwò àti àdánwò?\nṢé wàhálà wà níbikíbi?\nA kò gbọdọ̀ rẹ̀wẹ̀sì rárá,\nGbé e lọ sí Olúwa nínú àdúrà.",
          ],
          chorus: "Ó, àlàáfíà wo ni a máa pàdánù,\nÓ, ìrora aláìní wo ni a máa ru,\nGbogbo nítorí pé a kò gbé\nGbogbo nǹkan lọ sí Ọlọ́run nínú àdúrà!",
        },
      },
      French: {
        title: "Quel Ami Nous Avons en Jésus",
        lyrics: {
          verses: [
            "Quel ami nous avons en Jésus,\nIl porte tous nos péchés et nos chagrins!\nQuel privilège de porter\nTout à Dieu dans la prière!",
            "Avons-nous des épreuves et des tentations?\nY a-t-il des problèmes quelque part?\nNous ne devrions jamais nous décourager,\nPorte-le au Seigneur dans la prière.",
          ],
          chorus: "Oh quelle paix nous perdons souvent,\nOh quelle douleur inutile nous portons,\nTout parce que nous ne portons pas\nTout à Dieu dans la prière!",
        },
      },
      Spanish: {
        title: "¡Oh, Qué Amigo Nos Es Cristo!",
        lyrics: {
          verses: [
            "¡Oh, qué amigo nos es Cristo!\nÉl llevó nuestro dolor,\nY nos manda que llevemos\nTodo a Dios en oración.",
            "¿Tienes pruebas y tentaciones?\n¿Hay angustias en tu ser?\nNo te rindas, ven a Cristo,\nÉl tu amigo siempre es.",
          ],
          chorus: "¡Oh, qué paz perdemos muchas veces!\n¡Oh, qué dolor innecesario!\nTodo porque no llevamos\nTodo a Dios en oración.",
        },
      },
    },
  },
  {
    id: 10,
    index: "010",
    title: "Rock of Ages, Cleft for Me",
    meter: "7.7.7.7.7.7",
    author: "Augustus Toplady",
    authorId: 9,
    bibleVerse: "And did all drink the same spiritual drink: for they drank of that spiritual Rock that followed them: and that Rock was Christ. - 1 Corinthians 10:4",
    categoryIds: [11, 20, 22],
    lyrics: {
      verses: [
        "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure;\nSave from wrath and make me pure.",
        "Not the labors of my hands\nCan fulfill Thy law's demands;\nCould my zeal no respite know,\nCould my tears forever flow,\nAll for sin could not atone;\nThou must save, and Thou alone.",
        "Nothing in my hand I bring,\nSimply to the cross I cling;\nNaked, come to Thee for dress;\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly;\nWash me, Savior, or I die.",
        "While I draw this fleeting breath,\nWhen mine eyes shall close in death,\nWhen I soar to worlds unknown,\nSee Thee on Thy judgment throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Àpáta Ayérayé, Tí A Pín Fún Mi",
        lyrics: {
          verses: [
            "Àpáta ayérayé, tí a pín fún mi,\nJẹ́ kí n fi ara mi pamọ́ sínú Rẹ;\nJẹ́ kí omi àti ẹ̀jẹ̀,\nLáti ẹ̀gbẹ́ Rẹ tí a fara pa tí ó ṣàn,\nJẹ́ ìwòsàn ìlọ́po méjì ẹ̀ṣẹ̀;\nGbà kúrò nínú ìbínú kí o sì mú mi mọ́.",
            "Kì í ṣe iṣẹ́ ọwọ́ mi\nLè mú ìbéèrè òfin Rẹ ṣẹ;\nBí ìtara mi kò bá mọ ìsinmi,\nBí omijé mi bá ṣàn láéláé,\nGbogbo fún ẹ̀ṣẹ̀ kò lè túbọ̀;\nÌwọ gbọdọ̀ gbà, àti Ìwọ nìkan.",
          ],
        },
      },
      French: {
        title: "Rocher des Siècles, Fendu pour Moi",
        lyrics: {
          verses: [
            "Rocher des siècles, fendu pour moi,\nLaisse-moi me cacher en toi;\nQue l'eau et le sang,\nDe ton côté blessé qui coula,\nSoient du péché la double guérison;\nSauve de la colère et rends-moi pur.",
            "Les travaux de mes mains\nNe peuvent accomplir les demandes de ta loi;\nMon zèle ne connaissant pas de répit,\nMes larmes coulant à jamais,\nTout pour le péché ne pourrait expier;\nTu dois sauver, et toi seul.",
          ],
        },
      },
      Spanish: {
        title: "Roca de la Eternidad",
        lyrics: {
          verses: [
            "Roca de la eternidad, hendida por mí,\nDéjame esconderme en ti;\nQue el agua y la sangre,\nDe tu costado herido que fluyó,\nSean del pecado la doble cura;\nSálvame de la ira y hazme puro.",
            "No los trabajos de mis manos\nPueden cumplir las demandas de tu ley;\nAunque mi celo no conociera descanso,\nAunque mis lágrimas fluyeran por siempre,\nTodo por el pecado no podría expiar;\nTú debes salvar, y tú solo.",
          ],
        },
      },
    },
  },
  {
    id: 11,
    index: "011",
    title: "O God, Our Help in Ages Past",
    meter: "CM",
    author: "Isaac Watts",
    authorId: 4,
    bibleVerse: "Lord, thou hast been our dwelling place in all generations. - Psalm 90:1",
    categoryIds: [18, 20, 24],
    lyrics: {
      verses: [
        "O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home.",
        "Under the shadow of Thy throne\nStill may we dwell secure;\nSufficient is Thine arm alone,\nAnd our defense is sure.",
        "Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same.",
        "A thousand ages in Thy sight\nAre like an evening gone;\nShort as the watch that ends the night,\nBefore the rising sun.",
        "O God, our help in ages past,\nOur hope for years to come;\nBe Thou our guide while life shall last,\nAnd our eternal home.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Ọlọ́run, Ìrànlọ́wọ́ Wa Ní Ìgbà Àtijọ́",
        lyrics: {
          verses: [
            "Ọlọ́run, ìrànlọ́wọ́ wa ní ìgbà àtijọ́,\nÌrètí wa fún ọdún tí ó ń bọ̀,\nÀbò wa kúrò nínú ìjì líle,\nÀti ilé ayérayé wa.",
            "Lábẹ́ ojìji ìtẹ́ Rẹ\nA tún lè gbé ní ààbò;\nApá Rẹ nìkan tó,\nÀbò wa sì dájú.",
          ],
        },
      },
      French: {
        title: "Ô Dieu, Notre Aide Dans Les Temps Passés",
        lyrics: {
          verses: [
            "Ô Dieu, notre aide dans les temps passés,\nNotre espoir pour les années à venir,\nNotre abri contre la tempête,\nEt notre demeure éternelle.",
            "Sous l'ombre de ton trône\nPuissions-nous encore demeurer en sécurité;\nTon bras seul suffit,\nEt notre défense est sûre.",
          ],
        },
      },
      Spanish: {
        title: "Oh Dios, Nuestra Ayuda en Tiempos Pasados",
        lyrics: {
          verses: [
            "Oh Dios, nuestra ayuda en tiempos pasados,\nNuestra esperanza para años por venir,\nNuestro refugio de la tormenta,\nY nuestro hogar eterno.",
            "Bajo la sombra de tu trono\nAún podemos morar seguros;\nSuficiente es tu brazo solo,\nY nuestra defensa es segura.",
          ],
        },
      },
    },
  },
  {
    id: 12,
    index: "012",
    title: "All Hail the Power of Jesus' Name",
    meter: "CM",
    author: "Edward Perronet",
    authorId: 10,
    bibleVerse: "Wherefore God also hath highly exalted him, and given him a name which is above every name. - Philippians 2:9",
    categoryIds: [4, 20, 24],
    lyrics: {
      verses: [
        "All hail the power of Jesus' Name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown Him Lord of all.",
        "Ye chosen seed of Israel's race,\nYe ransomed from the fall,\nHail Him who saves you by His grace,\nAnd crown Him Lord of all.",
        "Let every kindred, every tribe,\nOn this terrestrial ball,\nTo Him all majesty ascribe,\nAnd crown Him Lord of all.",
        "O that with yonder sacred throng\nWe at His feet may fall!\nWe'll join the everlasting song,\nAnd crown Him Lord of all.",
      ],
    },
    translations: {
      Yoruba: {
        title: "Ẹ Kí Agbára Orúkọ Jésù",
        lyrics: {
          verses: [
            "Ẹ kí agbára orúkọ Jésù!\nJẹ́ kí àwọn àńgẹ́lì wọlẹ̀;\nMú adé ọba jáde,\nKí ẹ sì fi adé rẹ̀ ṣe Olúwa gbogbo.",
            "Ẹ̀yin tí a yàn láti ìran Ísírẹ́lì,\nẸ̀yin tí a rà padà láti ìṣubú,\nẸ kí Ẹni tí ó gbà yín nípasẹ̀ oore ọ̀fẹ́ Rẹ̀,\nKí ẹ sì fi adé rẹ̀ ṣe Olúwa gbogbo.",
          ],
        },
      },
      French: {
        title: "Gloire à la Puissance du Nom de Jésus",
        lyrics: {
          verses: [
            "Gloire à la puissance du nom de Jésus!\nQue les anges se prosternent;\nApportez le diadème royal,\nEt couronnez-le Seigneur de tout.",
            "Vous, semence choisie de la race d'Israël,\nVous, rachetés de la chute,\nSaluez Celui qui vous sauve par sa grâce,\nEt couronnez-le Seigneur de tout.",
          ],
        },
      },
      Spanish: {
        title: "¡Salve el Poder del Nombre de Jesús!",
        lyrics: {
          verses: [
            "¡Salve el poder del nombre de Jesús!\nQue los ángeles se postren;\nTraigan la diadema real,\nY coronen a Él Señor de todo.",
            "Vosotros, simiente escogida de Israel,\nVosotros, rescatados de la caída,\nSaludad al que os salva por su gracia,\nY coronadle Señor de todo.",
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

// Get audio URL for a hymn (placeholder - audio files would be in public/audio/)
export const getHymnAudio = (hymnId: number): string | undefined => {
  const hymn = hymns.find(h => h.id === hymnId);
  if (hymn?.audioFile) {
    return `/audio/${hymn.audioFile}`;
  }
  return undefined;
};
