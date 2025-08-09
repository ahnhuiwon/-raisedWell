"use strict";
/**
 * Section 컴포넌트
 */
class Section extends DomObject {
    /**
     * Section 컴포넌트
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
            <section class="sectionWrap" id="sectionWrap">
                <div class="agentStand" id="agentStand"></div>
                <article class="agentCard">
                    <div class="cardPercent">
                        <div class="cardWrap">
                            <div class="card">
                                <div class="cardChild" id="cardChild">
                                    <p>?</p>
                                </div>
                            </div>
                        </div>
                        <div class="percent">
                            <div class="progress-bg">
                                <div class="progress-bar" id="progress-bar"></div>
                            </div>
                        </div>
                        <div class="pointWrap">
                            <div class="pointBoard">
                                <p class="resultPoint" id="resultPoint">0</p>
                            </div>
                        </div>
                        <div class="abilityBoard">
                            <p class="initBoard" id="initBoard">에이전트를 먼저 선택해주세요</p>
                            <form id="agentAbilityForm"></from>
                        </div>
                    </div>
                </article>
            </section>
        `;
        this.contentsMobile = ``;
        this.stylePc = `<style>
            .sectionWrap {
                position: absolute;
                width: 960px;
                height: 140px;
                left: 100px;
                bottom: 180px;
            }

            .agentStand {
                width: 400px;
                height: 653px;
                position: absolute;
                bottom: 0;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                z-index: -200;
                left: 50%;
                margin-left: -200px;
            }

            .agentCard {
                width: 100%;
                height: 100%
            }

            .cardPercent {
                width: 760px;
                height: 100px;
            }

            .cardWrap {
                width: 250px;
                height: 120px;
                background: linear-gradient(to right, #FDCE4C, #FDAF33);
                transform: skew(-20deg);
                border-top-left-radius: 15px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .card {
                width: 230px;
                height: 100px;
                background-color: #131413;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }

            .cardChild {
                transform: skew(20deg);
                width: 100%;
                height: 100%;
                display: flex;           
                align-items: center;
                justify-content: center;
            }

            .cardChild > p {
                font-size: 9rem;
                color: #FFFFFF;
            }

            .cardAgentImage {
                background-size: cover;
                background-position: center;
                width: 120%;
                height: 100%;
                margin-left: -10%;
            }

            .percent {
                display: inline-flex;
                width: 530px;
                height: 40px;
                position: absolute;
                top: 0;
                margin-left: 14px;
                /*background: linear-gradient(to right, #FDAF33, #FC1415);*/
                background-color: #343A40;
                transform: skew(-20deg);
            }

            .progress-bg {
                height: 100%;
                width: 100%;
                color: white;
                background: #FDAF33;
            }

            .progress-bar {
                width: 0;
                height: 100%;
                transition: width 1s ease;

                /* 기본 배경색 + 스트라이프 패턴 */
                background: 
                  repeating-linear-gradient(
                    135deg,               /* 스트라이프 각도 */
                    rgba(255,255,255,0.2) 0px,
                    rgba(255,255,255,0.2) 10px,
                    transparent 10px,
                    transparent 20px
                  ),
                  #FC1415; 

                /* 스트라이프 애니메이션 */
                background-size: 28.32px 28.32px;
                animation: moveStripes 15s linear infinite;
            }

            .pointWrap {
                width: 174px;
                height: 80px;
                position: absolute;
                top: -50%;
                margin-top: 30px;
                right: 0;
                background: linear-gradient(to bottom right, #B3B3B3, #999999);
                clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%);
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .pointBoard {
                width: 144px;
                height: 60px;
                margin-left: 5px;
                background: linear-gradient(to bottom right, #0C0C0C, #0E0E0E);
                clip-path: polygon(22px 0, 100% 0, 100% 100%, 0 100%);
                border-top-right-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .abilityBoard {
                position: absolute;
                width: 870px;
                height: auto;
                top: 0;
                left: 40px;
                background-color: rgba(35, 34, 34, 1);
                background-image: url("./resource/image/boardBackground.png");
                background-size: cover;
                background-repeat: no-repeat;
                z-index: -100;
                border: 10px solid #999999;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                padding: 15px 15px;
            }

            .abilityBoard > p {
                margin-top: 35px;
                margin-left: 215px;
                color: rgb(255, 255, 255);
                filter: grayscale(1) brightness(.6);
                font-size: 1.8rem;
            }

            .abilityBoard > form {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                margin-top: 45px;
                flex-wrap: wrap;
            }

            .inputWrap {
                width: 230px;
                color: white;
                font-size: 1rem;
                background-color: #000000;
                border-radius: 30px;
                margin-bottom: 10px;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'GmarketSansMedium';
                margin-left: 20px;
            }

            .inputWrap > input {
                width: 100px;
                text-align: right;
                height: 100%;
                background-color: black;
                border: none;
                outline: none;
                font-size: 1rem;
                font-family: "zenless";
            }

            .normal {
                color: white;
            }

            .point {
                color: #FFAF2A;
            }

            .resultPoint {
                font-size: 2.5rem;
                color: #15B9FB;
                margin-right: 15px;
                letter-spacing: 1px;
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
    /**
     * Aside 에이전트 클릭 시
     *
     * 프로그레스바, 점수 초기화
     */
    resetBoard() {
        document.getElementById("progress-bar").style.width = "0";
        document.getElementById("resultPoint").innerText = "0";
    }
    /**
     * Board 업데이트
     * @param { Object } agentObj 에이전트 정보
     */
    updateBoard(agentObj) {
        /**
         * 유저 스펙 점수 계산 함수
         *
         * @param { Object } agentObj 에이전트 정보
         */
        const changeValue = (agentObj) => {
            let sumPoint = 0;
            const abilityArr = [];
            const formElement = document.getElementById("agentAbilityForm");
            const formData = new FormData(formElement);
            const abilityData = {};
            formData.forEach((value, key) => {
                abilityData[key] = Number(value);
            });
            const validAbilities = agentObj.ability.filter((abilityObj) => abilityObj.valid);
            validAbilities.forEach((abilityObj) => {
                const key = Object.keys(abilityObj)[0];
                const agentValue = abilityObj.amount;
                const inputValue = abilityData[key];
                abilityArr.push({ name: key, user: inputValue, standard: agentValue });
            });
            abilityArr.forEach((abilityList) => {
                sumPoint += Number(abilityList.user) / Number(abilityList.standard);
            });
            let result = Math.floor((sumPoint / abilityArr.length) * 100);
            if (result > 100) {
                result = 100;
            }
            document.getElementById("resultPoint").innerText = String(result);
            document.getElementById("progress-bar").style.width = `${result}%`;
        };
        /**
         * 에이전트 이미지 변경 함수
         *
         * @param { Object } agentParam 에이전트 정보
         */
        const changeAgentImage = (agentParam) => {
            const cardImageElement = document.getElementById("cardChild");
            const standImageElement = document.getElementById("agentStand");
            cardImageElement.style.display = "block";
            cardImageElement.innerHTML = `<div class="cardAgentImage" style="background-image: url('./resource/image/agentFace/${agentParam.image}.png')"></div>`;
            standImageElement.style.backgroundImage = `url('./resource/image/agentStand/${agentParam.image}.png')`;
        };
        /**
         * 에이전트 텍스트 변경 함수
         *
         * @param { Object } agentParam 에이전트 정보
         */
        const chageAgentName = (agentParam) => {
            const agentNameElement = document.getElementById("initBoard");
            agentNameElement.innerText = `${agentParam.korName}`;
        };
        /**
         * 에이전트 능력치 Form 변경 함수
         *
         * @param { Object } agentParam 에이전트 정보
         */
        const changeAgentForm = (agentParam) => {
            let htmlString = "";
            const agentAbilityForm = document.getElementById("agentAbilityForm");
            agentParam.ability.forEach((abilityObj, index) => {
                if (abilityObj.valid) {
                    htmlString += `
                        <div class="inputWrap ${abilityObj.valid ? "point" : ""}">
                            <span>${Object.keys(abilityObj)[0]}</span>
                            <input type="number" id="ability${index}" class="point" name="${Object.keys(abilityObj)[0]}" value=0>
                        </div>`;
                }
            });
            agentAbilityForm.innerHTML = htmlString;
            agentObj.ability.forEach((abilityObj, index) => {
                if (abilityObj.valid) {
                    this.addEventer(`#ability${index}`, "input", () => { changeValue(agentObj); });
                }
            });
        };
        changeAgentImage(agentObj);
        chageAgentName(agentObj);
        changeAgentForm(agentObj);
    }
}
const section = new Section("section");
section.showElement();
