
`beautinator`
=====

A quick and dirty javascript pretty printer for javascript objects that runs in the browser. Works for objects that contain functions.

Motivation
==========

I wanted a module that can print beautify javascript objects and runs in the browser. But all the modules I could find are either
heavy-weight server-only libraries like prettier and js-prettify, or
libraries that don't return valid javascript like fmt-obj and pretty-format.
I did find https://github.com/xpl/string.ify but it cause me trouble since it was written in ES6, which my tools don't support yet.

Install
=======

```
npm install beautinator
```


Usage
=====

Accessing beautinator:
```javascript
// node.js
var beautinator = require('beautinator')

// amd
require.config({paths: {beautinator: '../dist/beautinator.umd.js'}})
require(['beautinator'], function(beautinator) { /* your code */ })

// global variable
<script src="beautinator.umd.js"></script>
beautinator; // beautinator.umd.js can define beautinator globally if you really
          //   want to shun module-based design
```

Using keysight:

`var result = beautinator(jsObject)`
* `result` will contain the object stringified.

How to Contribute!
============

Anything helps:

* Creating issues (aka tickets/bugs/etc). Please feel free to use issues to report bugs, request features, and discuss changes
* Updating the documentation: ie this readme file. Be bold! Help create amazing documentation!
* Submitting pull requests.

How to submit pull requests:

1. Please create an issue and get my input before spending too much time creating a feature. Work with me to ensure your feature or addition is optimal and fits with the purpose of the project.
2. Fork the repository
3. clone your forked repo onto your machine and run `npm install` at its root
4. If you're gonna work on multiple separate things, its best to create a separate branch for each of them
5. edit!
6. If it's a code change, please add to the unit tests (at test/tests.js) to verify that your change
7. When you're done, run the unit tests and ensure they all pass
8. Commit and push your changes
9. Submit a pull request: https://help.github.com/articles/creating-a-pull-request

Change Log
=========

* 0.0.1 - first commit!

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT
