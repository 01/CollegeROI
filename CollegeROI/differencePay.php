<?php include 'connect.php'; ?>

<?php

$diffQuery = "Select INSTNM ,(((MD_EARN_WNE_P10-MD_EARN_WNE_P6)/MD_EARN_WNE_P10)*100) as P6P10Diff From Main_Table";
$diffResult = $conn->query($diffQuery);
while($row = $diffResult->fetch_assoc()){
	$collegeName = $row["INSTNM"];
	$diff = $row["P6P10Diff"];
}
