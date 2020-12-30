if(process.env.NODE_ENV === 'produvtion') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}