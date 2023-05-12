[![Build Status](https://travis-ci.org/albinotonnina/contenteditable-utilities.svg?branch=master)](https://travis-ci.org/albinotonnina/contenteditable-utilities)
[![Coverage Status](https://coveralls.io/repos/github/albinotonnina/contenteditable-utilities/badge.svg)](https://coveralls.io/github/albinotonnina/contenteditable-utilities)
[![bitHound Dependencies](https://www.bithound.io/github/albinotonnina/contenteditable-utilities/badges/dependencies.svg)](https://www.bithound.io/github/albinotonnina/contenteditable-utilities/master/dependencies/npm)

Contenteditable Utilities
=========

[codepen example](http://codepen.io/albino/pen/oZRPJK)


## Installation

  `npm install contenteditable-utilities`

## Usage

    import ContentEditable from 'contenteditable-utilities';
    // const ContentEditable = require('contenteditable-utilities');

        new ContentEditable({
            element: dummyElement,
            options: {
                onBlur: (value) => {
                    console.log(value);
                }
            }
        });


  value should be valid


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
