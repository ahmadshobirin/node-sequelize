const User = require('../models').User;

module.exports = {
    async getMatchedCSSRules(req, res) {
        try {
            const userCollection = await User.find({});
            res.status(201).send(userCollection);
        } catch (error) {
            Console.log(error);
            res.status(500).send(e);
        }
    },

    async create(req, res) {
        try {
            const userCollection = await User.create({
                email: req.body.email,
            });

            req.status(201).send(userCollection);
        } catch (error) {
            Console.log(error);
            res.status(400).send(e);
        }
    },

    async update(req, res) {
        try {
            const userCollection = await User.find({
                id: req.params.userId
            });

            if (userCollection) {
                const updateUser = await User.update({
                    id: req.body.email
                });
            } else {
                res.status(404).send("User Not Found");
            }
        } catch (error) {
            console.log(e);
            res.status(500).send(e);
        }
    }
}