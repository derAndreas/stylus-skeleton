
exports = module.exports = skeleton;


/**
* Library version.
*/

exports.version = '0.0.1';

/**
* Stylus path.
*/

exports.path = __dirname;

function skeleton() {
  return function(style) {
    style.include(__dirname + '/stylus/');
  }
}
