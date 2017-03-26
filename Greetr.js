(function(global, $) {
    
    // Greetr object defaults to construtor function
    var Greetr = function(firstname, lastname, language) {
        
        return new Greetr.init(firstname, lastname, language);
        
    }
    
    // Define base Greetr object
    var baseGreetrObj = Greetr.prototype = {};
    
    Greetr.init = function(firstname, lastname, language) {
        
        this.firstname = firstname || 'John';
        this.lastname = lastname || 'Doe';
        this.language = language || 'en';

    }
    
    // Update the prototype of the constructor to the prototype of the Greetr object
    Greetr.init.prototype = Greetr.prototype;
    
    /// Attach Greetr to global object
    global.Greetr = global.G$ = Greetr;
    
})(window, jQuery);