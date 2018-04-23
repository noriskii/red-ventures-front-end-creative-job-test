/* 
    Gerar API de Components
*/
var api = {}

api.buttons = function(req, res) {
    
    //retornar HTML
    res.json(this.button);

};

api.calendar = function(req, res) {

    //retornar HTML
	setTimeout(function() {
		res.json(this.calendar);	
	}, 500);
    
};

api.formulario = function(req, res) {

    //retornar HTML
    res.json(this.formulario);
    
};

api.front = function(req, res) {

    //retornar HTML
    res.json(this.front);
    
};


module.exports = api;