"use strict";
/**
 * Dom Object를 구성하는
 *
 * 추상 클래스
 */
class DomObject {
    /**
     * DomObject Class constructor
     *
     * @param { string } id 식별자
     */
    constructor(id) {
        this.id = id;
        this._contentsPc = "";
        this._contentsMobile = "";
        this._stylePc = "";
        this._styleMobile = "";
    }
    /**
     * PC 버전 컨텐츠
     */
    set contentsPc(content) {
        this._contentsPc = content;
    }
    /**
     * Mobile 버전 컨텐츠
     */
    set contentsMobile(content) {
        this._contentsMobile = content;
    }
    /**
     * PC 버전 style
     */
    set stylePc(style) {
        this._stylePc = style;
    }
    /**
     * Mobile 버전 style
     */
    set styleMobile(style) {
        this._styleMobile = style;
    }
    /**
     *
     * PC / MOBILE 분기 메소드
     *
     * @param { string } domLocation DOM 객체 id property
     */
    displayContent(domLocation) {
        if (window.innerWidth > 800) {
            document.querySelector(domLocation).innerHTML += this._contentsPc + this._stylePc;
        }
        else {
            document.querySelector(domLocation).innerHTML += this._contentsMobile + this._styleMobile;
        }
    }
    /**
     *
     * DOM 객체에 이벤트 리스너 등록
     *
     * @param { string } selector DOM 객체 id property
     * @param { string } eventName Event 이름
     * @param { Event } eventFunction 등록할 이벤트 리스너
     */
    addEventer(selector, eventName, eventFunction) {
        document.querySelector(selector).addEventListener(eventName, eventFunction);
    }
}
