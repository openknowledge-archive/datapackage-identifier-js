var assert = require('assert')
  , spec = require('../index.js')
  ;

describe('parse', function() {
  it('url ok', function() {
    var url = 'http://data.okfn.org/data/country-codes/';
    var out = spec.parse(url);
    assert.equal(out.url, url);
    assert.equal(out.dpJsonUrl, url + 'datapackage.json');
    assert.equal(out.name, 'country-codes');
  });

  it('url no trailing slash ok', function() {
    var url = 'http://data.okfn.org/data/country-codes';
    var out = spec.parse(url);
    assert.equal(out.url, url + '/');
    assert.equal(out.dpJsonUrl, url + '/datapackage.json');
    assert.equal(out.name, 'country-codes');
  });

  it('url with datapackage.json ok', function() {
    var url = 'http://data.okfn.org/data/country-codes/datapackage.json';
    var out = spec.parse(url);
    assert.equal(out.url, url.replace('datapackage.json', ''));
    assert.equal(out.dpJsonUrl, url);
    assert.equal(out.name, 'country-codes');
  });

  it('github ok', function() {
    gdpUrl = 'https://github.com/datasets/gdp';
    var out = spec.parse(gdpUrl);
    assert.equal(out.url, 'https://raw.github.com/datasets/gdp/master');
    assert.equal(out.name, 'gdp');
  });
});

