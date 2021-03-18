const fs = require("fs");

// Reading File Synchronously.
// requires two parameters
// fs.readFileSync(filename, formate)
const txt = fs.readFileSync("data.txt", "utf-8");

// readFile() - Async method
// requires three parameters.
// (filename, formate, callback_function)
// callback_function receives two parameters error and data
fs.readFile("data.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log(txt);
