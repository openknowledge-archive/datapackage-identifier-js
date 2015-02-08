var urlmod = require('url')
  , pathmod = require('path')
  ;

// Parse Data Package spec strings (see README)
exports.parse = function(specString) {
  var out = {
    url: '',
    dataPackageJsonUrl: '',
    name: '',
    version: '',
    original: specString,
    originalType: ''
  }
  var name = ''
    ;

  if (specString == null || specString == '') return out;

  // TODO: also anything that does not start with http (?)
  // Issue is what about specifiers like xyz/abc (abc in org xyz)
  //
  // TODO: handle windows paths (??)
  //
  // Pathes are either: /xyz/abc or relative abc/xyz/ (but in latter case
  // *must* end with / to avoid confusion with single or 2 part identifiers
  // like 'gold-prices' or 'rgrp/hard-disk-drive-prices'
  if (
    specString[0] == '/' ||
    (specString.indexOf('http') == -1 && specString[specString.length-1] == '/')
    ) {
    var path_ = pathmod.resolve(specString)
      , path_ = path_.replace('/datapackage.json', '')
      , path_ = path_.replace(/\/$/, '')
      ;
    out.path = path_ + '/';
    out.name = pathmod.basename(path_);
    out.url = 'file://' + path_ + '/';
    out.originalType = 'path';
  }

  if (specString.indexOf('http') != -1) {
    var url = specString.replace('/datapackage.json', '')
      , url = url.replace(/\/$/, '')
      , urlparts = urlmod.parse(url)
      , path = urlparts.pathname
      , parts = path.split('/')
      ;

    out.url = url + '/';
    out.name = parts.pop()

    var ghNotRaw = '//github.com';
    if (url.indexOf(ghNotRaw) != -1) {
      out.url = url.replace(ghNotRaw, '//raw.github.com') + '/master/';
      out.version = 'master'
    }
  }

  out.dataPackageJsonUrl = out.url;
  out.dataPackageJsonUrl = out.dataPackageJsonUrl.replace(/\/$/, '');
  out.dataPackageJsonUrl += '/datapackage.json';

  var _tmp = out.name.split('@');
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

