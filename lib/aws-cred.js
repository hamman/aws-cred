(function(){
	var fs, yaml, file, env, credentials;

	fs = require('fs');
	yaml = require('js-yaml');


	module.exports = function(env){
		if (env == 'production'){
			file = '/etc/aws.conf'
		} else {
			file = '/etc/aws.'+env+'.conf'; 
		}
		credentials = yaml.load(fs.readFileSync(file));
		return {
			'access_key': credentials.access_key,
			'secret_access_key':credentials.secret_access_key,
			'accont_id': credentials.account_id || ""	
		}

	};

}).call(this);