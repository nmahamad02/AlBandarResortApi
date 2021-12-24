const mssql = require('mssql');

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

exports.getPartyCustomer = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM PARTY WHERE PCODE = '${req.params.pcode}'`;
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

exports.getAreaName = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT CodeN,AreaName FROM Area WHERE AreaName LIKE '${req.params.areaname}%'`;
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

exports.getCustomerForExcel = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT PCODE,CUST_NAME,ACCOUNT_TYPE_DESC,ACCOUNT_CATEGORY_DESC,BRANCH_NAME,GLCODE,GLNAME,CR_CPR,CR_LIMIT,TAX_1_NO FROM vwOPBAL`;
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

exports.getPartyForExcel = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT PCODE,PARTY_ID,NAME,ADD1,ADD3,PHONE1,MOBILE,EMAIL_ID,FAX1,CONTACT FROM PARTY ORDER BY PCODE `;
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

exports.getPartyDetail = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM PARTY`;
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

exports.getPartyById = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM PARTY WHERE PARTY_ID = '${req.params.partyid}' `;
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

exports.getPartyByName = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT o.pcode,o.cust_name, p.party_id,p.name,p.add1,p.add2,p.add3,p.phone1,p.mobile,p.email_id,p.contact from opbal o,party p where p.pcode=o.pcode AND P.name LIKE '%${req.params.name}%';`;
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

exports.getCustomerMember = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from Members WHERE ACCODE = '${req.params.corpid}'`; 
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

exports.getAgreement = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from MembershipAgreement`; 
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

exports.getCustomerAgreement = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM vwAgreementMaster WHERE PCODE = '${req.params.pcode}'`; 
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

exports.getAgreementsDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM AGREEMENTDETAILS WHERE AGR_NO = '${req.params.agrno}'`; 
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

exports.getAgreementsMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM AGREEMENTMASTER WHERE AGR_NO = '${req.params.agrno}'`; 
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

exports.getinvoiceprint = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT DISTINCT AD.DESCRIPTION,S.ServiceName,AD.FROMDT,AD.TODT,AD.AMOUNT,AB.MEMBERPRICE,M.NAME,AM.AGR_NO,AM.CUST_NAME,AM.CUST_ADD1,
    AM.CUST_ADD2,AM.CUST_ADD3,AM.AGR_DATE FROM AGREEMENTDETAILS AD 
    LEFT JOIN AGREEMENTMASTER AM ON AM.AGR_NO = AD.AGR_NO
    LEFT JOIN AGREEMENTDETAILSBLA AB ON AD.AGR_NO = AB.AGREEMENTNO AND AD.MEMBERCODE = AB.PCODE LEFT JOIN Members M ON AB.PCODE = M.MemberNo LEFT JOIN ServiceMaster S ON AB.SERVICENO = S.ServiceID 
    WHERE AD.AGR_NO = '${req.params.agrno}' `; 
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




exports.getTaxCategory = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM TAX_CATEGORY `; 
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

exports.getTaxCategoryprc = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT TAX_CATEGORY_NAME,TAX_1_PERC FROM TAX_CATEGORY ORDER BY TAX_CATEGORY_NAME`; 
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

exports.getTaxGroup = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM TAX_GROUP `; 
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

exports.getSalesOrderDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM vwSOMaster WHERE SONO = '${req.params.sono}'`; 
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

exports.getRptStockQTyOnly = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT A.PRODUCT_ID, A.BARCODE, A.DESCRIPTION, HEIGHT_M, A.CATEGORY_NAME, A.SUBCATEGORY_NAME, A.MANUFACTURER_NAME, A.SUPPLIER_NAME, 
    A.BASE_UNIT_OP_COST, A.BASE_UNIT_COSTPRICE, A.BASE_UNIT_RETAILPRICE, A.BASE_UNIT_DEALERPRICE, A.BASE_UNIT_DESCRIPTION, A.PROFILE_ID, 
    A.PROFILE, A.WEIGHT, A.UOW_CD, A.UOW, A.HEIGHT, A.WIDTH, A.HEIGHT_M, A.WIDTH_M, A.LENGTH, A.UOM_CD, A.UOM, A.SIZE_CD, A.SIZE, A.SIZE_VALUE, 
    A.COLOR_CD, A.COLOR, A.VENDOR_ITEM_CODE, A.VERSION, A.EXP_CODE, A.EXP_DESC, A.SEQUENCE, A.OP_QTY, A.OP_COST, A.OP_QTY*A.OP_COST NET_OP_VALUE, 
    A.PURCH_QTY, A.PURCH_VALUE, A.MOVEMENT_QTY, A.MOVEMENT_VALUE, ISNULL(A.AVG_COST,A.OP_COST) AVG_COST, (A.OP_QTY+A.PURCH_QTY-A.MOVEMENT_QTY) CURR_QTY, 
    (A.OP_QTY+A.PURCH_QTY-A.MOVEMENT_QTY)*ISNULL(A.AVG_COST,A.OP_COST) NET_CURR_VALUE, A.REORDER, A.LAST_SOLD_ON, A.LAST_GRN_DATE, A.LAST_GRN_COST, 
    LAST_GRN_COST_PREV_YEAR, CONVERT(DATE,'${req.params.fromdate}') REPORT_START_DATE, CONVERT(DATE,'${req.params.todate}') REPORT_END_DATE FROM (                    
    SELECT PL.PRODUCT_ID, ISNULL(P.BARCODE,'') BARCODE, ISNULL(P.DESCRIPTION,'') DESCRIPTION,            
    P.CATEGORY_NAME, P.SUBCATEGORY_NAME, P.MANUFACTURER_NAME, P.SUPPLIER_NAME, P.OPCOST BASE_UNIT_OP_COST, P.COSTPRICE BASE_UNIT_COSTPRICE,           
    P.RETAILPRICE BASE_UNIT_RETAILPRICE, P.DEALERPRICE BASE_UNIT_DEALERPRICE, P.BASE_UNIT_DESCRIPTION, P.PROFILE_ID, P.PROFILE,          
    P.WEIGHT, P.UOW_CD, P.UOW, P.HEIGHT, P.WIDTH, P.HEIGHT_M, P.WIDTH_M, P.LENGTH, P.UOM_CD, P.UOM, P.SIZE_CD, P.SIZE, P.SIZE_VALUE,          
    P.COLOR_CD, P.COLOR, P.VENDOR_ITEM_CODE, P.VERSION, P.EXP_CODE, P.EXP_DESC, P.SEQUENCE, P.REORDER,            SUM(PL.OPENING_QTY) + 
    ISNULL((SELECT SUM(S.TOTALQUANTITY*UI.QTY_PER_BASE_UNIT) FROM STOCKTR S LEFT OUTER JOIN UNITPERITEM UI ON UI.UNIT_CODE=S.UNIT_CODE 
    AND UI.PCODE=S.PCODE AND UI.COMP_CODE=S.COMP_CODE WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR AND S.PCODE=PL.PRODUCT_ID  
    AND S.TRN_DATE<'${req.params.fromdate}' AND S.TYPE='R'),0) OP_QTY,     ISNULL((SELECT MAX(S.UNITCOSTPRICE) FROM STOCKTR S WHERE 
    S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR AND S.PCODE=PL.PRODUCT_ID AND S.TRN_DATE=(SELECT MAX(S2.TRN_DATE) FROM STOCKTR S2 WHERE 
    S2.COMP_CODE=S.COMP_CODE AND S2.YEAR=S.YEAR AND S2.PCODE=S.PCODE AND S2.TYPE=S.TYPE AND S2.TRN_DATE<'${req.params.fromdate}') AND S.TYPE='R'),P.OPCOST) OP_COST,     
    ISNULL((SELECT SUM(S.TOTALQUANTITY*UI.QTY_PER_BASE_UNIT) FROM STOCKTR S LEFT OUTER JOIN UNITPERITEM UI ON UI.UNIT_CODE=S.UNIT_CODE
    AND UI.PCODE=S.PCODE AND UI.COMP_CODE=S.COMP_CODE WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR AND S.PCODE=PL.PRODUCT_ID  AND
    S.TRN_DATE BETWEEN '${req.params.fromdate}' AND '${req.params.todate}' AND S.TYPE='R' AND (S.DB_CD IN ('GRN','PRN') OR (S.DB_CD='ADJ' AND S.TOTALQUANTITY>0))),0) PURCH_QTY, 
    ISNULL((SELECT SUM(S.TOTALQUANTITY*UI.QTY_PER_BASE_UNIT*S.LANDED_COST) FROM STOCKTR S LEFT OUTER JOIN UNITPERITEM UI 
    ON UI.UNIT_CODE=S.UNIT_CODE AND UI.PCODE=S.PCODE AND UI.COMP_CODE=S.COMP_CODE WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR 
    AND S.PCODE=PL.PRODUCT_ID  AND S.TRN_DATE BETWEEN '${req.params.fromdate}' AND '${req.params.todate}' AND S.TYPE='R' AND (S.DB_CD IN ('GRN','PRN') OR 
    (S.DB_CD='ADJ' AND S.TOTALQUANTITY>0))),0) PURCH_VALUE,            ISNULL((SELECT SUM(S.TOTALQUANTITY*UI.QTY_PER_BASE_UNIT) FROM 
    STOCKTR S LEFT OUTER JOIN UNITPERITEM UI ON UI.UNIT_CODE=S.UNIT_CODE AND UI.PCODE=S.PCODE AND UI.COMP_CODE=S.COMP_CODE 
    WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR AND S.PCODE=PL.PRODUCT_ID  AND S.TRN_DATE BETWEEN '${req.params.fromdate}' AND '${req.params.todate}' AND
    S.TYPE='R' AND NOT (S.DB_CD IN ('GRN','PRN') OR (S.DB_CD='ADJ' AND S.TOTALQUANTITY>0))),0)*(-1) MOVEMENT_QTY, 
    ISNULL((SELECT SUM(S.TOTALQUANTITY*UI.QTY_PER_BASE_UNIT*S.UNITCOSTPRICE) FROM STOCKTR S LEFT OUTER JOIN UNITPERITEM UI
    ON UI.UNIT_CODE=S.UNIT_CODE AND UI.PCODE=S.PCODE AND UI.COMP_CODE=S.COMP_CODE WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR 
    AND S.PCODE=PL.PRODUCT_ID  AND S.TRN_DATE BETWEEN '${req.params.fromdate}' AND '${req.params.todate}' AND S.TYPE='R' AND NOT (S.DB_CD IN ('GRN','PRN') 
    OR (S.DB_CD='ADJ' AND S.TOTALQUANTITY>0))),0)*(-1) MOVEMENT_VALUE,            
    (SELECT MAX(S.UNITCOSTPRICE) FROM STOCKTR S WHERE S.COMP_CODE=PL.COMP_CODE AND S.YEAR=PL.YEAR AND S.PCODE=PL.PRODUCT_ID AND 
    S.TRN_DATE=(SELECT MAX(S2.TRN_DATE) FROM STOCKTR S2 WHERE S2.COMP_CODE=S.COMP_CODE AND S2.YEAR=S.YEAR AND S2.PCODE=S.PCODE AND S2.TYPE=S.TYPE 
    AND S2.TRN_DATE BETWEEN '${req.params.fromdate}' AND '${req.params.todate}') AND S.TYPE='R') AVG_COST,            
    (SELECT TOP 1 TRN_DATE FROM STOCKTR S WHERE S.COMP_CODE=PL.COMP_CODE AND S.DB_CD IN ('POS','INV') AND S.PCODE=PL.PRODUCT_ID AND S.TYPE='R' AND 
    S.TRN_DATE<='${req.params.todate}' ORDER BY S.TRN_DATE DESC) LAST_SOLD_ON,            
    (SELECT TOP 1 TRN_DATE FROM STOCKTR S WHERE S.COMP_CODE=PL.COMP_CODE AND S.DB_CD IN ('GRN') AND S.PCODE=PL.PRODUCT_ID AND S.TYPE='R' AND 
    S.TRN_DATE<='${req.params.todate}' ORDER BY S.TRN_DATE DESC) LAST_GRN_DATE,            
    (SELECT TOP 1 LANDED_COST FROM STOCKTR S WHERE S.COMP_CODE=PL.COMP_CODE AND S.DB_CD IN ('GRN') AND S.PCODE=PL.PRODUCT_ID AND S.TYPE='R' 
    AND S.TRN_DATE<='${req.params.todate}' ORDER BY S.TRN_DATE DESC) LAST_GRN_COST,            
    (SELECT TOP 1 LANDED_COST FROM STOCKTR S WHERE S.COMP_CODE=PL.COMP_CODE AND S.DB_CD IN ('GRN') AND S.PCODE=PL.PRODUCT_ID AND S.TYPE='R' 
    AND S.TRN_DATE<'${req.params.fromdate}' ORDER BY S.TRN_DATE DESC) LAST_GRN_COST_PREV_YEAR            FROM PRODUCT_LOCATION_RELATION PL 
    LEFT OUTER JOIN vwProduct P            ON PL.COMP_CODE = P.COMP_CODE AND PL.YEAR = P.YEAR AND PL.PRODUCT_ID = P.PCODE            
    WHERE PL.COMP_CODE='01' AND PL.YEAR='${req.params.fyear}' AND P.CATEGORY_ID IN ('${req.params.categoryid}')            GROUP BY PL.COMP_CODE, PL.YEAR, PL.PRODUCT_ID, 
    P.BARCODE, P.DESCRIPTION,             P.CATEGORY_NAME, P.SUBCATEGORY_NAME, P.MANUFACTURER_NAME, P.SUPPLIER_NAME, P.OPCOST, P.COSTPRICE,            
    P.RETAILPRICE, P.DEALERPRICE, P.BASE_UNIT_DESCRIPTION, P.PROFILE_ID, P.PROFILE,            
    P.WEIGHT, P.UOW_CD, P.UOW, P.HEIGHT, P.WIDTH, P.HEIGHT_M, P.WIDTH_M, P.LENGTH, P.UOM_CD, P.UOM, P.SIZE_CD, P.SIZE, P.SIZE_VALUE,      
    P.COLOR_CD, P.COLOR, P.VENDOR_ITEM_CODE, P.VERSION, P.EXP_CODE, P.EXP_DESC, P.SEQUENCE, P.REORDER      ) A `; 
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

exports.searchServicesDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from ServiceMaster where ServiceID like '${req.params.serviceid}%'`; 
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

exports.getServicesDetails = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from ServiceMaster where ServiceID = '${req.params.serviceid}'`; 
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

exports.getAllDepartmentMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT *,CAST(ACTIVE as nvarchar) as CASTACTIVE FROM ADDEPARTMENTMASTER`; 
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

exports.getDepartmentMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT DEPT_ID, ISNULL(PREFIX,'') PREFIX, ISNULL(DEPT_NAME,'') DEPT_NAME, ISNULL(EXPENSE_TYPE,'D') EXPENSE_TYPE,
    ISNULL(LASTNO,0) LASTNO, ACTIVE FROM ADDEPARTMENTMASTER WHERE PREFIX = '${req.params.prefix}'`; 
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

exports.searchDepartmentMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT *,CAST(ACTIVE as nvarchar) as CASTACTIVE FROM ADDEPARTMENTMASTER WHERE PREFIX LIKE '${req.params.prefix}%'`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getDepartmentsGrid = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT D.EXP_ID, E.EXP_CODE, E.EXP_DESC, D.GLCODE, ISNULL(O.CUST_NAME,'') GL_NAME 
    FROM DEPT_EXPENSE_MASTER D JOIN EXPENSE_MASTER E 
    ON D.COMP_CODE=E.COMP_CODE AND D.EXP_ID=E.EXP_ID 
    LEFT OUTER JOIN OPBAL O ON D.COMP_CODE=O.COMP_CODE 
    AND D.GLCODE=O.PCODE AND O.FYEAR='${req.params.fyear}'
    WHERE D.COMP_CODE='${req.params.compcode}' AND D.DEPT_ID = '${req.params.deptid}'
    ORDER BY D.EXP_ID`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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


exports.getAllExpenseMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT E.*,O.CUST_NAME,CAST(ACTIVE as nvarchar) as CASTACTIVE  FROM EXPENSE_MASTER E
    LEFT JOIN OPBAL O ON E.GL_CODE_AFFECTED = O.PCODE WHERE E.COMP_CODE = '01'`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.searchExpenseMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT EXP_ID,EXP_CODE,EXP_DESC FROM EXPENSE_MASTER WHERE EXP_CODE LIKE '${req.params.expid}%'`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getExpenseMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM EXPENSE_MASTER WHERE EXP_CODE = '${req.params.expid}'`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getExpenseMasterExpid = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT ISNULL(MAX(EXP_ID),0)+1 AS EXPID FROM EXPENSE_MASTER`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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


exports.getDepartmentMasterExpid = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT ISNULL(MAX(DEPT_ID),0)+1 AS EXPID FROM ADDEPARTMENTMASTER`; 
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

//GET EVERYTHING FROM EXPENSE MASTER WHERE EXP_CODE NOT EQUAL TO PASSED ARGUEMENT
exports.getnotofExpenseMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM EXPENSE_MASTER WHERE EXP_CODE = '${req.params.expid}'`; 
    //SELECT * FROM EXPENSE_MASTER WHERE EXP_CODE <> 'X01'
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getnotofdepartmentMaster = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT *,CAST(ACTIVE as nvarchar) as CASTACTIVE FROM ADDEPARTMENTMASTER WHERE PREFIX = '${req.params.prefix}'`; 
    //SELECT * FROM EXPENSE_MASTER WHERE EXP_CODE <> 'X01'
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getMaxTax = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT MAX(TAX_CATEGORY_ID) AS MAXTAX FROM TAX_CATEGORY`; 
    //SELECT * FROM EXPENSE_MASTER WHERE EXP_CODE <> 'X01'
    
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err);
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

exports.getOpbalDebitAccount = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM OPBAL WHERE PCODE LIKE '${req.params.pcode}%' AND GLCODE = 'A203'`; 
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

exports.getDebitAccountBypocde = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM OPBAL WHERE PCODE = '${req.params.pcode}'`; 
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

exports.getOpbalForPrint = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT OP.PCODE,P.NAME,P.ADD1,P.ADD2,P.ADD3,P.PHONE1,P.CONTACT,P.COUNTRY,P.FAX1  FROM OPBAL OP LEFT JOIN PARTY P ON OP.PCODE = P.PCODE WHERE OP.COMP_CODE = '01'`; 
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

exports.getTaxCategorybytaxcode = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM TAX_CATEGORY WHERE TAX_CATEGORY_CD = '${req.params.taxcode}'`; 
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

exports.getAllService = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select * from ServiceMaster`; 
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


exports.getTaxcategoryData = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM TAX_CATEGORY WHERE ACTIVE = 1`; 
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

exports.deleteDepartmentExpense = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `
    DELETE FROM DEPT_EXPENSE_MASTER WHERE DEPT_ID = '${req.params.dept_id}';
    `; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};

exports.getAllDepartmentExpensesforDP = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `
    SELECT D.DEPT_ID,E.EXP_ID ,E.EXP_DESC,O.PCODE,O.CUST_NAME FROM DEPT_EXPENSE_MASTER D
        LEFT JOIN EXPENSE_MASTER E ON E.EXP_ID = D.EXP_ID 
        LEFT JOIN OPBAL O ON O.PCODE = D.GLCODE WHERE D.DEPT_ID = '${req.params.dept_id}';
    `; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};

exports.getBranch = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT BRANCH_ID ,BRANCH_NAME FROM BRANCH`; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};



exports.getRVDocNO = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM DOC WHERE CYEAR='${req.params.year}' AND FIELD_NAME ='RV_NO'`; 
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

exports.getbANKDETAiLSbODe = (req, res) =>
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SelECT * frOM vWbanKMAsTeR WHere bANk_NAme = '${req.params.bankname}'`;
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

exports.postAddeptarmentmaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO ADDEPARTMENTMASTER ( COMP_CODE, DEPT_ID, PREFIX, DEPT_NAME, LASTNO, ACTIVE,
        EXPENSE_TYPE,CREATEUSER, CREATEDT, EDITUSER, EDITDT ) VALUES 
        ('${req.body.compcode}','${req.body.deptid}', '${req.body.prefix}', '${req.body.deptname}','${req.body.lastno}','${req.body.active}', '${req.body.expensetype}', 
        '${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105), '${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105))`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.UpdateAddeptarmentmaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `UPDATE ADDEPARTMENTMASTER SET DEPT_NAME = '${req.body.deptname}', LASTNO = '${req.body.lastno}' , ACTIVE = '${req.body.active}',
     EXPENSE_TYPE = '${req.body.type}', EDITUSER = '${req.body.edituser}', EDITDT = CONVERT(DATETIME,'${req.body.date}',105) WHERE PREFIX = '${req.body.prefix}'`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.UpdateAddeptarmentExpenseMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `DELETE FROM DEPT_EXPENSE_MASTER SET  EXP_ID = '${req.body.expid}', GLCODE = '${req.body.glcode}',EDITUSER = '${req.body.edituser}' ,
     EDITDT = CONVERT(DATETIME,'${req.body.date}',105) WHERE DEPT_ID = '${req.body.deptid}'`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postDeptExpenseMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO DEPT_EXPENSE_MASTER VALUES('${req.body.compcode}',${req.body.deptid}, ${req.body.expid}, 
     '${req.body.glcode}','${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105), '${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105))`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.postExpenseMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO EXPENSE_MASTER ( COMP_CODE, EXP_ID, EXP_CODE, EXP_DESC, GL_CODE_AFFECTED, EXPENSE_TYPE, 
        TYPE, ACTIVE,CREATEUSER, CREATEDT, EDITUSER, EDITDT ) VALUES ( '${req.body.compcode}',${req.body.expid}, 
        '${req.body.expcode}', '${req.body.expname}','${req.body.glcode}', 'E', 'E', ${req.body.active},
        '${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105), '${req.body.user}', CONVERT(DATETIME,'${req.body.date}',105))`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.UpdateExpenseMaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `UPDATE EXPENSE_MASTER SET EXP_DESC = '${req.body.expname}', GL_CODE_AFFECTED = '${req.body.glcode}',
     ACTIVE = '${req.body.active}',EDITUSER = '${req.body.user}', EDITDT = CONVERT(DATETIME,'${req.body.date}',105) WHERE EXP_CODE = '${req.body.expcode}'`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postRVTranHead = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO TRAN_HEAD (COMP_CODE, YEAR, DB_CD, TRN_TYPE, TRN_NO, TRN_DATE, REF_NO,CUST_CODE, LNAME, TOTAL, DISCRATE, DISCOUNT, OTHER_CHARGES,
        NET_AMOUNT, CURRENCY,CURR_RATE, NARRATION,CASH_AMT,CHEQUE_NO,CHEQUE_BANK,CHEQUE_DT,CHEQUE_AMT,
        CREDIT_CARD_NO,CREDIT_CARD_AMT, BATCH_SERIAL, CREATEUSER, CREATEDT, EDITUSER, EDITDT) VALUES 
         ('01',${req.body.year},'RVC','REC','${req.body.trnno}',CONVERT(DATETIME,'${req.body.trndate}',105),'${req.body.trnno}','${req.body.custcode}','${req.body.lname}',
         ${req.body.total},0,0,0,${req.body.total},'BHD',1,'${req.body.remarks}',${req.body.cashamt},'${req.body.chequeno}','${req.body.chequebank}',CONVERT(DATETIME,'${req.body.cheqdate}',105),${req.body.chqamt},
         '${req.body.credicardno}',${req.body.creditcardamt},'BSRL-GNRL', '${req.body.createUser}', CONVERT(DATETIME,'${req.body.createDate}',105), 
         '${req.body.editUser}', CONVERT(DATETIME,'${req.body.editDate}',105));`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postRVsgldatatemp = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO SGLDATA_TEMP(YEAR,TRN_TYPE,DB_CD,VCR_NO,VCR_DATE,CHQ_NO, CHQ_DT, BANK_NAME, ENTRY_TP,ACCODE,
        GLCR_BAL,AMOUNT,GLDB_BAL,COMP_CODE,REMARKS,HEADER) VALUES (
        '${req.body.year}','REC','RVC','${req.body.vcrno}',CONVERT(DATETIME,'${req.body.vochdate}',105),'${req.body.refno}', CONVERT(DATETIME,'${req.body.refdate}',105),
         '${req.body.bank}','${req.body.entrytype}','${req.body.accode}',${req.body.creditbal},${req.body.creditamount},${req.body.debitbal},'01','${req.body.remarks}','N')`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updateNewRVDocNO = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `UPDATE DOC SET FIELD_VALUE_NM = ${req.body.newVal} WHERE CYEAR='${req.body.year}' AND FIELD_NAME ='RV_NO'`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.postRVoustsanding = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records

     const queryStr = `INSERT INTO OUTSTANDING (YEAR, COMPCODE, DB_CD, INV_NO, INV_DATE, INV_AMOUNT, AMOUNT, CUST_CODE, REFNO, REFDT, REFAMOUNT, DESCRIPTION) 
     VALUES (${req.body.year}, '01', 'RVC', '${req.body.vochno}',CONVERT(DATETIME,'${req.body.vochdate}',105), 0, 0, '${req.body.accode}',
     '${req.body.vochno}', CONVERT(DATETIME,'${req.body.vochdate}',105), ${req.body.creditamount}, '${req.body.remarks}')`;

     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postService = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `insert into ServiceMaster(ServiceID,ServiceCode,ServiceName,ServiceDescription,ActualPrice,DiscountPrice,MemberPrice,CreatedDate,UpdatedDate,CreatedBy,UpdatedBy,DeleteFlag,ServiceCategory,TaxCategory,ServiceGroup,Receipt,OrderByNo,IsBoat) 
          values(${req.body.serviceid},'${req.body.servicecode}','${req.body.servicetype}','${req.body.servicename}','${req.body.servicedesc}',${req.body.actualprice},
          ${req.body.discount},${req.body.memberfee},CONVERT(DATETIME,'${req.body.createdate}',105),CONVERT(DATETIME,'${req.body.updateddate}',105),0,0,0,${req.body.servicecategory},${req.body.ttaxcategoryrnno},'${req.body.servicegroup}',${req.body.receipt},${req.body.orderno},${req.body.isboat})`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.deleteTran = (req, res) => {
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `
    DELETE FROM TRAN_HEAD WHERE YEAR = ${req.params.year} AND TRN_NO = '${req.params.trnno}'
    DELETE FROM OUTSTANDING WHERE YEAR = '${req.params.year}' AND INV_NO = '${req.params.trnno}';
    DELETE FROM SGLDATA_TEMP WHERE YEAR = ${req.params.year} AND VCR_NO = '${req.params.trnno}';
    `; 
    console.log(queryStr);
    request.query(queryStr, function (err, recordset) {
        if (err) console.log(err)
        else {
            res.send(recordset);
        }
    });
};

exports.postMembers = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `insert into members(Mid,MemberNo,REFMEMBNO,TITLE,NAME,SURNAME,APPROVDT,MEMBTYPE,BIRTHDT,MARITAL,ADD1,ADD2,ADD3,NATION,TELOFF,TELRES,FAXNO,EMPLOYER,POSITION,LASTDT,EXPRDT,WIFENAME,SECONDWIFENAME,ACTIVEIND,Email,SecondEmail,RegNo,InsuranceNo,InsExpDate,CREATEDDATE,CPRNo,CORPORATE_ID,COMPLIMENT,NewCorporate)
          values (${req.body.Mid},${req.body.MemberNo},'${req.body.REFMEMBNO}','${req.body.TITLE}','${req.body.NAME}','${req.body.SURNAME}',CONVERT(DATETIME,'${req.body.APPROVDT}',105),
          '${req.body.MEMBTYPE}',CONVERT(DATETIME,'${req.body.BIRTHDT}',105),'${req.body.MARITAL}','${req.body.ADD1}','${req.body.ADD2}','${req.body.ADD3}','${req.body.NATION}','${req.body.TELOFF}','${req.body.TELRES}','${req.body.FAXNO}',
          '${req.body.EMPLOYER}','${req.body.POSITION}',CONVERT(DATETIME,'${req.body.LASTDT}',105),CONVERT(DATETIME,'${req.body.EXPRDT}',105),'${req.body.WIFENAME}','${req.body.SECONDWIFENAME}','${req.body.ACTIVEIND}',
          '${req.body.Email}','${req.body.SecondEmail}','${req.body.RegNo}','${req.body.InsuranceNo}',CONVERT(DATETIME,'${req.body.InsExpDate}',105),CONVERT(DATETIME,'${req.body.CREATEDDATE}',105),
          '${req.body.CPRNo}','${req.body.CORPORATE_ID}','${req.body.COMPLIMENT}','${req.body.NewCorporate}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postAgreement = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `insert into MembershipAgreement(COMP_CODE,QUOTNO,AGR_NO,AGR_GROUP_NO,AGR_DATE,DB_CD,SITE_TYPE,PARTY_ID,PCODE,CUST_NAME,CUST_ADD1,CUST_ADD2,CUST_ADD3,CUST_PHONE1,
            START_DATE,END_DATE,INVOICE_TYPE,INVOICE_PERIOD,AUTO_INVOICE_DAY_OF_MONTH,AUTO_INVOICE_BEFORE_NO_OF_DAYS,SUBJECT,REMARKS,IS_TERMINATED,AGR_START_DATE,AGR_END_DATE,
            KEY_HANDOVER_DATE,TERMINATIONDT,DEPOSIT_AMT,PREPARED_BY,APPROVED_BY,TERMS,SALESMAN_ID,DEPT_ID,ASSIGNED_TO,REFNO,REFNO_1,REFNO_2,SONO,
            TOTAL,DISCRATE,DISCOUNT,GTOTAL,CURRENCY,CURR_RATE,YEAR,BATCH_SERIAL,CREATEUSER,CREATEDT,EDITUSER,EDITDT)values
            (${req.body.COMP_CODE},'${req.body.QUOTNO}','${req.body.AGR_NO}','${req.body.AGR_GROUP_NO}',CONVERT(DATETIME,'${req.body.AGR_DATE}',105),'${req.body.DB_CD}',1,${req.body.PARTY_ID},'${req.body.PCODE}',
            '${req.body.CUST_NAME}','${req.body.CUST_ADD1}','${req.body.CUST_ADD2}','${req.body.CUST_ADD3}','${req.body.CUST_PHONE1}',
            CONVERT(DATETIME,'${req.body.START_DATE}',105),CONVERT(DATETIME,'${req.body.END_DATE}',105),'${req.body.INVOICE_TYPE}','${req.body.INVOICE_PERIOD}',0,0,'${req.body.SUBJECT}','${req.body.REMARKS}',0,CONVERT(DATETIME,'${req.body.AGR_START_DATE}',105),CONVERT(DATETIME,'${req.body.AGR_END_DATE}',105),
            CONVERT(DATETIME,'${req.body.KEY_HANDOVER_DATE}',105),CONVERT(DATETIME,'${req.body.TERMINATIONDT}',105),${req.body.DEPOSIT_AMT},'${req.body.PREPARED_BY}','${req.body.APPROVED_BY}','${req.body.TERMS}','${req.body.SALESMAN_ID}','${req.body.DEPT_ID}',
            '${req.body.ASSIGNED_TO}','${req.body.REFNO}','${req.body.REFNO_1}','${req.body.REFNO_2}','${req.body.SONO}',
            ${req.body.TOTAL},${req.body.DISCRATE},${req.body.DISCOUNT},${req.body.GTOTAL},'${req.body.CURRENCY}',${req.body.CURR_RATE},
            ${req.body.YEAR},'${req.body.BATCH_SERIAL}','${req.body.CREATEUSER}',CONVERT(DATETIME,'${req.body.CREATEDT}',105),'${req.body.EDITUSER}',CONVERT(DATETIME,'${req.body.EDITDT}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postSOmaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO SOMASTER (COMP_CODE, QUOTNO, SONO, SODATE, SOTYPE, DB_CD, PARTY_ID, PCODE, CUST_NAME, CUST_ADD1, CUST_ADD2, CUST_ADD3, CUST_PHONE1, STATUS, SHIP_TO_NAME, SHIP_TO_ADD1, SHIP_TO_ADD2,
            SHIP_TO_ADD3, SHIP_TO_PHONE1, SALESMAN_ID, SUBJECT, REMARKS, REFNO, REFDATE, REFNO_1, REFNO_2, JOB_NO, TOTAL, DISCRATE, DISCOUNT, TAX_1_PER, TAX_1_AMT, GTOTAL, CURRENCY, CURR_RATE,
            START_DATE, END_DATE, INVOICE_TYPE, INVOICE_PERIOD, AUTO_INVOICE_DAY_OF_MONTH, AUTO_INVOICE_BEFORE_NO_OF_DAYS, AGRMNT_VERSIONS, INVOICED_AMT, ADD_DESC1, ADD_DESC2, ADD_VALUE1,
            ADD_VALUE2, ADD_VALUE3, ADD_VALUE4, YEAR, BATCH_SERIAL, CREATEUSER, CREATEDT, EDITUSER, EDITDT) VALUES 
            ('${req.body.cmpcode}', '${req.body.qutono}','${req.body.sono}', CONVERT(DATETIME,'${req.body.sodate}',105), '${req.body.sotype}', '${req.body.dbcd}', ${req.body.partyid}, 
            '${req.body.pcode}', '${req.body.custname}', '${req.body.custadd1}', '${req.body.custadd2}', '${req.body.custadd3}', '${req.body.custphone1}', '${req.body.status}',
            '${req.body.shiptoname}', '${req.body.shiptoadd1}', '${req.body.shiptoadd2}','${req.body.shiptoadd3}', '${req.body.shiptophone1}', ${req.body.salesmanid}, 
            '${req.body.subject}', '${req.body.remarks}', '${req.body.refno}', CONVERT(DATETIME,'${req.body.refdate}',105),' ${req.body.refno1}', '${req.body.refno2}', '${req.body.jobno}', ${req.body.total}, 
            ${req.body.discrate}, ${req.body.discount}, ${req.body.taxper}, ${req.body.taxamount}, ${req.body.gtotal}, '${req.body.currency}', ${req.body.currate},
            CONVERT(DATETIME,'${req.body.startdate}',105), CONVERT(DATETIME,'${req.body.enddate}',105), '${req.body.invoicetype}', '${req.body.invoiceperiod}', ${req.body.autoinvoicedaymonth}, ${req.body.auotinvoicebeforedays}, 
            ${req.body.aggrementversion},${req.body.invoiceamount}, '${req.body.adddesc1}', '${req.body.adddesc2}', ${req.body.addvalue1}, ${req.body.addvalue2}, 
            ${req.body.addvalue3}, ${req.body.addvalue4}, ${req.body.year}, '${req.body.batchserial}', '${req.body.createuser}', CONVERT(DATETIME,'${req.body.creatdt}',105), '${req.body.edituser}', CONVERT(DATETIME,'${req.body.editdt}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postSODetails = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO SODETAILS(SONO, COMP_CODE, ITCODE, DESCRIPTION, ITCODE2, ITCODE3, ITCODE4, DESC1, DESC2, VALUE1, VALUE2, DATE1, TOTQTY, PRICE, AMOUNT, DI, DISPER, DISAMT, TAX_CATEGORY_ID, TAX_1_PER, TAX_1_AMT,
            SNO, PTYPE, UNITTYPE, YEAR, DEPT_ID, JOB_NO, JOB_ORD_NO, EXP_ID, PROCESSED_BASE_QTY, CANCELLED_BASE_QTY, DELIVERED_BASE_QTY, INVOICED_BASE_QTY, INVOICED_AMT, CREATEUSER, CREATEDT,EDITUSER, EDITDT) VALUES
            ('${req.body.sono}', '${req.body.cmpcode}', '${req.body.itcode}','${req.body.description}', '${req.body.itcode2}', '${req.body.itcode3}', '${req.body.itcode4}', 
            '${req.body.desc1}', '${req.body.desc2}', ${req.body.value1}, ${req.body.value2}, CONVERT(DATETIME,'${req.body.date1}',105), ${req.body.totqty}, ${req.body.price}, ${req.body.amount}, '${req.body.di}', 
            ${req.body.disper}, ${req.body.disamt}, ${req.body.taxcategory}, ${req.body.taxper}, ${req.body.taxamt},${req.body.sno}, '${req.body.ptpe}', ${req.body.unittype}, 
            ${req.body.year}, ${req.body.deptid}, '${req.body.jobno}', '${req.body.jobordno}', ${req.body.expid}, ${req.body.probaseqty}, ${req.body.cancelbaseqty}, 
            ${req.body.deliveredbaseqty}, ${req.body.invbaseqty}, ${req.body.invamt}, '${req.body.creatuser}', CONVERT(DATETIME,'${req.body.creatdt}',105),'${req.body.edituser}', CONVERT(DATETIME,'${req.body.editdt}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.postOPBAL = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO OPBAL(COMP_CODE,PCODE,CUST_NAME,TYPE,ACCOUNT_CATEGORY_CD,GLCODE,ACCOUNT_TYPE_CD,BRANCH_ID,
            AFFECTING_TYPE_CODE,CREDITPERIOD,CR_LIMIT,CR_CPR,TAX_1_NO,FYEAR) VALUES (
            '${req.body.compcode}','${req.body.pcode}','${req.body.custname}','C','${req.body.accountcategory}','${req.body.glcode}','${req.body.acounttype}',${req.body.branchid},
            '${req.body.afectingtype}',${req.body.creditperiod},${req.body.limit},'${req.body.cprno}','${req.body.tax1no}','${req.body.fyear}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postTaxCategory = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO TAX_CATEGORY (COMP_CODE,TAX_CATEGORY_ID,TAX_CATEGORY_CD,TAX_CATEGORY_NAME,DESCRIPTION,TAX_GROUP_ID,
            COLLECT_CLAIM_TAX,TAX_1_PERC ,TAX_1_GL_AC_NO,INCLUSIVE_TAX,SEQUENCE,ACTIVE,CREATEUSER,CREATEDT) VALUES (
            '${req.body.compcode}',${req.body.taxid},'${req.body.taxcategorycd}','${req.body.taxcategoryname}','${req.body.desc}',${req.body.taxgroup},
            1,${req.body.tax1prec} ,'${req.body.taxglac}',0,${req.body.sequance},${req.body.active},'${req.body.createuser}',CONVERT(DATETIME,'${req.body.creatdt}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updateTaxCategory = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE TAX_CATEGORY SET TAX_CATEGORY_NAME = '${req.body.taxname}' ,DESCRIPTION = '${req.body.desc}',TAX_GROUP_ID = '${req.body.taxgroup}',
          TAX_1_PERC = '${req.body.tax1prc}' ,INCLUSIVE_TAX = '${req.body.invtax}',SEQUENCE = '${req.body.seq}',ACTIVE = '${req.body.active}',EDITUSER = '${req.body.edituser}' ,EDITDT = CONVERT(DATETIME,'${req.body.editdt}',105) WHERE TAX_CATEGORY_CD = '${req.body.taxid}'`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.updateOPBAL = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE OPBAL SET CUST_NAME = '${req.body.custname}',ACCOUNT_CATEGORY_CD='${req.body.accountcategory}',GLCODE= '${req.body.glcode}',ACCOUNT_TYPE_CD= '${req.body.accountype}',BRANCH_ID = '${req.body.branch}',AFFECTING_TYPE_CODE= '${req.body.affectingtype}',CREDITPERIOD = ${req.body.creditperiod},CR_LIMIT = ${req.body.limit},CR_CPR = '${req.body.cpr}' , TAX_1_NO  = '${req.body.tax1no}' WHERE PCODE = '${req.body.pcode}'`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postOutstanding = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO OUTSTANDING(COMPCODE, YEAR, INV_NO, INV_DATE, INV_AMOUNT, CUST_CODE, DB_CD, OPYEAR, OPFLAG, JOB, 
            REFNO, REFDT, REFAMOUNT, INV_STATUS, DESCRIPTION, LPO_NO, AMOUNT, REMARKS, VENDOR_REF_NO,VENDOR_REF_DATE)VALUES(
            '${req.body.cmpcode}', '${req.body.year}', '${req.body.invno}', CONVERT(DATETIME,'${req.body.invdt}',105), ${req.body.invamount}, '${req.body.custcode}', '${req.body.dbno}', '${req.body.opyear}', '${req.body.opflay}', '${req.body.job}', 
            '${req.body.refno}', CONVERT(DATETIME,'${req.body.refdt}',105), ${req.body.refamount}, '${req.body.invstatus}', '${req.body.description}', '${req.body.lpono}', ${req.body.amount}, '${req.body.reamrks}', '${req.body.vendarrefno}',CONVERT(DATETIME,'${req.body.vendorrefdt}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postAgreementService = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `insert into AGREEMENTSERVICE(AGREEMENT_NO,SERVICE_ID) VALUES ('${req.body.AGREEMENT_NO}',${req.body.SERVICE_ID})`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postAgreementMember = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `insert into AGREEMENTMEMBER(AGREEMENT_NO,MEMBER_ID) VALUES ('${req.body.AGREEMENT_NO}','${req.body.MEMBER_ID}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.getAgreementService = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM AGREEMENTSERVICE`; 
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

exports.getAgreementMember = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM AGREEMENTMEMBER `; 
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

exports.getDocForArg = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM DOC WHERE FIELD_NAME = 'AGR_NO' AND CYEAR = '${req.params.cyear}'`; 
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

exports.getDocForMemb = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT * FROM DOC WHERE FIELD_NAME = 'MEMB_NO' AND CYEAR = '${req.params.cyear}'`; 
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


//GET BANK NAME FROM BANK ID
exports.getbanknamefromid = (req, res) =>
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `SELECT BANK_NAME FROM vwBankMaster WHERE BANK_ID = '${req.params.bankid}'`;
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

exports.postRefData = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO REFERENCE(REC_ID,PCODE,NAME,DESCRIPTION,TYPE,COMP_CODE,ACTIVE,CREATEUSER,CREATEDT) VALUES 
          (${req.body.recid},'${req.body.pcode}','${req.body.refname}','${req.body.refdesc}','${req.body.reftype}','${req.body.compcode}',
          ${req.body.active},'${req.body.createuser}',CONVERT(DATETIME,'${req.body.createdate}',105))`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postagreementservice = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO AGREEMENTDETAILSBLA (PCODE, AGREEMENTNO, SERVICENO, MEMBERPRICE, COMP_CODE) VALUES 
          ('${req.body.pcode}', '${req.body.agreementno}', '${req.body.serviceno}' , ${req.body.memberprice}, '${req.body.compcode}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};


exports.postagrementmaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO AGREEMENTMASTER(COMP_CODE,QUOTNO,AGR_NO,AGR_DATE,SONO,DB_CD,PARTY_ID,PCODE,CUST_NAME,
          CUST_ADD1,CUST_ADD2,CUST_PHONE1,REMARKS,CREATEDT,CREATEUSER) VALUES ('${req.body.compcode}','${req.body.qutono}','${req.body.agrno}',CONVERT(DATETIME,'${req.body.agrdate}',105),'${req.body.sono}','MNT',${req.body.partyid},'${req.body.pcode}','${req.body.custname}','${req.body.custadd1}','${req.body.custadd2}','${req.body.custphone}','${req.body.remarks}',CONVERT(DATETIME,'${req.body.createdate}',105),'${req.body.createuser}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.postagrementdetails = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `INSERT INTO AGREEMENTDETAILS (AGR_NO,COMP_CODE,ITCODE,DESCRIPTION,MEMBERCODE,MEMBERNAME,FROMDT,TODT,VALUE1,PRICE,DISPER,DISAMT,VATCATEORY,VAT,AMOUNT,CREATEDT,CREATEUSER) VALUES('${req.body.argno}','${req.body.compcode}','${req.body.itcode}','${req.body.desc}','${req.body.membercode}','${req.body.memmbername}',CONVERT(DATETIME,'${req.body.fromdate}',105),CONVERT(DATETIME,'${req.body.todate}',105),${req.body.value},${req.body.price},${req.body.disper},${req.body.disamt},'${req.body.vatcategory}','${req.body.vat}',${req.body.amount},CONVERT(DATETIME,'${req.body.createdate}',105),'${req.body.createuser}')`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updateagrementdetails = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE AGREEMENTDETAILS SET ITCODE = '${req.body.itcode}',DESCRIPTION = '${req.body.desc}',MEMBERCODE = '${req.body.membercode}',MEMBERNAME = '${req.body.membername}',FROMDT = CONVERT(DATETIME,'${req.body.frmdate}',105),TODT = CONVERT(DATETIME,'${req.body.todate}',105),VALUE1 = '${req.body.value}' ,PRICE = '${req.body.price}',DISPER = '${req.body.disper}',DISAMT = '${req.body.disamt}',VATCATEORY = '${req.body.vatcategory}',VAT = '${req.body.vat}',AMOUNT = '${req.body.amount}',EDITDT = CONVERT(DATETIME,'${req.body.editdt}',105),EDITUSER = '${req.body.edituser}' WHERE AGR_NO = '${req.body.agrno}'`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updateagrementmaster = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE AGREEMENTMASTER SET QUOTNO = '${req.body.qutono}',AGR_DATE = CONVERT(DATETIME,'${req.body.argdate}',105),PARTY_ID = ${req.body.partyid},PCODE = '${req.body.pcode}',CUST_NAME = '${req.body.custname}',CUST_ADD1 = '${req.body.add1}',CUST_ADD2 = '${req.body.add2}',CUST_PHONE1 = '${req.body.phone}',REMARKS = '${req.body.remarks}',EDITDT = CONVERT(DATETIME,'${req.body.editdt}',105),EDITUSER = '${req.body.edituser}' WHERE AGR_NO = '${req.body.agrno}'`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updatedocagrement = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE DOC SET FIELD_VALUE_NM = '${req.body.fieldvalue}' WHERE FIELD_NAME = 'AGR_NO'  AND CYEAR = 2021`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.updateRefData = (req, res) =>
{
     // Validate request
     console.log(`INSERTING RECORD ${req.body}`);
     // create Request object
     var request = new mssql.Request();
     // query to the database and get the records
          const queryStr = `UPDATE REFERENCE SET NAME = '${req.body.name}' ,DESCRIPTION = '${req.body.desc}' ,TYPE = '${req.body.type}' ,
          COMP_CODE = '${req.body.compcode}' ,ACTIVE= '${req.body.active}' ,EDITUSER = '${req.body.createuser}',CREATEDT = CONVERT(DATETIME,'${req.body.createdate}',105)
          WHERE PCODE = '${req.body.pcode}'`
     console.log(queryStr);
     request.query(queryStr, function (err, recordset) {
         if (err) console.log(err)
         else {
            res.send(recordset);
         };
    });
};

exports.getMaxRefID = (req, res) => 
{
    // Validate request
    console.log(`Fetching RESPONSE`);
    // create Request object
    var request = new mssql.Request();
    // query to the database and get the records
    const queryStr = `select MAX(REC_ID + 1) AS RECID from REFERENCE `; 
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

