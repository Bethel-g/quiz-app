import videos from "../components/Videos.jsx";
import icons from "../components/icons.jsx";  

const questions = [
  {
    id: 1,
    type: "video",                
    video: videos.vid1,
    icon: "icon1", 
    number: "1",
    question: " አንድ አሽከርካሪ ሊከተለው የሚገባ የስራ ቦታ ደህንነት ቅደም ተከተል ያልሆነው የቱ ነው",
    options: ["ንፅህና", " ትክክለኛ አለባበስ  ", "“ሀ” ና “ለ” ", "መልሱ የለም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 2,
    type: "video",
    video: videos.vid2, 
    icon:"icon2",   
     number: "2",
    question: "በተሽከርካሪ ውስጥ ዘወትር የእሳት ማጥፊያ እንዳለ መከታተል የስራ ላይ ደህንነት  አተገባበር ነው",
    options: ["እውነት   ", "ሀሰት",  ],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 3,
    type: "video",
    video: videos.vid3,
     icon: "icon3", 
      number: "3",  
    question: "የራስን ንፅህና አለመጠበቅ ከአሽከርካሪዎች የማይጠበቅ ስህተት ነው",
    options: ["እውነት", "ሀሰት",],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 4,
    type: "video",
    video: videos.vid4,
     icon: "icon4", 
      number: "4",  
    question: "አንድ አሽከርካሪ የማሽከርከር ተግባር ከማከናወኑ በፊት ማሟላት ያለበት ተግባር የሆነው",
    options: ["የተሽከርካሪውን የቴክኒክ አቋም መገምገም", " የራሱን አካላዊና አእምሮአዊ ዝግጅት ማረጋገጥ", "“ሀ” ና “ለ”", "መልሱ የለም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 5,
    type: "video",
    video: videos.vid5,
     icon: "icon5",
      number: "5",   
    question: "አንድ አሽከርካሪ ማክበር ያለበት መጠጥ ቢጠጣ እስካልሠከረ ድረስ ማሽከርከር ይችላል ",
    options: ["በእውነት", "ሐሰት",],
    correctAnswer: 2,
    timeLimit: 20
  },
  {
    id: 6,
    type: "video",
    video: videos.vid6,
     icon: "icon6", 
      number: "6",  
    question: "የአንድ አሽከርካሪ ማክበር ያለበት የሥራ ላይ ደህንነት አጠባበቅ የሆነው የቱ ነው?",
    options: ["የጉዞ እቅድ ማውጣት", "ንቁና ቀልጣፍ መሆን", "“ሀ” ና “ለ”", "መልሱ የለም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 7,
    type: "video",
    video: videos.vid7,

     icon: "icon7",  
      number: "7", 
    question: "ሊታለፉ የሚችሉ የጉዳት አይነቶች ውስጥ የማይካተተው የቱ ነው?",
    options: ["ከባድ ቁስል", "ከባድ ጉዳት	", "ለረጅም ጊዜ የሚቆይ የጤና ችግር", "መልሱ የለም "],
    correctAnswer: 2,
    timeLimit: 20
  },
  {
    id: 8,
    type: "video",
    video: videos.vid8,
    icon: "icon8",
     number: "8",   
    question: "የትራፊክ አደጋ ውጤት አይነት ያልሆነው የቱ ነው?",
    options: ["የሞት አደጋ", "ተየስኳር በሽታ", "የየማህበራዊ ጉዳት", "መልሱ የለም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 9,
    type: "video",
    video: videos.vid9,
     icon: "icon9", 
      number: "9",
    question: "የስራ ላይ ደህንነት አጠባበቅ ሪፖርት ሊደረግለት የሚገባ አካል የቱ ነው?",
    options: ["ፖሊስ", "ቀጣሪ ድርጅት	", "የህክምና ማዕከላት  ", "ሁሉም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 10,
    type: "video",
    video: videos.vid10,
     icon: "icon10", 
      number: "10",
    question: "የስራ ላይ ደህንነት አጠባበቅ ሪፖርት ከሚቀርብላቸው አካላት አንዱ የጤና ማዕከላት ናቸው፡",
    options: ["እውነት", "ሐሰት"],
    correctAnswer: 2,
    timeLimit: 20
  },
    {
    id: 11,
    type: "video",
    video: videos.vid11,
     icon: icons.icon11 ,
      number: "11",
    question: "ግድ የለሽነት አንድ የሥራ ላይ ደህንነት አጠባበቅ ጉድለት ነው፡፡",
    options: ["እውነት", "ሐሰት", ],
    correctAnswer: 2,
    timeLimit: 20
  },
    {
    id: 12,
    type: "video",
    video: videos.vid12,
     icon: icons.icon12, 
      number: "12",
    question: "ይበእጅ መዳፍ ላይና ባካባቢው ያለን የሰውነት ክፍል ከአደጋ የሚከላከል የቱ ነው?",
    options: ["ካፖርት", "ጓንት", "ጫማ", "ሁሉም"],
    correctAnswer: 2,
    timeLimit: 20
  },
  {
    id: 13,
    type: "video",
    video: videos.vid13,
     icon: icons.icon2, 
      number: "13",
    question: "ከዝናብ ከከፍተኛ ቅዝቃዜና ከቆሻሻ የሚከላከል የደህንነት መጠበቅያ መሣሪያ የቱ ነው?",
    options: ["ካፖርት", "ጓንት", "ጫማ", "ሁሉም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 14,
    type: "video",
    video: videos.vid14,
     icon: icons.icon4, 
      number: "14",
    question: "በሌሎች አሽከርካሪዎችና መንገድ ተጠቃሚዎች በቀላሉ ለመታየት የሚረዳ የቱ ነው?",
    options: ["አንፀባራቂ ልብስ", " ጓንት", "ካፖርት", "ሁሉም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 15,
    type: "video",
    video: videos.vid15,
     icon: icons.icon6, 
      number: "15",
    question: "ጓንት የመተንፈሻ ክፍሎችን ከአደጋ ይከላከላል፡፡",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 16,
    type: "video",
    video: videos.vid16,
     icon: icons.icon8, 
      number: "16",
    question: "የአይን አካባቢንና ፊትን ከአደጋ ለመከላከል የሚጠቅም መሳሪያ የቱ ነው?",
    options: ["ሄልሜት", "ጓንት", "ሀ ና ለ", "መልሱ የለም"],
    correctAnswer: 1,
    timeLimit: 20
  },
  {
    id: 17,
    type: "video",
    video: videos.vid17,
     icon: icons.icon10,
      number: "17", 
    question: "በስራ ላይ የነበረን የተሽከርካሪ ሞተር ለማጥፋት በቅድሚያ መከናወን ያለበት",
    options: ["ማርሽ ዜሮ ማድረግና የእጅ ፍሬን መያዝ", "በሚኒየም ማሰራት", "ማስነሻ ቁልፍን ከ Start ወደ Lock አቅጣጫ ማዞር", "ሁሉም መልስ ነው"],
    correctAnswer: 2,
    timeLimit: 20
  },
    {
    id: 18,
    type: "video",
    video: videos.vid18,
     icon: icons.icon12,
      number: "18", 
    question: "የደህንነት መሣሪያ አይነት ያልሆነው የቱ ነው?",
    options: ["የታኮ", "ጓንት", "ካፖርት", "ሄልሜት"],
    correctAnswer: 2,
    timeLimit: 20
  },
      {
    id: 19,
    type: "video",
    video: videos.vid19,
    icon: icons.icon19, 
     number: "19",
    question: "የግል ደህንነት መጠበቂያ መሣሪያ ያልሆነው የቱ ነው?",
    options: ["የመገናኛ መሣሪያ", "ጓንት", "ካፖርት", "ሄልሜት"],
    correctAnswer: 2,
    timeLimit: 20
  },
      {
    id: 20,
    type: "video",
    video: videos.vid20,
      icon: icons.icon20,
       number: "20", 
    question: "ጉዳት ለደረሠበት ሰው ርዳታ ለመስጠት የሚያስፈልግ መሣሪያ የቱ ነው?",
    options: ["የመጀመሪያ ርዳታ ሳጥን", "ጭንቅላት መከላከያ", "ታኮ", "ሁሉም"],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 21,
    type: "video",
    video: videos.vid21,
     icon: icons.icon21, 
      number: "21",
    question: "ሁልጊዜ በግልፅ ቦታ ላይ ፊት ለፊት መቀመጥ ያለበትና የእሳት አደጋ ሲፈጠር የምንጠቀምበት መሣሪያ የሆነው የቱ ነው?",
    options: ["ጓንት", "እሳት ማጥፊያ", " ሀ ና ለ	", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 22,
    type: "video",
    video: videos.vid22,
     icon: icons.icon22, 
      number: "22",
    question: "ተሽከርካሪው በሚቆምበት ወቅት እንዳይንሸራተት የሚያደርግ መሣሪያ የቱ ነው?",
    options: ["ታኮ", "ሸራ", "ገመድ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },

  // repettt
        {
    id: 23,
    type: "video",
   video: videos.vid1,
    icon: "icon1", 
    number: "1",
    question: " አንድ አሽከርካሪ ሊከተለው የሚገባ የስራ ቦታ ደህንነት ቅደም ተከተል ያልሆነው የቱ ነው",
    options: ["ንፅህና", " ትክክለኛ አለባበስ  ", "“ሀ” ና “ለ” ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 24,
    type: "video",
    video: videos.vid24,
     icon: icons.icon24 ,
      number: "24",
    question: "አንድ አሽከርካሪ የስራ ላይ ደህንነት አጠባበቅ እውቀት ባይኖረውም ብቃት ያለው አሽከርካሪ መባል ይችላል፡፡",
    options: ["እውነት", "የሚቆጣሀሰትጠር",],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 25,
    type: "video",
    video: videos.vid25,
     icon: icons.icon25, 
      number: "25",
    question: "የስራ ላይ ደህንነት አጠባበቅ አደጋን ሊፈጥሩ የሚችሉ ሁኔታዎችን የመቀነስ እርምጃ ያልሆነው የቱ ነው? ",
    options: [" ንቁና ቀልጣፋ መሆን	", "ስለ መደንገዱ ሁኔታ በቂ መረጃ መያዝ", "ሀ ና ለ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 26,
    type: "video",
    video: videos.vid26,
     icon: icons.icon26, 
      number: "26",
    question: "ከሚከተሉት አንዱ አደጋን ሊፈጥር የሚችል ሁኔታ የሆነው የቱ ነው?",
    options: ["የተበላሸ መንገድ", "እንቅልፍ እንቅልፍ ማለት", "ሀ ና ለ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },

  // mmmmmmm
        {
    id: 27,
    type: "video",
    video: videos.vid27,
     icon: icons.icon27, 
      number: "27",
    question: "ኣላስፈላጊ ጥሩምባ መጠቀም የኣየር ብክለት ያስከትላል",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 28,
    type: "video",
    video: videos.vid28,
     icon: icons.icon28, 
      number: "28",
    question: "ማንኛውም ኣሽከርካሪ መኪናው ከመንቀሳቀሱ በፊት የመኪናውን ዙሪያና መሬት ላይ ምን እንዳለ ማየት ይገባዋል",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 2,
    timeLimit: 20
  },

        {
    id: 29,
    type: "video",
    video: videos.vid29,
     icon: icons.icon29, 
      number: "29",
    question: "ኣሽከርካሪዎች እያሽከረከሩ ኣቅጣጫቸውን መለወጥ ቢፈልጉ በመጀመሪያ ማድረግ ያለባቸው ተግባር",
    options: ["ቅማርሽ ማቀናነስ", "የኋላ መመልከቻ መስታወት ማየት", "የፍሬቻ ማሳየት", "ሁሉም መልስ ናቸው"],
    correctAnswer: 2,
    timeLimit: 20
  },

    // ...........
            {
    id: 30,
    type: "video",
    video: videos.vid30,
     icon: icons.icon30, 
      number: "30",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ማንኛውንም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት ክልክል ነው", "ለጭነት ተሽከርካሪ ማለፍ ክልክል ነው", "ብስክሌት እያሽከረከሩ ማለፍ ክልክ ነው", "ብስክሌት እያሽከረከሩ ማለፍ የተፈቀደ ነው"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 31,
    type: "video",
    video: videos.vid31,
      icon: icons.icon31, 
       number: "31",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ጠብቀህ በጥንቃቄ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ፊት ለፊትና ወደ ቀኝ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር", "ፊት ለፊትና ወደ ግራ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 32,
    type: "video",
    video: videos.vid32,
     icon: icons.icon32, 
      number: "32",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["በመንገድ ላይ የባቡር ሐዲድ ማቋረጫ ስለአለ ተጠንቅቀህ እለፍ", "የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን ቀንሰህ ተጓዝ", "ወደ ፊት የትራፊክ መብራት ስላለ ተጠንቅቀህ አሽከርክር", "'ሀ' እና 'ሐ' መልስ ናቸው"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 33,
    type: "video",
    video: videos.vid33,
    icon: icons.icon33, 
     number: "33",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ወደ ፊት የህፃናት መጫዎቻ ቦታ ስለአለ ፍጥነትህን ቀንሰህ አሽከርክር", "ወደ ፊት የመንገድ ጥገና የሚካሔዱ ሠዎች ስለአሉ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ ብዙ ሠዎች የሚተላለፍበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "ተማሪዎች የሚበዙበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 34,
    type: "video",
    video: videos.vid34,
    icon: icons.icon34, 
     number: "34",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["አደገኛ ቁልቁለት ስለሚያጋጥምህ ከባድ ማርሽ በማስገባት ተጠንቅቀህ እለፍ", "መንገዱ እየጠበበ የሚሔድ ስለሆነ ተጠንቅቀህ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ አሽከርክር", "መልሱ የልም"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 35,
    type: "video",
    video: videos.vid35,
    icon: icons.icon35, 
     number: "35",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["መዚጊያ ያለው የባቡር ሐዲድ ማቋረጫ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር", "ወደ ፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 36,
    type: "video",
    video: videos.vid36,
    icon: icons.icon36, 
     number: "36",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ይዘህ በጥንቃቄ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ፊትና ወደ ቀኝ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር", "ፊት ለፊትና ወደ ግራ የሚያስኬድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 37,
    type: "video",
    video: videos.vid37,
     icon: icons.icon37, 
      number: "37",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህ በመቀነስ ተጠንቅቀህ አሽከርክር", "የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ይዘህ በጥንቃቄ እለፍ", "መንገዱ እየጠበበ የሚሔድ ስለሆነ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ የባቡር ሐዲድ ማቋረጫ ስለአለ ተጠንቅቀህ እለፍ"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 38,
    type: "video",
    video: videos.vid38,
     icon: icons.icon38, 
      number: "38",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ጠብቀህ በጥንቃቄ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ፊት ለፊትና ወደ ቀኝ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር", "ፊት ለፊትና ወደ ግራ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 39,
    type: "video",
    video: videos.vid39,
     icon: icons.icon39, 
      number: "39",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["መንገዱን የሚጠግኑ ሠራተኞች ስለአሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ለ ተማሪዎች የሚበዙበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ ብዙ ሰዎች የሚተላለፍበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "መልሱ የለም"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 40,
    type: "video",
    video: videos.vid40,
     icon: icons.icon40, 
      number: "40",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["የከተማ ክልል ስለሆነ ተጠንቅቀህ አሽከርክር", "ወደ ፊት የትራፊክ መብራት አለ", "እግረኞች እንዳይሔዱበት ይከለክላል", "በሰው ሀይል የሚንቀሳቀሱ ተሽከርካሪዎችን የሚከለክል"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 41,
    type: "video",
    video: videos.vid41,
     icon: icons.icon41, 
      number: "41",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ማንኛውም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት የተከለከለ ነው", "የከተማ ክልልና የፍጥነት ወሰን መጨረሻ", "ብስክሌቶች ብቻ ለማሽከርክር የተፈቀደ መንገድ", "ብስክሌቶች ለማሽከርክር የተከለከለበት መንገድ"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 42,
    type: "video",
    video: videos.vid42,
     icon: icons.icon42, 
      number: "42",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ቅድሚያ ያለው መንገድ", "መኪና ለማቆም የሚከለክለው ምልክት ትዕዛዝ መጨረሻ መሆኑን የሚገልጽ ምልክት", "ለጭነት ተሽከርካሪዎች እንዲተላለፍበት የተፈቀደ መንገድ", "መልሱ አልተሠጠም"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 43,
    type: "video",
    video: videos.vid43,
     icon: icons.icon43, 
      number: "43",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫና ተሽከርካሪ ማለፍ የተከለከለ ነው", "ለጭነት ተሽከርካሪ ማለፍ ክልክል ነው", "የጭነት ተሽከርካሪዎች እንዲተላለፍበት የተፈቀደ መንገድ ነው", "በመንገዱ ላይ የሚፈናጠር ድንጋይ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 44,
    type: "video",
    video: videos.vid44,
     icon: icons.icon44, 
      number: "44",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ማንኛውንም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት ክልክል ነው", "ለጭነት ተሽከርካሪ ማለፍ ክልክል ነው", "ብስክሌት እያሽከረከሩ ማለፍ ክልክ ነው", "ብስክሌት እያሽከረከሩ ማለፍ የተፈቀደ ነው"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 45,
    type: "video",
    video: videos.vid45,
      icon: icons.icon45,
       number: "45",
    question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
    options: ["ብስክሌት ብቻ ለማሽከርክር የተፈቀደ መንገድ", "ብስክሌት ብቻ ለማሽከርክር የተከለከለ መንገድ", "ለጭነት ተሽከርካሪዎች ብቻ የተፈቀደ", "መልሱ አልተሠጠም"],
    correctAnswer: 2,
    timeLimit: 20
  },
  // ......................................
            {
    id: 46,
    type: "video",
    video: videos.vid46,   
      icon: icons.icon1, 
       number: "46",
    question: "በመቀየር ችግሩ ሊቀርፍ የሚችል የተሽከርካሪ ክፍል የቱ ነው",
    options: ["የፍሬን ሽራ", "ፊጎማ", "ታምቡር", "ሁሉም"],
    correctAnswer: 2,
    timeLimit: 20
  },
            {
    id: 47,
    type: "video",
    video: videos.vid47,
     icon: icons.icon23, 
      number: "47",
    question: "ከሚከተሉት ውስጥ በዝናባማና ጭጋጋማ የኣየር ሁኔታ ውስጥ በማሽከርከር ወቅት ማካንወን ያለነት ተግባር የቱ ነው",
    options: ["ኣጭር የግንባር መብራት መጠቀም", "በኣነስተኛ ፍጥነት መጏዝ", "ሁሉንም የጎን መብራት ማብራት","ሁሉም መልስ ነው"],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 48,
    type: "video",
    video: videos.vid48,
    icon: icons.icon40, 
     number: "48",
    question: "በድብርት ስሜት ውስY ሆኖ ማሽከርከር ለኣደጋ ያጋልጣል",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 2,
    timeLimit: 20
  },
          {
    id: 49,
    type: "video",
    video: videos.vid49,
      icon: icons.icon37, 
       number: "49",
    question: "ተሽከርካሪ የቴክኒክ ጉድለት ምክንያት ኣደጋዎችን መከላከል የዝሽከርካሪዎች ሃላፊነት ነው",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 2,
    timeLimit: 20
  },
        {
    id: 50,
    type: "video",
    video: videos.vid50,
     icon: icons.icon24, 
      number: "50",
    question: "ኣለምረጋጋት ለዝሽከርካሪዎች ኣስፈላጊ ባህሪ ነው",
    options: ["እውነት", "ሀሠት",],
    correctAnswer: 2,
    timeLimit: 20
  },

];

export default questions;










// const questions = [
//   {
//     id: 1,
//     type: "video",                
//     video: "/videos/vid1.mp4",   
//     question: " ይህ ምልክት የሚያስተላልፈው መልእክት",
//     options: ["ፊት ለፊት እና ወደ ቀኝ የሚያስኬድ መገናኛ ስለሚያጋጥምህ ተጠንቅቀህ ኣሽከርክር", "ፊት ለፊት እና ወደ ግራ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ኣሽከርክር", "በመንገድህ ላይ ጠባብ ድልድይ ስለሚያጋጥምህ ተጠንቅቀህ ኣሽከርክር", "መልሱ የለም"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 2,
//     type: "video",
//     video: "/videos/vid2.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልእክት",
//     options: ["መንገዱ እየጠበበ የሚሄድ ስለሆነ ተጠንቅቀህ እለፍ", "ኣደገኛ ቁልቁለት ስለሚያጋጥምክ ከባድ ማርሽ በማስገባት ተጠንቅቀህ እለፍ", "የሚያንሸራትት መንገድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ", "ሁለት ነጠላ መንገድ ወደ ኣንድ ነጠና መንገድ ስለሚለወጥ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 3,
//     type: "video",
//     video: "/videos/vid3.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልእክት",
//     options: ["ወደፊት የህጻናት መጫወቻ ስላለ ተጠንቅቀህ ኣሽከረክር", "የኣካል ጉዳተኞች ስላሉ ፍጥነትን በመቀነስ ኣሽከረክር", "ወደፊት የእርሻ መሳሪያዎች ስላሉ ፍጥነትን በመቀነስ እለፍ", "ወደፊት የቤት እንሰሳት ስላሉ ወደፊት ፍጥነትን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 4,
//     type: "video",
//     video: "/videos/vid4.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልእክት",
//     options: ["መንገዱ በስተቀኝ በኩል ስለሚጠብ ተጠንቅቀህ ኣሽከርከር", " ሁለት ነጠላ መንገድ ወደ ኣንድ ነጠላ መንገድ ስለሚለወጥ ተጠንቅቀህ ኣሽከርከር", "በመንገድ ኣግድም የሚነፍስ ሃይለኛ ንፋስ ስላለ ተጠንቅቀህ ኣሽከርክር", "ኣንድ መንገድ የነበረው ወደ ሁለት ነጠላ መንገድ ስለሚለወጥ ተጠንቅቀህ ኣሽከርክር"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 5,
//     type: "video",
//     video: "/videos/vid5.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር", "ወደ ፊት የትራፊክ መብራት አለ", "ወደ ፊት ክብ አደባባይ አለ", "ወደፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//   {
//     id: 6,
//     type: "video",
//     video: "/videos/vid6.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር", "ወደ ፊት የትራፊክ መብራት አለ ተጠንቅቀህ አሽከርክር", "ወደ ፊት ክብ የትራፊክ ደሴት አለ ተጠንቅቀህ አሽከርክር", "Oወደ ፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ አሽከርክር"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 7,
//     type: "video",
//     video: "/videos/vid7.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ለሁለት ተከፍሎ የነበረው መንገድ ማብቂያ ስለሆነ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ ", "አደገኛ ጠመዝማዛ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "የአስፋልት መንገድ መጨረሻ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መልሱ የለም "],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//   {
//     id: 8,
//     type: "video",
//     video: "/videos/vid8.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ናዳ ያለበት መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ተንቀሳቃሽ/ተነሺ ድልድይ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "የአስፋልት መንገድ መጨረሻ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "አደገኛ ጠመዝማዛ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 9,
//     type: "video",
//     video: "/videos/vid9.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ምልክቱ ባለበት አቅጣጫ እያሽከረከሩ ማለፍ የተፈቀደ ነው", "ማናቸውም አይነት ተሽከርካሪና በእጅ የሚገፉትም ጭምር እንዳያልፍበት የተከተከለ መንገድ", "ይህ ምልክት ባለበት መንገድ ብስክሌት እያሽከረከሩ ማለፍ የተፈቀደ ነው", "ለጭነት ተሽከርካሪ ማለፍ የተከለከለ መሆኑን ያመለክታል"],
//     correctAnswer: 1,
//     timeLimit: 20
//   },
//   {
//     id: 10,
//     type: "video",
//     video: "/videos/vid10.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ሞተር ብስክሌት እያሽከረከሩ ማለፍ የተከለከለ ነው", "ብስክሌት እያሽከረከሩ ማለፍ ክልክል መሆኑን ያሳያል", "ምልክቱ ባለበት አቅጣጫ እያሽከረከሩ ማለፍ ክልክል መሆኑን ያሳያል", "'ሀ' እና 'ለ' መልስ ናቸው"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//     {
//     id: 11,
//     type: "video",
//     video: "/videos/vid11.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ለጭነት ተሽከርካሪ ማለፍ የተከለከለ ነው", "ቀስቱ ወደሚያመለክተው በስተግራ ወደ ኋላ ዞሮ መመለስ ክልክል መሆኑን", "ቅድሚያ የለው መንገድ መሆኑን ያመለክታል", "የደሴቱን ግራ መስመር ይዘህ አሽከርክር"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//     {
//     id: 12,
//     type: "video",
//     video: "/videos/vid12.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የከተማ ክልልና የፍጥነት ወሰን መጨረሻ", "የከተማ ክልል ምልክት በከተማ ውስጥ ለማሽከርከር የተወሰኑትን ህጎች አክብር", "ይህ ምልክት በአለበት መንገድ ላይ እግረኞች እንዳይሔዱበት የተከተከለ ነው", "ተሽከርካሪ ማቆም የተከለከለ መሆኑን ያሳያል"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//   //   {
//   //   id: 13,
//   //   type: "video",
//   //   video: "/videos/vid13.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["ማንኛውም በሞተር ሐይል የሚንቀሳቀሱ ተሽከርካሪዎች እያሽከረከሩ ማለፍ ክልክል ነው", "ለማንኛውም ተሽከርካሪ ማለፍ የተከለከለ ነው", "የአነስተኛ ፍጥነት መጨረሻ መሆኑን ያሳያል", "ቆሞ ቅድሚያ ሳይሰጡ ማለፍ ክልክል ነው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //   {
//   //   id: 14,
//   //   type: "video",
//   //   video: "/videos/vid14.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: [" የደሴቱን ግራ ያዝ የሚል መሆኑን", "ቅድሚያ ያለው መንገድ መሆኑን ", "የአነስተኛ ፍጥነት መጨረሻ መሆኑን", "ቅደሚያ የሚሰጥ መንገድ መሆኑን"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //   {
//   //   id: 15,
//   //   type: "video",
//   //   video: "/videos/vid15.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["የጭነት ተሽከርካሪዎች እንዲተላለፉበት የተፈቀደ መንገድ መሆኑን", "አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫኑ ተሽከርካሪ የተፈቀደበት መንገድ መሆኑን", "ከፊት ለፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ሣይሰጡ ማሽከርክር ክልክ መሆኑን", "አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫነ ተሽከርካሪ የተከለከለ መንገድ መሆኑን"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //   {
//   //   id: 16,
//   //   type: "video",
//   //   video: "/videos/vid16.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["በመንገዱ ላይ የማሽከርከርያ አነስተኛ ፍጥነት", "የአነስተኛ ፍጥነት መጨረሻ", "የከተማ ክልልና የፍጥነት ወሰን መጨረሻ", "ፍጥነትህን እንደ መንገዱ ሁኔታ ቀንሰህ አሽከርክር"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //     {
//   //   id: 17,
//   //   type: "video",
//   //   video: "/videos/vid17.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["የጭነት ተሽከርካሪዎች እንዲተላለፉበት የተፈቀደ መንገድ መሆኑን", "የተበላሸ ተሽከርካሪ እየጎተቱ መጓዝ የተከለከለበት መንገድ መሆኑን", "በሰው ኃይል የሚንቀሣቀስ ተሽከርካሪዎችን በዚህ በኩል ማለፍ ክልክል መሆኑን", "መልሱ የለም"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //     {
//   //   id: 18,
//   //   type: "video",
//   //   video: "/videos/vid18.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["ከወደፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ስጥ", "ቅድሚያ ያለው መንገድ የሚለው ምልክት ትዕዛዝ መጨረሻ", "ቁም", "'ሀ' እና 'ለ' መልስ ናቸው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//       {
//     id: 19,
//     type: "video",
//     video: "/videos/viid19.mp4",
//     question: "ይህ ምልክት ሊያስተላልፈው የፈለገው መልዕክት",
//     options: ["በመንገዱ ላይ ባለሁለት የባቡር ሐዲድ መስመር ስለአለ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ ብዙ ሰዎች የሚተላለፉበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "መስቀለኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ሰለአለ በጥንቃቄ አሽከርክር"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//       {
//     id: 20,
//     type: "video",
//     video: "/videos/viid20.mp4",
//     question: "የምልክቱን ትርጉም የያዘዉ የትኛዉ ነዉ?",
//     options: ["በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር", "የሚያሸራትት መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ አሽከርክር", "በመንገዱ አግድም የሚነፍስ ሀይለኛ ነፋስ አለ ተጠንቅቀህ እለፍ", "ወደ ግራ የሚታጠፍ አደገኛ ኩርባ አለ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 21,
//     type: "video",
//     video: "/videos/viid21.mp4",
//     question: "ይህ ምልክት ሊያስተላልፈው የፈለገው መልዕክት",
//     options: ["ሰዎች በብዛት ስለሚገኙ ተጠንቅቀህ እለፍ", "የአካል ጉደተኞች ማቋረጫ ስለአሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ፊት የህፃናት መጫዎቻ ቦታ ስለአለ ፍጥነትህን በመቀነስ እለፍ", "መንገዱ ቀያሽ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 22,
//     type: "video",
//     video: "/videos/viid22.mp4",
//     question: "ከሚከተሉት ዉስጥ የምልክቱን ትርጉም የያዘዉ የቱ ነዉ?",
//     options: ["ቅድሚያ ያለው መንገድ የሚለው ምልክት ትዕዛዝ መጨረሻ", "ከፊት ለፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ሣይሰጡ ማሽከርከር ክልክል ነው", "የደሴቱን ቀኝ በመያዝ አሽከርክር", "ቅድሚያ ያለው መንገድ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 23,
//     type: "video",
//     video: "/videos/viid23.mp4",
//     question: "ይህ ምልክት ሊያስተላልፈው የፈለገው መልዕክት",
//     options: ["ቅድሚያ ያለው መንገድ የማለው ምልክት ትዕዛዝ መጨረሻ", "ከወደፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ስጥ", "የደሴቱን ቀኝ በመያዝ አሽከርከር", "ቅድሚያ ያለው መንገድ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 24,
//     type: "video",
//     video: "/videos/viid24.mp4",
//     question: "የዚህ ምልክት ትክክለኛ ምድብ የቱ ነው",
//     options: ["የሚያስጠነቅቅ", "የሚቆጣጠር", "መረጃ የሚሰጥ", "ቅድሚያ ያለው መንገድ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 25,
//     type: "video",
//     video: "/videos/viid25.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የቀስት ምልክቱ እንደሚያመለክተው በስተቀኝ በኩል ብቻ እለፍ", "የቀስት ምልክቱ እንደሚያመለክተው በስተግራ በኩል ባለው መንገድ ላይ ብቻ እለፍ", "በመገናኛ መንገድ ላይ ለተላፊፊ ቅድሚያ ስጥ", "'ሀ' እና 'ሐ' መልስ ናቸው"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 26,
//     type: "video",
//     video: "/videos/viid26.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ቅድሚያ ያለው መንገድ ለሚለው ምልክት ትዕዛዝ መጨረሻ", "ቅድሚያ ያለው መንገድ የሚለው መልዕክት ትዕዛዝ መጀመሪያ", "በመገናኛ መንገድ ላይ ለተላላፊ ቅድሚያ በመስጠት ተጠንቅቀህ እለፍ", "ከወደፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ስጥ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 27,
//     type: "video",
//     video: "/videos/viid27.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የአስፋልት መንገድ መጨረሻ ስለአለው ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መንገድ ቀያሽ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ወንዝ ዳርቻ የሚወሰድ መንገድ ስለአለ ተጠንቅቀህ እለፍ", "ተንቀሣቃሽ /ተነሺ/ ድልድይ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//         {
//     id: 28,
//     type: "video",
//     video: "/videos/viid28.mp4",
//     question: "ይህ ምልዕክት ሊያስተላልፈው የፈለገው መልዕክት",
//     options: ["የአስፋልት መንገድ መጨረሻ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መንገድ ቀያሽ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ወንዝ ዳርቻ የሚወስድ መንገድ ስለአለ ተጠንቅቀህ እለፍ", "ተንቀሣቃሽ/ተነሺ ድልድይ ስለሚያጋጥምህ ፍጥነትህን በቀመነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//   //       {
//   //   id: 29,
//   //   type: "video",
//   //   video: "/videos/vid29.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["መንገዱ ለሁለት መከፈል የሚጀምርበት ቦታ ደርሰሀልና ተጠንቀቅ", "ሁለት ነጠላ መንገድ ወደ አንድ ነጠላ መንገድ ይለወጣል", "አደገኛ ጠምዛዛ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መንገዱ በስተቀኝ በኩል ይጠባል"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //       {
//   //   id: 30,
//   //   type: "video",
//   //   video: "/videos/vid30.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["በመንገዱ ላይ የሚፈናጠር ድንጋይ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን ቀንሰህ ተጓዝ", "ወደ ግራ የሚታጠፍ አደገኛ ኩርባ ስለአለ ተጠንቅቀህ እለፍ", "'ለ' እና 'ሐ' መልስ ናቸው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //       {
//   //   id: 31,
//   //   type: "video",
//   //   video: "/videos/vid31.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["ወደ ፊት አደገኛ ኩርባ ስለአለ ፍትነትህን በመቀነስ ተጠንቅቀህ አሽከርክር", "በመንገድ አግድም የሚነፍስ ኃይለኛ ነፋስ አለ", "በመንገዱ ላይ ጥገና እየተካሔደ ስለሆነ ተጠንቅቀህ እለፍ", "መንገዱ ዝግ ነው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//           {
//     id: 32,
//     type: "video",
//     video: "/videos/viid32.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["በመንገድ ላይ የባቡር ሐዲድ ማቋረጫ ስለአለ ተጠንቅቀህ እለፍ", "የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን ቀንሰህ ተጓዝ", "ወደ ፊት የትራፊክ መብራት ስላለ ተጠንቅቀህ አሽከርክር", "'ሀ' እና 'ሐ' መልስ ናቸው"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 33,
//     type: "video",
//     video: "/videos/viid33.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ወደ ፊት የህፃናት መጫዎቻ ቦታ ስለአለ ፍጥነትህን ቀንሰህ አሽከርክር", "ወደ ፊት የመንገድ ጥገና የሚካሔዱ ሠዎች ስለአሉ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ ብዙ ሠዎች የሚተላለፍበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "ተማሪዎች የሚበዙበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 34,
//     type: "video",
//     video: "/videos/viid34.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["አደገኛ ቁልቁለት ስለሚያጋጥምህ ከባድ ማርሽ በማስገባት ተጠንቅቀህ እለፍ", "መንገዱ እየጠበበ የሚሔድ ስለሆነ ተጠንቅቀህ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ አሽከርክር", "መልሱ የልም"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 35,
//     type: "video",
//     video: "/videos/viid35.mp4",
//     question: "ይህ ምልክት የሚያስተላላፈው መልዕክት",
//     options: ["መዚጊያ ያለው የባቡር ሐዲድ ማቋረጫ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር", "ወደ ፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "መልሱ የለም"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 36,
//     type: "video",
//     video: "/videos/viid36.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ይዘህ በጥንቃቄ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ወደ ፊትና ወደ ቀኝ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር", "ፊት ለፊትና ወደ ግራ የሚያስኬድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 37,
//     type: "video",
//     video: "/videos/viid37.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህ በመቀነስ ተጠንቅቀህ አሽከርክር", "የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ይዘህ በጥንቃቄ እለፍ", "መንገዱ እየጠበበ የሚሔድ ስለሆነ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ የባቡር ሐዲድ ማቋረጫ ስለአለ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 38,
//     type: "video",
//     video: "/videos/viid38.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የቀኝ ረድፍህን ጠብቀህ በጥንቃቄ እለፍ", "የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ፊት ለፊትና ወደ ቀኝ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር", "ፊት ለፊትና ወደ ግራ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 39,
//     type: "video",
//     video: "/videos/viid39.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["መንገዱን የሚጠግኑ ሠራተኞች ስለአሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ", "ለ ተማሪዎች የሚበዙበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "በመንገዱ ላይ ብዙ ሰዎች የሚተላለፍበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ", "መልሱ የለም"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//           {
//     id: 40,
//     type: "video",
//     video: "/videos/viid40.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["የከተማ ክልል ስለሆነ ተጠንቅቀህ አሽከርክር", "ወደ ፊት የትራፊክ መብራት አለ", "እግረኞች እንዳይሔዱበት ይከለክላል", "በሰው ሀይል የሚንቀሳቀሱ ተሽከርካሪዎችን የሚከለክል"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//             {
//     id: 41,
//     type: "video",
//     video: "/videos/viid41.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ማንኛውም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት የተከለከለ ነው", "የከተማ ክልልና የፍጥነት ወሰን መጨረሻ", "ብስክሌቶች ብቻ ለማሽከርክር የተፈቀደ መንገድ", "ብስክሌቶች ለማሽከርክር የተከለከለበት መንገድ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//             {
//     id: 42,
//     type: "video",
//     video: "/videos/viid42.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ቅድሚያ ያለው መንገድ", "መኪና ለማቆም የሚከለክለው ምልክት ትዕዛዝ መጨረሻ መሆኑን የሚገልጽ ምልክት", "ለጭነት ተሽከርካሪዎች እንዲተላለፍበት የተፈቀደ መንገድ", "መልሱ አልተሠጠም"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//             {
//     id: 43,
//     type: "video",
//     video: "/videos/viid43.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫና ተሽከርካሪ ማለፍ የተከለከለ ነው", "ለጭነት ተሽከርካሪ ማለፍ ክልክል ነው", "የጭነት ተሽከርካሪዎች እንዲተላለፍበት የተፈቀደ መንገድ ነው", "በመንገዱ ላይ የሚፈናጠር ድንጋይ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//             {
//     id: 44,
//     type: "video",
//     video: "/videos/viid44.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ማንኛውንም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት ክልክል ነው", "ለጭነት ተሽከርካሪ ማለፍ ክልክል ነው", "ብስክሌት እያሽከረከሩ ማለፍ ክልክ ነው", "ብስክሌት እያሽከረከሩ ማለፍ የተፈቀደ ነው"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//             {
//     id: 45,
//     type: "video",
//     video: "/videos/viid45.mp4",
//     question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//     options: ["ብስክሌት ብቻ ለማሽከርክር የተፈቀደ መንገድ", "ብስክሌት ብቻ ለማሽከርክር የተከለከለ መንገድ", "ለጭነት ተሽከርካሪዎች ብቻ የተፈቀደ", "መልሱ አልተሠጠም"],
//     correctAnswer: 2,
//     timeLimit: 20
//   },
//   //           {
//   //   id: 46,
//   //   type: "video",
//   //   video: "/videos/viid46.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["ጠቅላላ ስፋቱ በሜትር በምልክቱ ላይ ከተመለከተው በላይ ስለሆነ ተሽከርካሪ ማለፍ የተከለከለ ነው", "ጠቅላላ ከፍታው በሜትር በምልክቱ ላይ ከተመለከተው በላይ ለሆነ ተሽከርካሪ ማለፍ የተከለከለ ነው", "የከተማ ክልልና የፍጥነት ወሰን መሆኑን ያመለክታል", "'ሀ' እና 'ሐ' መልስ ናቸው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //           {
//   //   id: 47,
//   //   type: "video",
//   //   video: "/videos/viid47.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["ቅድሚያ ያለው መንገድ", "ከወደፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ስጥ", "ቅድሚያ ያለው መንገድ የሚለው ምልክት ትዕዛዝ መጨረሻ", "'ሀ' እና 'ሐ' መልስ ናቸው"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //           {
//   //   id: 48,
//   //   type: "video",
//   //   video: "/videos/viid48.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["የቀሰት ምልክቱ እንደሚያመለክተው በስተቀኝ በኩል ብቻ እለፍ", "የቀስት ምልክቱ እንደሚያመለክተው በስተግራ በኩል ብቻ እለፍ", "ቀስቱ በሚያመለክተው አቅጣጫ በኩል ባለው መንገድ ላይ ማሽከርከር ክልክል ነው", "ወደ ትራፊኩ ክብ ወይም ደሴት አስቀድሞ ለገባ ተሽከርካሪ ቅድሚያ ስጥ"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //           {
//   //   id: 49,
//   //   type: "video",
//   //   video: "/videos/viid49.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["የቀስት ምልክቱ እንደሚያመለክተው በስተቀኝ በኩል ብቻ እለፍ", "የቀስት ምልክቱ እንደሚያመለክተው በስተግራ በኩል ብቻ እለፍ", "ቀስቱ በሚያመለክተው አቅጣጫ በኩል ያለው መንገድ ዝግ ነው", "ወደ ትራፊኩ ክብ ወይም ደሴት አስቀድሞ ለገባ ተሽከርካሪ ቅድሚያ ስጥ"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },
//   //           {
//   //   id: 50,
//   //   type: "video",
//   //   video: "/videos/viid50.mp4",
//   //   question: "ይህ ምልክት የሚያስተላልፈው መልዕክት",
//   //   options: ["የነዳጅ መቅጂያ ቦታ መኖሩን	", "የጥገና አገልግሎት መስጫ መኖሩን", "የእግር ጉዞ መጀመሪያ /ቦታ/ መሆኑን", "የጉብኝዎች ማረፊያ/መንደር/ መሆኑን"],
//   //   correctAnswer: 2,
//   //   timeLimit: 20
//   // },

// ];

// export default questions;



