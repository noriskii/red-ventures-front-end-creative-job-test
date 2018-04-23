/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/components/buttons')
        .get(api.xxx);
        
    app.route('/components/calendar')
        .get(api.yyy);
        
    app.route('/components/formulario')
        .get(api.zzz);  
        
    app.route('/components')
        .get(api.xyz);          
};