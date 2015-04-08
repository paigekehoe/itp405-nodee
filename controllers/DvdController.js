var Dvd = require('../models/Dvd');

module.exports = {
	dvds: function(req, res) {
    console.log(req.query.title, req.query.award);

    Dvd.findAll({
        where: {
            title: { like: '%' + req.query.title + '%' },
            award: req.query.award 
        },
    }).then(function(results) {
        res.render('dvds', {
            dvds: results
        });
    });
	},

	create: function(req, res) {
		
	}
};