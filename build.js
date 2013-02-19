
var stylus = require('stylus');
var fs = require('fs');

var pathToStylFiles = __dirname + '/stylus/'; 
var str = fs.readFileSync(pathToStylFiles + '/stylesheet.styl', 'utf8');

var compress = false;
var dest = __dirname + '/builds/style.css';

stylus(str)
  .set('paths', [ pathToStylFiles ])
  .set('compress', compress)
  .render(function(err, css) {
    if (err) {
      throw err;
    }
    fs.writeFile(dest, css, 'utf8');
  });
