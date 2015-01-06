
navigateAPC();


function navigateHome() {
    hideAll();
    jQuery.ajax({
        url: "/Developers.AstropayCard/html/frames/home.html", dataType: "html"
    }).done(function (responseHtml) {
        $("#main-content").html(responseHtml);
    });
}

function navigateAPC() {
    hideAll();
    $("#apc-menu").css("display", "block");

    jQuery.ajax({
        url: "/Developers.AstropayCard/html/frames/astropay-card-frame.html", dataType: "html"
    }).done(function (responseHtml) {
        $("#main-content").html(responseHtml);

        jQuery.ajax({
            url: "/Developers.AstropayCard/html/frames/common/considerations.html", dataType: "html"
        }).done(function (responseHtml) {
            $("#considerations-container").html(responseHtml);
        });
    });

    $('.btn').each(function () {
        $(this).blur();
    });
}

function navigateCashoutCards() {
    hideAll();
    $("#cashout-cards-menu").css("display", "block");

    jQuery.ajax({
        url: "/Developers.AstropayCard/html/frames/cashout-card-frame.html", dataType: "html"
    }).done(function (responseHtml) {
        $("#main-content").html(responseHtml);

        jQuery.ajax({
            url: "/Developers.AstropayCard/html/frames/common/considerations.html", dataType: "html"
        }).done(function (responseHtml) {
            $("#considerations-container").html(responseHtml);
        });
    });

    $('.btn').each(function () {
        $(this).blur();
    });
}

function hideAll() {
    $("#apc-menu").css("display", "none");
    $("#cashout-cards-menu").css("display", "none");
}

