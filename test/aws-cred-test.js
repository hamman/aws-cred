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
  	'Reads config file': function(test) {
	    awscred = new AWSCred({"config_path":example_path});
	    test.equal(awscred.access_key, "YOUR_KEY_HERE (required)");
	    test.equal(awscred.secret_access_key, "YOUR_SECRET_KEY_HERE (required)");
	    test.equal(awscred.account_id, "YOUR_KEY_HERE (optional)");
	    test.done();
  	},
  	'Throws an error if no conf file': function(test) {
	    test.throws(function(){
	    	awscred = new AWSCred({"config_path":"aws.donkey.conf"});
	    });
	    test.done();
  	},
  	'Calculates config_path correctly for production': function(test) {
	    awscred = new AWSCred({"env": "production", "config_path":example_path});
	    test.equal(awscred.derive_config_path(), "/etc/aws.conf");
	    test.done();
  	},
   	'Calculates config_path correctly for other environments': function(test) {
	    awscred = new AWSCred({"env": "donkey", "config_path":example_path});
	    test.equal(awscred.derive_config_path(), "/etc/aws.donkey.conf");
	    test.done();
  	},

}



