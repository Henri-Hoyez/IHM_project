class SessionManager{

    static makeUserEvent(){

        document.dispatchEvent(new CustomEvent('usr-evnt', {
            bubbles: true,
            composed: true,
            detail: null
        }));

        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles: true,
            composed: true,
            detail: null
        }));

    }
}