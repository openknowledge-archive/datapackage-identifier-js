var assert = require('assert')
  , spec = require('../index.js')
  , pathmod = require('path')
  ;

describe('parse', function() {
  it('no url ok', function() {
    var out = spec.parse('');
    assert.equal(out.url, '');
    assert.equal(out.dataPackageJsonUrl, '');
    assert.equal(out.name, '');
  });

  it('url ok', function() {
    var url = 'http://data.okfn.org/data/country-codes/';
    var out = spec.parse(url);
    assert.equal(out.url, url);
    assert.equal(out.dataPackageJsonUrl, url + 'datapackage.json');
    assert.equal(out.name, 'country-codes');
  });

  it('url no trailing slash ok', function() {
    var url = 'http://data.okfn.org/data/country-codes';
    var out = spec.parse(url);
    assert.equal(out.url, url + '/');
    assert.equal(out.dataPackageJsonUrl, url + '/datapackage.json');
    assert.equal(out.name, 'country-codes');
  });

  it('url with datapackage.json ok', function() {
    var url = 'http://data.okfn.org/data/country-codes/datapackage.json';
    var out = spec.parse(url);
    assert.equal(out.url, url.replace('datapackage.json', ''));
    assert.equal(out.dataPackageJsonUrl, url);
    assert.equal(out.name, 'country-codes');
  });

  it('github ok', function() {
    gdpUrl = 'https://github.com/datasets/gdp';
    var out = spec.parse(gdpUrl);
    assert.equal(out.url, 'https://raw.github.com/datasets/gdp/master/');
    assert.equal(out.dataPackageJsonUrl, 'https://raw.github.com/datasets/gdp/master/datapackage.json');
    assert.equal(out.name, 'gdp');
  });

  it('github subfolder ok', function() {
    dpmFolderUrl = 'https://github.com/okfn/dpm/tree/master/test/fixtures/datapackage-example-inline';
    var out = spec.parse(dpmFolderUrl);
    assert.equal(out.url, 'https://raw.github.com/okfn/dpm/master/test/fixtures/datapackage-example-inline/');
    assert.equal(out.dataPackageJsonUrl, 'https://raw.github.com/okfn/dpm/master/test/fixtures/datapackage-example-inline/datapackage.json');
    assert.equal(out.name, 'datapackage-example-inline');
  });

  it('local path ok', function() {
    gdpUrl = '/tmp/gdp';
    var out = spec.parse(gdpUrl);
    assert.equal(out.path, '/tmp/gdp/');
    assert.equal(out.name, 'gdp');
    assert.equal(out.originalType, 'path');
    assert.equal(out.url, 'file:///tmp/gdp/');
    assert.equal(out.dataPackageJsonUrl, 'file:///tmp/gdp/datapackage.json');
  });

  it('local relative path ok', function() {
    var gdpUrl = 'tmp/gdp/'
      , ourpath = pathmod.resolve(gdpUrl) + '/'
    ;

    var out = spec.parse(gdpUrl);
    assert.equal(out.path, ourpath);
    assert.equal(out.name, 'gdp');
    assert.equal(out.originalType, 'path');
    assert.equal(out.url, 'file://' + ourpath);
    assert.equal(out.dataPackageJsonUrl, out.url + 'datapackage.json');
  });
});
