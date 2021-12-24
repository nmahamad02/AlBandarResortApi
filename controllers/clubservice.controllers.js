const mssql = require('mssql');

exports.geTBoatDocNO = (req, res) => 
{
// Validate request
console.log(`Fetching RESPONSE`);
// create Request object
var request = new mssql.Request();
// query to the database and get the records
const queryStr = `SELECT * FROM DOC WHERE CYEAR='${req.params.year}' AND FIELD_NAME ='BOAT_NO'`; 
request.query(queryStr, function (err, recordset) {
if (err) console.log(err)
else {
if (recordset.recordset.toString() === '') {
    res.send('Oops!!! Required data not found...');
}
else {
    // send records as a response
    res.send(recordset);
}
};
});
};

exports.updateBoatNodoc = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `UPDATE DOC SET FIELD_VALUE_NM = ${req.body.newVal} WHERE CYEAR='${req.body.year}' AND FIELD_NAME ='BOAT_NO'`; 
    console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.SearchBoatMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM BOATMASTER WHERE BoatNo LIKE '${req.params.boatmasterid}%'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };  
    });
};

exports.getBoatMasterForMembers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM BOATMASTER WHERE MemberCode = '${req.params.membercode}'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };  
    });
};

exports.getBoatType = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT REC_ID,NAME FROM REFERENCE WHERE TYPE = 'BOAT'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };  
    });
};


exports.getexportBoatmaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select b.BoatNo,b.BoatName,b.MemberCode,m.name,b.RegistrationNo,b.SailingLicenseExpiryDate,b.RegExpiry,b.LicenseExpiryDate,b.InsuranceNo,b.InsuranceExpDate from BOATMASTER b,members m where b.membercode=m.MemberNo`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };
    });
};



exports.getBoatMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM BOATMASTER WHERE BoatNo = '${req.params.boatmasterid}'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };
    });
};

exports.getAllBoatMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM BOATMASTER`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };
    });
};

exports.getMaxofServiceid = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT MAX(ServiceID + 1) as serviceid FROM ServiceMaster`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            if (recordset.recordset.toString() === '') {
                res.send('Oops!!! Required data not found...');
            }
            else {
                // send records as a response
                res.send(recordset);
            }
        };
    });
};

exports.postBoatMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO BOATMASTER (MemberCode, BoatType, RegistrationNo, BoatColor, BoatEngineType, ModelNo, 
            BoatEngineNo, HostPower, SailingLicenseExpiryDate, RegExpiry, CreatedDate, CreatedBy, 
            BoatName, InsuranceNo, InsuranceExpDate, JetSkiRegNo, JetSkiExpDate, BoatNo, LicenseExpiryDate,boatlength,boatslot) VALUES ( 
            ${req.body.membercode}, ${req.body.boattype}, '${req.body.regno}', '${req.body.boatcolor}', '${req.body.boatenginetype}', '${req.body.modelno}', 
            '${req.body.boatenggineno}', '${req.body.hostpower}', CONVERT(DATETIME,'${req.body.sallexpirydate}',105), CONVERT(DATETIME,'${req.body.regexpiry}',105), 
            CONVERT(DATETIME,'${req.body.createdate}',105), 0,'${req.body.boatname}', '${req.body.insurenceno}', CONVERT(DATETIME,'${req.body.insurenceexpdate}',105),
             '${req.body.jetskipregno}', CONVERT(DATETIME,'${req.body.jetskiexpdate}',105), '${req.body.boatno}', CONVERT(DATETIME,'${req.body.linexpdate}',105),'${req.body.boatlength}','${req.body.boatslot}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postServiceMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO ServiceMaster(ServiceType,ServiceName,ServiceDescription,ActualPrice ,DiscountPrice,MemberPrice,
            CreatedDate,CreatedBy,ServiceCategory,TaxCategory,DEPT_ID,EXP_ID,PCODE) values (
                'R','${req.body.servicename}','${req.body.servicedesc}',${req.body.actualprice} ,${req.body.discountprice},${req.body.memberprice},
                CONVERT(DATETIME,'${req.body.createddate}',105),${req.body.createdby},${req.body.servicecategory},${req.body.taxcategory},${req.body.deptid},${req.body.expid},'${req.body.pcode}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.updateBoatMaster = (req, res) => {
    // Validate request
    console.log(`INSERTING RECORD ${req.body}`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `UPDATE BOATMASTER SET MemberCode = ${req.body.membercode}, BoatType = ${req.body.boattype}, RegistrationNo = '${req.body.regno}' ,
    BoatColor = '${req.body.boatcolor}' , BoatEngineType = ${req.body.boatenginetype}, ModelNo = '${req.body.modelno}', 
    BoatEngineNo = ${req.body.boatengineno}, HostPower = ${req.body.hostpower}, SailingLicenseExpiryDate = CONVERT(DATETIME,'${req.body.sailexpdate}',105),
    RegExpiry = CONVERT(DATETIME,'${req.body.regexpiry}',105) ,updatedDate = CONVERT(DATETIME,'${req.body.uppdatedate}',105),
    BoatName = '${req.body.boatname}', InsuranceNo = '${req.body.insurenceno}' , InsuranceExpDate = CONVERT(DATETIME,'${req.body.insurenceexpdate}',105) , 
    JetSkiRegNo = '${req.body.jetskipregno}' , JetSkiExpDate = CONVERT(DATETIME,'${req.body.jetskiexpdate}',105), 
    LicenseExpiryDate = CONVERT(DATETIME,'${req.body.linexpdate}',105),boatlength = '${req.body.boatlength}',boatslot = '${req.body.boatslot}'  WHERE BoatNo = '${req.body.boatno}';`;
    
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
           res.send(recordset);
        };
   });
}

exports.updateServiceMaster = (req, res) => {
    console.log(`INSERTING RECORD ${req.body}`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `UPDATE ServiceMaster SET ServiceName = '${req.body.serivcename}' , ServiceDescription = '${req.body.servicedesc}' ,
    ActualPrice = ${req.body.actualprice} ,DiscountPrice = ${req.body.discountprice} , MemberPrice = ${req.body.memberprice},
    UpdatedDate = CONVERT(DATETIME,'${req.body.updatedate}',105) , UpdatedBy = ${req.body.updatedby} , ServiceCategory = ${req.body.servicecategory}, 
    TaxCategory = ${req.body.taxcategory}, DEPT_ID = ${req.body.deptid}, EXP_ID = ${req.body.expid}, PCODE = '${req.body.pcode}' WHERE ServiceID = '${req.body.serviceid}';`;
    
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
           res.send(recordset);
        };
   });
}