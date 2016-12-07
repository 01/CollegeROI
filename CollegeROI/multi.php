<?php include 'connect.php'; ?>


<body>
	<?php
	 	  $aggregateTotalQuery = "Select AVG(ADM_RATE) as avgADM, AVG(NET_PRICE) as avgNET, AVG(NP_0_30) as avgNP030, AVG(NP_30_48), AVG(NP_48_75) as avgNP4875, AVG(NP_75_110) as avgNP7511, AVG(NP_110_Plus) as avgNP110P, AVG(AVG_COST) as avgAvgCost, AVG(IN_STATE) as avgInState, AVG(OUT_STATE) as avgOutState, AVG(PCTFLOAN) as avgPCTFLOAN, AVG(UNEMP_RATE) as avgUNEMP, AVG(MD_EARN_WNE_P6)as avgMDP6, AVG(MD_EARN_WNE_P8) as avgMDP8, AVG(MD_EARN_WNE_P10) as avgMDP10, AVG(graduation_rate) as avgGradRate, AVG(GRAD_DEBT_MDN) as avgGradDebt FROM Main_Table";
    
            $aggregateTotalResult = $conn->query($aggregateTotalQuery);
            $row = $aggregateTotalResult->fetch_assoc();
            $avgMDP6 = $row["avgMDP6"];
            $avgMDP8 = $row["avgMDP8"];
            $avgMDP10 = $row["avgMDP10"];


          
            $sql = "FROM Main_Table Limit 20";
            $sql1 = "Select * ".$sql;

            $result = $conn->query($sql1);
            if (!$result) {
            //echo "Could not successfully run query ($sql) from DB: " . mysql_error();
            //echo $sql;
            echo 'ended up here';
            exit;
            }
            echo "<br>";
            if ($result->num_rows > 0) {
	            while($row = $result->fetch_assoc()){
	            	$collegeName = $row["INSTNM"];
	            	$p6ratio = $row["MD_EARN_WNE_P6"]/$avgMDP6;
	            	$p8ratio = $row["MD_EARN_WNE_P8"]/$avgMDP8;
	            	$p10ratio = $row["MD_EARN_WNE_P10"]/$avgMDP10;
	            	echo 'College: '.$collegeName;
	            	echo '  P6ratio: '.$p6ratio;
	            	echo '  P8ratio: '.$p8ratio;
	            	echo '  P10ratio: '.$p10ratio;
                    echo "<br>";

	            }
        	}
     ?>
</body>


