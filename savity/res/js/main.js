    function goToByScroll(id){
          // Reove "link" from the ID
        id = id.replace("Link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top-150},
            'slow');
    }

    $("nav > ul > li > a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });