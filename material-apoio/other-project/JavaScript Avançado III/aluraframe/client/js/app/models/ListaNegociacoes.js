class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];

    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    
    }
    
    ordena(criterio) {
        
        this._negociacoes.sort(criterio);
        
    }
    
    inverteOrdem() {
        
        this._negociacoes.reverse();
        
    }
    
    esvazia() {
        
        this._negociacoes = [];
        
    }
    
    get negociacoes() {

        return [].concat(this._negociacoes);

    }
    
    get volumeTotal() {
        
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0)
        
    }

}