AWSCred = require('./../lib/aws-cred');

var example_path = __dirname+"/../lib/aws.example.conf";

module.exports = {
	'Can set the config path': function(test) {
	    awscred = new AWSCred({"env": "donkey", "config_path":example_path});
	    test.equal(awscred.config_path, example_path);
	    test.done();
  	},
	'Loads Development Environment by Default': function(test) {
	    awscred = new AWSCred({"config_path":example_path});
	    test.equal(awscred.env, "development");
	    test.done();
  	},
  	'Can set the environment': function(test) {
	    awscred = new AWSCred({"env": "donkey", "config_path":example_path});
	    test.equal(awscred.env, "donkey");
	    test.done();
  	},
}



