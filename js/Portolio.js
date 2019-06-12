$(document).ready(function() {
    var body_height = $('body').height();
    $(".dim_bg").css("height", body_height);
    var portolio_no = ["Arrow_Game",
        "Calculator",
        "Clock",
        "E_clock",
        "heart",
        "hidden_information",
        "Kirby",
        "Login_form_3D_filp",
        "search_bar",
        "Social_media_box",
        "spaceship",
        "StopWatch",
        "Throw_Dice"
    ];
    var portolio_path = ['QRMyRp',
        'BeaWrm',
        'mYpEYm',
        'axgvaz',
        'QRgxQr',
        'MdBoZe',
        'KLRrdp',
        'XQwLGJ',
        'bJZqZg',
        'dEwBNx',
        'byxQqj',
        'NVKEVv',
        'PgXqWR'
    ]

    function changeCodepen(n) {
        var path = "https://codepen.io/andrew_Ma/embed/" + portolio_path[n] + "?height=265&amp;theme-id=0&amp;default-tab=css%2Cresult&amp;user=andrew_Ma&amp;slug-hash=dEwBNx&amp;pen-title=Social%20media%20box&amp;name=cp_embed_1"
        $("iframe").attr("src", path);
    }


    function d_none() {
        $(".popup_box").css("display", "none");
        $(".dim_bg").css("display", "none");
    }
    d_none();

    // display pop up box button
    $(".grid").click(function() {
        $(".popup_box").css("display", "block");
        $(".dim_bg").css("display", "block");
        if ($('body').width() > 768) {
            changeCodepen(portolio_no.indexOf($(this).attr('id')));
        } else {
            window.location.href = "https://codepen.io/andrew_Ma/pen/" + portolio_path[portolio_no.indexOf($(this).attr('id'))];
        }
    });


    // hidden pop up box button
    $(".popup_close").click(function() {
        d_none();
    });
    $(".dim_bg").click(function() {
        d_none();
    });
})