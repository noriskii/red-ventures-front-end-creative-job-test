class BookingMessage {

    constructor(dataInicio, dataFim) {

        this._dataInicio = dataInicio || '';
        this._dataFim = dataFim || '';
        
    }

    set dataInicio(dataInicio) {
        this._dataInicio = dataInicio;
    }

    set dataFim(dataFim) {
        this._dataFim = dataFim;
    }

    get dataInicio() {
        return this._dataInicio;
    }

    get dataFim() {
        return this._dataFim;
    }



}