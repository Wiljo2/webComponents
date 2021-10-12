class MyCustomElement extends HTMLElement {
    constructor(){
        super()
        console.log("Hello World - Memory ");
    }

    connectedCallback() {
        console.log("Hello from The DOM");
    }
    disconnectedCallback(){
        console.log("bye from the DOM  ");
    }
}

customElements.define("my-element", MyCustomElement)

document.querySelector("my-element").remove()