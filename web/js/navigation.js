
$('#main-content').load('frames/home.html');

function navigateAPDClassic() {
    hideAll();
    $("#apd-classic-menu").css("display", "block");
}

function navigateAPDStreamline() {
    hideAll();
    $("#apd-streamline-menu").css("display", "block");
}

function navigateCashoutCards() {
    hideAll();
    $("#cashout-cards-menu").css("display", "block");
}

function hideAll() {
    $("#apd-classic-menu").css("display", "none");
    $("#apd-streamline-menu").css("display", "none");
    $("#cashout-cards-menu").css("display", "none");
}

