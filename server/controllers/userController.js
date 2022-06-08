const User = require('../models/User')

class UserController {

    async getAll(req, res) {
        const users = await User.find({})
        res.json(users)
    }

}

module.exports = new UserController()