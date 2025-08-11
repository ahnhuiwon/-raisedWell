/**
 * Header 컴포넌트
 */
class Header extends DomObject {

    /**
     * Header 컴포넌트
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
            <div class="header" id="header">
                <div class="titleBox">
                    <div class="logoBox"></div>
                    <div class="titleTextBox">
                        <h1>젠레스 존 제로</h1>
                        <h1>이 정도면 잘 키웠다</h1>
                    </div>
                </div>
            </div>
        `;

        this.contentsMobile = `
            <div class="header" id="header">
                <div class="titleBox">
                    <div class="logoBox"></div>
                    <div class="titleTextBox">
                        <h1>젠레스 존 제로</h1>
                        <h1>이 정도면 잘 키웠다</h1>
                    </div>
                </div>
            </div>
        `;

        this.stylePc = `<style>
            .header {
                width: 100%;
                height: auto;
                background-color: rgba(35, 34, 34, 1);
                background-image: url(./resource/image/headerBackground.png);
                background-repeat: no-repeat;
                background-position: center;
                padding: 20px 106px 20px 106px;
                border-bottom: 2px solid #8c9298;
                position: fixed;
                z-index: 1000;
            }

            .titleBox {
                display: flex;
            }

            .logoBox {
                width: 70px;
                height: auto;
                background-image: url(./resource/image/logo.svg);
                background-repeat: no-repeat;
                background-position: center;
            }

            .titleTextBox {
                margin-left: 15px;
            }

            .titleTextBox > h1 {
                color: #F5F5F5;
                font-size: 1.5rem;
                font-weight: 200;
            }
        </style>`;

        this.styleMobile = `<style>
            .header {
                width: 100%;
                height: 46px;
                background-color: rgba(35, 34, 34, 1);
                background-image: url(./resource/image/headerBackground.png);
                background-repeat: no-repeat;
                background-position: center;
                padding: 10px 0 10px 0;
                border-bottom: 2px solid #8c9298;
                position: fixed;
                z-index: 1000;
                top: 0;
            }

            .titleBox {
                display: flex;
            }

            .logoBox {
                width: 70px;
                height: auto;
                background-image: url(./resource/image/logo.svg);
                background-repeat: no-repeat;
                background-position: center;
            }

            .titleTextBox {
                margin-left: 5px;
            }

            .titleTextBox > h1 {
                color: #F5F5F5;
                font-size: 1rem;
                font-weight: 200;
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
        this.displayContent( "#root" );
    }
}

const header = new Header( "header" );
header.showElement();