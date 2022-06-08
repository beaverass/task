const City = require("../models/City");


class CityController {

    async getAll(req, res) {
        const cities = await City.find({})
        res.json(cities)
    }
}

module.exports = new CityController()