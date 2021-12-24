const express = require('express');
const morgan = require('morgan') ;
const mssql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    'user': 'sa',
    'password': 'password8189',
    'server': '172.31.45.10',
    'port': 1433,
    'database': 'Albander',
    'dialect': 'mssql',
    'options': {
        'encrypt': true,
        'enableArithAbort': true,
        'trustServerCertificate': true
    },
    'dialectOptions': {
        'instanceName': 'EC2AMAZ-JKMTV58\SQLEXPRESS'
    }
};
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('short'));
/*app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});*/
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Length, Content-Type, Accept, Authorization");
    next();
});
//app.use(cors({origin: 'http://localhost:4200'}));

mssql.connect(config).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to application."});
});

require('./routes/clubservice.routes.js')(app);
require('./routes/users.routes.js')(app);
require('./routes/lookup.routes.js')(app);
require('./routes/crm.routes.js')(app);
require('./routes/finance.routes.js')(app);

//ENVIRONMENT VARIABLE
//const port = process.env.PORT || 5001;
//app.listen(port, () => console.log(`listening on port ${port}…`));

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});