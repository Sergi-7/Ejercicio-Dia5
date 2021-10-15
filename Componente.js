class Component {
    element;

    constructor(parentElement, className, HTMLtag) {
        this.element = document.createElement(HTMLtag);
        this.element.className = className;
        parentElement.append(this.element);
    }
}

export default Component;
