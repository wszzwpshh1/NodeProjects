var fs = require("fs");

console.log("Read file sync.");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Sync End");

console.log("\nRead file async");
fs.readFile("input.txt", function(err, data){
  if(err)
    console.error(err);
  else
    console.log(data.toString());
});

console.log("Async End.");
