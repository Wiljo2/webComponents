const template = document.createElement("div");
template.innerHTML = `
    <style> 
        .texto{
            color: red;
        }
        p{
            color:blue;

        }
    </style>
    <p class ="texto"> Hola Mundo </p>
    <p> texto ejemplo de clase </p>
`

class myElement extends HTMLElement {
    constructor(){
        super()
        this.p = document.createElement("p"); 
    }
    connectedCallback(){
        this.p.textContent = "Hello world !!";
        this.append(this.p);
        this.appendChild(template)
    }
}

customElements.define("my-element", myElement);