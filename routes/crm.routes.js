module.exports = (app) => {
    const crmController = require('../controllers/crm.controllers');
    
   //1. GET CHART OF ACCCOUNTS 
   app.get('/api/crm/getcoa/:fyear', crmController.getCoa);

   //2. GET MAIN GROUPS
     app.get('/api/crm/getmaingrp/:fyear', crmController.getmaingrp);
 
     //1. GET SUB GROUPS
     app.get('/api/crm/getsubgrp/:maingrp/:fyear', crmController.getsubgrp);
 
     //1. GET GL
     app.get('/api/crm/getgl/:subgrp/:fyear', crmController.getglcode);
 
     //1. GET PCODE
     app.get('/api/crm/getpcode/glcode/:fyear', crmController.getpcode);
     //45. POST GLCODE
     app.post('/api/crm/postgl', crmController.postGlcode)
    //45. GET Account
     app.get('/api/crm/getAcc/:pcode/:fyear', crmController.getAccountCode);
  //46. GET customerAccount
     app.get('/api/crm/getCustomerAcc/:fyear', crmController.getCustomerAcc);
     //47. GET getCustomerOpeningDetails
     app.get('/api/crm/getCustomerOpening/:pcode/:sfyear/:efyear', crmController.getCustomerOpeningDetails);
 
    //1. GET ALL Members
    app.get('/api/crm/getAllMembers', crmController.getAllMembers);

    app.get('/api/crm/getAllMembersIsPrimary', crmController.getAllMembersIsPrimary);
 
 
    //1. GET Member
    app.get('/api/crm/getMembers/:MemberNo', crmController.getmembers);

    app.get('/api/crm/getAllopbal/:pcode/:fyear', crmController.getOpbalall);

    app.get('/api/crm/searchMembers/:MemberNo', crmController.searchmembers);

    app.get('/api/crm/getDependentMembers/:memberNo', crmController.getDependentMembers);

    app.get('/api/crm/searchMemberFromCPR/:cprNbr', crmController.searchMemberFromCPR);

    app.get('/api/crm/searchMemberFromREF/:refNbr', crmController.searchMemberFromREF);
    
    app.get('/api/crm/getmembersNameLike/:name', crmController.getmembersNameLike);

    app.get('/api/crm/getMemberFromCPR/:cprNbr', crmController.getMemberFromCPR);

    app.get('/api/crm/getMemberFromREF/:refNbr', crmController.getMemberFromREF);

    app.post('/api/crm/postNewMember', crmController.postMember);
                                
    app.post('/api/crm/updateMember', crmController.updateMember);

    app.get('/api/crm/deleteMember/:memberNo', crmController.deleteMember);

    app.get('/api/crm/searchSOMaster/:sono', crmController.searchSOMaster);

    app.get('/api/crm/getSOMaster/:sono', crmController.getSOMaster);

    app.get('/api/crm/getSoDetails/:sono', crmController.getSoDetails);

    app.get('/api/crm/deleteDepMember/:memberNo', crmController.deleteDepMember);

    app.get('/api/crm/getSearchPcode/:pcode/:year', crmController.getSearchPcode);
         
    app.get('/api/crm/getPcodeFromName/:name/:year', crmController.getPcodeFromName);

    app.get('/api/crm/getSearchPcodeFromName/:name/:year', crmController.getSearchPcodeFromName);

    app.get('/api/crm/getPcode/:pcode/:year', crmController.getPcode);

    app.get('/api/crm/getSearchPcode/:pcode', crmController.getSearchPcode);

    app.get('/api/crm/getinvoicereceiprt/:vcrno/:year', crmController.getReceiptCustomer);

    app.get('/api/search/opbal/pcode/:pcode/:year', crmController.searchByOPBal);

     //51. GET Accounts Category
     app.get('/api/crm/getAccountsCategory', crmController.getAccountsCategory);

     //52. GET Accounts Type
     app.get('/api/crm/getAccountsType', crmController.getAccountsType);

     app.get('/api/coa/getTranHead/:trnno/:year',crmController.getTranHead);

     app.get('/api/coa/searchTranHead/:trnno/:year',crmController.searchTranHead);

     app.get('/api/crm/getSalesInvoice/:invno', crmController.getSalesInvoice);
 
     app.post('/api/crm/postParty', crmController.postParty);

     app.post('/api/crm/postSGLDATATEMP', crmController.postSGLDATATEMP);

     app.get('/api/crm/getSumofMemberprice/:argno', crmController.getSumofMemberprice);

     app.get('/api/crm/getAgreementBLA/:argno/:pcode', crmController.getAgreementBLA);

     app.post('/api/crm/postSOMASTER', crmController.postSOMASTER);

     app.get('/api/coa/deleteParty/:partyid', crmController.deleteParty);

     app.get('/api/coa/deleteAgreementBLA/:argno/:pcode', crmController.deleteAgreementBLA);

     app.get('/api/export/exportmember', crmController.getExportMember);

     app.get('/api/export/getExportMemberIsprimary', crmController.getExportMemberIsprimary);

     app.get('/api/export/getExportAllPrimarySubMebers/:priamry', crmController.getExportAllPrimarySubMebers);

     app.get('/api/export/getexportBoat/:membercode', crmController.getexportBoat);

     app.get('/api/export/exportPrimarymember', crmController.getExportPrimaryMember);

     app.get('/api/crm/paymenttype', crmController.getPaymentType);

     app.get('/api/crm/bankDetails', crmController.getAllBank);
};