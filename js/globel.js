$(document).ready(function() {
    // nav_bar fade in function
    for (var n = 2; n <= 8; n++) {
        $(".nav_bar li:nth-child(" + n + ")").css(
            "animation", "fade_in_option " + n * 0.25 + "s linear"
        );
    }

    function siderbar() {
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse svg').toggleClass('fa-toggle-on');
        $('#sidebarCollapse svg').toggleClass('fa-toggle-off');
        if ($('#sidebar').hasClass('active')) {
            $('#sidebarCollapse').css({ 'margin-left': '0px' });
        } else {
            $('#sidebarCollapse').css({ 'margin-left': $("ul.nav").outerWidth() });
        }
    }
    $('#sidebarCollapse').click(function() {
        siderbar();
    });
    $("li.nav-item").click(function() {
        if ($("body").width() <= 768) {
            siderbar();
        }
    });
    // content
    function SiderContentWidth() {
        if ($("body").width() > 768) {
            var body_width = $(".wrapper").width();
            var wrap_width = $("ul.nav").outerWidth();
            $('.content').outerWidth(body_width - wrap_width);
        } else {
            $('.content').outerWidth($("body").width());
        }
    }

    SiderContentWidth();

    $(window).resize(function() {
        SiderContentWidth();
    });

    // section 1
    function openCity(cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        $("#" + cityName + "").css("display", "block");
        $(this).addClass("active");
    }
    $(".tablinks").mouseover(function() {
        openCity($(this).html());
    });
    openCity($("#defaultOpen").html());

    $("label").change(function() {
        $(this).toggleClass('bg-info');
        $('.job_title svg').toggleClass('fa-window-minimize');
        $('.job_title svg').toggleClass('fa-plus');
    });

    dt = new Date;
    $("footer").text("© Copyright " + dt.getFullYear() + " Andrew Ma");
});