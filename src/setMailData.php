<?php


if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['message'])) {
    $message = $_POST['message'];
}

echo "name: " . $name . "<br>";
echo "email: " . $email . "<br>";
echo "message: " . $message . "<br>";



$milichihinTest1Cred = [
    "Username" => "test.user1.milichihin@gmail.com",
    "Password" => "fmonaakrfrullcsh",
    "ReplyTo" => ['test.user1.milichihin@gmail.com'],
    "From" => ["test.user1.milichihin@gmail.com", "Dmitro"],
    "Charset" => "UTF-8",
];


$recipients = [
    'milichihin@gmail.com',
    'milichihiny@gmail.com'
    // 'test.user1.milichihin@gmail.com',
];


$subject = 'Form Message from Kamyanka site';


$body = "Тема: Заказ обратного звонка!<br>Email: $email<br>Name: $name<br>Message: $message";

// $attach = [
//     "my-document.pdf",
//     "/home/stayer/Desktop/pyrography/lgl_crop.jpg",
//     "/home/stayer/Desktop/van/cqs1301982244r.jpeg",
//     "/run/user/1000/doc/c972a9fe/html/smtp/src/export_contacts_63d65383e0afa_2023-01-29.csv"
// ];


// $tags = json_encode([
//     'latin',
//     'кириллица'
// ], JSON_UNESCAPED_UNICODE);


?>