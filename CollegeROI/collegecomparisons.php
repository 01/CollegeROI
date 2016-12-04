<!doctype html>
<html lang="en-US">
<head>
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    
    <title>PHP Chart Samples using CanvasJS</title>
    
    <!-- stylesheets -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    
    <!-- scripts -->
    <script src="/js/jquery-3.1.0.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>

</head>
<?php
        $localtest = true;
        $debug = true;
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
             // printf("Current character set: %s\n", $conn->character_set_name());
          }
          if (isset($_GET["sqlQuery"])) {
              $sql = $_GET["sqlQuery"];
              //echo $sql;
              //echo '5';
          }else{
              echo 'no variable received';
          }
          if($debug==true){
            $sql = "SELECT * FROM Main_Table LIMIT 10";
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
              $dataPoints = array();
          echo '<div id="chartContainer"></div>';
          while($row = $result->fetch_assoc()) {
                //echo "id: " . $row["INSTNM"]."<br>";
            $dataPoints[] = array (
            'y' => $row["Net_Price"],
            'label' => $row["INSTNM"],
        );
           
              
    }
} else {
    echo "0 results";
}

           //echo $result;

           //echo 'Made it here';
           $conn->close();
?> 
<script type="text/javascript">

    $(function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",
            animationEnabled: true,
            title: {
                text: "Net Price Comparisons"
            },
            data: [
            {
                type: "column",                
                dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
            }
            ]
        });
        chart.render();
    });
</script>
</html>