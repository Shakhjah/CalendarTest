require('dotenv').config(); 


const express = require('express');

const app = express();
const path = require('path'); 
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session); 

// Внутренние импорты
const { sequelize } = require('../db/models/');
const renderTemplate = require('./lib/RenderTemplate');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(session({
  name: 'calencookie',
  store: new FileStore(),
  secret: process.env.SECRET || 'calendar',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

const Event = require('./routes/Event');

app.use('/', Event);


const { SESSION_SECRET } = process.env;
const { PORT } = process.env;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
