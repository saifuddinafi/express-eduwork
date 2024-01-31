const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Selamat datang di halaman utama!');
});

app.get('/json', (req, res) => {
    const jsonData = { message: 'Ini halaman JSON' };
    res.json(jsonData);
});

app.get('/html', (req, res) => {
    const htmlContent = '<h1>Ini halaman HTML</h1>';
    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
