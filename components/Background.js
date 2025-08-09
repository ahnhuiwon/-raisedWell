"use strict";
/**
 * Background 컴포넌트
 */
class Background extends DomObject {
    /**
     * Background 컴포넌트
     *
     * Class constructor
     *
     * @param { string } id 식별자
     */
    constructor(id) {
        super(id);
    }
    /**
     *
     * 컴포넌트 초기 셋팅 메소드
     *
     */
    initDom() {
        this.contentsPc = `
            <div class="rollingBg">
                <div class="rollingBgCover"></div>
                <div class="rollingBgContent">
                    <div class="rollingTop">
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                    </div>
                    <div class="rollingBottom">
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                        <ul>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                            <li> ZENLESS </li>
                            <li> ZONE </li>
                            <li> ZERO </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        this.contentsMobile = ``;
        this.stylePc = `<style>
            .rollingBg {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                background-color: rgba(10, 10, 10, 1);
                z-index: -1000;
            }

            .rollingBgCover {
                background: linear-gradient(rgba(0, 0, 0, 0.2) 0.3%, rgba(7, 7, 7, 0.9) 97.7%);
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
            }

            .rollingBgContent {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 2;
                transform-origin: 50%;
                --un-rotate-x: 0;
                --un-rotate-y: 0;
                --un-rotate-z: 0;
                --un-rotate: -45deg;
                transform: translateX(0) translateY(0) translateZ(0) rotate(-45deg) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0) scaleX(1) scaleY(1) scaleZ(1);
            }

            .rollingTop {
                top: 50%;
                --un-translate-x: -50%;
                background-color: rgb(38, 39, 39);
                height: 812.5px;
                width: 150vw;
                transform: translateX(-50%) translateY(0) translateZ(0) rotate(0) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0) scaleX(1) scaleY(1) scaleZ(1);
                transition: background-color .4s linear;
                position: fixed;
                left: 50%;
                overflow: hidden;
                user-select: none;
            }

            .rollingTop > ul:nth-child(odd) {
                animation: 90s linear infinite bgAnimation2;
                display: flex;
                list-style: none;
            }

            .rollingTop > ul:nth-child(odd) > li {
                opacity: 1;
                color: rgb(51, 53, 52);
                height: auto;
                margin-left: 1rem;
                margin-right: 1rem;
                font-size: 195px;
                font-weight: 400;
                line-height: 162.5px;
                transition: all .4s linear;
                display: block;
            }

            .rollingTop > ul:nth-child(even) {
                animation: 90s linear infinite bgAnimation1;
                display: flex;
                list-style: none;
            }

            .rollingTop > ul:nth-child(even) > li {
                opacity: 1;
                color: rgb(51, 53, 52);
                height: auto;
                margin-left: 1rem;
                margin-right: 1rem;
                font-size: 195px;
                font-weight: 400;
                line-height: 162.5px;
                transition: all .4s linear;
                display: block;
            }

            .rollingBottom {
                bottom: 50%;
                --un-translate-x: -50%;
                height: 1125;
                width: 150vw;
                transform: translateX(-50%) translateY(0) translateZ(0) rotate(0) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0) scaleX(1) scaleY(1) scaleZ(1);
                transition: background-color .4s linear;
                position: fixed;
                left: 50%;
                overflow: hidden;
                user-select: none;
            }

            .rollingBottom > ul:nth-child(odd) {
                animation: 90s linear infinite bgAnimation1;
                display: flex;
                list-style: none;
            }

            .rollingBottom > ul:nth-child(even) {
                animation: 90s linear infinite bgAnimation2;
                display: flex;
                list-style: none;
            }

            .rollingBottom > ul:nth-child(odd) > li {
                opacity: 1;
                color: rgb(51, 53, 52);
                height: auto;
                margin-left: 1rem;
                margin-right: 1rem;
                font-size: 195px;
                font-weight: 400;
                line-height: 162.5px;
                transition: all .4s linear;
                display: block;
            }

            .rollingBottom > ul:nth-child(even) > li {
                opacity: 1;
                color: rgb(51, 53, 52);
                height: auto;
                margin-left: 1rem;
                margin-right: 1rem;
                font-size: 195px;
                font-weight: 400;
                line-height: 162.5px;
                transition: all .4s linear;
                display: block;
            }

            
        </style>`;
    }
    /**
     * 컴포넌트의 요소들을
     *
     * 화면에 렌더링하는 메소드
     *
     */
    showElement() {
        this.initDom();
        this.displayContent("#root");
    }
}
const background = new Background("background");
background.showElement();
