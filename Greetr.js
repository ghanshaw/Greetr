;(function(global, $) {
    
    // Greetr object defaults to construtor function
    var Greetr = function(firstname, lastname, language) {
        
        return new Greetr.init(firstname, lastname, language);
        
    }
    
    // Array of supported languages
    var supportedLangs = ['en', 'es'];
    
    
    // Informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // Formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // Log messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    // Define base Greetr object
    var baseGreetrObj = Greetr.prototype = {
        
        // Return full name
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },
        
        // Validate language
        validate: function(language) {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        // Compute greeting
        greeting: function() {                      
            return  greetings[this.language] + ' ' + this.firstname + '!';    
        },
        
        // Compute formal greeting
        formalGreeting: function() {
            this.validate();
                      
            return  formalGreetings[this.language] + ', ' + this.fullname() + '.';    
        },
        
        // Return greeting based on formality
        greet: function(formal) {
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            }          
            else {
                msg = this.greeting();
            }
            
            if (console) {
                console.log(msg);
                this.log();
            }
            
            // return this to make method chainable
            return this;
        },
        
        // Log messages to console
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            
            return this;
        },
        
        // Update language
        setLang: function(language) {
            if (language) {
                this.language = language;
            }
            
            this.validate();
            
            return this;         
        },
        
        // Print greeting to document
        updateDom: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            
            
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            }          
            else {
                msg = this.greeting();
            }
            
            if (console) {
                console.log(msg);
                this.log();
            }
            
            $(selector).text(msg);
            if (formal) {
                $(selector).removeClass('informal').addClass('formal');
            } else {
                $(selector).removeClass('formal').addClass('informal');
            }
                
            
            return this;
        },
        
    };
    
    Greetr.init = function(firstname, lastname, language) {
        
        this.firstname = firstname || 'John';
        this.lastname = lastname || 'Doe';
        this.language = language || 'en';
        
        this.validate();

    }
    
    // Update the prototype of the constructor to the prototype of the Greetr object
    Greetr.init.prototype = Greetr.prototype;
    
    // Attach Greetr to global object
    global.Greetr = global.G$ = Greetr;
    
})(window, jQuery);