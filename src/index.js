const striptags = require('striptags');
const insertCss = require('insert-css');

export default class {

    constructor({element, options}) {

        this.element = element;
        this.options = options;

        this.element.setAttribute('data-placeholder', options.placeholderText);
        this.element.setAttribute('contenteditable', true);

        this.element.addEventListener('blur', this._onBlur.bind(this));
        this.element.addEventListener('focus', this._onFocus.bind(this));

        this._updatePlaceholder();

        insertCss('.placeholder { position: relative; }');
        insertCss('.placeholder:before { content: attr(data-placeholder);position: absolute;cursor: text; }');
    }

    isEmpty(element) {
        return element.textContent === '' && element.children.length === 0;
    }

    _onBlur() {
        const html = this.element.innerHTML;
        this.options.onBlur.call({}, this.options.stripTags ? striptags(html) : html);
        this._updatePlaceholder();
    }

    _onFocus() {
        this.element.classList.remove('placeholder');
    }

    _updatePlaceholder() {
        if (this.isEmpty(this.element)) {
            this.element.classList.add('placeholder');
        } else {
            this.element.classList.remove('placeholder');
        }
    }

}
