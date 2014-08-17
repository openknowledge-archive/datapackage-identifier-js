var urlmod = require('url')
  ;

// Parse Data Package spec strings (see README)
exports.parse = function(specString) {
  var out = {
    url: '',
    dataPackageJsonUrl: '',
    name: '',
    version: '',
    original: specString
  }
  var name = ''
    ;

  if (specString == null || specString == '') return out;

  if (specString.indexOf('http') != -1) {
    var url = specString.replace('/datapackage.json', '')
      , url = url.replace(/\/$/, '')
      , urlparts = urlmod.parse(url)
      , path = urlparts.pathname
      , parts = path.split('/')
      , name = parts.pop()
      ;

    out.url = url + '/';

    var ghNotRaw = '//github.com';
    if (url.indexOf(ghNotRaw) != -1) {
      out.url = url.replace(ghNotRaw, '//raw.github.com') + '/master';
      out.version = 'master'
    }
  }

  out.dataPackageJsonUrl = out.url;
  out.dataPackageJsonUrl = out.dataPackageJsonUrl.replace(/\/$/, '');
  out.dataPackageJsonUrl += '/datapackage.json';

  var _tmp = name.split('@');
  out.name = _tmp[0];
  if (_tmp.length > 1) {
    out.version = _tmp.split('@');
  }
  return out;
}

exports.normalizeDataPackageUrl = function(url) {
  var url = exports.parseSpecString(url).url;
  if (url.indexOf('datapackage.json') == -1) {
    url = url.replace(/\/$/, '');
    url += '/datapackage.json'
  }
  return url;
};

