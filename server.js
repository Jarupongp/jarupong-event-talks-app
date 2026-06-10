
const http = require('http');
const fs = require('fs');
const path = require('path');

const talks = [
    {
        time: '10:00 AM - 11:00 AM',
        title: 'The Future of JavaScript Frameworks',
        speakers: ['Jane Doe'],
        categories: ['javascript', 'frontend', 'webdev'],
        duration: '1 hour',
        description: 'A deep dive into the trends and future of modern JavaScript frameworks like React, Vue, and Svelte.'
    },
    {
        time: '11:10 AM - 12:10 PM',
        title: 'Scalable Backend APIs with Node.js',
        speakers: ['John Smith'],
        categories: ['nodejs', 'backend', 'api'],
        duration: '1 hour',
        description: 'Learn how to build robust and scalable backend APIs using Node.js and best practices for performance and security.'
    },
    {
        time: '12:20 PM - 01:20 PM',
        title: 'Mastering CSS Grid and Flexbox',
        speakers: ['Emily White', 'Chris Green'],
        categories: ['css', 'frontend', 'design'],
        duration: '1 hour',
        description: 'Unlock the full potential of modern CSS layouts with a comprehensive guide to CSS Grid and Flexbox.'
    },
    {
        time: '01:20 PM - 02:20 PM',
        isBreak: true,
        title: 'Lunch Break',
    },
    {
        time: '02:20 PM - 03:20 PM',
        title: 'Introduction to Machine Learning with Python',
        speakers: ['Alex Johnson'],
        categories: ['python', 'ai', 'machine-learning'],
        duration: '1 hour',
        description: 'A beginner-friendly introduction to the world of machine learning using Python and popular libraries like Scikit-learn.'
    },
    {
        time: '03:30 PM - 04:30 PM',
        title: 'DevOps for Developers: CI/CD Pipelines',
        speakers: ['Maria Garcia'],
        categories: ['devops', 'ci-cd', 'cloud'],
        duration: '1 hour',
        description: 'Understand the fundamentals of DevOps and learn how to build automated CI/CD pipelines for your applications.'
    },
    {
        time: '04:40 PM - 05:40 PM',
        title: 'The Art of Debugging',
        speakers: ['David Lee'],
        categories: ['debugging', 'tools', 'productivity'],
        duration: '1 hour',
        description: 'Effective strategies and tools for debugging code efficiently and reducing time spent on fixing bugs.'
    }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let filePath;
        if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
        } else if (req.url === '/api/talks') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(talks));
            return;
        } else {
            filePath = path.join(__dirname, 'public', req.url);
        }

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 Not Found</h1>');
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to quit.');
});
