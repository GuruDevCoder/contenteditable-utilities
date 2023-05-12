/* global window */

const expect = require('chai').expect;

const jsdom = require('jsdom');

var globals = require('globals');

global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;


import ContentEditable from '../src/index';
// const ContentEditable = require('../dist/index');

describe('index', () => {

    let dummyElement;

    const mouseBlurEvent = new window.MouseEvent('blur');
    const mouseFocusEvent = new window.MouseEvent('focus');

    beforeEach(() => {

        dummyElement = document.createElement('div');

        window.document.body.appendChild(dummyElement);

    });

    afterEach(() => {
        window.document.body.innerHTML = '';
    });

    it('should 1', (done) => {

        dummyElement.innerHTML = 'Lorem ipsum';

        new ContentEditable({
            element: dummyElement,
            options: {
                onBlur: (value) => {
                    expect(value).to.equal('Lorem ipsum');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should 2', (done) => {

        dummyElement.innerHTML = '<div><br>Lorem <br>ipsum</div>';

        new ContentEditable({
            element: dummyElement,
            options: {
                stripTags: false,
                onBlur: (value) => {
                    expect(value).to.equal('<div><br>Lorem <br>ipsum</div>');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should 3', (done) => {

        dummyElement.innerHTML = '<div><br>Lorem <br>ipsum</div>';

        new ContentEditable({
            element: dummyElement,
            options: {
                onBlur: (value) => {
                    expect(value).to.equal('<div><br>Lorem <br>ipsum</div>');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should 4', (done) => {

        dummyElement.innerHTML = '<div><br>Lorem <br>ipsum</div>';

        new ContentEditable({
            element: dummyElement,
            options: {
                stripTags: true,
                onBlur: (value) => {
                    expect(value).to.equal('Lorem ipsum');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should 5', () => {

        dummyElement.innerHTML = '';

        new ContentEditable({
            element: dummyElement,
            options: {
                stripTags: true,
                placeholderText: 'Placeholder text'
            }
        });


        expect(dummyElement.getAttribute('data-placeholder')).to.equal('Placeholder text');
        expect(dummyElement.classList.contains('placeholder')).to.true;

    });


    it('should 6', () => {

        dummyElement.innerHTML = '';

        new ContentEditable({
            element: dummyElement,
            options: {
                stripTags: true,
                placeholderText: 'Placeholder text'
            }
        });

        dummyElement.dispatchEvent(mouseFocusEvent);


        expect(dummyElement.getAttribute('data-placeholder')).to.equal('Placeholder text');
        expect(dummyElement.classList.contains('placeholder')).to.false;

    });

});
