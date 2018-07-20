const express    = require('express');
const app        = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port       = 5000;
const cors          = require('cors')

app.use(cors());


//Body-parser setup...
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Route Setup....
const user = require('./routes/api/user');
const problem = require('./routes/api/problem');

//Route Initalisation...
app.use('/api/user', user);
app.use('/api/problem', problem);


app.get('/', (req, res) => {
    res.json({msg: "root route is working"});
})


app.listen(port, ()=> {
    console.log(`server SWAGGING it up from port: ${port}` )
})