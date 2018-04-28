class HotelService {

    constructor() {
        this._http = new HttpService();
    }

    obterHoteis() {

        return this._http
            .get('https://www.raphaelfabeni.com.br/rv/hotels.json')
            .then(hoteis => hoteis.hotels)
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter os Hotéis');
            })
            
    }
    
}