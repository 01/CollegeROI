<!doctype html>
<html lang="en-US">
<head>
  
  <title>Input Autocomplete Suggestions Demo</title>
<link href='css/bootstrap.css' rel='stylesheet' />
    <link href='css/rotating-card.css' rel='stylesheet' />

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
 
  <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
  <script src="js/jquery-1.10.2.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>






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
           // echo "Worked";
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
              //echo 'no variable received';
          }
          if($debug==true){
            $sql = "SELECT * FROM Main_Table Limit 10";
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
                
          while($row = $result->fetch_assoc()) {
                //echo "id: " . $row["INSTNM"]."<br>";
            $collegeName = $row["INSTNM"];
            $collegeUnitID = $row["UNITID"];
            $collegeCity = $row["CITY"];
            $collegeState = $row["STABBR"];
            $collegePop = $row["UGDS"];
            $collegeAdm = $row["ADM_RATE"];
            $collegeFinAid = $row["PCTFLOAN"] * 100;
              echo <<< EOT
              <div class="col-md-4 col-sm-6">
             <div class="card-container manual-flip">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <div id="googleMap"></div>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Thank you for choosing</h3>
                                <p class="profession">$collegeName</p>
                                <p class="text-center">We can add some text here</p>
                                <br>
                            </div>

                            <div class="footer">
                                <button class="btn btn-simple" onClick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Additional information
                                </button>
                            </div>
                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                                <ul class="nav nav-tabs">
                                  <li class="active"><a data-toggle="tab" href="#1$collegeUnitID">Description</a></li>
                                  <li><a data-toggle="tab" href="#2$collegeUnitID">Graduation Rate</a></li>
                                  <li><a data-toggle="tab" href="#3$collegeUnitID">Info</a></li>
                                </ul>
                        </div>
                        <div class="content">
                            <div class="tab-content">
                                <div id="1$collegeUnitID" class="main tab-pane fade in active">
                                    <h4 class="text-center">Description</h4>
                                    <p class="text-center">We Put a Description here</p>

                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>State</h4>
                                            <p>
                                                $collegState
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Amount of students</h4>
                                            <p>
                                                $collegePop
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Address</h4>
                                            <p>
                                                $collegeCiy , $collegeState
                                            </p>
                                        </div>
                                    </div>

                                </div>
                              <div id="2$collegeUnitID" class="main tab-pane fade">
                                    <h4 class="text-center">Information about academics</h4>
                                    <p class="text-center">Find out our stats</p>

                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>Acceptance Rate</h4>
                                            <p>
                                                $collegeAdm
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Graduation rate</h4>
                                            <p>
                                                70%
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Financial aid</h4>
                                            <p>
                                                $collegeFinAid %
                                            </p>
                                        </div>
                                    </div>

                                </div>
                              <div id="3$collegeUnitID" class="main tab-pane fade">
                                    <h4 class="text-center">Description</h4>
                                    <p class="text-center">We Put a Description here</p>
                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>Info here</h4>
                                            <p>
                                                Info here
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Info here</h4>
                                            <p>
                                                Info here
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>Info here</h4>
                                            <p>
                                                Info here
                                            </p>
                                        </div>
                                    </div>

                                </div>
                        </div>
                        <div class="footer">
                            <button class="btn btn-simple" rel="tooltip" title="Flip Card" onClick="rotateCard(this)">
                                <i class="fa fa-reply"></i> Back
                            </button>
                            <div class="social-links text-center">
                                <a href="http://www.rutgers.edu/"> Rutgers Website </a>
                            </div>
                        </div>
                    </div> <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
            </div>
          </div>
         
EOT;
    }
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