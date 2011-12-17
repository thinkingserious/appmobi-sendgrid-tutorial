<?php 
header("HTTP/1.1 200 OK");

// Include the PHP Twilio library. You need to download the library from 
// twilio.com/docs/libraries, and move it into the folder containing this 
// file.
require "Services/Twilio.php";

//***** Log debug information to a file
$fh = fopen('dump.log', 'a+');

if ( $fh )
{
  // Dump parameters
  fwrite($fh, print_r($_POST, true) . print_r($_FILES, true));
  fclose($fh);

  // Dump any files posted
  foreach ($_FILES as $key => $file)
  {
    move_uploaded_file($file['tmp_name'], $file['name']);
  }
}
//***** End debug

// set your AccountSid and AuthToken - from www.twilio.com/user/account
$AccountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$AuthToken = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";

// instantiate a new Twilio Rest Client
$client = new Services_Twilio($AccountSid, $AuthToken);

// Your Twilio Number or Outgoing Caller ID
$from = "XXXXXXXXXX";
$to = "XXXXXXXXXX";
$body = $_POST['url']." clicked by ".$_POST['email'].".";

// Send a new outgoing SMS */
$client->account->sms_messages->create($from, $to, $body);

?>

