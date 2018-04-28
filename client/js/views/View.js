class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('The template() method needs to be implemented');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    
}