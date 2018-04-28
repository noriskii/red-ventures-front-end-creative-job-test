class BookingController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDataInicio = $('#dataInicio');
        this._inputDataFim = $('#dataFim');

        this._listaHoteis = new Bind(
            new ListaHoteis(),
            new HotelView($('#hotelView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

        this._bookingMessage = new Bind(
            new BookingMessage(),
            new BookingView($('#bookingView')),
            'dataInicio', 'dataFim');

        this._service = new HotelService();
    }

    pesquisa(event) {

        event.preventDefault();

        var booking = this._addBooking();

        this._bookingMessage.dataInicio = DateHelper.dataParaTexto(booking.dataInicio);
        this._bookingMessage.dataFim = DateHelper.dataParaTexto(booking.dataFim);

        this._listaHoteis.esvazia();

        this._service
            .obterHoteis()
            .then(hoteis => {
                return hoteis.map(objeto => {
                    let hotel = new Hotel(
                        objeto.name,
                        objeto.description,
                        objeto.image,
                        objeto.rate,
                        objeto.price,
                        objeto.price_history,
                        booking.estadia
                    );
                    this._listaHoteis.adiciona(hotel);
                })
            }).catch(erro => {
                throw new Error(erro);
            });
    }

    _addBooking() {

            return new Booking(
                DateHelper.textoParaData(this._inputDataInicio.value),
                DateHelper.textoParaData(this._inputDataFim.value)
            );

    }


}