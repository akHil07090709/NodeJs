// importing fs module
const fs = require("fs");
// fs module has many methods.
// readFileSynch - reading file.
// fs.readFileSync("file-path/file-name.extension",'file-format')
const txt = fs.readFileSync("data.txt", "utf-8");
console.log(txt);

const greeting = "Welcome to my Git Repo...";

console.log(greeting);
