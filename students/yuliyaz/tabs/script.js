$(document).ready(function () {
    $.getJSON('http://rs.hankyates.com:3000/content', function(data){
        $.each(data, function(key, value){
            $(".tabs").append("<li><a href = #"+key +">"+key+"</a></li>");
            $(".tab_content_container").append("<div class= 'tab_content', id = " + key +">"+value+"</div>");
        });

        //When page loads...
        $("ul.tabs li:first-child a").addClass("active").show(); //Activate first tab
        $(".tab_content:first-child").show(); //Show first tab content

        //On Click Event
        $("ul.tabs li a").click(function () {
        $("ul.tabs li a").removeClass("active"); //Remove any "active" class
        
        $(".tab_content_container div").hide();

        $(this).addClass("active"); //Add "active" class to selected tab


        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

});


});