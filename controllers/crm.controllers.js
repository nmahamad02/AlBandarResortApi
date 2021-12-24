const mssql = require('mssql');

exports.getCoa = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM VWCOA WHERE FYEAR = '${req.params.fyear}' order by glcode;`;
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

exports.getmaingrp = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT DISTINCT MAINGRPCODE, MAINGRPNAME FROM VWCOA WHERE FYEAR = '${req.params.fyear}' AND MAINGRPCODE <> ' ' ORDER BY MAINGRPCODE;`;
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

exports.getsubgrp = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT DISTINCT SUBGRPCODE, SUBGRPNAME FROM VWCOA WHERE MAINGRPCODE = '${req.params.maingrp}' AND FYEAR = '${req.params.fyear}' ORDER BY SUBGRPCODE;`;
    console.log(queryStr);
    console.log(req.params);
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


exports.getglcode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT DISTINCT GLCODE, GLNAME FROM VWCOA WHERE SUBGRPCODE = '${req.params.subgrp}' AND FYEAR = '${req.params.fyear}' ORDER BY GLCODE;`;
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

exports.getpcode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT PCODE, CUST_NAME FROM VWCOA WHERE GLCODE = '${req.params.glcode}' AND FYEAR = '${req.params.fyear}' ORDER BY PCODE;`;
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




exports.postGlcode = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO GLCODE (GLCODE,GLNAME,SUBGROUP,PL_BS,PL_BS_CODE,COMP_CODE,CREATEDUSER,CREATEDT) VALUES ('${req.body.glcode}', '${req.body.glname}', '${req.body.subgroup}', '${req.body.pl_bs}','${req.body.pl_bs_code}','${req.body.comp_code}','${req.body.createuser}','${req.body.createdt};`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send("New user created successfully!");
         };
    });
};


exports.getAccountCode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM VWOPBAL WHERE PCODE = '${req.params.pcode}' AND FYEAR = '${req.params.fyear}';`;
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


exports.getCustomerAcc = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM VWOPBAL WHERE FYEAR = '${req.params.fyear}' AND TYPE = 'C';`;
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

exports.getOpbalall = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from vwOPBAL where PCODE = '${req.params.pcode}' AND FYEAR = '${req.params.fyear}'  `;
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

exports.searchByOPBal = (req, res) => 
{
    // Validate request
     console.log(`Fetching RESPONSE`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
     const queryStr = `SELECT * FROM vwOPBAL WHERE PCODE LIKE '%${req.params.pcode}%' AND FYEAR = '${req.params.year}' ORDER BY PCODE;`;
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
             if (recordset.recordset.toString() == '') {
                 res.send('Oops!!! SHELFS from given RACK in LOCATIONID not found...');
             }
             else {
                 // Send records as response
                 res.send(recordset);
             }
         };
     });
}

exports.getCustomerOpeningDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT CASE WHEN ISNULL(O.INV_NO,'')=ISNULL(O.REFNO,'') THEN '' ELSE ISNULL(O.INV_NO,'') END INV_NO,
    CASE WHEN ISNULL(O.INV_NO,'')=ISNULL(O.REFNO,'') THEN NULL ELSE INV_DATE END INV_DATE, 
    CASE WHEN ISNULL(O.INV_NO,'')=ISNULL(O.REFNO,'') THEN NULL ELSE INV_AMOUNT END INV_AMOUNT,
    ISNULL(O.REFNO,'') REFNO, O.REFDT, O.REFAMOUNT, ISNULL(O.DESCRIPTION,'') DESCRIPTION 
    FROM OUTSTANDING O WHERE O.CUST_CODE='${req.params.pcode}' AND (O.INV_DATE<'${req.params.sfyear}' OR O.REFDT<'${req.params.efyear}');`;
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


exports.getAllMembers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members order by MemberNo;`;
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

exports.getAllMembersIsPrimary = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM Members where ISPRIMARY = 'Y'`;
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

exports.getmembers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE REFMEMBNO = '${req.params.MemberNo}';`;
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

exports.searchmembers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE MemberNo LIKE '${req.params.MemberNo}%';`;
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

exports.getDependentMembers = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE PRIMARYMEMBER = '${req.params.memberNo}';`;
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
}

exports.getmembersNameLike = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE name like '${req.params.name}%' OR SURNAME like '${req.params.name}%';`;
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

exports.searchMemberFromCPR = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE CPRNO LIKE '${req.params.cprNbr}%';`;
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
}

exports.searchMemberFromREF = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE REFMEMBNO LIKE '${req.params.refNbr}%';`;
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
}

exports.getMemberFromCPR = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE CPRNO = '${req.params.cprNbr}';`;
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
}

exports.deleteMember = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `DELETE FROM members WHERE MemberNo = '${req.params.memberNo}';`;
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
}

exports.deleteDepMember = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `DELETE FROM members WHERE PRIMARYMEMBER = '${req.params.memberNo}';`;
    console.log(queryStr);
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
}

exports.searchTranHead = (req, res) =>
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM vwTranHead WHERE TRN_NO = '${req.params.trnno}' AND YEAR = '${req.params.year}';`;
    console.log(queryStr)
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



exports.getTranHead = (req, res) =>
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM vwTranHead WHERE TRN_NO LIKE '${req.params.trnno}%' AND YEAR = '${req.params.year}';`;
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

exports.getReceiptCustomer = (req, res) =>
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT S.VCR_NO,S.VCR_DATE,S.TRN_TYPE,S.ACCODE,ISNULL(O.CUST_NAME,'') ACCNAME, ISNULL(O.TYPE,'G') ACC_TYPE, 
    S.ENTRY_TP,S.AMOUNT,ISNULL(S.GLDB_BAL,0) GLDB_BAL,ISNULL(S.GLCR_BAL,0) GLCR_BAL,ISNULL(S.REMARKS,'') REMARKS, 
    ISNULL((SELECT SUM(B.REFAMOUNT) FROM OUTSTANDING B WHERE B.COMPCODE=S.COMP_CODE AND B.CUST_CODE=S.ACCODE AND B.REFNO=S.VCR_NO AND NOT B.INV_NO=B.REFNO),0) ALLOCATED_AMOUNT 
    FROM SGLDATA_TEMP S LEFT OUTER JOIN OPBAL O
    ON O.COMP_CODE=S.COMP_CODE AND O.FYEAR=S.YEAR AND O.PCODE=S.ACCODE 
    WHERE S.COMP_CODE='01' AND S.YEAR='${req.params.year}' AND S.DB_CD IN ('RVC','POS') AND S.TRN_TYPE='REC' AND S.VCR_NO='${req.params.vcrno}' AND S.HEADER='N' AND ENTRY_TP = 'C'`;
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

exports.getMemberFromREF = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE REFMEMBNO = '${req.params.refNbr}';`;
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
}

exports.updateMember = (req, res) => {
    // Validate request
    console.log(`INSERTING RECORD ${req.body}`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `UPDATE Members SET REFMEMBNO = '${req.body.refmembno}', TITLE = '${req.body.title}', NAME = '${req.body.firstName}', SURNAME = '${req.body.surName}', MEMBTYPE = '${req.body.memberType}', BIRTHDT = CONVERT(DATETIME,'${req.body.birthDate}',105), MARITAL = '${req.body.maritalStatus}', ADD1 = '${req.body.add1}', ADD2 = '${req.body.add2}', ADD3 = '${req.body.add3}', NATION = '${req.body.nationality}', TELOFF = '${req.body.telOff}', TELRES = '${req.body.telRes}', FAXNO = '${req.body.faxNbr}', EMPLOYER = '${req.body.employer}', POSITION = '${req.body.position}', Email = '${req.body.email}', InsuranceNo = '${req.body.insuranceNbr}', CPRNo = '${req.body.cprNbr}', RELATION = '${req.body.relation}', ISPRIMARY = '${req.body.isPrimary}', IMAGENAME = '${req.body.image}', PRIMARYMEMBER = '${req.body.primaryMember}', ACCODE = '${req.body.accode}'
     WHERE MemberNo = '${req.body.memberNo}';`;
    
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
           res.send(recordset);
        };
   });
}

exports.postMember = (req, res) => {
    // Validate request
    console.log(`INSERTING RECORD ${req.body}`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `INSERT INTO MEMBERS (MemberNo, REFMEMBNO, TITLE, NAME, SURNAME, MEMBTYPE, BIRTHDT, MARITAL, ADD1, ADD2, ADD3, NATION, TELOFF, TELRES, FAXNO, EMPLOYER, POSITION, EMAIL, INSURANCENO, CPRNO, CREATEDDATE, RELATION, ISPRIMARY, IMAGENAME, PRIMARYMEMBER, ACCODE)
     VALUES ('${req.body.membno}','${req.body.refmembno}', '${req.body.title}', '${req.body.firstName}', '${req.body.surName}', '${req.body.memberType}', CONVERT(DATETIME,'${req.body.birthDate}',105), '${req.body.maritalStatus}', '${req.body.add1}', '${req.body.add2}', '${req.body.add3}', '${req.body.nationality}', '${req.body.telOff}', '${req.body.telRes}', '${req.body.faxNbr}', '${req.body.employer}', '${req.body.position}', '${req.body.email}', '${req.body.insuranceNbr}', '${req.body.cprNbr}', CONVERT(DATETIME,'${req.body.createdDate}',105), '${req.body.relation}', '${req.body.isPrimary}', '${req.body.image}', '${req.body.primaryMember}', '${req.body.accode}');`;
    
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
           res.send(recordset);
        };
   });
}

// get customer category Details
exports.getAccountsCategory = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT  * from ACCOUNT_CATEGORY`; 
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

// get customer Type Details
exports.getAccountsType = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from ACCOUNT_TYPE`; 
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

exports.getPcode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from OPBAL where PCODE like '${req.params.pcode}%' and FYEAR = '${req.params.year}';`; 
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

exports.getSearchPcode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from OPBAL where PCODE =  '${req.params.pcode}'`; 
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

exports.getPcodeFromName = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from OPBAL where CUST_NAME like '${req.params.name}%' and FYEAR = '${req.params.year}';`; 
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

exports.getSearchPcodeFromName = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from OPBAL where CUST_NAME =  '${req.params.name}' and FYEAR = '${req.params.year}'`; 
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


exports.getPaymentType = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT PMTTYPE, PMTNAME, PCODE FROM PMTTYPE WHERE PMTNAME NOT IN ('DISCOUNT','TAX') ORDER BY PMTTYPE`; 
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

exports.getAllBank = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT BANK_ID, BANK_CD, BANK_NAME, ACTIVE FROM vwBankMaster ORDER BY BANK_NAME`; 
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


exports.getSoDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT SD.ITCODE, P.NAME ITDESC, SD.DESCRIPTION,
    SD.TOTQTY, SD.PRICE, SD.TOTQTY*SD.PRICE QUANTITYAMOUNT, ISNULL(SD.DISPER,0) DISCRATE, ISNULL(SD.DISAMT,0) TOTALDISC, 
    SD.AMOUNT NETAMOUNT, ISNULL(SD.TAX_1_PER,0) TAX_1_PER, ISNULL(SD.TAX_1_AMT,0) TAX_1_AMT, SD.TAX_CATEGORY_ID, TC.TAX_CATEGORY_NAME, SD.SNO 
    FROM SODETAILS SD JOIN REFERENCE P 
    ON SD.COMP_CODE=P.COMP_CODE AND P.TYPE IN ('ITEM') AND SD.ITCODE=P.PCODE 
    LEFT OUTER JOIN TAX_CATEGORY TC ON TC.COMP_CODE=SD.COMP_CODE AND TC.TAX_CATEGORY_ID=SD.TAX_CATEGORY_ID 
    WHERE SD.COMP_CODE='01' AND SD.SONO='${req.params.sono}' AND SD.DI='D'
    ORDER BY SD.SNO`; 
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

exports.searchSOMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM SOMASTER WHERE SONO LIKE '${req.params.sono}%' AND DB_CD = 'SOD'`; 
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

exports.getSOMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM SOMASTER WHERE SONO = '${req.params.sono}'`; 
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

exports.getSumofMemberprice = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT SUM(MEMBERPRICE) AS MEMBERPRICE FROM AGREEMENTDETAILSBLA WHERE PCODE = ${req.params.argno}`; 
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

exports.getAgreementBLA = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT A.SERVICENO,S.ServiceName ,A.MEMBERPRICE FROM AGREEMENTDETAILSBLA A
    LEFT JOIN ServiceMaster S ON S.ServiceID  = A.SERVICENO WHERE AGREEMENTNO  = ${req.params.argno} AND A.PCODE = '${req.params.pcode}'`; 
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


exports.deleteParty = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `DELETE FROM PARTY WHERE PARTY_ID = '${req.params.partyid}'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};

exports.deleteAgreementBLA = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `DELETE FROM AGREEMENTDETAILSBLA WHERE AGREEMENTNO = ${req.params.argno} AND PCODE = '${req.params.pcode}'`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};

exports.getSalesInvoice = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT I.COMP_CODE, I.CYEAR, I.TRN_NO, I.TRN_DATE, I.CUST_CODE, I.CUST_NAME, I.TITLE, I.TAX_1_NO, 
    I.ADD1, I.ADD2, I.ADD3, I.PHONE1, I.FAX1, I.EMAIL, I.CONTACT, I.SALESMAN, I.SALESMAN_MOBILE,
    I.JOBNO, I.REF_NO, I.REF_DATE, I.GROSSAMOUNT, I.DISCRATE, I.DISCOUNT, I.TAX_1_PER, I.TAX_1_AMT, I.AMOUNT NET_AMT, 
    dbo.Currency_ToWords(I.AMOUNT,I.CURRENCY_CODE) AMOUNT_IN_WORDS, 
    I.REMARKS, I.CREDITPERIOD, I.SUBJECT, I.CURRENCY_CODE, I.CURR_RATE, I.CUST_REF_NO, I.CUST_REF_DATE,
    I.JOB_GLCODE, I.JOB_GLNAME, I.JOB_ID, I.JOB_NAME, I.JOB_STATUS_CD, I.DEPT_ID, I.DEPT_NAME, I.REFNO_1, I.REFNO_2, 
    I.ADD_DESC1, I.ADD_DESC2, I.ADD_VALUE1, I.ADD_VALUE2, I.ADD_VALUE3, I.ADD_VALUE4, 
    I.CREATEUSER, I.CREATEUSERNAME, I.CREATEDT, I.EDITUSER, I.EDITUSERNAME, I.EDITDT, 
    ISNULL(SUM(SAID.INVOICE_AMT),0) PREV_INVOICED_AMT, ISNULL(SUM(SAID.RECIEPT_AMT),0) PREV_PAID_AMT, ISNULL(SUM(SAID.INVOICE_AMT-SAID.RECIEPT_AMT),0) PREV_ARREARS 
    FROM vwSalesInvoice I LEFT OUTER JOIN vwAutoInvoiceDetails SAID 
    ON I.COMP_CODE=SAID.COMP_CODE AND I.REF_NO=SAID.SONO AND SAID.INVOICE_DATE<=I.TRN_DATE AND SAID.INVOICE_NO<>I.TRN_NO
    WHERE I.COMP_CODE='01' AND I.TRN_NO = '${req.params.invno}'
    GROUP BY I.COMP_CODE, I.CYEAR, I.TRN_NO, I.TRN_DATE, I.CUST_CODE, I.TITLE, I.CUST_NAME, I.TAX_1_NO,
    I.ADD1, I.ADD2, I.ADD3, I.PHONE1, I.FAX1, I.EMAIL, I.CONTACT, I.SALESMAN, I.SALESMAN_MOBILE,
    I.JOBNO, I.REF_NO, I.REF_DATE, I.GROSSAMOUNT, I.DISCRATE, I.DISCOUNT, I.TAX_1_PER, I.TAX_1_AMT, I.AMOUNT,
    I.REMARKS, I.CREDITPERIOD, I.SUBJECT, I.CURRENCY_CODE, I.CURR_RATE, I.CUST_REF_NO, I.CUST_REF_DATE,
    I.JOB_GLCODE, I.JOB_GLNAME, I.JOB_ID, I.JOB_NAME, I.JOB_STATUS_CD, I.DEPT_ID, I.DEPT_NAME, I.REFNO_1, I.REFNO_2,
    I.ADD_DESC1, I.ADD_DESC2, I.ADD_VALUE1, I.ADD_VALUE2, I.ADD_VALUE3, I.ADD_VALUE4,
    I.CREATEUSER, I.CREATEUSERNAME, I.CREATEDT, I.EDITUSER, I.EDITUSERNAME, I.EDITDT`; 
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

exports.postParty = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO PARTY(COMP_CODE,PARTY_ID,tYPE,nAME,aDd1,ADd2,aDd3,PHONE1,PHONE2,MOBILE,EMAIL_ID,fAX1,FaX2,RefNO,
            CONTACT,FLAT,BUILDING,STREET,BLOCK,CITY,POBOX,COUNTRY,PCODE,IS_PRIMARY,ACTIVE,CREATEUSER,CREATEDT,EDITUSER,EDITDT) vAlUEs(
            '${req.body.compcode}',${req.body.partyid},'C','${req.body.name}','${req.body.add1}','${req.body.add2}','${req.body.add3}',
            '${req.body.phone1}','${req.body.phone2}','${req.body.mobile}','${req.body.email}','${req.body.fax1}','${req.body.fax2}','${req.body.refno}',
            '${req.body.contact}','${req.body.flat}','${req.body.buildling}','${req.body.street}','${req.body.block}','${req.body.city}',
            '${req.body.pobox}','${req.body.country}','${req.body.pcode}',1,1,'${req.body.creatuser}',CONVERT(DATETIME,'${req.body.creatdt}',105),'${req.body.edituser}',CONVERT(DATETIME,'${req.body.editdt}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postSGLDATATEMP = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO SGLDATA_TEMP (DOC_ID, YEAR, COMP_CODE, DB_CD, TRN_TYPE, VCR_NO, ACCODE, ENTRY_TP, AMOUNT, GLCR_BAL, GLDB_BAL, 
            CHQ_NO, CHQ_DT, BANK_NAME, REMARKS, VCR_DATE, DEPT_ID, JOB_NO, JOB_ORD_NO,EXP_ID, HEADER, PRESENTED_DATE ) VALUES 
            (${req.body.docid}, '${req.body.year}', '${req.body.compcode}', '${req.body.db_cd}', '${req.body.trntype}', '${req.body.vcrno}', '${req.body.accode}', 
            '${req.body.entryid}', ${req.body.amount}, ${req.body.glcrbal}, ${req.body.gldbbal},'${req.body.chqno}', CONVERT(DATETIME,'${req.body.chqdate}',105), '${req.body.bankname}', '${req.body.remarks}', CONVERT(DATETIME,'${req.body.vcrdate}',105), ${req.body.deptid}, '${req.body.jobno}', '${req.body.jobordno}',${req.body.expid}, '${req.body.header}', CONVERT(DATETIME,'${req.body.presenteddate}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.postSOMASTER = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO SOMASTER (COMP_CODE,QUOTNO,SONO,SODATE,SOTYPE,DB_CD,SALESMAN_ID,
            PARTY_ID,PCODE,CUST_NAME,CUST_ADD1,CUST_ADD2,CUST_ADD3,CUST_PHONE1,
            SHIP_TO_NAME,SHIP_TO_ADD1,SHIP_TO_ADD2,SHIP_TO_ADD3,SHIP_TO_PHONE1,
            STATUS,REMARKS,REFNO,REFDATE,YEAR,TOTAL,DISCRATE,DISCOUNT,GTOTAL, 
            TAX_1_PER, TAX_1_AMT, 
            INVOICE_TYPE, INVOICE_PERIOD, AUTO_INVOICE_BEFORE_NO_OF_DAYS, 
            CURRENCY,CURR_RATE, BATCH_SERIAL, CREATEUSER, CREATEDT) 
            VALUES ('${req.body.compcode}','${req.body.qutono}','${req.body.sono}',CONVERT(DATETIME,'${req.body.sodate}',105)),'${req.body.sotype}','SOD','1',
            ${req.body.partyid}, '${req.body.pcode}','${req.body.custname}','${req.body.custadd1}', '${req.body.custadd2}','${req.body.custadd3}', '${req.body.phoneno}', 
            '${req.body.shipname}', '${req.body.shipadd1}', '${req.body.shipadd2}', '${req.body.shipadd3}', '${req.body.shipphone}', 
            'ORDERED','${req.body.remarks}','${req.body.refno}',CONVERT(DATETIME,'${req.body.refdate}',105)),'${req.body.year}',${req.body.total},${req.body.discrate},${req.body.discount},${req.body.gtotal}, 
            ${req.body.taxper}, ${req.body.taxamt}, 
            'A', 'M',${req.body.autoinvoice} , 
            '${req.body.currency}',${req.body.currate}, '${req.body.batchserail}', '${req.body.creatuser}', GETDATE())`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.getExportMember = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT ACCODE,PRIMARYMEMBER,RELATION,REFMEMBNO,NAME + ' ' + SURNAME AS NAME,CASE WHEN MEMBTYPE = 'F' THEN 'FAMILY' WHEN MEMBTYPE = 'S' THEN 'SINGLE' 
    ELSE 'CORPORATE' END AS MEMBTYPE,  ADD1 + ' ' + ADD2 + ' ' + ADD3 AS ADDRESS,CAST(BIRTHDT AS varchar(20)) AS BIRTHDT,EMPLOYER,CPRNo  FROM MEMBERS order by ACCODE`; 
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

exports.getExportMemberIsprimary = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT ACCODE,PRIMARYMEMBER,RELATION,REFMEMBNO,NAME + ' ' + SURNAME AS NAME,CASE WHEN MEMBTYPE = 'F' THEN 'FAMILY' WHEN MEMBTYPE = 'S' THEN 'SINGLE'  ELSE 'CORPORATE' END AS MEMBTYPE,  ADD1 + ' ' + ADD2 + ' ' + ADD3 AS ADDRESS,CAST(BIRTHDT AS varchar(20)) AS BIRTHDT,EMPLOYER,CPRNo  FROM MEMBERS WHERE ISPRIMARY = 'Y'`; 
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

exports.getExportAllPrimarySubMebers = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT ACCODE,PRIMARYMEMBER,RELATION,REFMEMBNO,NAME + ' ' + SURNAME AS NAME,CASE WHEN MEMBTYPE = 'F' THEN 'FAMILY' WHEN MEMBTYPE = 'S' THEN 'SINGLE' 
    ELSE 'CORPORATE' END AS MEMBTYPE,  ADD1 + ' ' + ADD2 + ' ' + ADD3 AS ADDRESS,CAST(BIRTHDT AS varchar(20)) AS BIRTHDT,EMPLOYER,CPRNo FROM MEMBERS WHERE ACCODE = '${req.params.priamry}' ORDER BY REFMEMBNO `; 
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

exports.getexportBoat = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT BoatNo,RegistrationNo,BoatColor,BoatEngineNo,BoatName,ModelNo,HostPower,InsuranceNo,RegExpiry,InsuranceExpDate FROM BOATMASTER WHERE MemberCode = '${req.params.membercode}'`; 
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



exports.getExportPrimaryMember = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM members WHERE RELATION = 'SELF' order by ACCODE`; 
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





