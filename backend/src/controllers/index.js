class IndexController {
    getUsers(req, res) {
        // Logic to retrieve users
        res.send('List of users');
    }

    createUser(req, res) {
        // Logic to create a new user
        res.send('User created');
    }
}

module.exports = IndexController;