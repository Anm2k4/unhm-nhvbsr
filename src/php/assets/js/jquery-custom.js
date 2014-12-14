$(document).ready(function () {

       $("input[type=button],input[type=submit], button").button();

       $(".radio").buttonset();

       $(".selectmenu").selectmenu();

       $("#towns, #waterbodies")
            .selectmenu()
            .selectmenu("menuWidget")
                .addClass("overflow"); 
    
    $("#navigation").find("li").hover(
        function() {
            $(this).stop(true,true).animate({backgroundColor: "#058"},150);
            $(this).children("a").stop(true,true).animate({color: "#FFF"}, 150); 
        },function() {
            $(this).stop(true,true).animate({backgroundColor: "#FFF"},150);
            $(this).children("a").stop(true,true).animate({color: "#000"}, 150); 
        }
    );
                
    $("#header-title").hover(
        function() {
            //$(this).parent("li").stop(true,true).animate({backgroundColor: "#058"},150);
            $(this).stop(true,true).animate({color: "#FFF"}, 150); 
        },function() {
            //$(this).parent("li").stop(true,true).animate({backgroundColor: "#FFF"},150);
            $(this).stop(true,true).animate({color: "#000"}, 150); 
        }         
    );
    

    $("#data-table").tablesorter(); 
    
     //check all jPList javascript options
    $('#data').jplist({				
       itemsBox: '.list' 
       ,itemPath: '.list-item' 
       ,panelPath: '.jplist-panel'	
    });
    
    // Validation rules for the boat ramp form
    $("#boatRampForm").validate({
       rules: {
           "ramp\[Name\]" : {
               required: true
            }
       },
       messages : {
                "ramp\[Name\]": "Ramp Name is required!"
            }
    });
    
    // Validation rules for the water body form
    $("#waterbody-form").validate({
       rules: {
           "waterbody\[Name\]" : {
               required: true
            }
       },
       messages : {
                "waterbody\[Name\]": "Waterbody name is required!"
            }
    });
  
});
