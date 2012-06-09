(function(){
	var fs, yaml;

	fs = require('fs');
	yaml = require('js-yaml');


	module.exports =  AWSCred = (function(){
		AWSCred.name = "AWSCred";

		function AWSCred(args){
			this.env = args.env || 'development';
			this.config_path = args.config_path || this.derive_config_path();
			this.load_config();
			return this;
		}

		AWSCred.prototype.derive_config_path = function(){
			var file;
			if (this.env == 'production'){
				file = '/etc/aws.conf'
			} else {
				file = '/etc/aws.'+this.env+'.conf'; 
			}
			return file;
		}

		AWSCred.prototype.load_config = function(){
			credentials = yaml.load(fs.readFileSync(this.config_path));
			this.access_key = credentials.access_key;
			this.secret_access_key = credentials.secret_access_key;
			this.account_id = credentials.account_id || "";
		}

		return AWSCred;

	})();

}).call(this);