const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) => {
  const username = req.body.username;
  const useremail = req.body.useremail;
  res.render('result', { name: username, email: useremail });
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
