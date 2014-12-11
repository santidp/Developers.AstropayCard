
$('#main-content').load('frames/home.html');


function navigateAPDStreamline() {
    hideAll();
    $("#apd-streamline-menu").css("display", "block");
}

function navigateAPDClassic() {
    hideAll();
    $("#apd-classic-menu").css("display", "block");
}

function navigateOneShot() {
    hideAll();
    $("#one-shot-menu").css("display", "block");
}

function navigatePreApproval() {
    hideAll();
    $("#pre-approval-menu").css("display", "block");
}

function navigateAPC() {
    hideAll();
    $("#apc-menu").css("display", "block");
}

function navigateRounders() {
    hideAll();
    $("#rounders-menu").css("display", "block");
}

function navigateCashoutCash() {
    hideAll();
    $("#cashout-cash-menu").css("display", "block");
}

function navigateCashoutCards() {
    hideAll();
    $("#cashout-cards-menu").css("display", "block");
}

function hideAll() {
    $("#apd-streamline-menu").css("display", "none");
    $("#apd-classic-menu").css("display", "none");
    $("#one-shot-menu").css("display", "none");
    $("#pre-approval-menu").css("display", "none");
    $("#apc-menu").css("display", "none");
    $("#rounders-menu").css("display", "none");
    $("#cashout-cash-menu").css("display", "none");
    $("#cashout-cards-menu").css("display", "none");
}

