# cut-substring [![Build Status](https://travis-ci.org/nevech/cut-substring.svg?branch=master)](https://travis-ci.org/nevech/cut-substring) [![Coverage Status](https://coveralls.io/repos/nevech/cut-substring/badge.svg?branch=master&service=github)](https://coveralls.io/github/nevech/cut-substring?branch=master)
Cut a substring from a string by index or RegExp.

## Install

```sh
npm install cut-substring
```

## Usage

Cut by index

```js
var cutSubstr = require('cut-substring');

var startIndex = 4;
var endIndex = 10;

cutSubstr('Some string', startIndex, endIndex);
//=> Some
```

Cut by RegExp

```js
var cutSubstr = require('cut-substring');

var startRE = /^[a-z]+/i;
var endRE = /\-/;

cutSubstr('Some-string', startRE, endRE);
//=> string
```

## API

### cutSubstr(str, start, [end])

#### str

*Required*  
Type: `string`

#### start

*Required*  
Type: `number` or `RegExp`

#### end

Type: `number` or `RegExp`  
Default: `str.length`

## License
[The MIT License](./LICENSE)