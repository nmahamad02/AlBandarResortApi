module.exports = (app) => {
  const financeController = require('../Controllers/finance.controllers')

  app.get('/api/coa/getCustomerAcc/:fyear', financeController.getCustomerAcc);

  app.get('/api/coa/getPartyCustomer/:pcode', financeController.getPartyCustomer);

  app.get('/api/coa/getCustomerForExcel', financeController.getCustomerForExcel);

  app.get('/api/coa/getCustomerForExcel', financeController.getCustomerForExcel);

  app.get('/api/coa/getOpbalForPrint', financeController.getOpbalForPrint);

  app.get('/api/coa/getAreaName/:areaname', financeController.getAreaName);

  app.get('/api/coa/Party', financeController.getPartyDetail);

  app.get('/api/coa/PartyDetails/:partyid', financeController.getPartyById);

  app.get('/api/coa/partyFromName/:name', financeController.getPartyByName);

  app.get('/api/coa/getCustomerOpening/:pcode/:sfyear/:efyear', financeController.getCustomerOpeningDetails);

  app.get('/api/coa/getAccountsCategory', financeController.getAccountsCategory);

  app.get('/api/coa/getAccountsType', financeController.getAccountsType);

  app.get('/api/coa/getCustomerMember/:corpid', financeController.getCustomerMember);
   
  app.get('/api/coa/getAgreement', financeController.getAgreement);

  app.get('/api/coa/getTaxCategory', financeController.getTaxCategory);

  app.get('/api/coa/getTaxCategoryprc', financeController.getTaxCategoryprc);

  app.get('/api/coa/getAllExpenseMaster', financeController.getAllExpenseMaster);

  app.get('/api/coa/getTaxGroup', financeController.getTaxGroup);

  app.get('/api/coa/getOpbalDebitAccount/:pcode', financeController.getOpbalDebitAccount); 

  app.get('/api/coa/getDebitAccountBypocde/:pcode', financeController.getDebitAccountBypocde); 

  app.get('/api/coa/getSalesOrderDetails/:sono', financeController.getSalesOrderDetails);

  app.post('/api/coa/updateNewRVDocNO', financeController.updateNewRVDocNO);
    
  app.get('/api/coa/getRptStockQTyOnly/:fromdate/:todate/:fyear/:categoryid', financeController.getRptStockQTyOnly);

  app.get('/api/coa/getServicesDetails/:serviceid', financeController.getServicesDetails);

  app.get('/api/coa/searchServicesDetails/:serviceid', financeController.searchServicesDetails);

  app.get('/api/coa/getAllService', financeController.getAllService);

  app.get('/api/coa/getAllService', financeController.getAllService);

  app.get('/api/coa/getDocForArg/:cyear', financeController.getDocForArg);

  app.get('/api/coa/getDocForMemb/:cyear', financeController.getDocForMemb);

  app.get('/api/coa/getDepartmentMasterExpid', financeController.getDepartmentMasterExpid);

  app.get('/api/coa/getRVDocNO/:year', financeController.getRVDocNO);

  app.get('/api/coa/getDepartmentMaster/:prefix', financeController.getDepartmentMaster);

  app.get('/api/coa/searchDepartmentMaster/:prefix', financeController.searchDepartmentMaster);

  app.get('/api/coa/getDepartmentsGrid/:fyear/:compcode/:deptid', financeController.getDepartmentsGrid);

  app.get('/api/coa/searchExpenseMaster/:expid', financeController.searchExpenseMaster);

  app.get('/api/coa/getExpenseMaster/:expid', financeController.getExpenseMaster);

  app.get('/api/coa/getAgreementsDetails/:agrno', financeController.getAgreementsDetails);

  app.get('/api/coa/getAgreementsMaster/:agrno', financeController.getAgreementsMaster);

  app.get('/api/coa/getinvoiceprint/:agrno', financeController.getinvoiceprint);

  app.get('/api/coa/getBranch', financeController.getBranch);

  app.get('/api/coa/getnotExpenseMaster/:expid', financeController.getnotofExpenseMaster);

  app.get('/api/coa/getnotofdepartmentMaster/:prefix', financeController.getnotofdepartmentMaster);

  app.get('/api/coa/getRVDocNO/:year', financeController.getRVDocNO);

  app.get('/api/coa/deleteTran/:trnno/:year', financeController.deleteTran);

  app.get('/api/coa/getAllDepartmentMaster', financeController.getAllDepartmentMaster);

  app.get('/api/coa/deleteDepartmentExpense/:dept_id', financeController.deleteDepartmentExpense);

  app.get('/api/coa/getTaxCategorybytaxcode/:taxcode', financeController.getTaxCategorybytaxcode);

  app.get('/api/coa/getMaxTax', financeController.getMaxTax);

  app.get('/api/coa/getAllDepartmentExpensesforDP/:dept_id', financeController.getAllDepartmentExpensesforDP);

  app.post('/api/coa/postRVsgldatatemp',financeController.postRVsgldatatemp);

  app.post('/api/coa/postDeptExpenseMaster',financeController.postDeptExpenseMaster);

  app.post('/api/coa/postTaxCategory',financeController.postTaxCategory);

  app.post('/api/coa/updateTaxCategory',financeController.updateTaxCategory);

  app.post('/api/coa/postExpenseMaster',financeController.postExpenseMaster);

  app.post('/api/coa/UpdateExpenseMaster',financeController.UpdateExpenseMaster);

  app.post('/api/coa/postOPBAL',financeController.postOPBAL);

  app.post('/api/coa/updateOPBAL',financeController.updateOPBAL);

  app.post('/api/coa/postAgrement',financeController.postagreementservice);

  app.post('/api/coa/postagrementmaster',financeController.postagrementmaster);

  app.post('/api/coa/UpdateAddeptarmentmaster',financeController.UpdateAddeptarmentmaster);

  app.post('/api/coa/UpdateAddeptarmentExpenseMaster',financeController.UpdateAddeptarmentExpenseMaster);

  app.post('/api/coa/postRVTranHead',financeController.postRVTranHead);

  app.post('/api/coa/postRVoustsanding',financeController.postRVoustsanding);

  app.post('/api/coa/postAddeptarmentmaster',financeController.postAddeptarmentmaster);

  app.post('/api/coa/postagrementdetails',financeController.postagrementdetails);

  app.get('/api/coa/getTaxcategoryData', financeController.getTaxcategoryData);

  app.get('/api/coa/getbANKDETAiLSbODe/:bankname', financeController.getbANKDETAiLSbODe);

  app.get('/api/coa/getCustomerAgreement/:pcode', financeController.getCustomerAgreement);

  app.get('/api/coa/getAgreementMember', financeController.getAgreementMember);

  app.get('/api/coa/getAgreementService', financeController.getAgreementService);

  app.post('/api/coa/postService', financeController.postService);

  app.post('/api/coa/postMembers', financeController.postMembers);

  app.post('/api/coa/postAgreement', financeController.postAgreement);

  app.post('/api/coa/updateagrementdetails', financeController.updateagrementdetails);

  app.post('/api/coa/updateagrementmaster', financeController.updateagrementmaster);

  app.post('/api/coa/updatedocagrement', financeController.updatedocagrement);

  app.post('/api/coa/postAgreementService', financeController.postAgreementService);

  app.post('/api/coa/postAgreementMember',financeController.postAgreementMember );
    
  app.post('/api/coa/postSOmaster',financeController.postSOmaster );

  app.post('/api/coa/postSODetails',financeController.postSODetails );

  app.post('/api/coa/postOutstanding',financeController.postOutstanding );

  app.get('/api/coa/getbanknamefromid/:bankid', financeController.getbanknamefromid);

  app.post('/api/coa/postRefData', financeController.postRefData);
  
  app.post('/api/coa/updateRefData', financeController.updateRefData);

  app.get('/api/coa/getMaxRefID', financeController.getMaxRefID);
  

    
}