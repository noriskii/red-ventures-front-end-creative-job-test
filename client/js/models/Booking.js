class Booking {

    constructor(dataInicio, dataFim) {

        this._dataInicio = dataInicio || '';
        this._dataFim = dataFim || '';
        
    }

    get dataInicio() {
        return new Date(this._dataInicio.getTime());
    }

    get dataFim() {
        return new Date(this._dataFim.getTime());
    }

    get estadia() {
        
        let diff = Math.abs(
            this._dataFim.getTime() - 
            this._dataInicio.getTime());
        
        return Math.ceil(diff / (1000 * 3600 * 24));

    }


}