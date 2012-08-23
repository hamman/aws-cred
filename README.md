[![build status](https://secure.travis-ci.org/hamman/aws-cred.png)](http://travis-ci.org/hamman/aws-cred)
Aws-Cred
========

A Javascript port of Ben Koski's ruby gem [aws_credentials](https://github.com/bkoski/aws_credentials), which provides a simple way to manage your Amazon credentials across multiple apps and servers through a config file on the system. This version is compatible with the config files from the ruby gem, with additional support for account_id.

Installation
------------

	npm install aws-cred

Usage
-----

Put a yaml file on your server under /etc/aws.conf that contains:

	access_key: YOUR_KEY_HERE (required)
	secret_access_key: YOUR_SECRET_KEY_HERE (required)
	account_id: YOUR_KEY_HERE (optional)

Require and configure aws-cred in your app. This loads /etc/aws.conf:

	var AWSCred = require('aws-cred');
	awscred = new AWSCred({});
	awscred.access_key;
	awscred.secret_access_key;
	awscred.account_id;

You can also specify an environment to load different files. This is useful if you want to maintain different keys for production, development, staging, etc:

	//this sets the environment to "donkey" and loads /etc/aws.donkey.conf
	awscred = new AWSCred({"env": "donkey"});

And you can manually set the path, in which case it ignores the environment:

	//this will load from /exactly/where/you/said/yourfile.conf
	awscred = new AWSCred({"config_path": "/exactly/where/you/said/yourfile.conf"});

