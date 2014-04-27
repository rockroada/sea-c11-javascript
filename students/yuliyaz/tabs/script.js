$(document).ready(function () {

    //When page loads...
    $("ul.tabs li:first-child a").addClass("active").show(); //Activate first tab
   //$(".tab_content #articles").hide(); //Show first tab content
   //$(".tab_content #portfolio").hide(); //Show first tab content
    $(".tab_content_container #home").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li a").click(function () {

        $("ul.tabs li a").removeClass("active"); //Remove any "active" class
        $(".tab_content_container div").hide();

        $(this).addClass("active"); //Add "active" class to selected tab


        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

    $.getJSON('http://rs.hankyates.com:3000/content', function(data){
            home = data.home;
            articles = data.articles
            portfolio = data.portfolio
    $.each(data, function(key, value){
    $('#home').html(home);
    $('#articles').html(articles);
    $('#portfolio').html(portfolio);
  });
});


});