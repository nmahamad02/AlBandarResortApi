module.exports = (app) => {
    const UsrContrllr = require('../Controllers/users.controllers');

    //1. GET REQUEST
    app.get('/api/users', UsrContrllr.getAllUsers);

    //2. GET SPECIFIC USER WITH USERNAME & PASSWORD
    app.get('/api/user/:username', UsrContrllr.getUser);

    //3. GET USER ROLES
    app.get('/api/users/roles/:userClass', UsrContrllr.getUserRoles);

    //4. POST NEW USER
    app.post('/api/users/new', UsrContrllr.addNewUser);

    //5. PUT NEW PASSWORD
    app.post('/api/user/changePassword', UsrContrllr.updateUserPassword);

    // GET MEMBER DETAILS FROM MEMBERNO FOR LOGIN
    app.get('/api/member/:memberno', UsrContrllr.getMemberdetails);

    // GET SUB MEMBER DETAILS FROM PRIMARY MEMBER NO
    app.get('/api/member/submember/:memberno', UsrContrllr.getSubMemberdetails);
};
