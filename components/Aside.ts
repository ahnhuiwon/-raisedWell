
/**
 * Aside 컴포넌트
 */
class Aside extends DomObject {

    /**
     * Aside 컴포넌트
     * 
     * Class constructor
     *  
     * @param { string } id 식별자
     */
    constructor( id: string ) {
        super( id );
    }


    /**
     * 
     * 컴포넌트 초기 셋팅 메소드
     * 
     */
    initDom() {
        this.contentsPc = `
            <div class="asideWrap" id="asideWrap">
                <div class="searchWrap">
                    <i class="xi-search"></i>
                    <input class="searchInput" id="searchInput" placeholder="에이전트를 입력해주세요" />
                </div>
                <section class="sideBar" id="sideBar">
                </section>
            </div>
        `;

        this.contentsMobile = `
            <aside class="asideWrap" id="asideWrap">
                <section class="sideBar" id="sideBar"></section>
            </aside>
        `;

        this.stylePc = `<style>
            .asideWrap {
                position: fixed;
                right: 0;
                width: 670px;
                height: calc(100vh - 296px);
                display: flex;
                flex-flow: row nowrap;
            }

            .searchWrap {
                width: 240px;
                height: 45px;
                background: #A1D600;
                right: 25px;
                position: absolute;
                top: 138px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .searchWrap > i {
                font-size: 1.5rem;
                color: #292929;
            }

            .searchWrap > input {
                height: 35px;
                border: none;
                background: #292929;
                border-radius: 20px;
                color: white;
                font-size: 1rem;
                padding: 0 15px;
                width: 160px;
                line-height: 35px;
                margin-left: 5px;
                outline: none !important;
                box-shadow: none !important;
            }

            .sideBar {
                position: absolute;
                width: calc(100% - 130px);
                padding-top: 200px;
                padding-bottom: 80px;
                top: -5%;
                left: -10px;
                height: 115%;
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                align-items: flex-start;
                overflow-y: scroll;
                overflow-x: hidden;
                transform: rotate(-16deg);
                scrollbar-width: none;
            }

            .unit {
                position: relative;
                transform: rotate(16deg);
                width: 172px;
                height: 169px;
                overflow: hidden;
                margin-bottom: 20px;
                background-size: cover;
                background-image: url("./resource/image/agent/yixuan.webp");
                cursor: pointer;
            }

            .deactive {
                filter: grayscale(1) brightness(.3);
                pointer-events: none;
            }

            .active::after {
                content: "";
                position: fixed;
                top: 0; /* unit 바로 아래 */
                left: 0;
                width: 100%;   /* 원하는 크기 */
                height: 100%;
                background-image: url("./resource/image/frame.webp");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                pointer-events: none; /* 마우스 이벤트 무시 */
            }

            .unit:hover::after {
                content: "";
                position: fixed;
                top: 0; /* unit 바로 아래 */
                left: 0;
                width: 100%;   /* 원하는 크기 */
                height: 100%;
                background-image: url("./resource/image/frame.webp");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                pointer-events: none; /* 마우스 이벤트 무시 */
            }

            .unit:nth-child(3n + 1) {
                margin-top: -85px;
                margin-left: 20px;
            }

            .unit:nth-child(3n + 2) {
                margin-left: -20px;
            }

            .unit:nth-child(3n) {
                margin-left: -20px;
            }
        </style>`;

        this.styleMobile = `
            <style>
                .asideWrap {
                    position: fixed;
                    top: 68px;
                    width: 100vw;
                    height: 100px;
                    background: #000;
                    box-shadow: 0 0 10px 10px #000;
                    display: flex;
                    flex-flow: row nowrap;
                }

                .sideBar {
                    width: 100%;
                    height: 100%;
                    transform: rotate(0deg);
                    padding: 10px;
                    flex-flow: row nowrap;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    top: 0;
                    left: 0;
                    justify-content: flex-start;
                    align-items: flex-start;
                    display: flex;
                }

                .sideBar::-webkit-scrollbar {
                  display: none;
                }

                .sideBar {
                    -ms-overflow-style: none; /* 인터넷 익스플로러 */
                    scrollbar-width: none; /* 파이어폭스 */
                }

                .unit {
                    transform: rotate(0deg);
                    margin: 0 !important;
                    height: 80px;
                    min-height: 80px;
                    width: 82px;
                    min-width: 82px;
                    position: relative;
                    background-size: cover;
                    position: relative;
                }

                .deactive {
                    filter: grayscale(1) brightness(.3);
                    pointer-events: none;
                }

                .active::after {
                    content: "";
                    position: fixed;
                    top: 0; /* unit 바로 아래 */
                    left: 0;
                    width: 100%;   /* 원하는 크기 */
                    height: 100%;
                    background-image: url("./resource/image/frame.webp");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    pointer-events: none; /* 마우스 이벤트 무시 */
                }

                .unit:hover::after {
                    content: "";
                    position: fixed;
                    top: 0; /* unit 바로 아래 */
                    left: 0;
                    width: 100%;   /* 원하는 크기 */
                    height: 100%;
                    background-image: url("./resource/image/frame.webp");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    pointer-events: none; /* 마우스 이벤트 무시 */
                }
            </style>
        `;
    }


    /**
     * 
     * Aside 에이전트 카드
     * 
     * 리스트 제작, 렌더 메소드
     * 
     * @param { Array } agentList 에이전트 리스트
     */
    showAgentList( agentList: any ) {

        const readAgentList = ( agentList: any ) => {

            let htmlString = "";

            agentList.forEach( ( list: any ) => {
                htmlString += `<div id="agentList${list.id}" class="unit" style="background-image : url('./resource/image/agent/${list.image}.webp')"></div>`;
            });

            return htmlString;

        }

        document.querySelector("#sideBar")!.innerHTML += readAgentList( agentList );

    }


    /**
     * 
     * Aside 에이전트 카드
     * 
     * 리스트 리셋
     * 
     */
    resetAgentList() {

        const domElements = document.querySelectorAll('[id^="agentList"]');

        domElements.forEach( ( element ) => { 
            switch( element.className ) {
                case "unit" :
                    element.className = "unit";
                    break;
                case "unit active" :
                    element.className = "unit";
                    break;
                default:
                    element.className = "unit deactive";
            }
        });
    }


    /**
     * 클릭 시, 에이전트 카드 활성화 
     * 
     * @param { Array } agentList 에이전트 리스트
     */
    activeAgentList( agentList: Agent ) {

        this.resetAgentList();

        section.resetBoard();
        section.updateBoard( agentList );

        document.getElementById(`agentList${agentList.id}`)!.className = "unit active";
        
    }


    /**
     * 에이전트 검색 메소드
     * 
     * @param { Event } e 이벤트
     * @param { Array } agentList 에이전트 리스트
     */
    filterAgentList( e: Event, agentList: Agent[] ) {

        let htmlString = "";
        const eventTarget = e.target as HTMLInputElement;
        const targetValue = eventTarget.value.trim();
        const matchedNameArr: string[] = [];

        /**
         * 입력한 데이터와 에이전트 이름 대조 (한글자 검색 가능)
         */
        agentList.forEach( ( agent: Agent ) => {

            if( agent.korName.includes( targetValue ) ) {
                matchedNameArr.push( agent.korName );
            }

            if( matchedNameArr.includes( agent.korName ) ) {
                htmlString += `<div id="agentList${agent.id}" class="unit" style="background-image : url('./resource/image/agent/${agent.image}.webp')"></div>`;
            } else {
                htmlString += `<div id="agentList${agent.id}" class="unit deactive" style="background-image : url('./resource/image/agent/${agent.image}.webp')"></div>`;
            }

        } );
        
        document.querySelector("#sideBar")!.innerHTML = htmlString;
        

        /**
         * 에이전트 리스트
         * 
         * 이벤트 리스너 등록
         */
        agentList.forEach( ( list: Agent ) => { 
            this.addEventer(`#agentList${list.id}`, "click", () => { this.activeAgentList( list ) });
        });

    }


    /**
     * 컴포넌트의 요소들을
     * 
     * 화면에 렌더링하는 메소드
     * 
     */
    showElement() {

        this.initDom();
        this.displayContent( "#root" );
        this.showAgentList( agentList );

        if( window.innerWidth > 800 ) {
            this.addEventer("#searchInput", "input", (e) => { this.filterAgentList( e, agentList ) });
        }
        
        agentList.forEach( ( list: Agent ) => { 
            this.addEventer(`#agentList${list.id}`, "click", () => { this.activeAgentList( list ) });
        } );

    }

}

const aside = new Aside( "aside" );
aside.showElement();