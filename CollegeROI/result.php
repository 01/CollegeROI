<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Input Autocomplete Suggestions Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="style.css">
 <link href='css/bootstrap.css' rel='stylesheet' />
    <link href='css/rotating-card.css' rel='stylesheet' />
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
  <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>


</head>

 <?php
 
  $localtest = true;
  $debug = false;
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
              echo 'no variable received';
          }
          if($debug==true){
            $sql = "SELECT * FROM College_Directory";
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
            $collegeCity = $row["CITY"];
            $collegeState = $row["STABBR"];

              echo <<< EOT
              <div class="col-md-4 col-sm-8">
             <div class="card-container">
               <div class="card">
                  <div class="front">
                        <div class="content">
                          <div class="main">
                               <h3 class="name"><?php John Marvel</h3>
                                <p class="profession">
                            $collegeName
                    </p>
                                <p align = "left">$collegeCity, $collegeState</p>
                            </div>
                           <br><br><br><br><br><br><br><br><br>
                            <div class="footer">
                                <button class="btn btn-simple" onclick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Get More Information
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Job Description</h4>
                                <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

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
                            <div class="social-links text-center">
                                <a href="http://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                <a href="http://creative-tim.com" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                <a href="http://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> <end card-container 
        </div> 
     <div class="col-sm-1"></div> 
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
</html>