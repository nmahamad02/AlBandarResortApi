module.exports = (app) => {
    const lookUpController = require('../controllers/lookUp.controller');
    
    //1. GET REFERENCE
    app.get('/api/lookup/refs', lookUpController.getRef);

    //2. GET REFERENCE BY TYPE
    app.get('/api/lookup/reftype/:type', lookUpController.getRefByType);

    //3. POST REFERENCE
    //app.post('/api/lookup/ref', lookUpController.postRef); 

    //4. GET REFERENCE BY CODE
    app.get('/api/lookup/ref/:PCODE', lookUpController.getRefCode);

    //4. GET DISTINCT REFERENCE TYPE
    app.get('/api/lookup/reftypes', lookUpController.getRefType);

    //GET NATIONS     
    app.get('/api/lookup/nations', lookUpController.getNations);

    //GET Titles
    app.get('/api/lookup/titles', lookUpController.getTitles);

    app.get('/api/lookup/getReferenceType', lookUpController.getReferenceType)  

    //Get relations
    app.get('/api/lookup/relations', lookUpController.getRelations);

    //GET POSITIONS
    app.get('/api/lookup/positions', lookUpController.getPositions);

    // app.post('/api/lookup/postReference', lookUpController.postReference);

    // app.post('/api/lookup/updateReference', lookUpController.updateReference);

    app.get('/api/lookup/searchReference', lookUpController.searchReference);

}