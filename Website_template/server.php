<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
     border: 1px solid black;
}
</style>
</head>
<body>

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

</body>
</html>
