<?php

include __DIR__ . '/../vendor/autoload.php';
include './setMailData.php';
include './initMail.php';

global $milichihinTest1Cred;
global $prodCred;
global $stageCred;
global $recipients;
global $subject;
global $body;
global $body2;
global $attach;
global $tags;


sendMail(
    $milichihinTest1Cred,
    $recipients,
    $subject,
    $body,
    $attach,
    $tags
);


?>
