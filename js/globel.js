$(document).ready(function() {
    // copyright footer
    dt = new Date;
    $("footer").text("© Copyright " + dt.getFullYear() + " Andrew Ma");

    //change website language 
    var newURL = window.location.pathname.split('/')[2];
    $(".cn").attr("href", "/cn/" + newURL);
    $(".en").attr("href", "/en/" + newURL);


})