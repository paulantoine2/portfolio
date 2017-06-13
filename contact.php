<?php
$myData = json_decode($_POST['myData']);

iconv_set_encoding("internal_encoding", "UTF-8");

$name = $myData->name;
$from = $myData->email;
$message_txt = $myData->message;
$mail = 'paul.antoine2@gmail.com';

$passage_ligne = "\n";
$boundary = "-----=".md5(rand());
$boundary_alt = "-----=".md5(rand());

$sujet = "Contact Portfolio - ".$name;

$header = "From: \".$from.\"<".$from.">".$passage_ligne;
$header.= "Reply-to: \".$from.\" <".$from.">".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/mixed;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;

$message = $passage_ligne."--".$boundary.$passage_ligne;
$message.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary_alt\"".$passage_ligne;
$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;

$message.= "Content-Type: text/plain; charset=\"UTF-8\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_txt.$passage_ligne;

$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;

mail(utf8_decode($mail),utf8_decode($sujet),utf8_decode($message),utf8_decode($header));
