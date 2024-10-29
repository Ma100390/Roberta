const express = require('express');
const path = require('path');
const app = express();

// Servire i file statici dall'app Angular buildata
app.use(express.static(path.join(__dirname, 'dist//browser/app2')));

// Gestire tutte le richieste in modo che vengano servite dall'app Angular
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/app2/browser/index.html'));
});

// Porta per Heroku
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
