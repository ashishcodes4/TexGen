const express    = require('express');
const app        = express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const port       = 5000;
const cors          = require('cors')

app.use(cors());


//Body-parser setup...
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Config DB...
const db = require('./config/keys.js').mongoURI;

//DB initialise...
mongoose.connect(db)
    .then(()=> console.log('mongoDB connected'))
    .catch(err => console.log(err));


//passport middleware
// app.use(passport.initialize());

//passport config
// require('./config/passport')(passport);

//Route Setup....
const user = require('./routes/api/user');
const problem = require('./routes/api/problem');

//Route Initalisation...
app.use('/api/user', user);
app.use('/api/problem', problem);


app.get('/', (req, res) => {
    res.json({msg: "root route is working"});
})





//START THE SERVER, PLEASE DON'T CHANGE ANYTHING BELOW THIS LINE, (@ashish)

app.listen(port, ()=> {
    console.log(`server SWAGGING it up from port: ${port}` )
})