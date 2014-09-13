NodeJS library for handling Data Package Spec(ifier)s or Spec(ifier) Strings.

Can also be used for getting normalized Data Package URLs. Example:

```
var spec = require('datapackage-spec');

var dp = 'http://github.com/datasets/gdp';
var ourSpec = spec.parse(dp);

// https://raw.github.com/datasets/gdp/master/datapackage.json
console.log(ourSpec.dataPackageJsonUrl);
```

# Data Package Spec (Specifier)

Data Packages are identified by a Data Package Spec(ifier) or,
more commonly (for humans), by a Spec String.

A Data Package "Spec" is a small Object/Hash which describing the identify and
location of a Data Package. Its structure is like:

    {
      // URL to base of the Data Package
      // This URL will *always* have a trailing /
      url: ...
      // URL to datapackage.json
      dataPackageJsonUrl: ...
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

## Copyright and License

Copyright 2012-2013 Rufus Pollock.

Licensed under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

