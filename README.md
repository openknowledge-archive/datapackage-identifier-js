NodeJS library for handling Data Package Spec(ifier)s or Spec(ifier) Strings.

Can also be used for getting normalized Data Package URLs. Example:

```
var spec = require('datapackage-spec');

var dp = 'http://gibhub.com/datasets/gdp';
var ourSpec = spec.parse(dp);

// https://raw.github.com/datasets/gdp/master/datapackage.json
var datapackageJsonUrl = ourSpec.dpJsonUrl;
```

# Data Package Spec (Specifier)

Data Packages are identified by a Data Package Spec(ifier) or,
more commonly (for humans), by a Spec String.

A Data Package "Spec" is a small Object/Hash which describing the identify and
location of a Data Package. Its structure is like:

    {
      // URL to base of the Data Package
      url: ...
      // URL to datapackage.json
      dpJsonUrl: ...
      // name of the Data Package
      name: ...
      // version of the Data Package
      version: ...
      // if parsed from a Spec String this is the original specString
      original: 
    }

It can be parsed (and less importantly) serialized to a simple string. Spec
strings will be frequently used on e.g. the command line to identify a data
package.

A Spec String is a single string (rather than JSON object). A Spec String can be:

* A direct URL to a datapackage (with or without the `datapackage.json`) e.g.

       http://mywebsite.com/mydatapackage/
       // or with the datapackage.json
       http://mywebsite.com/mydatapackage/datapackage.json

* A Github URL

       http://github.com/datasets/gold-prices

* A single name

       gold-prices

   In this case the data package must be in the core datasets in the primary registry.

# Installation

[![NPM](https://nodei.co/npm/datapackage-spec.png)](https://nodei.co/npm/datapackage-spec/)

```
npm install datapackage-spec
```

# API

Start by requiring the library:

```
spec = require('datapackage-spec')
```

## parse

```
spec.parse(specString)
```

Parse a Data Package Spec string to a Spec object/dictionary.

# Tests

Run the tests with:

    npm test
