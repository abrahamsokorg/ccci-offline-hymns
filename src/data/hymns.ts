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
  { id: 1, name: "John Newton", shortBio: "Former slave trader turned hymn writer", bio: "John Newton (1725-1807) was an English Anglican clergyman and abolitionist.", bibleVerse: "But by the grace of God I am what I am. - 1 Corinthians 15:10" },
  { id: 2, name: "Charles Wesley", shortBio: "Prolific hymn writer of the Methodist movement", bio: "Charles Wesley (1707-1788) wrote over 6,500 hymns.", bibleVerse: "Let the word of Christ dwell in you richly. - Colossians 3:16" },
  { id: 3, name: "Fanny Crosby", shortBio: "Blind poetess who wrote over 8,000 hymns", bio: "Frances Jane Crosby (1820-1915) wrote more than 8,000 hymns.", bibleVerse: "For we walk by faith, not by sight. - 2 Corinthians 5:7" },
  { id: 4, name: "Isaac Watts", shortBio: "Father of English hymnody", bio: "Isaac Watts (1674-1748) is credited with approximately 750 hymns.", bibleVerse: "O sing unto the LORD a new song. - Psalm 98:1" },
  { id: 5, name: "Thomas Ken", shortBio: "Bishop known for the Doxology", bio: "Thomas Ken (1637-1711) wrote the famous Doxology.", bibleVerse: "Praise ye the LORD. Praise God in his sanctuary. - Psalm 150:1" },
  { id: 6, name: "Reginald Heber", shortBio: "Bishop of Calcutta and hymn writer", bio: "Reginald Heber (1783-1826) composed 'Holy, Holy, Holy'.", bibleVerse: "Holy, holy, holy, is the LORD of hosts. - Isaiah 6:3" },
  { id: 7, name: "Carl Boberg", shortBio: "Swedish poet", bio: "Carl Gustav Boberg (1859-1940) wrote 'How Great Thou Art'.", bibleVerse: "The heavens declare the glory of God. - Psalm 19:1" },
  { id: 8, name: "Joseph Scriven", shortBio: "Irish-Canadian hymn writer", bio: "Joseph Scriven (1819-1886) wrote 'What a Friend We Have in Jesus'.", bibleVerse: "Casting all your care upon him. - 1 Peter 5:7" },
  { id: 9, name: "Augustus Toplady", shortBio: "Anglican clergyman", bio: "Augustus Toplady (1740-1778) wrote 'Rock of Ages'.", bibleVerse: "The Lord is my rock. - 2 Samuel 22:2" },
  { id: 10, name: "Edward Perronet", shortBio: "English evangelist", bio: "Edward Perronet (1726-1792) wrote 'All Hail the Power'.", bibleVerse: "At the name of Jesus every knee should bow. - Philippians 2:10" },
  { id: 11, name: "Horatio Spafford", shortBio: "Lawyer who wrote 'It Is Well'", bio: "Horatio Spafford (1828-1888) wrote after tragic loss.", bibleVerse: "The peace of God shall keep your hearts. - Philippians 4:7" },
  { id: 12, name: "Ancient Irish", shortBio: "Traditional Irish hymn", bio: "Ancient Irish hymn tradition.", bibleVerse: "Open mine eyes. - Psalm 119:18" },
  { id: 13, name: "Matthew Bridges", shortBio: "English hymn writer", bio: "Matthew Bridges (1800-1894) wrote 'Crown Him with Many Crowns'.", bibleVerse: "On his head were many crowns. - Revelation 19:12" },
  { id: 14, name: "Martin Luther", shortBio: "Protestant Reformer", bio: "Martin Luther (1483-1546) leader of the Reformation.", bibleVerse: "The LORD is my fortress. - Psalm 18:2" },
  { id: 15, name: "Robert Robinson", shortBio: "English minister", bio: "Robert Robinson (1735-1790) wrote 'Come, Thou Fount'.", bibleVerse: "Every good gift is from above. - James 1:17" },
  { id: 16, name: "George Bennard", shortBio: "Methodist evangelist", bio: "George Bennard (1873-1958) wrote 'The Old Rugged Cross'.", bibleVerse: "God forbid that I should glory. - Galatians 6:14" },
  { id: 17, name: "Henry Francis Lyte", shortBio: "Scottish Anglican minister", bio: "Henry Lyte (1793-1847) wrote 'Abide with Me'.", bibleVerse: "Abide with us. - Luke 24:29" },
  { id: 18, name: "Henry van Dyke", shortBio: "American author and clergyman", bio: "Henry van Dyke (1852-1933) wrote 'Joyful, Joyful'.", bibleVerse: "Make a joyful noise. - Psalm 100:1" },
  { id: 19, name: "John Rippon", shortBio: "English Baptist minister", bio: "John Rippon (1751-1836) compiled a famous hymn selection.", bibleVerse: "Other foundation can no man lay. - 1 Corinthians 3:11" },
  { id: 20, name: "Elisha Hoffman", shortBio: "Presbyterian minister", bio: "Elisha Hoffman (1839-1929) wrote many gospel songs.", bibleVerse: "Underneath are the everlasting arms. - Deuteronomy 33:27" },
  { id: 21, name: "Charlotte Elliott", shortBio: "English hymn writer", bio: "Charlotte Elliott (1789-1871) wrote 'Just as I Am'.", bibleVerse: "Him that cometh to me I will in no wise cast out. - John 6:37" },
  { id: 22, name: "C. Austin Miles", shortBio: "American hymn writer", bio: "C. Austin Miles (1868-1946) wrote 'In the Garden'.", bibleVerse: "She had seen the Lord. - John 20:18" },
  { id: 23, name: "Eugene Bartlett", shortBio: "Gospel song writer", bio: "Eugene Bartlett (1885-1941) wrote 'Victory in Jesus'.", bibleVerse: "Thanks be to God, which giveth us the victory. - 1 Corinthians 15:57" },
  { id: 24, name: "Lewis Jones", shortBio: "Gospel hymn writer", bio: "Lewis Jones (1865-1936) wrote 'There Is Power in the Blood'.", bibleVerse: "The blood of Jesus cleanseth us. - 1 John 1:7" },
  { id: 25, name: "Elvina Hall", shortBio: "American hymn writer", bio: "Elvina Hall (1820-1889) wrote 'Jesus Paid It All'.", bibleVerse: "It is finished. - John 19:30" },
  { id: 26, name: "Annie Hawks", shortBio: "American hymn writer", bio: "Annie Hawks (1835-1918) wrote 'I Need Thee Every Hour'.", bibleVerse: "Without me ye can do nothing. - John 15:5" },
  { id: 27, name: "Will Thompson", shortBio: "American composer", bio: "Will Thompson (1847-1909) wrote 'Softly and Tenderly'.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 28, name: "Russell Kelso Carter", shortBio: "Methodist minister", bio: "Russell Carter (1849-1928) wrote 'Standing on the Promises'.", bibleVerse: "All the promises of God in him are yea. - 2 Corinthians 1:20" },
  { id: 29, name: "Edward Mote", shortBio: "English Baptist minister", bio: "Edward Mote (1797-1874) wrote 'The Solid Rock'.", bibleVerse: "Other foundation can no man lay. - 1 Corinthians 3:11" },
  { id: 30, name: "Francis of Assisi", shortBio: "Italian friar and saint", bio: "Francis of Assisi (1181-1226) wrote 'All Creatures'.", bibleVerse: "Let every thing that hath breath praise the LORD. - Psalm 150:6" },
  { id: 31, name: "Walter Chalmers Smith", shortBio: "Scottish minister", bio: "Walter Smith (1824-1908) wrote 'Immortal, Invisible'.", bibleVerse: "Unto the King eternal, immortal, invisible. - 1 Timothy 1:17" },
  { id: 32, name: "Judson Van DeVenter", shortBio: "American evangelist", bio: "Judson Van DeVenter (1855-1939) wrote 'I Surrender All'.", bibleVerse: "Present your bodies a living sacrifice. - Romans 12:1" },
  { id: 33, name: "Joachim Neander", shortBio: "German hymn writer", bio: "Joachim Neander (1650-1680) wrote 'Praise to the Lord, the Almighty'.", bibleVerse: "Praise ye the LORD. - Psalm 150:1" },
  { id: 34, name: "Thomas Chisholm", shortBio: "Methodist minister", bio: "Thomas Chisholm (1866-1960) wrote 'Great Is Thy Faithfulness'.", bibleVerse: "Great is thy faithfulness. - Lamentations 3:23" },
  { id: 35, name: "Robert Lowry", shortBio: "Baptist minister and composer", bio: "Robert Lowry (1826-1899) wrote many beloved hymns.", bibleVerse: "The blood of Jesus cleanseth us. - 1 John 1:7" },
  { id: 36, name: "John Francis Wade", shortBio: "English hymn writer", bio: "John Francis Wade (1711-1786) wrote 'O Come, All Ye Faithful'.", bibleVerse: "They came with haste. - Luke 2:16" },
  { id: 37, name: "German Hymn", shortBio: "Traditional German hymn", bio: "Traditional German hymnody.", bibleVerse: "Thou art fairer than the children of men. - Psalm 45:2" },
  { id: 38, name: "John Sammis", shortBio: "Presbyterian minister", bio: "John Sammis (1846-1919) wrote 'Trust and Obey'.", bibleVerse: "If ye love me, keep my commandments. - John 14:15" },
  { id: 39, name: "Civilla Martin", shortBio: "American hymn writer", bio: "Civilla Martin (1866-1948) wrote 'His Eye Is on the Sparrow'.", bibleVerse: "Are not two sparrows sold for a farthing? - Matthew 10:29" },
  { id: 40, name: "Cleland McAfee", shortBio: "Presbyterian minister", bio: "Cleland McAfee (1866-1944) wrote 'Near to the Heart of God'.", bibleVerse: "Draw nigh to God. - James 4:8" },
  { id: 41, name: "Maltbie Babcock", shortBio: "Presbyterian minister", bio: "Maltbie Babcock (1858-1901) wrote 'This Is My Father's World'.", bibleVerse: "The earth is the LORD's. - Psalm 24:1" },
  { id: 42, name: "William Williams", shortBio: "Welsh hymn writer", bio: "William Williams (1717-1791) wrote 'Guide Me, O Thou Great Jehovah'.", bibleVerse: "He will be our guide. - Psalm 48:14" },
  { id: 43, name: "Theodulph of Orleans", shortBio: "Bishop of Orleans", bio: "Theodulph of Orleans (c. 750-821) wrote 'All Glory, Laud, and Honor'.", bibleVerse: "Blessed is he that cometh. - Matthew 21:9" },
  { id: 44, name: "Frances Havergal", shortBio: "English religious poet", bio: "Frances Havergal (1836-1879) wrote 'Take My Life'.", bibleVerse: "Present your bodies a living sacrifice. - Romans 12:1" },
  { id: 45, name: "James Black", shortBio: "American hymn writer", bio: "James Black (1856-1938) wrote 'When the Roll Is Called Up Yonder'.", bibleVerse: "I saw the dead stand before God. - Revelation 20:12" },
  { id: 46, name: "Adelaide Pollard", shortBio: "American hymn writer", bio: "Adelaide Pollard (1862-1934) wrote 'Have Thine Own Way'.", bibleVerse: "We are the clay. - Isaiah 64:8" },
  { id: 47, name: "Robert Grant", shortBio: "British politician and hymn writer", bio: "Robert Grant (1779-1838) wrote 'O Worship the King'.", bibleVerse: "O worship the LORD in the beauty of holiness. - Psalm 96:9" },
  { id: 48, name: "Sabine Baring-Gould", shortBio: "English clergyman", bio: "Sabine Baring-Gould (1834-1924) wrote 'Onward, Christian Soldiers'.", bibleVerse: "Endure hardness, as a good soldier. - 2 Timothy 2:3" },
  { id: 49, name: "Joseph Gilmore", shortBio: "American Baptist minister", bio: "Joseph Gilmore (1834-1918) wrote 'He Leadeth Me'.", bibleVerse: "He leadeth me beside the still waters. - Psalm 23:2" },
  { id: 50, name: "Ray Palmer", shortBio: "American minister", bio: "Ray Palmer (1808-1887) wrote 'My Faith Looks Up to Thee'.", bibleVerse: "Looking unto Jesus. - Hebrews 12:2" },
  { id: 51, name: "Philip Doddridge", shortBio: "English minister", bio: "Philip Doddridge (1702-1751) wrote 'O Happy Day'.", bibleVerse: "Rejoice in the Lord alway. - Philippians 4:4" },
  { id: 52, name: "William Walford", shortBio: "English minister", bio: "William Walford (1772-1850) wrote 'Sweet Hour of Prayer'.", bibleVerse: "Evening, and morning, will I pray. - Psalm 55:17" },
  { id: 53, name: "Dorothy Thrupp", shortBio: "English hymn writer", bio: "Dorothy Thrupp (1779-1847) wrote 'Savior, Like a Shepherd Lead Us'.", bibleVerse: "The LORD is my shepherd. - Psalm 23:1" },
  { id: 54, name: "William Cowper", shortBio: "English poet and hymn writer", bio: "William Cowper (1731-1800) wrote 'There Is a Fountain'.", bibleVerse: "In that day there shall be a fountain opened. - Zechariah 13:1" },
  { id: 55, name: "Bernard of Clairvaux", shortBio: "French abbot and theologian", bio: "Bernard of Clairvaux (1090-1153) wrote devotional hymns.", bibleVerse: "Whom having not seen, ye love. - 1 Peter 1:8" },
  { id: 56, name: "Samuel Stone", shortBio: "English clergyman", bio: "Samuel Stone (1839-1900) wrote 'The Church's One Foundation'.", bibleVerse: "Other foundation can no man lay. - 1 Corinthians 3:11" },
  { id: 57, name: "Martin Rinkart", shortBio: "German clergyman", bio: "Martin Rinkart (1586-1649) wrote 'Now Thank We All Our God'.", bibleVerse: "O give thanks unto the LORD. - Psalm 107:1" },
  { id: 58, name: "Folliott Pierpoint", shortBio: "English hymn writer", bio: "Folliott Pierpoint (1835-1917) wrote 'For the Beauty of the Earth'.", bibleVerse: "The heavens declare the glory of God. - Psalm 19:1" },
  { id: 59, name: "Edward Plumptre", shortBio: "English scholar and hymn writer", bio: "Edward Plumptre (1821-1891) wrote 'Rejoice, Ye Pure in Heart'.", bibleVerse: "Rejoice in the Lord alway. - Philippians 4:4" },
  { id: 60, name: "Bernard of Cluny", shortBio: "12th century monk", bio: "Bernard of Cluny wrote 'Jerusalem the Golden'.", bibleVerse: "Jerusalem which is above is free. - Galatians 4:26" },
  { id: 61, name: "Cecil Alexander", shortBio: "Irish hymn writer", bio: "Cecil Alexander (1818-1895) wrote many beloved children's hymns.", bibleVerse: "Follow me. - Matthew 4:19" },
  { id: 62, name: "John Keble", shortBio: "English clergyman and poet", bio: "John Keble (1792-1866) was a leader of the Oxford Movement.", bibleVerse: "The LORD God is a sun and shield. - Psalm 84:11" },
  { id: 63, name: "John Henry Newman", shortBio: "English theologian and cardinal", bio: "John Henry Newman (1801-1890) wrote 'Lead, Kindly Light'.", bibleVerse: "Thy word is a lamp unto my feet. - Psalm 119:105" },
  { id: 64, name: "Sarah Adams", shortBio: "English poet and hymn writer", bio: "Sarah Adams (1805-1848) wrote 'Nearer, My God, to Thee'.", bibleVerse: "Draw nigh to God. - James 4:8" },
  { id: 65, name: "Ernest Shurtleff", shortBio: "American minister", bio: "Ernest Shurtleff (1862-1917) wrote 'Lead On, O King Eternal'.", bibleVerse: "The LORD shall go forth. - Isaiah 42:13" },
  { id: 66, name: "Katharine Lee Bates", shortBio: "American songwriter", bio: "Katharine Bates (1859-1929) wrote 'America the Beautiful'.", bibleVerse: "Righteousness exalteth a nation. - Proverbs 14:34" },
  { id: 67, name: "Johnson Oatman Jr.", shortBio: "American hymn writer", bio: "Johnson Oatman Jr. (1856-1922) wrote gospel songs.", bibleVerse: "We are more than conquerors. - Romans 8:37" },
  { id: 68, name: "William Howard Doane", shortBio: "American composer", bio: "William Doane (1832-1915) composed many hymn tunes.", bibleVerse: "Praise ye the LORD. - Psalm 150:1" },
  { id: 69, name: "Eliza Hewitt", shortBio: "American hymn writer", bio: "Eliza Hewitt (1851-1920) wrote many gospel songs.", bibleVerse: "That I may know him. - Philippians 3:10" },
  { id: 70, name: "James Rowe", shortBio: "English-American hymn writer", bio: "James Rowe (1865-1933) wrote many gospel songs.", bibleVerse: "He brought me up out of an horrible pit. - Psalm 40:2" },
  { id: 71, name: "John Mason Neale", shortBio: "English clergyman and translator", bio: "John Neale (1818-1866) translated many ancient hymns.", bibleVerse: "Sing unto the LORD a new song. - Psalm 96:1" },
  { id: 72, name: "Avis Christiansen", shortBio: "American hymn writer", bio: "Avis Christiansen (1895-1985) wrote Christian songs.", bibleVerse: "Looking unto Jesus. - Hebrews 12:2" },
  { id: 73, name: "E. E. Hewitt", shortBio: "American hymn writer", bio: "Eliza E. Hewitt wrote many beloved hymns.", bibleVerse: "When we all get to heaven. - Revelation 21:4" },
  { id: 74, name: "Albert Brumley", shortBio: "American gospel songwriter", bio: "Albert Brumley (1905-1977) wrote 'I'll Fly Away'.", bibleVerse: "We shall be caught up. - 1 Thessalonians 4:17" },
  { id: 75, name: "African American Spiritual", shortBio: "Traditional spiritual", bio: "Traditional African American spirituals.", bibleVerse: "Let my people go. - Exodus 5:1" },
  { id: 76, name: "Helen Lemmel", shortBio: "American hymn writer", bio: "Helen Lemmel (1863-1961) wrote 'Turn Your Eyes Upon Jesus'.", bibleVerse: "Looking unto Jesus. - Hebrews 12:2" },
  { id: 77, name: "Harry Dixon Loes", shortBio: "American hymn writer", bio: "Harry Loes (1892-1965) wrote gospel songs.", bibleVerse: "Blessed be the name of the Lord. - Job 1:21" },
  { id: 78, name: "William Newell", shortBio: "American Bible teacher", bio: "William Newell (1868-1956) wrote 'At Calvary'.", bibleVerse: "God commendeth his love toward us. - Romans 5:8" },
  { id: 79, name: "Elizabeth Clephane", shortBio: "Scottish poet", bio: "Elizabeth Clephane (1830-1869) wrote 'Beneath the Cross'.", bibleVerse: "There stood by the cross of Jesus. - John 19:25" },
  { id: 80, name: "Anonymous", shortBio: "Unknown author", bio: "Author unknown.", bibleVerse: "Praise ye the LORD. - Psalm 150:1" },
  { id: 81, name: "Joseph Mohr", shortBio: "Austrian priest", bio: "Joseph Mohr (1792-1848) wrote 'Silent Night'.", bibleVerse: "Glory to God in the highest. - Luke 2:14" },
  { id: 82, name: "James Chadwick", shortBio: "English bishop", bio: "James Chadwick (1813-1882) translated Christmas hymns.", bibleVerse: "Glory to God in the highest. - Luke 2:14" },
  { id: 83, name: "George Frideric Handel", shortBio: "German-British composer", bio: "Handel (1685-1759) composed the Messiah.", bibleVerse: "Joy to the world. - Psalm 98:4" },
  { id: 84, name: "French Carol", shortBio: "Traditional French carol", bio: "Traditional French Christmas carol.", bibleVerse: "Glory to God in the highest. - Luke 2:14" },
  { id: 85, name: "Phillips Brooks", shortBio: "American Episcopal clergyman", bio: "Phillips Brooks (1835-1893) wrote 'O Little Town of Bethlehem'.", bibleVerse: "Thou Bethlehem... out of thee shall he come. - Micah 5:2" },
  { id: 86, name: "German Carol", shortBio: "Traditional German carol", bio: "Traditional German Christmas carol.", bibleVerse: "Unto you is born a Saviour. - Luke 2:11" },
  { id: 87, name: "English Carol", shortBio: "Traditional English carol", bio: "Traditional English Christmas carol.", bibleVerse: "The first Noel. - Luke 2:10" },
  { id: 88, name: "Edmund Sears", shortBio: "American minister", bio: "Edmund Sears (1810-1876) wrote 'It Came Upon the Midnight Clear'.", bibleVerse: "Peace on earth. - Luke 2:14" },
  { id: 89, name: "Latin Hymn", shortBio: "Traditional Latin hymn", bio: "Traditional Latin hymnody.", bibleVerse: "Praise ye the LORD. - Psalm 150:1" },
  { id: 90, name: "Christian Bateman", shortBio: "English hymn writer", bio: "Christian Bateman (1813-1889) wrote hymns.", bibleVerse: "O come, let us sing unto the LORD. - Psalm 95:1" },
  { id: 91, name: "William Kethe", shortBio: "Scottish clergyman", bio: "William Kethe (d. 1594) wrote psalm paraphrases.", bibleVerse: "Make a joyful noise unto the LORD. - Psalm 100:1" },
  { id: 92, name: "Henry Alford", shortBio: "English clergyman and scholar", bio: "Henry Alford (1810-1871) wrote 'Come, Ye Thankful People'.", bibleVerse: "The harvest is the end of the world. - Matthew 13:39" },
  { id: 93, name: "Netherlands Folk Hymn", shortBio: "Traditional Dutch hymn", bio: "Traditional Dutch hymn.", bibleVerse: "Where two or three are gathered. - Matthew 18:20" },
  { id: 94, name: "Mary Lathbury", shortBio: "American poet", bio: "Mary Lathbury (1841-1913) wrote hymns.", bibleVerse: "From the rising of the sun. - Psalm 113:3" },
  { id: 95, name: "Katherine Hankey", shortBio: "English hymn writer", bio: "Katherine Hankey (1834-1911) wrote 'I Love to Tell the Story'.", bibleVerse: "Come and hear. - Psalm 66:16" },
  { id: 96, name: "Horatius Bonar", shortBio: "Scottish minister and hymn writer", bio: "Horatius Bonar (1808-1889) wrote many hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 97, name: "Frederick Faber", shortBio: "English hymn writer", bio: "Frederick Faber (1814-1863) wrote 'Faith of Our Fathers'.", bibleVerse: "So great is his mercy. - Psalm 103:11" },
  { id: 98, name: "John Bode", shortBio: "English clergyman", bio: "John Bode (1816-1874) wrote 'O Jesus, I Have Promised'.", bibleVerse: "I will follow thee. - Luke 9:57" },
  { id: 99, name: "William Featherston", shortBio: "Canadian hymn writer", bio: "William Featherston (1846-1873) wrote 'My Jesus, I Love Thee'.", bibleVerse: "We love him, because he first loved us. - 1 John 4:19" },
  { id: 100, name: "Elizabeth Prentiss", shortBio: "American author", bio: "Elizabeth Prentiss (1818-1878) wrote 'More Love to Thee'.", bibleVerse: "That Christ may dwell in your hearts. - Ephesians 3:17" },
  // Authors 101-270 for the batch hymns
  { id: 101, name: "Thomas Shepherd", shortBio: "English minister", bio: "Thomas Shepherd wrote hymns.", bibleVerse: "If any man will come after me. - Matthew 16:24" },
  { id: 102, name: "George Kitchin", shortBio: "English dean", bio: "George Kitchin (1827-1912) wrote 'Lift High the Cross'.", bibleVerse: "If I be lifted up. - John 12:32" },
  { id: 103, name: "John Bowring", shortBio: "English statesman and hymn writer", bio: "John Bowring (1792-1872) wrote 'In the Cross of Christ I Glory'.", bibleVerse: "God forbid that I should glory. - Galatians 6:14" },
  { id: 104, name: "Jessie Pounds", shortBio: "American hymn writer", bio: "Jessie Pounds (1861-1921) wrote gospel songs.", bibleVerse: "I am the way. - John 14:6" },
  { id: 105, name: "Philip Bliss", shortBio: "American composer and hymn writer", bio: "Philip Bliss (1838-1876) wrote many beloved hymns.", bibleVerse: "For ye are bought with a price. - 1 Corinthians 6:20" },
  { id: 106, name: "Julia Johnston", shortBio: "American hymn writer", bio: "Julia Johnston (1849-1919) wrote gospel songs.", bibleVerse: "Where sin abounded, grace did much more abound. - Romans 5:20" },
  { id: 107, name: "Haldor Lillenas", shortBio: "American hymn writer", bio: "Haldor Lillenas (1885-1959) wrote gospel songs.", bibleVerse: "For ye know the grace of our Lord Jesus Christ. - 2 Corinthians 8:9" },
  { id: 108, name: "Charles Gabriel", shortBio: "American composer", bio: "Charles Gabriel (1856-1932) wrote many gospel songs.", bibleVerse: "He brought me up out of an horrible pit. - Psalm 40:2" },
  { id: 109, name: "Rufus McDaniel", shortBio: "American hymn writer", bio: "Rufus McDaniel (1850-1940) wrote gospel songs.", bibleVerse: "If any man be in Christ, he is a new creature. - 2 Corinthians 5:17" },
  { id: 110, name: "Henry Zelley", shortBio: "American hymn writer", bio: "Henry Zelley (1859-1942) wrote gospel songs.", bibleVerse: "The path of the just is as the shining light. - Proverbs 4:18" },
  { id: 111, name: "Sylvanus Phelps", shortBio: "American minister", bio: "Sylvanus Phelps (1816-1895) wrote hymns.", bibleVerse: "What shall I render unto the LORD? - Psalm 116:12" },
  { id: 112, name: "Adoniram Judson", shortBio: "American missionary", bio: "Adoniram Judson (1788-1850) was a missionary to Burma.", bibleVerse: "The Spirit of God moved. - Genesis 1:2" },
  { id: 113, name: "George Croly", shortBio: "Irish poet and clergyman", bio: "George Croly (1780-1860) wrote hymns.", bibleVerse: "Be filled with the Spirit. - Ephesians 5:18" },
  { id: 114, name: "Edwin Hatch", shortBio: "English theologian", bio: "Edwin Hatch (1835-1889) wrote 'Breathe on Me, Breath of God'.", bibleVerse: "He breathed on them. - John 20:22" },
  { id: 115, name: "Andrew Reed", shortBio: "English minister", bio: "Andrew Reed (1787-1862) wrote hymns.", bibleVerse: "The Spirit of truth will guide you. - John 16:13" },
  { id: 116, name: "Rabanus Maurus", shortBio: "Medieval theologian", bio: "Rabanus Maurus (c. 780-856) wrote Latin hymns.", bibleVerse: "The Comforter, which is the Holy Ghost. - John 14:26" },
  { id: 117, name: "Marcus Wells", shortBio: "American hymn writer", bio: "Marcus Wells (1815-1895) wrote hymns.", bibleVerse: "When the Spirit of truth is come. - John 16:13" },
  { id: 118, name: "Daniel Iverson", shortBio: "American minister", bio: "Daniel Iverson (1890-1977) wrote 'Spirit of the Living God'.", bibleVerse: "Not by might, nor by power, but by my spirit. - Zechariah 4:6" },
  { id: 119, name: "Elwood Stokes", shortBio: "American bishop", bio: "Elwood Stokes (1815-1897) wrote hymns.", bibleVerse: "Be filled with the Spirit. - Ephesians 5:18" },
  { id: 120, name: "Ernest Blandy", shortBio: "American hymn writer", bio: "Ernest Blandy wrote 'Where He Leads Me'.", bibleVerse: "Follow me. - Matthew 4:19" },
  { id: 121, name: "Mary Brown", shortBio: "American hymn writer", bio: "Mary Brown wrote gospel songs.", bibleVerse: "Whom shall I send? - Isaiah 6:8" },
  { id: 122, name: "B. B. McKinney", shortBio: "American hymn writer", bio: "B. B. McKinney (1886-1952) wrote many hymns.", bibleVerse: "I will follow thee whithersoever thou goest. - Luke 9:57" },
  { id: 123, name: "Daniel Whittle", shortBio: "American evangelist", bio: "Daniel Whittle (1840-1901) wrote gospel songs.", bibleVerse: "There was no room for them in the inn. - Luke 2:7" },
  { id: 124, name: "John Stockton", shortBio: "American minister", bio: "John Stockton (1813-1877) wrote hymns.", bibleVerse: "Believe on the Lord Jesus Christ. - Acts 16:31" },
  { id: 125, name: "John Wigner", shortBio: "English hymn writer", bio: "John Wigner wrote hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 126, name: "Ralph Carmichael", shortBio: "American composer", bio: "Ralph Carmichael (1927-2021) was a Christian music pioneer.", bibleVerse: "Behold, I stand at the door, and knock. - Revelation 3:20" },
  { id: 127, name: "Ira Stamphill", shortBio: "American hymn writer", bio: "Ira Stamphill (1914-1993) wrote many hymns.", bibleVerse: "Him that cometh to me I will in no wise cast out. - John 6:37" },
  { id: 128, name: "Joseph Hart", shortBio: "English hymn writer", bio: "Joseph Hart (1712-1768) wrote hymns.", bibleVerse: "Christ Jesus came to save sinners. - 1 Timothy 1:15" },
  { id: 129, name: "William Hunter", shortBio: "American minister", bio: "William Hunter (1811-1877) wrote hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 130, name: "Thomas Moore", shortBio: "Irish poet", bio: "Thomas Moore (1779-1852) was an Irish poet.", bibleVerse: "Come ye disconsolate. - Isaiah 55:1" },
  { id: 131, name: "Jane Borthwick", shortBio: "Scottish translator", bio: "Jane Borthwick (1813-1897) translated German hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 132, name: "William Ogden", shortBio: "American hymn writer", bio: "William Ogden (1841-1897) wrote gospel songs.", bibleVerse: "God will take care of you. - 1 Peter 5:7" },
  { id: 133, name: "Ira Sankey", shortBio: "American gospel singer", bio: "Ira Sankey (1840-1908) worked with D.L. Moody.", bibleVerse: "Praise the Lord. - Psalm 150:1" },
  { id: 134, name: "Samuel Medley", shortBio: "English Baptist minister", bio: "Samuel Medley (1738-1799) wrote hymns.", bibleVerse: "I know that my redeemer liveth. - Job 19:25" },
  { id: 135, name: "Annie Flint", shortBio: "American poet", bio: "Annie Flint (1866-1932) wrote inspirational poems.", bibleVerse: "My grace is sufficient for thee. - 2 Corinthians 12:9" },
  { id: 136, name: "Edmund Lorenz", shortBio: "American composer", bio: "Edmund Lorenz (1854-1942) was a hymn publisher.", bibleVerse: "All the way my Savior leads me. - Psalm 32:8" },
  { id: 137, name: "William Kirkpatrick", shortBio: "American composer", bio: "William Kirkpatrick (1838-1921) wrote many hymn tunes.", bibleVerse: "Lead me in thy truth. - Psalm 25:5" },
  { id: 138, name: "Edgar Stites", shortBio: "American hymn writer", bio: "Edgar Stites (1836-1921) wrote 'Dwelling in Beulah Land'.", bibleVerse: "Thy land shall be called Beulah. - Isaiah 62:4" },
  { id: 139, name: "Emily Wilson", shortBio: "American hymn writer", bio: "Emily Wilson wrote gospel songs.", bibleVerse: "When we all get to heaven. - Revelation 21:4" },
  { id: 140, name: "Douglas Miller", shortBio: "American hymn writer", bio: "Douglas Miller wrote gospel songs.", bibleVerse: "My help cometh from the LORD. - Psalm 121:2" },
  { id: 141, name: "G. A. Young", shortBio: "American hymn writer", bio: "G. A. Young wrote 'God Leads Us Along'.", bibleVerse: "The LORD doth go before thee. - Deuteronomy 31:8" },
  { id: 142, name: "John Peterson", shortBio: "American composer", bio: "John Peterson (1921-2006) wrote many hymns.", bibleVerse: "He leadeth me beside the still waters. - Psalm 23:2" },
  { id: 143, name: "Johnson Oatman Jr.", shortBio: "American hymn writer", bio: "Johnson Oatman Jr. (1856-1922) wrote many gospel songs.", bibleVerse: "A friend that sticketh closer than a brother. - Proverbs 18:24" },
  { id: 144, name: "Frank Graeff", shortBio: "American minister", bio: "Frank Graeff (1860-1919) wrote 'Does Jesus Care'.", bibleVerse: "He careth for you. - 1 Peter 5:7" },
  { id: 145, name: "William Cushing", shortBio: "American hymn writer", bio: "William Cushing (1823-1902) wrote many hymns.", bibleVerse: "The LORD is my rock. - Psalm 18:2" },
  { id: 146, name: "Wade Robinson", shortBio: "English minister", bio: "Wade Robinson (1838-1877) wrote hymns.", bibleVerse: "My beloved is mine. - Song of Solomon 2:16" },
  { id: 147, name: "Alfred Ackley", shortBio: "American composer", bio: "Alfred Ackley (1887-1960) wrote 'He Lives'.", bibleVerse: "I am he that liveth. - Revelation 1:18" },
  { id: 148, name: "Bill Gaither", shortBio: "American gospel songwriter", bio: "Bill Gaither (b. 1936) is a renowned gospel songwriter.", bibleVerse: "Because I live, ye shall live also. - John 14:19" },
  { id: 149, name: "Edmond Budry", shortBio: "Swiss minister", bio: "Edmond Budry (1854-1932) wrote 'Thine Is the Glory'.", bibleVerse: "Thine is the kingdom, and the power, and the glory. - Matthew 6:13" },
  { id: 150, name: "John of Damascus", shortBio: "Syrian monk and theologian", bio: "John of Damascus (c. 675-749) wrote Eastern hymns.", bibleVerse: "This is the day which the LORD hath made. - Psalm 118:24" },
  { id: 151, name: "Christopher Wordsworth", shortBio: "English bishop", bio: "Christopher Wordsworth (1807-1885) wrote hymns.", bibleVerse: "Alleluia: for the Lord God omnipotent reigneth. - Revelation 19:6" },
  { id: 152, name: "Jean Tisserand", shortBio: "French Franciscan friar", bio: "Jean Tisserand (d. 1494) wrote Easter hymns.", bibleVerse: "He is risen from the dead. - Matthew 28:7" },
  { id: 153, name: "Venantius Fortunatus", shortBio: "Latin poet and bishop", bio: "Venantius Fortunatus (c. 530-609) wrote Latin hymns.", bibleVerse: "This is the day which the LORD hath made. - Psalm 118:24" },
  { id: 154, name: "Lydia Baxter", shortBio: "American hymn writer", bio: "Lydia Baxter (1809-1874) wrote hymns.", bibleVerse: "At the name of Jesus every knee should bow. - Philippians 2:10" },
  { id: 155, name: "Alexcenah Thomas", shortBio: "American hymn writer", bio: "Alexcenah Thomas wrote gospel songs.", bibleVerse: "Compel them to come in. - Luke 14:23" },
  { id: 156, name: "H. Ernest Nichol", shortBio: "English hymn writer", bio: "H. Ernest Nichol (1862-1928) wrote 'We've a Story to Tell'.", bibleVerse: "Go ye into all the world. - Mark 16:15" },
  { id: 157, name: "J. O. Thompson", shortBio: "American hymn writer", bio: "J. O. Thompson wrote gospel songs.", bibleVerse: "The harvest truly is plenteous. - Matthew 9:37" },
  { id: 158, name: "Daniel March", shortBio: "American minister", bio: "Daniel March (1816-1909) wrote hymns.", bibleVerse: "Whom shall I send? - Isaiah 6:8" },
  { id: 159, name: "Mary Thomson", shortBio: "English hymn writer", bio: "Mary Thomson (1834-1923) wrote 'O Zion, Haste'.", bibleVerse: "How beautiful are the feet of him that bringeth good tidings. - Isaiah 52:7" },
  { id: 160, name: "Samuel Smith", shortBio: "American minister", bio: "Samuel Smith (1808-1895) wrote 'My Country, 'Tis of Thee'.", bibleVerse: "Arise, shine; for thy light is come. - Isaiah 60:1" },
  { id: 161, name: "Priscilla Owens", shortBio: "American hymn writer", bio: "Priscilla Owens (1829-1907) wrote 'Jesus Saves'.", bibleVerse: "The Son of man is come to seek and to save. - Luke 19:10" },
  { id: 162, name: "Annie Coghill", shortBio: "English hymn writer", bio: "Annie Coghill (1836-1907) wrote 'Work, for the Night Is Coming'.", bibleVerse: "I must work the works of him that sent me. - John 9:4" },
  { id: 163, name: "Charles Luther", shortBio: "American hymn writer", bio: "Charles Luther wrote gospel songs.", bibleVerse: "We must all appear before the judgment seat. - 2 Corinthians 5:10" },
  { id: 164, name: "Matthias Claudius", shortBio: "German poet", bio: "Matthias Claudius (1740-1815) wrote hymns.", bibleVerse: "He that goeth forth and weepeth. - Psalm 126:6" },
  { id: 165, name: "Samuel Davies", shortBio: "American minister", bio: "Samuel Davies (1723-1761) was a colonial preacher.", bibleVerse: "Who is a God like unto thee. - Micah 7:18" },
  { id: 166, name: "Thomas Olivers", shortBio: "Welsh Methodist evangelist", bio: "Thomas Olivers (1725-1799) wrote hymns.", bibleVerse: "I am the God of Abraham. - Exodus 3:6" },
  { id: 167, name: "William Whiting", shortBio: "English schoolmaster", bio: "William Whiting (1825-1878) wrote 'Eternal Father, Strong to Save'.", bibleVerse: "They cry unto the LORD in their trouble. - Psalm 107:28" },
  { id: 168, name: "George Matheson", shortBio: "Scottish minister", bio: "George Matheson (1842-1906) wrote 'O Love That Wilt Not Let Me Go'.", bibleVerse: "Who shall separate us from the love of Christ? - Romans 8:35" },
  { id: 169, name: "James Rowe", shortBio: "English-American hymn writer", bio: "James Rowe (1865-1933) wrote 'Love Lifted Me'.", bibleVerse: "He brought me up out of an horrible pit. - Psalm 40:2" },
  { id: 170, name: "Charles Fry", shortBio: "English hymn writer", bio: "Charles Fry wrote 'The Lily of the Valley'.", bibleVerse: "I am the rose of Sharon. - Song of Solomon 2:1" },
  { id: 171, name: "Vernon Charlesworth", shortBio: "English minister", bio: "Vernon Charlesworth (1839-1915) wrote hymns.", bibleVerse: "Thou hast been a strength to the poor. - Isaiah 25:4" },
  { id: 172, name: "Lelia Morris", shortBio: "American hymn writer", bio: "Lelia Morris (1862-1929) wrote many hymns.", bibleVerse: "O taste and see that the LORD is good. - Psalm 34:8" },
  { id: 173, name: "Edwin Excell", shortBio: "American composer", bio: "Edwin Excell (1851-1921) was a hymn publisher.", bibleVerse: "In whom we have redemption. - Ephesians 1:7" },
  { id: 174, name: "Clara Williams", shortBio: "American hymn writer", bio: "Clara Williams wrote gospel songs.", bibleVerse: "My soul shall be satisfied. - Psalm 63:5" },
  { id: 175, name: "Howard Grose", shortBio: "American minister", bio: "Howard Grose (1851-1939) wrote hymns.", bibleVerse: "He loves me so. - John 3:16" },
  { id: 176, name: "George Bennard", shortBio: "American evangelist", bio: "George Bennard (1873-1958) wrote 'The Old Rugged Cross'.", bibleVerse: "He keeps me singing. - Psalm 40:3" },
  { id: 177, name: "George Matheson", shortBio: "Scottish minister", bio: "George Matheson (1842-1906) wrote hymns.", bibleVerse: "Peace, perfect peace. - Isaiah 26:3" },
  { id: 178, name: "Edward Bickersteth", shortBio: "English bishop", bio: "Edward Bickersteth (1825-1906) wrote hymns.", bibleVerse: "Peace I leave with you. - John 14:27" },
  { id: 179, name: "James Paget", shortBio: "English hymn writer", bio: "James Paget wrote hymns.", bibleVerse: "Like a river glorious. - Isaiah 48:18" },
  { id: 180, name: "Warren Cornell", shortBio: "American hymn writer", bio: "Warren Cornell wrote gospel songs.", bibleVerse: "Wonderful peace. - Isaiah 26:3" },
  { id: 181, name: "Harriet Spafford", shortBio: "American hymn writer", bio: "Harriet Spafford wrote hymns.", bibleVerse: "There is rest. - Hebrews 4:9" },
  { id: 182, name: "Nathaniel Niles", shortBio: "American hymn writer", bio: "Nathaniel Niles wrote hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 183, name: "Lewis Hartsough", shortBio: "American minister", bio: "Lewis Hartsough (1828-1919) wrote 'I Hear Thy Welcome Voice'.", bibleVerse: "Him that cometh to me. - John 6:37" },
  { id: 184, name: "William Hunter", shortBio: "American minister", bio: "William Hunter (1811-1877) wrote hymns.", bibleVerse: "He healeth all thy diseases. - Psalm 103:3" },
  { id: 185, name: "Howard Grose", shortBio: "American minister", bio: "Howard Grose wrote hymns.", bibleVerse: "Draw nigh to God. - James 4:8" },
  { id: 186, name: "William Faber", shortBio: "English hymn writer", bio: "William Faber wrote hymns.", bibleVerse: "Draw nigh to God. - James 4:8" },
  { id: 187, name: "Clara Scott", shortBio: "American composer", bio: "Clara Scott (1841-1897) wrote hymns.", bibleVerse: "Open my eyes. - Psalm 119:18" },
  { id: 188, name: "Bernard Barton", shortBio: "English poet", bio: "Bernard Barton (1784-1849) wrote hymns.", bibleVerse: "Come unto me. - Matthew 11:28" },
  { id: 189, name: "Ralph Hudson", shortBio: "American composer", bio: "Ralph Hudson (1843-1901) wrote gospel songs.", bibleVerse: "I want Jesus to walk with me. - Psalm 23:4" },
  { id: 190, name: "Samuel Longfellow", shortBio: "American minister", bio: "Samuel Longfellow (1819-1892) wrote hymns.", bibleVerse: "Walk in the light. - 1 John 1:7" },
  { id: 191, name: "Mary Slade", shortBio: "American hymn writer", bio: "Mary Slade (1826-1882) wrote hymns.", bibleVerse: "He that saith he abideth in him ought also so to walk. - 1 John 2:6" },
  { id: 192, name: "William Merrill", shortBio: "American minister", bio: "William Merrill (1867-1954) wrote 'Rise Up, O Men of God'.", bibleVerse: "Watch ye, stand fast in the faith. - 1 Corinthians 16:13" },
  { id: 193, name: "George Duffield", shortBio: "American minister", bio: "George Duffield (1818-1888) wrote 'Stand Up, Stand Up for Jesus'.", bibleVerse: "Take unto you the whole armour of God. - Ephesians 6:13" },
  { id: 194, name: "John Yates", shortBio: "American hymn writer", bio: "John Yates wrote 'Faith Is the Victory'.", bibleVerse: "This is the victory that overcometh the world. - 1 John 5:4" },
  { id: 195, name: "William Sherwin", shortBio: "American composer", bio: "William Sherwin (1826-1888) composed hymn tunes.", bibleVerse: "Fight the good fight of faith. - 1 Timothy 6:12" },
  { id: 196, name: "William Groom", shortBio: "English hymn writer", bio: "William Groom wrote hymns.", bibleVerse: "These all died in faith. - Hebrews 11:13" },
  { id: 197, name: "Geoffrey Shaw", shortBio: "English composer", bio: "Geoffrey Shaw (1879-1943) composed church music.", bibleVerse: "Awake thou that sleepest. - Ephesians 5:14" },
  { id: 198, name: "William How", shortBio: "English bishop", bio: "William How (1823-1897) wrote many hymns.", bibleVerse: "For all things come of thee. - 1 Chronicles 29:14" },
  { id: 199, name: "William Longstaff", shortBio: "English hymn writer", bio: "William Longstaff (1822-1894) wrote 'Take Time to Be Holy'.", bibleVerse: "Be ye holy; for I am holy. - 1 Peter 1:16" },
  { id: 200, name: "James Nicholson", shortBio: "Irish-American hymn writer", bio: "James Nicholson (1828-1896) wrote hymns.", bibleVerse: "Wash me, and I shall be whiter than snow. - Psalm 51:7" },
  { id: 201, name: "William Kirkpatrick", shortBio: "American composer", bio: "William Kirkpatrick wrote many gospel tunes.", bibleVerse: "I will arise and go to my father. - Luke 15:18" },
  { id: 202, name: "Traditional", shortBio: "Traditional hymn", bio: "Traditional hymn of unknown authorship.", bibleVerse: "Praise ye the LORD. - Psalm 150:1" },
  { id: 203, name: "J. B. Coats", shortBio: "American hymn writer", bio: "J. B. Coats wrote 'Where Could I Go'.", bibleVerse: "Lord, to whom shall we go? - John 6:68" },
  { id: 204, name: "Squire Parsons", shortBio: "American gospel singer", bio: "Squire Parsons wrote 'Sweet Beulah Land'.", bibleVerse: "Thy land shall be called Beulah. - Isaiah 62:4" },
  { id: 205, name: "John Foote", shortBio: "American hymn writer", bio: "John Foote wrote gospel songs.", bibleVerse: "When I see the blood. - Exodus 12:13" },
  { id: 206, name: "Frederick Whitfield", shortBio: "English clergyman", bio: "Frederick Whitfield (1829-1904) wrote hymns.", bibleVerse: "We love him, because he first loved us. - 1 John 4:19" },
  { id: 207, name: "London Hymn Book", shortBio: "English hymnal", bio: "From the London Hymn Book.", bibleVerse: "We love him. - 1 John 4:19" },
  { id: 208, name: "Benjamin Schmolck", shortBio: "German hymn writer", bio: "Benjamin Schmolck (1672-1737) wrote hymns.", bibleVerse: "Not my will, but thine, be done. - Luke 22:42" },
  { id: 209, name: "Jack Scholfield", shortBio: "American hymn writer", bio: "Jack Scholfield wrote gospel songs.", bibleVerse: "For by grace are ye saved. - Ephesians 2:8" },
  { id: 210, name: "Elton Roth", shortBio: "American composer", bio: "Elton Roth (1891-1951) wrote gospel songs.", bibleVerse: "That ye might be filled with all the fulness of God. - Ephesians 3:19" },
  { id: 211, name: "Harry Clarke", shortBio: "American hymn writer", bio: "Harry Clarke wrote 'Into My Heart'.", bibleVerse: "Behold, I stand at the door, and knock. - Revelation 3:20" },
  { id: 212, name: "Lela Long", shortBio: "American hymn writer", bio: "Lela Long wrote gospel songs.", bibleVerse: "His name is as ointment poured forth. - Song of Solomon 1:3" },
  { id: 213, name: "Audrey Mieir", shortBio: "American hymn writer", bio: "Audrey Mieir (1916-1996) wrote 'His Name Is Wonderful'.", bibleVerse: "His name shall be called Wonderful. - Isaiah 9:6" },
  { id: 214, name: "Caroline Noel", shortBio: "English hymn writer", bio: "Caroline Noel (1817-1877) wrote hymns.", bibleVerse: "At the name of Jesus every knee should bow. - Philippians 2:10" },
  { id: 215, name: "Kurt Kaiser", shortBio: "American composer", bio: "Kurt Kaiser (1934-2018) wrote Christian music.", bibleVerse: "Greater love hath no man than this. - John 15:13" },
  { id: 216, name: "Frederick Lehman", shortBio: "American hymn writer", bio: "Frederick Lehman (1868-1953) wrote 'The Love of God'.", bibleVerse: "For God so loved the world. - John 3:16" },
  { id: 217, name: "Andraé Crouch", shortBio: "American gospel singer", bio: "Andraé Crouch (1942-2015) was a gospel legend.", bibleVerse: "Unto him that loved us. - Revelation 1:5" },
  { id: 218, name: "William Mackay", shortBio: "Scottish physician and hymn writer", bio: "William Mackay (1839-1885) wrote hymns.", bibleVerse: "We praise thee, O God. - Psalm 113:1" },
  { id: 219, name: "Timothy Dwight", shortBio: "American theologian", bio: "Timothy Dwight (1752-1817) was president of Yale.", bibleVerse: "I was glad when they said unto me. - Psalm 122:1" },
  { id: 220, name: "John Fawcett", shortBio: "English minister", bio: "John Fawcett (1740-1817) wrote 'Blest Be the Tie That Binds'.", bibleVerse: "Above all these things put on charity. - Colossians 3:14" },
  { id: 221, name: "John Oxenham", shortBio: "English author", bio: "John Oxenham (1852-1941) wrote hymns.", bibleVerse: "Ye are all one in Christ. - Galatians 3:28" },
  { id: 222, name: "Bryan Jeffery Leech", shortBio: "English-American hymn writer", bio: "Bryan Leech (1931-2015) wrote hymns.", bibleVerse: "Ye are a chosen generation. - 1 Peter 2:9" },
  { id: 223, name: "Harry Emerson Fosdick", shortBio: "American minister", bio: "Harry Fosdick (1878-1969) was an influential preacher.", bibleVerse: "Grant unto thy servants boldness. - Acts 4:29" },
  { id: 224, name: "Daniel Roberts", shortBio: "American clergyman", bio: "Daniel Roberts (1841-1907) wrote 'God of Our Fathers'.", bibleVerse: "The eternal God is thy refuge. - Deuteronomy 33:27" },
  { id: 225, name: "Katharine Lee Bates", shortBio: "American songwriter", bio: "Katharine Bates wrote 'America the Beautiful'.", bibleVerse: "Righteousness exalteth a nation. - Proverbs 14:34" },
  { id: 226, name: "Julia Ward Howe", shortBio: "American poet", bio: "Julia Ward Howe (1819-1910) wrote 'Battle Hymn of the Republic'.", bibleVerse: "The LORD is a man of war. - Exodus 15:3" },
  { id: 227, name: "Irving Berlin", shortBio: "American composer", bio: "Irving Berlin (1888-1989) wrote 'God Bless America'.", bibleVerse: "Blessed is the nation whose God is the LORD. - Psalm 33:12" },
  { id: 228, name: "Ernest Shurtleff", shortBio: "American minister", bio: "Ernest Shurtleff wrote hymns.", bibleVerse: "Let there be peace on earth. - Psalm 122:6" },
  { id: 229, name: "Sy Miller", shortBio: "American songwriter", bio: "Sy Miller (1908-1971) co-wrote 'Let There Be Peace on Earth'.", bibleVerse: "Let there be peace. - Psalm 122:6" },
  { id: 230, name: "Henry Hallam Tweedy", shortBio: "American minister", bio: "Henry Tweedy (1868-1953) wrote hymns.", bibleVerse: "Whose power upholds. - Hebrews 1:3" },
  { id: 231, name: "Georgia Harkness", shortBio: "American theologian", bio: "Georgia Harkness (1891-1974) was a theologian.", bibleVerse: "Lord, speak to me. - Psalm 119:18" },
  { id: 232, name: "Ira Wilson", shortBio: "American hymn writer", bio: "Ira Wilson wrote gospel songs.", bibleVerse: "Make me a blessing. - Genesis 12:2" },
  { id: 233, name: "Harper Coates", shortBio: "American composer", bio: "Harper Coates wrote hymn tunes.", bibleVerse: "Make me a channel of blessing. - Genesis 12:2" },
  { id: 234, name: "E. Margaret Clarkson", shortBio: "Canadian hymn writer", bio: "Margaret Clarkson (1915-2008) wrote hymns.", bibleVerse: "So send I you. - John 20:21" },
  { id: 235, name: "William Owens", shortBio: "American hymn writer", bio: "William Owens wrote gospel songs.", bibleVerse: "We have heard the joyful sound. - Psalm 89:15" },
  { id: 236, name: "Mary Maxwell", shortBio: "American hymn writer", bio: "Mary Maxwell wrote hymns.", bibleVerse: "Publish glad tidings. - Psalm 68:11" },
  { id: 237, name: "Frank Graeff", shortBio: "American minister", bio: "Frank Graeff wrote hymns.", bibleVerse: "I'll tell the world. - Mark 16:15" },
  { id: 238, name: "Walter Baxendale", shortBio: "English hymn writer", bio: "Walter Baxendale wrote hymns.", bibleVerse: "Calvary covers it all. - 1 John 1:7" },
  { id: 239, name: "Haldor Lillenas", shortBio: "American hymn writer", bio: "Haldor Lillenas wrote many gospel songs.", bibleVerse: "He washed my eyes with tears. - John 9:11" },
  { id: 240, name: "Nathaniel Olsen", shortBio: "American hymn writer", bio: "Nathaniel Olsen wrote hymns.", bibleVerse: "The unveiled Christ. - 2 Corinthians 3:18" },
  { id: 241, name: "William Reed", shortBio: "American hymn writer", bio: "William Reed wrote gospel songs.", bibleVerse: "Years I spent in vanity and pride. - Ephesians 2:3" },
  { id: 242, name: "Rhea Miller", shortBio: "American hymn writer", bio: "Rhea Miller wrote 'I'd Rather Have Jesus'.", bibleVerse: "For to me to live is Christ. - Philippians 1:21" },
  { id: 243, name: "Johnson Oatman Jr.", shortBio: "American hymn writer", bio: "Johnson Oatman wrote 'Higher Ground'.", bibleVerse: "I'm pressing on the upward way. - Philippians 3:14" },
  { id: 244, name: "Jeremiah Rankin", shortBio: "American minister", bio: "Jeremiah Rankin (1828-1904) wrote 'God Be with You'.", bibleVerse: "The LORD bless thee. - Numbers 6:24" },
  { id: 245, name: "John Ellerton", shortBio: "English clergyman", bio: "John Ellerton (1826-1893) wrote hymns.", bibleVerse: "Lord, now lettest thou thy servant depart in peace. - Luke 2:29" },
  { id: 246, name: "Max Landsberg", shortBio: "German-American rabbi", bio: "Max Landsberg (1845-1928) wrote hymns.", bibleVerse: "Holy, holy, holy, is the LORD of hosts. - Isaiah 6:3" },
  { id: 247, name: "Liturgy of St. James", shortBio: "Ancient liturgy", bio: "From the ancient Liturgy of St. James.", bibleVerse: "Be still, and know that I am God. - Psalm 46:10" },
  { id: 248, name: "Katherine Davis", shortBio: "American composer", bio: "Katherine Davis (1892-1980) wrote 'Little Drummer Boy'.", bibleVerse: "Let every thing that hath breath praise the LORD. - Psalm 150:6" },
  { id: 249, name: "John Burton", shortBio: "English hymn writer", bio: "John Burton (1773-1822) wrote hymns.", bibleVerse: "Thy word is true from the beginning. - Psalm 119:160" },
  { id: 250, name: "Traditional Children's Hymn", shortBio: "Traditional children's song", bio: "Traditional children's hymn.", bibleVerse: "Thy word have I hid in mine heart. - Psalm 119:11" },
  { id: 251, name: "Edwin Hodder", shortBio: "English journalist", bio: "Edwin Hodder (1837-1904) wrote hymns.", bibleVerse: "Thy word have I hid in mine heart. - Psalm 119:11" },
  { id: 252, name: "Henry Baker", shortBio: "English hymn writer", bio: "Henry Baker (1821-1877) was a hymnal editor.", bibleVerse: "For ever, O LORD, thy word is settled in heaven. - Psalm 119:89" },
  { id: 253, name: "Oswald Smith", shortBio: "Canadian minister", bio: "Oswald Smith (1889-1986) founded The Peoples Church.", bibleVerse: "For we have not an high priest which cannot be touched. - Hebrews 4:15" },
  { id: 254, name: "Charles Weigle", shortBio: "American evangelist", bio: "Charles Weigle (1871-1966) wrote 'No One Ever Cared for Me Like Jesus'.", bibleVerse: "Casting all your care upon him. - 1 Peter 5:7" },
  { id: 255, name: "Anna Warner", shortBio: "American novelist", bio: "Anna Warner (1827-1915) wrote 'Jesus Loves Me'.", bibleVerse: "The Father himself loveth you. - John 16:27" },
  { id: 256, name: "Henrietta von Hayn", shortBio: "German hymn writer", bio: "Henrietta von Hayn (1724-1782) wrote children's hymns.", bibleVerse: "I am the good shepherd. - John 10:11" },
  { id: 257, name: "Nellie Talbot", shortBio: "American hymn writer", bio: "Nellie Talbot wrote children's songs.", bibleVerse: "Ye are the light of the world. - Matthew 5:14" },
  { id: 258, name: "C. Herbert Woolston", shortBio: "American minister", bio: "C. Herbert Woolston (1856-1927) wrote children's songs.", bibleVerse: "Suffer little children to come unto me. - Matthew 19:14" },
  { id: 259, name: "Harry Dixon Loes", shortBio: "American hymn writer", bio: "Harry Loes wrote 'This Little Light of Mine'.", bibleVerse: "Let your light so shine. - Matthew 5:16" },
  { id: 260, name: "George Willis Cooke", shortBio: "American hymn writer", bio: "George Cooke wrote children's songs.", bibleVerse: "The joy of the LORD is your strength. - Nehemiah 8:10" },
  { id: 261, name: "Harry Rimmer", shortBio: "American evangelist", bio: "Harry Rimmer (1890-1952) was an evangelist.", bibleVerse: "Follow me, and I will make you fishers of men. - Matthew 4:19" },
  { id: 262, name: "Eleanor Farjeon", shortBio: "English author", bio: "Eleanor Farjeon (1881-1965) wrote 'Morning Has Broken'.", bibleVerse: "The morning stars sang together. - Job 38:7" },
  { id: 263, name: "Terrye Coelho", shortBio: "American songwriter", bio: "Terrye Coelho wrote 'Father, I Adore You'.", bibleVerse: "Thou art worthy, O Lord. - Revelation 4:11" },
  { id: 264, name: "Karen Lafferty", shortBio: "American singer-songwriter", bio: "Karen Lafferty wrote 'Seek Ye First'.", bibleVerse: "Seek ye first the kingdom of God. - Matthew 6:33" },
  { id: 265, name: "Ruth Harms Calkin", shortBio: "American author", bio: "Ruth Calkin (1918-2020) wrote devotional poetry.", bibleVerse: "Great is our Lord, and of great power. - Psalm 147:5" },
  { id: 266, name: "Lanny Wolfe", shortBio: "American gospel songwriter", bio: "Lanny Wolfe wrote 'Surely the Presence'.", bibleVerse: "Where two or three are gathered. - Matthew 18:20" },
  { id: 267, name: "Pauline Mills", shortBio: "American hymn writer", bio: "Pauline Mills wrote 'Thou Art Worthy'.", bibleVerse: "Thou art worthy, O Lord. - Revelation 4:11" },
  { id: 268, name: "Jack Hayford", shortBio: "American pastor", bio: "Jack Hayford (1934-2023) wrote 'Majesty'.", bibleVerse: "The LORD reigneth, he is clothed with majesty. - Psalm 93:1" },
  { id: 269, name: "Jimmy Owens", shortBio: "American composer", bio: "Jimmy Owens wrote Christian musicals.", bibleVerse: "We bring the sacrifice of praise. - Hebrews 13:15" },
  { id: 270, name: "Dottie Rambo", shortBio: "American gospel songwriter", bio: "Dottie Rambo (1934-2008) was a gospel legend.", bibleVerse: "Holy ground. - Exodus 3:5" },
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
