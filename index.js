var urlmod = require('url')
  ;

// Parse Data Package spec strings (see README)
exports.parse = function(specString) {
  out = {
    url: '',
    name: '',
    version: '',
    original: specString
  }

  var url = specString.replace('/datapackage.json', '')
    , name = ''
    ;

  if (url.indexOf('http') != -1) {
    var urlparts = urlmod.parse(url)
      , path = urlparts.pathname
      , parts = path.split('/')
      , name = parts.pop()
      ;

    out.url = url;

    var ghNotRaw = '//github.com';
    if (url.indexOf(ghNotRaw) != -1) {
      out.url = url.replace(ghNotRaw, '//raw.github.com') + '/master';
      out.version = 'master'
    }
  }

  out.dpJsonUrl = out.url;
  out.dpJsonUrl = out.dpJsonUrl.replace(/\/$/, '');
  out.dpJsonUrl += '/datapackage.json';

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

