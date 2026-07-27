<?php
date_default_timezone_set("Asia/Riyadh");

header("Content-Type:text/plain");

$message=strtolower(trim($_POST["message"]));

switch(true){

case strpos($message,"hello")!==false:
case strpos($message,"hi")!==false:
echo "Hello! Nice to meet you 😊";
break;

case strpos($message,"name")!==false:
echo "My name is AI Voice Assistant.";
break;

case strpos($message,"time")!==false:
echo "Current time: ".date("h:i A");
break;

case strpos($message,"date")!==false:
echo "Today's date is ".date("Y-m-d");
break;

case strpos($message,"how are you")!==false:
echo "I'm doing great! Thanks for asking.";
break;

case strpos($message,"bye")!==false:
echo "Goodbye! Have a wonderful day.";
break;

default:
echo "You said: ".htmlspecialchars($_POST["message"]);

}
?>