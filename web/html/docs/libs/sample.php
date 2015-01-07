<?php

include 'clases/AstroPayCard.class.php';

//AstroPayCard class instance
$ap = new AstroPayCard();

//Cardholder data
$x_card_num = "1175000010737129";
$x_card_code = "0679";
$x_exp_date = "12/2013";

//Transaction data
$x_amount = "1.06";
$x_unique_id = "1234-987";
$x_invoice_num = "pepito-097018813";

//Making an AUTH_CAPTURE transaction, this method response has the result
$response = $ap->auth_capture_transaction($x_card_num, $x_card_code, $x_exp_date, $x_amount, $x_unique_id, $x_invoice_num);

//Use only in "string" format
$response = explode("|", $response);

//In case of "json" format
//$response = json_decode($response);

//Clasify the response data
$response_code = $response[0];
$response_subcode = $response[1];
$response_reason_code = $response[2];
$response_reason_text = $response[3];
$response_authorization_code = $response[4];
$response_transaction_id = $response[6];
$response_amount = $response[10];

//Evaluate if the transaction was succesfull or not
if ($response_code == 1) {
    if ($x_amount == $response_amount) {
        echo "Transaction OK!";
        //TODO!: Save $response_transaction_id and $response_authorization code for future use
    } else {
        echo "Error: Invalid amount check.";
    }
} else {
    //If there are an error, it will be printed here.
    echo "An exception has occurred in transaction process: $response_reason_text (code: $response_code, subcode: $response_subcode, reason_code: $response_reason_code)";
}

//**For VOID or REFUND a transaction**
//$x_trans_id = "546502";
//$response = $ap->void_transaction($x_trans_id, $x_card_num, $x_card_code, $x_exp_date, $x_amount);
//$response = $ap->refund_transaction($x_trans_id, $x_card_num, $x_card_code, $x_exp_date, $x_amount);

//**For transaction status check**
//$response = $ap->check_transaction_status($x_invoice_num, 1);

//var_dump($response);

?>