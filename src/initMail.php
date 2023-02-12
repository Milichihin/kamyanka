<?php

include __DIR__ . '/vendor/autoload.php';


function sendMail(
    $cred,
    $recipients,
    $subject,
    $body) {
    // Create the message
    $message = new Swift_Message();
    $message->setEncoder(new \Swift_Mime_ContentEncoder_Base64ContentEncoder());

    $message->setCharset($cred["Charset"]);

    $message->setTo($recipients);

    $message->setReplyTo($cred["ReplyTo"]);

    $message->setFrom($cred["From"][0], $cred["From"][1]);

    $message->setSubject($subject);

    // $message->attach(Swift_Attachment::fromPath($attach[3]));

    // Optionally add any attachments
    // $message->attach(Swift_Attachment::fromPath($attach[0]));

    // $attachment = Swift_Attachment::fromPath($attach[1])->setDisposition('inline');
    // $attachment->getHeaders()->addTextHeader('Content-ID', '<ABC123>');
    // $attachment->getHeaders()->addTextHeader('X-Attachment-Id', 'ABC123');
    // $cid = $message->embed($attachment);


    $message->setBody(
        $body,
        "text/html",
        "UTF8"
    );


    $headers = $message->getHeaders();

    // $headers->addTextHeader(
    //     'X-Tags',
    //     $tags
    // );
    $headers->addTextHeader('X-Message-Priority', 2.9);
    $headers->addTextHeader('X-buuu', 'bsssss');
    $headers->addTextHeader('X-Ignore-Blacklist', 'true');

    // Gmail Milichihin
    $transport = new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl');
    $transport->setUsername($cred["Username"]);
    $transport->setPassword($cred["Password"]);

    $mailer = new Swift_Mailer($transport);
    $logger = new Swift_Plugins_Loggers_ArrayLogger();
    $mailer->registerPlugin(new Swift_Plugins_LoggerPlugin($logger));

    $numSent = 0;
    $time = null;
    try {
        for ($i = 0; $i < 1; $i++) {
            $st = microtime(1);
            $numSent += $mailer->send($message);
            $time = microtime(1) - $st;
            // echo $i . "\r";
        }
    } catch (Swift_TransportException $e) {
        // echo $e->getCode() . ": " . $e->getMessage() . "\n";
    }

    // echo $logger->dump() . PHP_EOL;
    // printf("Sent %d messages\n", $numSent);
    // echo 'Time: ' . $time . PHP_EOL;
}

