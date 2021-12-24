module.exports = (app) => {
    const clubcontroller = require('../controllers/clubservice.controllers');
    
   //1. GET doc for boatmaster
   app.get('/api/club/geTBoatDocNO/:year', clubcontroller.geTBoatDocNO);

   //2. update doc for boatmaster
   app.post('/api/club/updateBoatNodoc', clubcontroller.updateBoatNodoc);

   //3. search boatmaster by id
   app.get('/api/club/SearchBoatMaster/:boatmasterid', clubcontroller.SearchBoatMaster);

   //3. get boatmaster by id
   app.get('/api/club/getBoatMaster/:boatmasterid', clubcontroller.getBoatMaster);

   //4. get all boatmaster 
   app.get('/api/club/getAllBoatMaster', clubcontroller.getAllBoatMaster);

   //5. post boatmaster
   app.post('/api/club/postBoatMaster', clubcontroller.postBoatMaster);

   //6. update boatmaster
   app.post('/api/club/updateBoatMaster', clubcontroller.updateBoatMaster);

   //7. expOrT boatmaster 
   app.get('/api/club/getexportBoatmaster', clubcontroller.getexportBoatmaster);

   //8. post service Master
   app.post('/api/club/postServiceMaster', clubcontroller.postServiceMaster);

   //9. get Max of Service Master 
   app.get('/api/club/getMaxofServiceid', clubcontroller.getMaxofServiceid);

   //8. post service Master
   app.post('/api/club/updateServiceMaster', clubcontroller.updateServiceMaster);

   //9. get getBoatMasterForMembers
   app.get('/api/club/getBoatMasterForMembers/:membercode', clubcontroller.getBoatMasterForMembers);


   app.get('/api/club/getBoatType', clubcontroller.getBoatType);
}
