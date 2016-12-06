<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>
<?php include 'content.php'; ?>



<?php
$debug = false;
/*****************************Top 10 Admissions Queries and Results ****************************************************/

echo <<<EOK

 <p class="caption">
          To create a popout collapsible, just add the class <code class="language-markup">popout</code>.
        </p>
        <ul class="collapsible popout collapsible-accordion" data-collapsible="accordion">
EOK;
$top10AdmEasyQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE < 1) ORDER BY ADM_RATE DESC LIMIT 10";
$top10AdmHardQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE > 0) ORDER BY ADM_RATE ASC LIMIT 10";
$top10EasyResult= $conn->query($top10AdmEasyQuery);
$top10HardResult= $conn->query($top10AdmHardQuery);

$top10LowNetQuery = "Select INSTNM, Net_Price From Main_Table WHERE (Net_Price >0) ORDER BY Net_Price ASC LIMIT 10";  
$top10HighNetQuery = "Select INSTNM, Net_Price From Main_Table WHERE (Net_Price >0) ORDER BY Net_Price DESC LIMIT 10"; 
$top10LowNetResult= $conn->query($top10LowNetQuery);
$top10HighNetResult= $conn->query($top10HighNetQuery);   

$top10LargePopQuery = "Select INSTNM, UGDS From Main_Table WHERE (UGDS >0) ORDER BY UGDS DESC LIMIT 10";  
$top10SmallPopQuery = "Select INSTNM, UGDS From Main_Table WHERE (UGDS >0) ORDER BY UGDS ASC LIMIT 10"; 
$top10LargePopResult= $conn->query($top10LargePopQuery);
$top10SmallPopResult= $conn->query($top10SmallPopQuery); 

$top10AvgCostQuery = "Select INSTNM, AVG_COST From Main_Table WHERE (AVG_COST >0) ORDER BY AVG_COST ASC LIMIT 10";  
$top10AvgCostQuery = "Select INSTNM, AVG_COST From Main_Table WHERE (AVG_COST >0) ORDER BY AVG_COST DESC LIMIT 10"; 
$top10AvgCostResult= $conn->query($top10AvgCostQuery);
$top10AvgCostResult= $conn->query($top10AvgCostQuery); 


$top10LowNet030Query = "Select INSTNM, NP_0_30 From Main_Table WHERE (NP_0_30 >0) ORDER BY NP_0_30 ASC LIMIT 10";  
$top10HighNet030Query = "Select INSTNM, NP_0_30 From Main_Table WHERE (NP_0_30 >0) ORDER BY NP_0_30 DESC LIMIT 10"; 
$top10LowNet030Result= $conn->query($top10LowNet030Query);
$top10HighNet030Result= $conn->query($top10HighNet030Query); 

$top10LowNet030Query = "Select INSTNM, NP_0_30 From Main_Table WHERE (NP_0_30 >0) ORDER BY NP_0_30 ASC LIMIT 10";  
$top10HighNet030Query = "Select INSTNM, NP_0_30 From Main_Table WHERE (NP_0_30 >0) ORDER BY NP_0_30 DESC LIMIT 10"; 
$top10LowNet030Result= $conn->query($top10LowNet030Query);
$top10HighNet030Result= $conn->query($top10HighNet030Query);

$top10LowNet3048Query = "Select INSTNM, NP_30_48 From Main_Table WHERE (NP_30_48 >0) ORDER BY NP_30_48 ASC LIMIT 10";  
$top10HighNet3048Query = "Select INSTNM, NP_30_48 From Main_Table WHERE (NP_30_48 >0) ORDER BY NP_30_48 DESC LIMIT 10"; 
$top10LowNet3048Result= $conn->query($top10LowNet3048Query);
$top10HighNet3048Result= $conn->query($top10HighNet3048Query);

$top10LowNet4875Query = "Select INSTNM, NP_48_75 From Main_Table WHERE (NP_48_75 >0) ORDER BY NP_48_75 ASC LIMIT 10";  
$top10HighNet4875Query = "Select INSTNM, NP_48_75 From Main_Table WHERE (NP_48_75 >0) ORDER BY NP_48_75 DESC LIMIT 10"; 
$top10LowNet4875Result= $conn->query($top10LowNet4875Query);
$top10HighNet4875Result= $conn->query($top10HighNet4875Query);

$top10LowNet7511Query = "Select INSTNM, NP_75_110 From Main_Table WHERE (NP_75_110  >0) ORDER BY NP_75_110  ASC LIMIT 10";  
$top10HighNet7511Query = "Select INSTNM, NP_75_110  From Main_Table WHERE (NP_75_110  >0) ORDER BY NP_75_110  DESC LIMIT 10"; 
$top10LowNet7511Result= $conn->query($top10LowNet7511Query);
$top10HighNet7511Result= $conn->query($top10HighNet7511Query);

$top10LowNet110PQuery = "Select INSTNM, NP_110_Plus From Main_Table WHERE (NP_110_Plus  > 0) ORDER BY NP_110_Plus ASC LIMIT 10";  
$top10HighNet110PQuery = "Select INSTNM, NP_110_Plus  From Main_Table WHERE (NP_110_Plus > 0) ORDER BY NP_110_Plus  DESC LIMIT 10"; 
$top10LowNet110PResult= $conn->query($top10LowNet110PQuery);
$top10HighNet110PResult= $conn->query($top10HighNet110PQuery);

$top10LowInStateQuery = "Select INSTNM, IN_STATE From Main_Table WHERE (IN_STATE > 0) ORDER BY IN_STATE ASC LIMIT 10";  
$top10HighInStateQuery = "Select INSTNM, IN_STATE From Main_Table WHERE (IN_STATE > 0) ORDER BY IN_STATE  DESC LIMIT 10"; 
$top10LowInStateResult= $conn->query($top10LowInStateQuery);
$top10HighInStateResult= $conn->query($top10HighInStateQuery);

$top10LowOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE ASC LIMIT 10";  
$top10HighOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE  DESC LIMIT 10"; 
$top10LowOutStateResult= $conn->query($top10LowOutStateQuery);
$top10HighOutStateResult= $conn->query($top10HighOutStateQuery);

$top10LowOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE ASC LIMIT 10";  
$top10HighOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE  DESC LIMIT 10"; 
$top10LowOutStateResult= $conn->query($top10OutStateQuery);
$top10HighOutStateResult= $conn->query($top10OutStateQuery);

$top10LowPLoanQuery = "Select INSTNM, PCTFLOAN From Main_Table WHERE (PCTFLOAN > 0) ORDER BY PCTFLOAN ASC LIMIT 10";  
$top10HighPLoanQuery = "Select INSTNM, PCTFLOAN From Main_Table WHERE (PCTFLOAN < 1) ORDER BY PCTFLOAN DESC LIMIT 10"; 
$top10LowPLoanResult= $conn->query($top10LowPLoanQuery);
$top10HighPLoanResult= $conn->query($top10HighPLoanQuery);



          
          if($debug){
                $top10EasyResult= $conn->query("SELECT * FROM Main_Table LIMIT 10");
                $top10HardResult= $conn->query("SELECT * FROM Main_Table LIMIT 10");
          }
         
          if(!$top10EasyResult|| !$top10HardResult){
            echo "Could not find top 10 Admission Rates";
          }
          else{
          $i = 1;
            while($row1 =  $top10EasyResult->fetch_assoc()) {
              $row2 = $top10HardResult->fetch_assoc();
              
              $schoolEasy = $row1["INSTNM"];
              $admEasy = $row1["ADM_RATE"] *100;
              $schoolHard = $row2["INSTNM"];
              $admHard = $row2["ADM_RATE"] * 100;
             
              echo '<p style="display:inline">'."$i.) $schoolHard";
              echo " $admHard % </p>";
              echo '                <p style="display:inline">';
              echo $schoolEasy;
               echo " $admEasy % </p>";
              echo "</p>";
              $i++;
            //  echo "<pre class="tab">1.) $schoolHard  $admHard %    $schoolEasy $admEasy % </pre><br>";
               
            }
          }

?>
<h4>Popout</h4>

<!--********************Top 10 Admissions Easy and Hard ********************************************************************************-->
          <li>
            <div class="collapsible-header"><i class="material-icons">subtitles</i>Top 10 Easiest and Hardest Schools to Get Into</div>
            <div class="collapsible-body">
             <p> 
             <pre class="tab">    <u>Top 10 Hardest Schools</u>                         <u>Top 10 Easiest Schools</u>
</pre> 
      </p>  
        </div>
          </li>
<!-- *********************************************************************************************************************************************** -->
          <li>
            <div class="collapsible-header active"><i class="material-icons">games</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">library_books</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </li>
        </ul>