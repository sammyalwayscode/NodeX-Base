const http = require("http");
const PORT = 2022;

const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("Server is Up and runing 😏😏");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listing to PORT:${PORT}`);
});
