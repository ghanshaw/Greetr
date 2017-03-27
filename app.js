// When document is ready
$(document).ready(function() {
    
    // Add click event
    $("#login").click(function() {
       
        // Extract details from user
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var language = $("#lang").val();
        var formal = $("#formal").val();
        
        if (formal == "true") {
            formal = true
        } else {
            formal = false;
        }
        
        
        if (!firstname || !lastname) {
            alert("Please submit a first name a last name!");
        }
        else {
            // Create and use Greetr object
            var g = G$(firstname, lastname, language);
            g.updateDom("#greeting", formal);
        }
        
    });
                      
    
});