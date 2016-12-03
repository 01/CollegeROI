<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Input Autocomplete Suggestions Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="style.css">
  <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>

</head>

 <?php
        $localtest = false;
        $debug = false;
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
}

          // Create connection
          $conn = new mysqli($servername, $username, $password, $dbname);
          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }
          else{
            echo "Worked";
          }
          if (!$conn->set_charset("utf8")) {
              printf("Error loading character set utf8: %s\n", $conn->error);
              exit();
          } else {
              printf("Current character set: %s\n", $conn->character_set_name());
          }
          if (isset($_GET["sqlQuery"])) {
              $sql = $_GET["sqlQuery"];
              echo $sql;
              //echo '5';
          }else{
              echo 'no variable received';
          }
          if($debug==true){
            $sql = "SELECT INSTNM, UNITID FROM College_Directory";
          }
          $result = $conn->query($sql);
          if (!$result) {
            //echo "Could not successfully run query ($sql) from DB: " . mysql_error();
            //echo $sql;
            echo 'ended up here';
            exit;
            }
            if ($result->num_rows > 0) {
    // output data of each row
          while($row = $result->fetch_assoc()) {
                echo "id: " . $row["INSTNM"]."<br>";
    }
} else {
    echo "0 results";
}
           //echo $result;

           echo 'Made it here';
           $conn->close();
?> 
</html>