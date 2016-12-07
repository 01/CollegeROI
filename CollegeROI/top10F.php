<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>
<?php include 'content.php'; ?>



<?php
$debug = false;

$top10AdmEasyQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE < 1) ORDER BY ADM_RATE DESC LIMIT 10";
$top10AdmHardQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE > 0) ORDER BY ADM_RATE ASC LIMIT 10";
$top10EasyResult= $conn->query($top10AdmEasyQuery);
$top10HardResult= $conn->query($top10AdmHardQuery);


$top10LargePopQuery = "Select INSTNM, UGDS From Main_Table WHERE (UGDS >0) ORDER BY UGDS DESC LIMIT 10";  
$top10SmallPopQuery = "Select INSTNM, UGDS From Main_Table WHERE (UGDS >0) ORDER BY UGDS ASC LIMIT 10"; 
$top10LargePopResult= $conn->query($top10LargePopQuery);
$top10SmallPopResult= $conn->query($top10SmallPopQuery); 

$top10LowAvgCostQuery = "Select INSTNM, AVG_COST From Main_Table WHERE (AVG_COST >0) ORDER BY AVG_COST ASC LIMIT 10";  
$top10HighAvgCostQuery = "Select INSTNM, AVG_COST From Main_Table WHERE (AVG_COST >0) ORDER BY AVG_COST DESC LIMIT 10"; 
$top10LowAvgCostResult= $conn->query($top10LowAvgCostQuery);
$top10HighAvgCostResult= $conn->query($top10HighAvgCostQuery); 

$top10LowInStateQuery = "Select INSTNM, IN_STATE From Main_Table WHERE (IN_STATE > 0) ORDER BY IN_STATE ASC LIMIT 10";  
$top10HighInStateQuery = "Select INSTNM, IN_STATE From Main_Table WHERE (IN_STATE > 0) ORDER BY IN_STATE  DESC LIMIT 10"; 
$top10LowInStateResult= $conn->query($top10LowInStateQuery);
$top10HighInStateResult= $conn->query($top10HighInStateQuery);

$top10LowOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE ASC LIMIT 10";  
$top10HighOutStateQuery = "Select INSTNM, OUT_STATE From Main_Table WHERE (OUT_STATE > 0) ORDER BY OUT_STATE  DESC LIMIT 10"; 
$top10LowOutStateResult= $conn->query($top10LowOutStateQuery);
$top10HighOutStateResult= $conn->query($top10HighOutStateQuery);


$top10LowNetQuery = "Select INSTNM, Net_Price From Main_Table WHERE (Net_Price >0) ORDER BY Net_Price ASC LIMIT 10";   
$top10LowNetResult= $conn->query($top10LowNetQuery); 

$top10LowNet030Query = "Select INSTNM, NP_0_30 From Main_Table WHERE (NP_0_30 >0) ORDER BY NP_0_30 ASC LIMIT 10";  
$top10LowNet030Result= $conn->query($top10LowNet030Query);

$top10LowNet3048Query = "Select INSTNM, NP_30_48 From Main_Table WHERE (NP_30_48 >0) ORDER BY NP_30_48 ASC LIMIT 10";  
$top10LowNet3048Result= $conn->query($top10LowNet3048Query);

$top10LowNet4875Query = "Select INSTNM, NP_48_75 From Main_Table WHERE (NP_48_75 >0) ORDER BY NP_48_75 ASC LIMIT 10";   
$top10LowNet4875Result= $conn->query($top10LowNet4875Query);

$top10LowNet7511Query = "Select INSTNM, NP_75_110 From Main_Table WHERE (NP_75_110  >0) ORDER BY NP_75_110  ASC LIMIT 10";  ;
$top10LowNet7511Result= $conn->query($top10LowNet7511Query);

$top10LowNet110PQuery = "Select INSTNM, NP_110_Plus From Main_Table WHERE (NP_110_Plus  > 0) ORDER BY NP_110_Plus ASC LIMIT 10";  
$top10LowNet110PResult= $conn->query($top10LowNet110PQuery);

$top10LowPLoanQuery = "Select INSTNM, PCTFLOAN From Main_Table WHERE (PCTFLOAN > 0) ORDER BY PCTFLOAN ASC LIMIT 10";  
$top10LowPLoanResult= $conn->query($top10LowPLoanQuery);

$top10LowUNEMPQuery = "Select INSTNM, UNEMP_RATE From Main_Table WHERE (UNEMP_RATE> 0) ORDER BY UNEMP_RATE ASC LIMIT 10";  
$top10HighUNEMPQuery = "Select INSTNM, UNEMP_RATE From Main_Table WHERE (UNEMP_RATE< 1) ORDER BY UNEMP_RATE DESC LIMIT 10"; 
$top10LowUNEMPResult= $conn->query($top10LowUNEMPQuery);
$top10HighUNEMPResult= $conn->query($top10HighUNEMPQuery);


$top10LowEarnP6Query = "Select INSTNM, MD_EARN_WNE_P6 From Main_Table WHERE (MD_EARN_WNE_P6> 0) ORDER BY MD_EARN_WNE_P6 ASC LIMIT 10";  
$top10HighEarnP6Query = "Select INSTNM, MD_EARN_WNE_P6 From Main_Table WHERE (MD_EARN_WNE_P6> 0) ORDER BY MD_EARN_WNE_P6 DESC LIMIT 10"; 
$top10LowEarnP6Result= $conn->query($top10LowEarnP6Query);
$top10HighEarnP6Result= $conn->query($top10HighEarnP6Query);

$top10LowEarnP8Query = "Select INSTNM, MD_EARN_WNE_P8 From Main_Table WHERE (MD_EARN_WNE_P6> 0) ORDER BY MD_EARN_WNE_P8 ASC LIMIT 10";  
$top10HighEarnP8Query = "Select INSTNM, MD_EARN_WNE_P8 From Main_Table WHERE (MD_EARN_WNE_P6> 0) ORDER BY MD_EARN_WNE_P8 DESC LIMIT 10"; 
$top10LowEarnP8Result= $conn->query($top10LowEarnP8Query);
$top10HighEarnP8Result= $conn->query($top10HighEarnP8Query);

$top10LowEarnP10Query = "Select INSTNM, MD_EARN_WNE_P10 From Main_Table WHERE (MD_EARN_WNE_P10> 0) ORDER BY MD_EARN_WNE_P10 ASC LIMIT 10";  
$top10HighEarnP10Query = "Select INSTNM, MD_EARN_WNE_10 From Main_Table WHERE (MD_EARN_WNE_P10> 0) ORDER BY MD_EARN_WNE_P10 DESC LIMIT 10"; 
$top10LowEarnP10Result= $conn->query($top10LowEarnP10Query);
$top10HighEarnP10Result= $conn->query($top10HighEarnP10Query);

$top10LowGradRateQuery = "Select INSTNM, graduation_rate From Main_Table WHERE (graduation_rate> 0) ORDER BY graduation_rate ASC LIMIT 10";  
$top10HighGradRateQuery = "Select INSTNM, graduation_rate From Main_Table WHERE (graduation_rate < 1) ORDER BY graduation_rate DESC LIMIT 10"; 
$top10LowGradRateResult= $conn->query($top10LowGradRateQuery);
$top10HighGradRateResult= $conn->query($top10HighGradRateQuery);

$top10LowMedDebtQuery = "Select INSTNM, DEBT_MDN From Main_Table WHERE (DEBT_MDNc> 0) ORDER BY DEBT_MDN ASC LIMIT 10";  
$top10HighMedDebtQuery = "Select INSTNM, DEBT_MDN From Main_Table WHERE (DEBT_MDN > 9) ORDER BY DEBT_MDN DESC LIMIT 10"; 
$top10LowMedDebtResult= $conn->query($top10LowMedDebtQuery);
$top10HighMedDebtResult= $conn->query($top10HighMedDebtQuery);

$top10LowGenderEQQuery = "Select INSTNM, (FEMALE_DEBT_MDN / MALE_DEBT_MDN) as FemaleToMale From Main_Table WHERE (DEBT_MDNc> 0) ORDER BY DEBT_MDN ASC LIMIT 10";  
$top10HighGenderEQQuery = "Select INSTNM, (FEMALE_DEBT_MDN / MALE_DEBT_MDN) as FemaleToMale From Main_Table WHERE (DEBT_MDN > 9) ORDER BY DEBT_MDN DESC LIMIT 10"; 
$top10LowGenderEQResult= $conn->query($top10LowGenderEQQuery);
$top10HighGenderEQResult= $conn->query($top10HighGenderEQQuery);
/*

*/
?>

  <div id="expandable" class="section scrollspy">
        <div class="row">
          <div class="col s12 m3"><h5 class="light">Expandable</h5></div>
          <div class="col s12 m9">
            <ul class="collapsible" data-collapsible="expandable">
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>  Top 10 Easiest Schools to Get Into</div>
                <div class="collapsible-body"><p>
        <?php          
        if(!$top10EasyResult){
            echo "Could not find top 10 Admission Rates";
          }
          else{
          $i = 1;
            while($row =  $top10EasyResult->fetch_assoc()) {
              $school = $row["INSTNM"];
              $admEasy = $row["ADM_RATE"] *100;
              echo '<p style="display:inline">'."$i.) $school";
              echo " $admEasy % </p><br>";
              $i++;      
            }
          }
          ?>
                </p></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">place</i>Top 10 Hardest Schools to Get Into</div>
                <div class="collapsible-body"><p>
                 <?php          
        if(!$top10HardResult){
            echo "Could not find top 10 Lowest Admission Rates";
          }
          else{
          $i = 1;
            while($row =  $top10HardResult->fetch_assoc()) {
              $school = $row["INSTNM"];
              $admHard = $row["ADM_RATE"] *100;
              echo '<p style="display:inline">'."$i.) $school";
              echo " $admHard % </p><br>";
              $i++;      
            }
          }
          ?>
               </p></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Top 10 Schools with Largest Populations</div>
                <div class="collapsible-body"><p>
                  <?php          
        if(!$top10LargePopResult){
            echo "Could not find top 10 Largest Populations";
          }
          else{
          $i = 1;
            while($row =  $top10LargePopResult->fetch_assoc()) {
              $school = $row["INSTNM"];
              $schoolValue = $row["UGDS"] ;
              echo '<p style="display:inline">'."$i.) $school";
              echo " $schoolValue Students </p><br>";
              $i++;      
            }
          }
          ?>


                </p></div>
              </li>
          <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Top 10 Schools with Smallest Populations</div>
                <div class="collapsible-body"><p>
                  <?php          
        if(!$top10LargePopResult){
            echo "Could not find top 10 Largest Populations";
          }
          else{
          $i = 1;
            while($row =  $top10SmallPopResult->fetch_assoc()) {
              $school = $row["INSTNM"];
              $schoolValue = $row["UGDS"] ;
              echo '<p style="display:inline">'."$i.) $school";
              echo " $schoolValue Students </p><br>";
              $i++;      
            }
          }
          ?>


                </p></div>
      </li> 
      <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Top 10 Schools with Lowest Average Cost</div>
                <div class="collapsible-body"><p>
                  <?php          
        if(!$top10LowAvgCostResult){
            echo "Could not find top 10 Lowest Cost Schools";
          }
          else{
          $i = 1;
            while($row =  $top10LowAvgCostResult>fetch_assoc()) {
              $school = $row["INSTNM"];
              $schoolValue = $row["AVG_COST"] ;
              echo '<p style="display:inline">'."$i.) $school";
              echo "$$schoolValue</p><br>";
              $i++;      
            }
          }
          ?>
                </p></div>
      </li> 

            </ul>
          </div>