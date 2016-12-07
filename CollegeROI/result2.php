<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>

  <title>Input Autocomplete Suggestions Demo</title>
<link href='css/bootstrap.css' rel='stylesheet' />
    <link href='css/rotating-card.css' rel='stylesheet' />

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
 
  <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
  <script src="js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="js/currency-autocomplete.js" type="text/javascript"></script>
        <script src="js/string-build.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/map.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwqtFDpH6Vj3zIF5YJh3OidKS7Jy0rbKE"></script>
     <link href="css/mystyles.css" rel="stylesheet">
<div class = "container">
  <br>
      <p style="text-align:center;">
          Select a couple of colleges for comparison an
      </p>

      <p class="text-center">
        <button class="btn btn-primary" id= "Submit">
          Submit
        </button>
        </p>
  <br>
  <div class="col-sm-offset-2">

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
           // echo "Worked";
          }
          if (!$conn->set_charset("utf8")) {
              printf("Error loading character set utf8: %s\n", $conn->error);
              exit();
          } else {
             // printf("Current character set: %s\n", $conn->character_set_name());
          }
          /************ Getting the isPublic Values from Database *********************************/
          $isPublicQuery = "Select * From ispublic";
          $isPublicResult = $conn->query($isPublicQuery);
          if(!$isPublicResult){
            echo "Could not load isPublic Table";
          }
          else{
            $isPublicOptions=array();
            while($row = $isPublicResult->fetch_assoc()) {
              $isPublicOptions[$row["id"]]= $row["description"];
            }
          }

        /*********************************************************************************************/

        /***************Get Region Descriptors ******************************************************/
        $regionQuery = "Select * From regions";
          $regionResult = $conn->query($regionQuery);
          if(!$regionResult){
            echo "Could not load region Table";
          }
          else{
            $regionOptions=array();
            while($row = $regionResult->fetch_assoc()) {
              $regionOptions[$row["region_id"]]= $row["region_name"];
            }
          }
        /*******************************************************************************************/

        /*******************Get Type of Enviornment ************************************************/
        $environmentQuery = "Select * From environment";
          $environmentResult = $conn->query($environmentQuery);
          if(!$environmentResult){
            echo "Could not load environment Table";
          }
          else{
            $environmentOptions=array();
            while($row = $environmentResult->fetch_assoc()) {
              $environmentOptions[$row["ENV_ID"]]= array(
                'ENV_NAME' =>$row["ENV_NAME"],
                'ENV_DESC' =>$row["ENV_DESC"],
                );
            }
          }
        /**********************************************************************************************/  
          if (isset($_GET["sqlQuery"])) {
              $sql = $_GET["sqlQuery"];
              //echo $sql;
              //echo '5';
          }else{
              //echo 'no variable received';
          }
          if($debug==true){
            $sql = "FROM Main_Table Limit 30";
            $sql1 = "Select * ".$sql;
           /* $isPublicOptions =array();
            $isPublicOptions[1]="Public";
            $isPublicOptions[2]="Private for Profit";
            $isPublicOptions[3]="Private Non Profit";*/

          }
       
          $result = $conn->query($sql1);


          /**********************Average Aggregates Entire Database************************************************************/
          $aggregateTotalQuery = "Select AVG(ADM_RATE) as avgADM, AVG(NET_PRICE) as avgNET, AVG(NP_0_30) as avgNP030, AVG(NP_30_48) as avgNP3048,
            AVG(NP_48_75) as avgNP4875, AVG(NP_75_110) as avgNP7511, AVG(NP_110_Plus) as avgNP110P, AVG(AVG_COST) as avgAvgCost, AVG(IN_STATE) as avgInState,
            AVG(OUT_STATE) as avgOutState, AVG(PCTFLOAN) as avgPCTFLOAN, AVG(UNEMP_RATE) as avgUNEMP, AVG(MD_EARN_WNE_P6) as avgMDP6, AVG(MD_EARN_WNE_P8) as avgMDP8, AVG(MD_EARN_WNE_P10) as avgMDP10, AVG(graduation_rate) as avgGradRate, AVG(GRAD_DEBT_MDN) as avgGradDebt ". $sql;
            $aggregateTotalResult = $conn->query($aggregateTotalQuery);
        /***************************************************************************************************************************/

        /*********************Aggregates for College Search Results ***************************************************************/
        $aggregateFromQuery = "Select MIN(ADM_RATE) as mostSelect, MIN(NET_PRICE) as minNET, MIN(NP_0_30) as minNP030, MIN(NP_30_48) as minNP3048,
            MIN(NP_48_75) as minNP4875, MIN(NP_75_110) as minNP7511, MIN(NP_110_Plus) as minNP110P, MIN(AVG_COST) as minAvgCost, MIN(IN_STATE) as minInState,
            MIN(OUT_STATE) as minOutState, MAX(PCTFLOAN) as maxPCTFLOAN, MIN(UNEMP_RATE) as minUNEMP, MAX(MD_EARN_WNE_P6) as maxMDP6, MAX(MD_EARN_WNE_P8) as maxMDP8, MAX(MD_EARN_WNE_P10) as maxMDP10, MAX(graduation_rate) as maxGradRate, MIN(GRAD_DEBT_MDN) as minGradDebt ".$sql;


        /*************************************************************************************************************************************/    
          //echo $queryTest;
         $aggregateCurrentResult = $conn->query($aggregateFromQuery);
          if(!$aggregateCurrentResult) echo $aggregateFromQuery;

          if (!$result) {
            //echo "Could not successfully run query ($sql) from DB: " . mysql_error();
            //echo $sql;
            echo 'ended up here';
            exit;
            }
            if ($result->num_rows > 0) {

 
          while($row = $result->fetch_assoc()) {
                //echo "id: " . $row["INSTNM"]."<br>";
            /****** Storing all necessary values for each tuple Each iteration of loop is single tuple *****************/
            $collegeName = $row["INSTNM"];
            $collegeLat = $row["LATITUDE"];
            $collegeLong = $row["LONGITUDE"];
            $collegeUnitID = $row["UNITID"];
            $collegeCity = $row["CITY"];
            $collegeState = $row["STATE"];
            $collegePop = $row["UGDS"];
            $collegeAdm = $row["ADM_RATE"] *100;
            $collegeURL = $row["INSTURL"];
            $collegeZip = $row["ZIP"];
            $collegePop = $row["UGDS"];
            $isPublic = $isPublicOptions[$row["ispublic"]];
            $collegeFinAid = $row["PCTFLOAN"] * 100;
            $inState = $row["IN_STATE"];
            $outState = $row["OUT_STATE"];
            $avgCost = $row["AVG_COST"];
            $netPrice = $row["Net_Price"];
            $np030 = $row["NP_0_30"];
            $np3048 = $row["NP_30_48"];
            $np4875 = $row["NP_48_75"];
            $np7511 = $row["NP_75_110"];
            $np110P = $row["NP_110_Plus"];
            $empRate = 100 -$row["UNEMP_RATE"];
            $twoYearSalary = $row["MD_EARN_WNE_P6"];

            $eightYearSalary = $row["MD_EARN_WNE_P10"];
            $sixYearSalary = $row["MD_EARN_WNE_P8"];
            $gradRate = $row["graduation_rate"] * 100;
            $region = $regionOptions[$row["REGION"]];
            $environmentName = $environmentOptions[$row["type_of_enviornment"]]["ENV_NAME"];
            $environmentDESC = $environmentOptions[$row["type_of_enviornment"]]["ENV_DESC"];
            $urlImg = substr($collegeURL,4);

            $majorName = "Computer Science";
            /******************************************************************************************************************/
              echo <<< EOT
 <!-- Card go here-->

                  <!--Begin Card need the line under in the main result taken out here for neatness-->
          <div class="col-md-6 col-sm-6">
             <div class="card-container manual-flip">
                <div class="card">
                    <div class="front">
                        <div class="cover2">
                        <img style="display:inline-block" src="//logo.clearbit.com/$collegeURL?size=70">
                            <div style="display:inline-block; width : 80%;">
                                   
                             <p class="text-center profession"><p align = "center"><h3 class="name"><b>$collegeName</b></h3><b>$isPublic</b> College located in the $region </p></p>
                            </div>

                        </div>
                        <div class="content">
                              <div class="stats-container">
                                    <div class="stats1">
                                        <h5>   Average Early Career Salary</h5>
                                        <h5><b> $majorName </b></h5>
                                        <p>
                                        <font color="green"><b>$ $twoYearSalary</b></font>
                                        </p>
                                    </div>
                              
                                    <div class="stats1">
                                        <h5>Average Mid Career Salary</h5>
                                         <h5><b> $majorName </b></h5>
                                        <p>
                                             <font color="green"><b>$ $eightYearSalary</b></font>
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <br>
                            <div class="content">
                              <div class="stats-container2">
                                    <div class="stats2">
                                        <h3 align = "center">  Net Price Based on Income</h3>
                                       <pre> <h5> <b>$0-30K : <font color="red"> $ $np030 </b></font><b>     $30-48K : <font color="red">$ $np3048 </b></h5></font><h5> <b>$48-75K : <font color="red"> $ $np4875 </b></font><b>    $75-110K : <font color="red">$ $np7511 </b></h5></font><h5> <b>1110K+ : <font color="red"> $ $np110P </b></h5></font></pre>
                                    </div>
                                </div>
                        </div>
<br><br>
                            <div class="footer">
                                <div class="social-links text-center">
                                <a href="http://$collegeURL"> $collegeName Website </a>
                            </div>
                             <button class="btn btn-simple" onclick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Additional information
                                </button>


                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"Find Out How Long The Banks Owns You!!"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Job Description</h4>
                                <p class="text-center">Every Dollar Counts.</p>
                                <div class="stats-container">
                                    <div class="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div class="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div class="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <button class="btn btn-simple" rel="tooltip" title="Flip Card" onclick="rotateCard(this)">
                                <i class="fa fa-reply"></i> Back
                            </button>
                        </div>
                    </div>

                </div> <!-- end card -->
            </div> <!-- end card-container -->
            </div>

EOT;
    } //echo "</div></div></div>";
} else {
    echo "0 results";
}
           //echo $result;
           //echo 'Made it here';
           $conn->close();
?> 
<script type="text/javascript">
    $().ready(function(){
        $('[rel="tooltip"]').tooltip();
    });
    function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46172202-4', 'auto');
  ga('send', 'pageview');
</script>

</html>