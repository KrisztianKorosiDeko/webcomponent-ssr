class HelloWorld extends HTMLElement {
    connectedCallback() {
        Promise.resolve()
            .then(() => {
                this.innerHTML = `<h1>Hello World!</h1>`;
            });
    }
}

customElements.define('hello-world', HelloWorld);

if (module && module.exports) {
    module.exports = HelloWorld;
}
