<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Input Autocomplete Suggestions Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css">
  <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
  <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/currency-autocomplete.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>


</head>
<?php
$localtest = false;
if(!$localtest){
$servername = "localhost";
$username = "id279319_admin";
$password = "databases2016";
//$dbname = "mid279319_admin";
}
else{
  $servername = "localhost:3306";
  $username = "testuser";
  $password = "password";
}

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}
else{
	echo "Worked";
}
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $conn->error);
  
} else {
    printf("Current character set: %s\n", $conn->character_set_name());
}

/*$sql1 = "SELECT INSTNM, UNITID FROM College_Directory";
$result1 = $conn->query($sql1);
if (!$result1) {
    echo printf("Could not successfully run query (%s) from DB:", $sql1);
   
}

$data1 = array();
while($row = $result1->fetch_assoc()) 
{ 
     $data1[] = array (
            'value' => $row['INSTNM'],
            'data' => $row['UNITID'],
        );
echo "row here";
} 
echo "workedigsd";
$collegeList=json_encode($data1);

*/
$sql2 = "SELECT fullName, initial FROM us_states";
$result2 = $conn->query($sql2);
$data2 = array();
while($row = $result2->fetch_assoc()) 
{ 
     $data2[] = array (
            'value' => $row['fullName'],
            'data' => $row['initial'],
            
        );
echo "Row here";
} 
echo "roewhhss";
$stateList = json_encode($data2);

$sql3 = "SELECT MAJOR, Median FROM majors_employment";
$result3 = $conn->query($sql3);
if (!$result3) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
  //  exit;
}

$data3 = array();
while($row = $result3->fetch_assoc()) 
{ 
     $data3[] = array (
            'value' => $row['MAJOR'],
            'data' => $row['Median'],
        );
} 
$majorList=json_encode($data3);
printf("Makes it here");
$conn->close();
?> 
<script type="text/javascript">
    var colleges = <?php echo $collegeList ?>;
    var states = <?php echo $stateList ?>;
    var majors = <?php echo $majorList ?>;
    //JSON.parse(colleges);
</script>
<body>
  <div id="topbar"><a href="#">This is a toolbar</a></div>
  <div id="w">
    <div id="content" align="center">
      <h1>Our aweseome website</h1>
      <p>Please enter your college</p>
      
      <div id="searchfield">
        <form><input type="text" name="currency" class="biginput" id="collegeAuto"></form>
      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="collegeOutput">Choose a College and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->
  <div id="w">
    <div id="content" align="center">
      <p>Please enter your Major</p>
      
      <div id="searchfield">
        <form><input type="text" name="currency" class="biginput" id="majorAuto"></form>
      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="majorOutput">Choose a Major and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->
  <div id="w">
    <div id="content" align="center">
      <p>Please enter your State</p>
      <div id="searchfield">
  <form><input type="text" name="currency" class="biginput" id="stateAuto"></form>
      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="stateOutput">Choose a State and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->
  <div id="w">
<br>
      <p>Submit?</p
      <div id = "submitButton"><form><input type="button" value="submit" id="submit" ></div> 
      
      <p>
         <label for = "price">Price range:</label>
         <input type = "text" id = "price" 
            style = "border:0; color:#b9cd6d; font-weight:bold;">
      </p>
      <div id = "slider-3"></div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->

</body>
</html>