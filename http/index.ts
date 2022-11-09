import http, { IncomingMessage, ServerResponse } from "http";
const PORT: number = 2022;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>): void => {
    res.writeHead(200);
    res.write("My eye have seen Shege🙈🙈");
    res.end();
  }
);

server.listen(PORT, () => {
  console.log("Server Is Listening");
});
