import http from "http";
const PORT = 2200;

const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("This is Your Server");
  res.end();
});

app.listen(PORT, () => {
  console.log("Server listening");
});
