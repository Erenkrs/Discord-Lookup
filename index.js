const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios'); 

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('main', { repositories: null });
});

app.post('/', async (req, res) => {
  const userId = req.body.userId;
  try {
      const response = await axios.get(`https://discordlookup.mesavirep.xyz/v1/user/${userId}`);
      res.render('main', { repositories: response.data });
  } catch (error) {
      console.error('Error fetching data from Discord Lookup API:', error.message);
      res.render('main', { repositories: null });
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda dinleniyor`);
});
