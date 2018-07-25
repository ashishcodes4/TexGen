const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const port = process.env.IP || 5000;
const cors = require('cors');

//Route Setup....
const user = require('./routes/api/user');
const product = require('./routes/api/product');

//App middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', user);
app.use('/api/product', product);

//Config DB...
const db = require('./config/keys.js').mongoURI;

//DB initialise...
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

//Route Initalisation...
app.get('/', (req, res) => {
  res.json({ msg: 'root route is working' });
});

//START THE SERVER, PLEASE DON'T CHANGE ANYTHING BELOW THIS LINE, (@ashish)

app.listen(port, () => {
  console.log(`server SWAGGING it up from port: ${port}`);
});
