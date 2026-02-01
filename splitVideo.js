
// const ffmpeg = require("fluent-ffmpeg");
// const path = require("path");
// const fs = require("fs");

// // Paths
// const inputVideo = path.join(__dirname, "public/videos/full.mp4");
// const outputFolder = path.join(__dirname, "public/videos");

// // Ensure output folder exists
// if (!fs.existsSync(outputFolder)) {
//   fs.mkdirSync(outputFolder, { recursive: true });
// }

// // Your clip timings
// const clips = [
//   ["00:00", "00:54"],//vid1
//   ["00:54", "02:06"],//vid2
//   ["02:07", "03:08"],//vid3
//   ["03:10", "04:10"],//vid4
//   ["04:12", "05:01"],//vid5
//   ["05:03", "05:53"],//vid6
//   ["05:55", "06:44"],//vid7
//   ["06:44", "07:43"],//vid8
//   ["07:46", "08:41"],//vid9
//   ["08:41", "09:21"],//vid10
//   ["09:22", "10:05"],//vid11
//   ["10:06", "10:49"],//vid12
//   ["11:30", "12:22"],//viid19
//   ["12:23", "13:17"],//viid20
//   ["13:18", "14:06"],//viid21
//   ["14:07", "14:47"],//viid22
//   ["14:48", "15:20"],//viid23
//   ["15:20", "15:43"],//viid24
//   ["15:45", "16:30"],//viid25
//   ["16:31", "17:17"],//viid26
//   ["17:17", "18:24"],//viid27
//   ["18:24", "19:07"],//viid28
//   ["19:13", "20:02"],//viid32
//   ["20:02", "20:52"],//viid33
//   ["20:52", "21:42"],//viid34
//   ["21:43", "22:36"],//viid35
//   ["22:37", "23:28"],//viid36
//   ["23:30", "24:19"],//viid37
//   ["24:21", "25:00"],//viid38
//   ["25:01", "25:40"],//viid39
//   ["25:40", "26:17"],//viid40
//   ["26:18", "26:50"],//viid41
//   ["26:51", "27:25"],//viid42
//   ["27:25", "27:52"],//viid43.
//   ["27:54", "28:37"],//viid44.
//   ["28:39", "29:07"],//viid45.





//   // intro
//   ["30:40", "31:39"],


// ];

// // Convert MM:SS → seconds
// const toSeconds = (time) => {
//   const [m, s] = time.split(":").map(Number);
//   return m * 60 + s;
// };

// // Process clips
// clips.forEach(([startTime, endTime], index) => {
//   const start = toSeconds(startTime);
//   const end = toSeconds(endTime);
//   const duration = end - start;

//   const outputPath = path.join(
//     outputFolder,
//     `vid${index + 1}.mp4`
//   );

//   ffmpeg(inputVideo)
//     .setStartTime(start)
//     .setDuration(duration)
//     .outputOptions("-c copy") // fast & no quality loss
//     .output(outputPath)
//     .on("start", () =>
//       console.log(`▶ vid${index + 1} started`)
//     )
//     .on("end", () =>
//       console.log(`✅ vid${index + 1} finished`)
//     )
//     .on("error", (err) =>
//       console.error(`❌ vid${index + 1}:`, err.message)
//     )
//     .run();
// });



const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");

// Paths
const inputVideo = path.join(__dirname, "public/videos/full.mp4");
const outputFolder = path.join(__dirname, "public/videos");

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Clip definitions (WITH NAMES)
const clips = [
  { name: "vid1", start: "00:00", end: "00:54" },
  { name: "vid2", start: "00:54", end: "02:06" },
  { name: "vid3", start: "02:07", end: "03:08" },
  { name: "vid4", start: "03:10", end: "04:10" },
  { name: "vid5", start: "04:12", end: "05:01" },
  { name: "vid6", start: "05:03", end: "05:53" },
  { name: "vid7", start: "05:55", end: "06:44" },
  { name: "vid8", start: "06:44", end: "07:43" },
  { name: "vid9", start: "07:46", end: "08:41" },
  { name: "vid10", start: "08:41", end: "09:21" },
  { name: "vid11", start: "09:22", end: "10:05" },
  { name: "vid12", start: "10:06", end: "10:49" },

  { name: "vid19", start: "11:30", end: "12:22" },
  { name: "vid20", start: "12:23", end: "13:17" },
  { name: "vid21", start: "13:18", end: "14:06" },
  { name: "vid22", start: "14:07", end: "14:47" },
  { name: "vid23", start: "14:48", end: "15:20" },
  { name: "vid24", start: "15:20", end: "15:43" },
  { name: "vid25", start: "15:45", end: "16:30" },
  { name: "vid26", start: "16:31", end: "17:17" },
  { name: "vid27", start: "17:17", end: "18:24" },
  { name: "vid28", start: "18:24", end: "19:07" },

  { name: "vid32", start: "19:13", end: "20:02" },
  { name: "vid33", start: "20:02", end: "20:52" },
  { name: "vid34", start: "20:52", end: "21:42" },
  { name: "vid35", start: "21:43", end: "22:36" },
  { name: "vid36", start: "22:37", end: "23:28" },
  { name: "vid37", start: "23:30", end: "24:19" },
  { name: "vid38", start: "24:21", end: "25:00" },
  { name: "vid39", start: "25:01", end: "25:40" },
  { name: "vid40", start: "25:40", end: "26:17" },
  { name: "vid41", start: "26:18", end: "26:50" },
  { name: "vid42", start: "26:51", end: "27:25" },
  { name: "vid43", start: "27:25", end: "27:52" },
  { name: "vid44", start: "27:54", end: "28:37" },
  { name: "vid45", start: "28:39", end: "29:07" },

  { name: "intro", start: "30:40", end: "31:39" },
];

// Convert MM:SS → seconds
const toSeconds = (time) => {
  const [m, s] = time.split(":").map(Number);
  return m * 60 + s;
};

// Process clips
clips.forEach(({ name, start, end }) => {
  const startSec = toSeconds(start);
  const endSec = toSeconds(end);
  const duration = endSec - startSec;

  const outputPath = path.join(outputFolder, `${name}.mp4`);

  ffmpeg(inputVideo)
    .setStartTime(startSec)
    .setDuration(duration)
    .outputOptions("-c copy") // fast, no re-encode
    .output(outputPath)
    .on("start", () => console.log(`▶ ${name} started`))
    .on("end", () => console.log(`✅ ${name} finished`))
    .on("error", (err) =>
      console.error(`❌ ${name}:`, err.message)
    )
    .run();
});

