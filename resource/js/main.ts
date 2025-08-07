abstract class DomObject {

    id: string;
    _contentsPc: string;
    _contentsMobile: string;
    _stylePc: string;
    _styleMobile: string;

    constructor( id: string ) {
        this.id = id;
        this._contentsPc = "";
        this._contentsMobile = "";
        this._stylePc = "";
        this._styleMobile = "";
    }

    set contentsPc( content: string ) {
        this._contentsPc = content;
    }

    set contentsMobile( content: string ) {
        this._contentsMobile = content;
    }

    set stylePc( style: string ) {
        this._stylePc = style
    }

    set styleMobile( style: string ) {
        this._styleMobile = style;
    }


    displayContent( domLocation: string ) {
        if( window.innerWidth > 800 ) {
            document.querySelector( domLocation )!.innerHTML += this._contentsPc + this._stylePc;
        } else {
            document.querySelector( domLocation )!.innerHTML += this._contentsMobile + this._styleMobile;
        }
    }

    addEventer( selector: string, eventName: string, eventFunction: () => any ) {
        document.querySelector( selector )!.addEventListener( eventName, eventFunction );
    }
}