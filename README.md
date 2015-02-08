NodeJS library for handling [Data Package Identifiers or Identifier
Strings][identifiers].

For more on Data Package Identifiers see the [Data Package Identifier
Specification on DataProtocols][identifiers].

[identifiers]: http://dataprotocols.org/data-package-identifier/

Can also be used for getting normalized Data Package URLs. Example:

```
var identifier = require('datapackage-identifier');

var dp = 'http://github.com/datasets/gdp';
var ourIdentifier = identifier.parse(dp);

console.log(ourIdentifier.dataPackageJsonUrl);
// https://raw.github.com/datasets/gdp/master/datapackage.json

console.log(ourIdentifier.name);
// gdp
```

# Installation

[![NPM](https://nodei.co/npm/datapackage-identifier.png)](https://nodei.co/npm/datapackage-identifier/)

```
npm install datapackage-identifier
```

# API

Start by requiring the library:

```
identifier = require('datapackage-identifier')
```

## parse

```
identifier.parse(identifierString)
```

Parse a Data Package Identifier string to a Identifier object/dictionary and return it.

# Tests

Run the tests with:

    npm test

## Copyright and License

Copyright 2014-2015 Rufus Pollock.

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

