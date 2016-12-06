<?php
$localtest = true;
if(!$localtest){
$servername = "localhost";
$username = "id279319_admin";
$password = "databases2016";
$dbname = "id279319_collegeroi";
}
else{
  $servername = "localhost:3306";
  $username = "testuser";
  $password = "password";
  $dbname = "college";
}
// Create connection
if($localtest){
  $conn = new mysqli($servername, $username, $password, $dbname);
}
else{
  $conn = new mysqli($servername, $username, $password, $dbname);
}// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}
else{
  //echo "Worked";
}
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $conn->error);
    exit();
} else {
    //printf("Current character set: %s\n", $conn->character_set_name());
}?>