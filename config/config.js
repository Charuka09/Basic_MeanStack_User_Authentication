//chech the environment
var env = process.env.NODE_ENV || 'development';

//fetch config data
var config = require('./config.json');
var envConfig = config[env];

//add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);