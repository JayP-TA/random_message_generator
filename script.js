//Video game name generator 

const { Console } = require("console");

//Data to pull from includes 228 adjectives, 92 subjects, 13 sequel numbers, 6 subtitles
const adjectives = ["","adorable","agreeable","amused","annoying","ashamed","awful","better","bloody","blushing","brave","busy","cautious","clean","cloudy","combative","condemned","courageous","crowded","cute","dead","delightful","different","distinct","doubtful","adventurous","alert","angry","anxious","attractive","bad","bewildered","blue","bored","breakable","calm","charming","clear","clumsy","comfortable","confused","crazy","cruel","dangerous","defeated","depressed","difficult","disturbed","drab","aggressive","alive","annoyed","arrogant","average","beautiful","black","blue-eyed","brainy","bright","careful","cheerful","clever","colorful","concerned","cooperative","creepy","curious","dark","defiant","determined","disgusted","dizzy","dull","eager","elegant","encouraging","envious","expensive","faithful","fantastic","fine","frail","frightened","gifted","glorious","graceful","grumpy","healthy","hilarious","horrible","ill","inexpensive","itchy","jolly","easy","embarrassed","energetic","evil","exuberant","famous","fierce","foolish","frantic","funny","glamorous","good","grieving","handsome","helpful","homeless","hungry","important","innocent","jealous","joyous","elated","enchanting","enthusiastic","excited","fair","fancy","filthy","fragile","friendly","gentle","gleaming","gorgeous","grotesque","happy","helpless","homely","hurt","impossible","inquisitive","jittery","kind","lazy","lonely","lucky","modern","mushy","naughty","nutty","odd","outrageous","perfect","poised","precious","putrid","real","rich","shiny","sleepy","sore","spotless","stupid","light","long","magnificent","motionless","mysterious","nervous","obedient","old-fashioned","outstanding","plain","poor","prickly","puzzled","relieved","scary","shy","smiling","sparkling","stormy","successful","lively","lovely","misty","muddy","nasty","nice","obnoxious","open","panicky","pleasant","powerful","proud","quaint","repulsive","selfish","silly","smoggy","splendid","strange","super","talented","tender","thankful","tired","ugliest","unsightly","uptight","vivacious","wicked","witty","wrong","tame","tense","thoughtful","tough","ugly","unusual","vast","wandering","wide-eyed","worried","zany","tasty","terrible","thoughtless","troubled","uninterested","upset","victorious","weary","wild","worrisome","zealous"];
const subjects = ["battle","campaigning","clash","combat","competition","discord","fighting","rivalry","strife","struggle","war","arms","blows","contest","counterinsurgency","emulation","hostilities","strategy","striving","tug-of-war","armed struggle","military operation","passage of arms","competing","darting","dashing","flying","galloping","hurrying","running","rushing","sailing","sport","sporting","sprinting","tearing","track","trotting","attack","challenge","meet","protect","resist","altercate","assault","bicker","box","brawl","buck","contend","dispute","duel","feud","grapple","joust","oppugn","quarrel","repel","rowdy","scrap","scuffle","skirmish","spar","strive","tiff","tilt","traverse","tug","tussle","withstand","wrangle","wrestle","bandy with","bear arms","brush with","carry on war","cross swords","do battle","exchange blows","flare up","go to war","mix it up","ply weapons","take all comers","take the field","take up the gauntlet","wage war"];
const sequels = ["","2","3","4","II","IV","V","VI","VII","VIII","X","XL","XXL"];
const subtitles = ["","Revenge","Reforged","Remastered","Return","Legendary Edition","Game of the Year Edition"]

//Capitalize function
const capitalize = (s) => {
     if (typeof s !== 'string') return ''
     return s.charAt(0).toUpperCase() + s.slice(1)
}
//Randomizer functions for each element
const generateRandomAdjective = () => {
    randomIndex = Math.floor(Math.random() * adjectives.length);
    const adjective = adjectives[randomIndex];
    return capitalize(adjective);
}

const generateRandomSubject = () => {
    randomIndex = Math.floor(Math.random() * subjects.length);
    const subject = subjects[randomIndex];
    return capitalize(subject);
}

const generateRandomSequel = () => {
    randomIndex = Math.floor(Math.random() * sequels.length);
    const sequel = sequels[randomIndex];
    return sequel;
}

const generateRandomSubtitle = () => {
    randomIndex = Math.floor(Math.random() * subtitles.length);
    const subtitle = subtitles[randomIndex];
    return capitalize(subtitle);
}

//Joining function
const generateVideoGameTitle = () => {
    const adjective = generateRandomAdjective();
    const subject = generateRandomSubject();
    const sequel = generateRandomSequel();
    const subtitle = generateRandomSubtitle();
    const videoGameTitle = `${adjective} ${subject} ${sequel}: ${subtitle}`
    return videoGameTitle;
}

//Log result
console.log(generateVideoGameTitle());