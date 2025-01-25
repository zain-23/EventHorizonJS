const buffer = Buffer.from("Zain"); // convert string to buffer
buffer.write("ad");
console.log(buffer.toJSON());
console.log(buffer.toString());
