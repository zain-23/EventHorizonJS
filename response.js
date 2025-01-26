const http = require("http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Clark",
    lastName: "Kent",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
