const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    setTimeout(() => {
        if (req.method === 'GET' && req.url === '/userinfo') {
            const userInfo = {
                cpu: os.cpus(),
                os: os.platform(),
                };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(userInfo));
        } else {
           
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }, Math.random() * 2000); 
});


const PORT = 3000;
const HOST = '127.0.0.1';
server.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}/`);
});

/* Line 5 : Create HTTP server
Line 6 : Enable CORS
Line 9: Simulating asynchronous operation with random delay
Line 10 : Handling GET request
Line 18 : Handle other routes
Line 22 : Random delay between 0 to 2000 ms
Line 25:  Start the server
*/
