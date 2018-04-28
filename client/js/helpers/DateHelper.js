class DateHelper {

    constructor() {
        throw new Error('This helper cannot be initialized with new');
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

    static textoParaData(texto) {
        
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error('The format is dd/mm/aaaa');
        
        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
        
    }


}