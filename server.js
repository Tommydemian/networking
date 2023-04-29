const http = require('http');
const port = 5677;
const hostname = '127.0.0.1';

function logHello() {
    console.log('hello');
}

const app = http.createServer((req, res) => {    
  const data = {message:  'Hi there!'};  

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Connection', 'close');
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

app.listen(port, "127.0.0.1", () => {
    console.log(`server running on http://${hostname}:${port}`);
});
