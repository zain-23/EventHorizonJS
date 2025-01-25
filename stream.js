const fs = require("fs");

const readableStream = fs.createReadStream("example.md", {
  highWaterMark: 8,
  encoding: "utf-8",
});
const writableStream = fs.createWriteStream("example2.md");

readableStream.pipe(writableStream);
