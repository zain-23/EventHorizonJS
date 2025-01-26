const crypto = require("crypto");

// Sync version
// const start = Date.now();
// crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
// console.log("1:", Date.now() - start);

// Async version
const MAX_CALLS = 10;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1}`, Date.now() - start);
  });
}
