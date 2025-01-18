function setRoutes(app) {
    const IndexController = require('../controllers/index');
    const indexController = new IndexController();

    app.get('/users', indexController.getUsers.bind(indexController));
    app.post('/users', indexController.createUser.bind(indexController));
}

module.exports = setRoutes;