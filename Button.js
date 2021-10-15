import Component from "./Componente.js";

class Button extends Component {
    element;
    parentElement;
    constructor(parentElement, className, htmlTag = "button") {
        super();
        this.element = document.createElement(htmlTag);
        this.parentElement = parentElement;
        parentElement.appendChild(this.element);
    }
}

export default Button;
