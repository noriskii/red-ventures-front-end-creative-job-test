class ListaHoteis {

    constructor() {

        this._hoteis = [];

    }

    adiciona(hotel) {

        this._hoteis.push(hotel);

    }

    orderna(hotel) {

        this._hoteis.sort(criterio);

    }

    inverteOrdem() {

        this._hoteis.reverse();

    }

    esvazia() {

        this._hoteis = [];
    
    }

    get hoteis() {

        return [].concat(this._hoteis);

    }
}