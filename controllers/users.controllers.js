const mssql = require('mssql');

exports.getAllUsers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM ADUSERS`;
    request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};

exports.getUser = (req, res) =>
{
     // Validate request
     console.log(`Fetching RESPONSE`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
     const queryStr = `SELECT USERCODE, PASSWORD, FIRSTNAME, LASTNAME, USERCLASS, CONTACTNO, EMPNO FROM ADUSERS WHERE USERCODE = '${req.params.username}';`;
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};

exports.getUserRoles = (req, res) =>
{
     // Validate request
     console.log(`Fetching RESPONSE`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
     const queryStr = `SELECT * FROM ADMODULE_ACCESS_CONTROL WHERE ROLE_ID = '${req.params.userClass}';`;
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};

exports.addNewUser = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
     const queryStr = `INSERT INTO ADUSERS (USERCODE, PASSWORD, LANGUAGE, USERCLASS, FIRSTNAME, LASTNAME, CONTACTNO, USERID) VALUES ('${req.body.usercode}', '${req.body.password}', 'EN', '0', '${req.body.firstname}', '${req.body.lastname}', '${req.body.contactno}', 100);`;
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};


exports.updateUserPassword = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
     const queryStr = `UPDATE ADUSERS SET PASSWORD = '${req.body.password}' WHERE USERCODE = '${req.body.usercode}';`;
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};



//GET MEMBER DETAILS FOR LOGIN
exports.getMemberdetails = (req, res) =>
{
     // Validate request
     console.log(`Fetching RESPONSE`);
     // create Request object
     var request = new mssql.Request();

     // query to the database and get the records
     const queryStr = `SELECT MemberNo,CPRNo,ACCODE,NAME,TELOFF FROM Members WHERE MemberNo = '${req.params.memberno}';`;
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};


//GET SUB MEMBER DETAILS  FROM PRIMARY MEMBER
exports.getSubMemberdetails = (req, res) =>
{
     // Validate request
     console.log(`Fetching RESPONSE`);
     // create Request object
     var request = new mssql.Request();

     
     // query to the database and get the records
     const queryStr = `select TITLE,NAME,BIRTHDT,TELOFF,Email,RELATION from members where PRIMARYMEMBER='${req.params.memberno}'`;
     request.query(queryStr, function (err, recordset) {
        if(err)
        {
            console.log(error);
        }
        else
        {
            if (recordset.recordset.toString() == '')
            {
                console.log("Data for your request is empty");
            }
            res.send(recordset);
        }
    });
};
