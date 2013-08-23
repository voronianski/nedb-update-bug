var Datastore = require('nedb');
var homedir = require('userhome');

var db = exports.db = new Datastore({
	filename: homedir('.buggynedbfile.db'),
	autoload: true
});

var token = random(16);

var data = {
	name: 'Buggy',
	token: token,
	active: true
};

db.update({ active: true }, data, { upsert: true }, function (err, doc) {
	if (err) {
		return console.dir(err);
	}

	return console.log('updated %s doc', doc);
});

function random (size) {
	var str = '';
	while (str.length < size) {
		str += Math.random().toString(16).slice(2);
	}
	return str.slice(0, size);
}
