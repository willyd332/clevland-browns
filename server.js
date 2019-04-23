const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
require('./db/db')


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(session({
  secret: '123456789abcdefg',
  resave: false,
  saveUninitialized: false
}))


app.listen(3000, () => {
  console.log('listening... on port: ', 3000);
});
