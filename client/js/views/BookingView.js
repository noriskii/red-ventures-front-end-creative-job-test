class BookingView extends View {

    template(model) {
        return (model.dataInicio && model.dataFim) 
            ? `<p class="message">Best choices between ${model.dataInicio} and ${model.dataFim}</p>` 
            : '';
    }

}




