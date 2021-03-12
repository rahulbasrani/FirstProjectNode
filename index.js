const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {;
    let filename;

    switch(req.url) {
        case '/':
            filename = 'index.html';
            break;
        case '/about':
            filename = 'about.html';
            break;
        case '/contact-me':
            filename = 'contact-me.html';
            break;
        default:
            filename = '404.html';
            break;
    }

    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(PORT, () => console.log(`Server is running on port ${PORT}`));