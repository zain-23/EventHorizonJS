const fs = require("fs");

console.log("First");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log({ fileContent });

console.log("Second");
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log({ err });
  } else {
    console.log({ data });
  }
});

console.log("Third");

fs.writeFile("./file.txt", " Hello World", { flag: "a" }, (err, data) => {
  if (err) {
    console.log({ err });
  }
});
