<?php

$sql1 = "SELECT INSTNM FROM Main_Table";
$result1 = $conn->query($sql1);
if (!$result1) {
   echo printf("Could not successfully run query ($sql1) from DB: %s", $dbname);
   
}
else{
$data1 = array();
while($row = $result1->fetch_assoc()) 
{ 
    $data1[] = array (
            'value' => $row['INSTNM'],
        );
} 
$collegeList=json_encode($data1);
}
$sql2 = "SELECT * FROM us_states";
$result2 = $conn->query($sql2);
if(!$result2){
echo printf("Fuck didnt work");
}
else{
$data2 = array();
while($row = $result2->fetch_assoc()) 
{ 
     $data2[] = array (
            'value' => $row['fullName'],
            'data' => $row['initial'],
        );
} 
$stateList = json_encode($data2);
}

$sql3  = "SELECT * FROM major_salary";
$sqkWHERE (NET_PRICE <25000 AND NET_PRICE > 15000) AND ((UGDS > 2000 AND UGDS < 15001)) AND (ADM_RATE <1 AND ADM_RATE > 0)
$result3 = $conn->query($sql3);
if (!$result3) {
     echo printf("Could not successfully run query ($sql3) from DB: %s", $dbname);
}
else{
$data3 = array();
while($row = $result3->fetch_assoc()) 
{ 
     $data3[] = array (
            'value' => $row['Major'],
            'data' => $row['Median'],
        );
} 
$majorList=json_encode($data3);
}
$conn->close();
?> 
<script type="text/javascript">
    var colleges = <?php echo $collegeList ?>;
    var states = <?php echo $stateList ?>;
    var majors = <?php echo $majorList ?>;
    //JSON.parse(colleges);
</script>