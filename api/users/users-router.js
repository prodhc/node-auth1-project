// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const { restricted } = require('../auth/auth-middleware');

const router = require('express').Router(); 


const Users = require('./users-model.js');

router.get('/', restricted, (req, res, next) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(next);
});

module.exports = router;