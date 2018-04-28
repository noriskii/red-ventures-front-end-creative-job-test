class Hotel {

    constructor(nome, descricao, imagem, avaliacao, preco, historico, estadia) {

        this._nome = nome;
        this._descricao = descricao;
        this._imagem = imagem;
        this._avaliacao = avaliacao;
        this._preco = preco;
        this._historico = historico;
        this._estadia = estadia;

    }

    get nome() {
        return this._nome;
    }

    get descricao() {
        return this._descricao;
    }

    get imagem() {
        return this._imagem;
    }

    get avaliacao() {
        return this._avaliacao;
    }

    get preco() {
        return this._preco;
    }

    get historico() {
        return [].concat(this._historico);
    }

    get estadia() {
        return this._estadia;
    }
}