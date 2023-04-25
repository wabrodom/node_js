const port = process.argv[2] || process.env.PORT || 3000;
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url.includes("favicon.ico")) {
      res.statusCode = 404;
      res.end("not found");
      return;
    }
    console.log(req.url);
    const theUrl =
      req.url
        .replace(/[^\w.,-]/g, " ")
        .replace(/\s+/g, " ")
        .trim() || "world";

    res.statusCode = 200;
    res.setHeader("Conten-Type", "text/html");
    res.end(`<p>Hello ${upperFirstLetter(theUrl)}</p>`);
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}/`);

function upperFirstLetter(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// just comment nothing more
