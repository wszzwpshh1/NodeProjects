//Create Buffer from a given array
var tmp1 = new Buffer([16, 32, 48, 64, 80]);
//Create Buffer from a given string and optionally encoding type
var tmp2 = new Buffer("A Simply Buffer", "utf-8");
//Create an uninitiated Buffer of 19 octets
var buf = new Buffer(19);
console.log(tmp1);
console.log(tmp2);
console.log(buf);

var len = buf.write("Something to write.");
console.log("Octets written: " + len);
console.log("Read from buffer: " + buf.toString());
console.log(tmp2.toJSON(buf));

var charTable = new Buffer(26);
for(var i=0; i<charTable.length</charTable>; i++) {
  charTable[i] = i + 97;
}
console.log("ascii: " + charTable.toString("ascii"));
console.log("ascii (0-5): " + charTable.toString("ascii", 0, 5));
console.log("utf-8 (5-26): " + charTable.toString("utf-8", 5, 26));
console.log("undefined: " + charTable.toString(undefined, 0, 5));
