class Aside extends DomObject {

    constructor( id: string ) {
        super( id );
    }

    initDom() {
        this.contentsPc = `
            <div class="asideWrap" id="asideWrap">
                <div class="searchWrap">
                    <i class="xi-search"></i>
                    <input class="searchInput" id="searchInput" />
                </div>
                <section class="sideBar" id="sideBar">
                </section>
            </div>
        `;

        this.contentsMobile = ``;
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
    }


    showAgentList( agentList: any ) {

        const readAgentList = ( agentList: any ) => {

            let htmlString = "";

            agentList.forEach( ( list: any ) => {
                htmlString += `<div id="agentList${list.id}" class="unit" style="background-image : url('./resource/image/agent/${list.image}')"></div>`;
            });

            return htmlString;

        }

        document.querySelector("#sideBar")!.innerHTML += readAgentList( agentList );

    }

    filterAgentList( e: any, agentList: any ) {

        const agentActive = ( agentList: any ) => {

            const resetActiveList = () => {

                const domElements = document.querySelectorAll('[id^="agentList"]');

                domElements.forEach( ( element ) => { 
                    if( element.className === "unit" ) {
                        element.className = "unit"
                    } else if( element.className === "unit active" ) {
                        element.className = "unit"
                    } else {
                        element.className = "unit deactive"
                    }
                } );

            }

            resetActiveList();
            document.getElementById(`agentList${agentList.id}`)!.className = "unit active";

        }

        let htmlString = "";
        const searchValue = e.target.value.trim();
        const matchedNameArr: string[] = [];

        agentList.forEach( ( list: any ) => {
            const agentName = list.korName;

            if( agentName.includes( searchValue ) ) {
                matchedNameArr.push( agentName );
            }
        } );

        agentList.forEach( ( agent: any ) => {
            if( matchedNameArr.includes( agent.korName ) ) {
                htmlString += `<div id="agentList${agent.id}" class="unit" style="background-image : url('./resource/image/agent/${agent.image}')"></div>`;
            } else {
                htmlString += `<div id="agentList${agent.id}" class="unit deactive" style="background-image : url('./resource/image/agent/${agent.image}')"></div>`;
            }
        } );
        
        document.querySelector("#sideBar")!.innerHTML = htmlString;
        
        agentList.forEach( ( list: any ) => { 
            this.addEventer(`#agentList${list.id}`, "click", () => { agentActive( list ) });
        } );
    }


    showElement() {

        const agentActive = ( agentList: any ) => {

            const resetActiveList = () => {

                const domElements = document.querySelectorAll('[id^="agentList"]');

                domElements.forEach( ( element ) => { 
                    element.className = "unit";
                } );

            }

            resetActiveList();
            document.getElementById(`agentList${agentList.id}`)!.className = "unit active";

        }

        this.initDom();
        this.displayContent( "#root" );
        this.showAgentList( agentList );
        this.addEventer("#searchInput", "input", (e) => { this.filterAgentList( e, agentList ) });

        agentList.forEach( ( list ) => { 
            this.addEventer(`#agentList${list.id}`, "click", () => { agentActive( list ) });
        } );

    }

}

const aside = new Aside( "aside" );
aside.showElement();