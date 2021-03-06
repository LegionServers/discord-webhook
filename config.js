/* eslint-disable camelcase, no-process-env*/

var config = {};

config.discord = {};
config.github = {};
config.web = {};

config.discord.token = process.env.DISCORD_TOKEN;
config.discord.channel_id = process.env.DISCORD_CHANNEL_ID || '211145352336769025';
config.github.token = process.env.SECRET_TOKEN;
if (process.env.HEROKU_APP) {
  config.web.cname = process.env.CNAME || process.env.HEROKU_APP + '.herokuapp.com';
} else {
  config.web.cname = process.env.CNAME || 'localhost';
}
config.web.url = 'http://' + config.web.cname + '/ping';
config.web.port = process.env.PORT || 1974;
config.web.workers = process.env.WEB_CONCURRENCY || 1;
config.web.path = process.env.WEB_PATH || '/webhook';

module.exports = config;
