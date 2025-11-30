import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Disable Express redirect behavior
app.set('strict routing', true);

// Handle specific routes BEFORE static middleware
app.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/blogs/index.html'));
});

app.get('/blog/home-blood-test-services-in-delhi', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/blog/home-blood-test-services-in-delhi/index.html'));
});

app.get('/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/policy/index.html'));
});

// Serve static files AFTER specific routes
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});