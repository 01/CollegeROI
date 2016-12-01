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
  <script type="text/javascript" src="js/currency-autocomplete.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>
</head>
<?php
$servername = "127.0.0.1:3306";
$username = "testuser";
$password = "password";
//$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}
else{
	echo "Worked";
}

$sql = "SELECT INSTNM FROM college.College_Directory Limit 100";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
     echo "<table><tr><th>NAME</th><th>Name</th></tr>";
     // output data of each row
     while($row = $result->fetch_assoc()) {
         echo "<tr><td>" . $row["INSTNM"]. "</td><td>";
     }
     echo "</table>";
} else {
     echo "0 results";
}

$conn->close();
?> 
<body>
  <div id="topbar"><a href="#">This is a toolbar</a></div>
  <div id="w">
    <div id="content" align="center">
      <h1>Our aweseome website</h1>
      <p>Please enter your college</p>
      
      <div id="searchfield">
        <form><input type="text" name="currency" class="biginput" id="autocomplete"></form>
      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="outputcontent">Choose a College and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->
  <div id="w">
    <div id="content" align="center">
      <p>Please enter your Major</p>
      
      <div id="searchfield">
        <form><input type="text" name="currency" class="biginput" id="autocomplete2"></form>
      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="outputcontent2">Choose a Major and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->
  <div id="w">
    <div id="content" align="center">
      <p>Please enter your State</p>
      <div id="searchfield">
        <form method="POST">
          <div id="dynamicInput">
            Entry 1<br><input type="text" class="biginput state-auto" name="myInputs[]">
          </div>
          <input type="button" value="Add another text input" onClick="addInput('dynamicInput');">


        </form>

      </div><!-- @end #searchfield -->
      
      <div id="outputbox">
        <p id="outputcontent3">Choose a State and the results will display here.</p>
      </div>
    </div><!-- @end #content -->
  </div><!-- @end #w -->

</body>
</html>
