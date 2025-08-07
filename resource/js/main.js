"use strict";
class DomObject {
    constructor(id) {
        this.id = id;
        this._contentsPc = "";
        this._contentsMobile = "";
        this._stylePc = "";
        this._styleMobile = "";
    }
    set contentsPc(content) {
        this._contentsPc = content;
    }
    set contentsMobile(content) {
        this._contentsMobile = content;
    }
    set stylePc(style) {
        this._stylePc = style;
    }
    set styleMobile(style) {
        this._styleMobile = style;
    }
    displayContent(domLocation) {
        if (window.innerWidth > 800) {
            document.querySelector(domLocation).innerHTML += this._contentsPc + this._stylePc;
        }
        else {
            document.querySelector(domLocation).innerHTML += this._contentsMobile + this._styleMobile;
        }
    }
    addEventer(selector, eventName, eventFunction) {
        document.querySelector(selector).addEventListener(eventName, eventFunction);
    }
}
