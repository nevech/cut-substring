# cut-substring
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

var str = cutSubstr('Some string', startIndex, endIndex); // result: Some
```

Cut by RegExp

```js
var cutSubstr = require('cut-substring');

var startRE = /^[a-z]+/i;
var endRE = /\-/;

var str = cutSubstr('Some-string', startRE, endRE); // result: string
```

## License
[The MIT License](./LICENSE)