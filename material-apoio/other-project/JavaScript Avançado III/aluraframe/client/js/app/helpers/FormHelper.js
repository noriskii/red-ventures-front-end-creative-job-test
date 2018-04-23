class FormHelper {

    constructor() {
        throw new Error('This helper cannot be initialized with new');
    }

    static limpa(formulario, focoInicial) {
        formulario.reset();
        focoInicial.focus();
    }

}