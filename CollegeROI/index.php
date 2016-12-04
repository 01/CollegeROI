<
<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Input Autocomplete Suggestions Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css">
      <link href = "https://code.jquery.com/ui/1.10.2/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
      <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
      <script src = "https://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>

  <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/currency-autocomplete.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>
  <script type="text/javascript" src="js/slider.js"></script>

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



</head>
<?php
$localtest = true;
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
if($localtest){
  $conn = new mysqli($servername, $username, $password, $dbname);
}
else{
  $conn = new mysqli($servername, $username, $password, $dbname);
}// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}
else{
  echo "Worked";
}
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $conn->error);
    exit();
} else {
    printf("Current character set: %s\n", $conn->character_set_name());
}
$sql1 = "SELECT INSTNM, UNITID FROM Main_Table";
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
            'data' => $row['UNITID'],
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
echo "Makes it here.....";
$sql3  = "SELECT * FROM major_salary";
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
<body>
  <div id="topbar"><a href="#">This is a toolbar</a></div>
  <div id="w">
  <h1>Form 1</h1>
 
    

    <div id="content" align="center">
<form>
  <div class="form-group">
    <p>
          <label for = "price2">admission rate</label>
          <input type = "text" id = "price2" style = "border:0; color:#b9cd6d; font-weight:bold;">
          </p>
          <div id = "slider-2"></div>
      <br>
      <p>
             <label for = "price3">Price range:</label>
             <input type = "text" id = "price3" style = "border:0; color:#b9cd6d; font-weight:bold;">
          </p>
          <div id = "slider-3"></div>
      <br><br>
  </div>

  <div class = "form-group" id = "college1">
    <legend>Please enter your college(s)</legend> 
      <div>
          <form><input type="text" class="biginput college-auto form-control" id="collegeAuto1"></form>
      </div>
</div>
<br><br>
  <fieldset class="form-group">
    <legend>How Big do you want your school to be?</legend>
    <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Small School < 2000 people
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                     Medium School 2000-15,000 people
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Large School > 15,000 people
                                 </fieldset>   
                            </label>
                        </div>
    
  </fieldset>
   <div class="form-group">
    <legend>I want to go to:</legend>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        A public school
      </label>
    </div>
    <div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
        A private not for profit
      </label>
    </div>
    <div class="form-check disabled">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3">
        A private for profit
      </label>
    </div>
  </div>
<div class = "form-group" id = "state1">
    <legend>Please enter your State</legend>
      <div>
        <form>
          <input type="text" class="biginput state-auto form-control" id="stateAuto1">
        </form>

      </div><!-- @end #searchfield -->
</div>
  <div class="form-group">
    <legend>Choose a Region that you want to go to school in</legend>

                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    New England (CT, ME, MA, NH, RI, VT)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Mid-Atlantic (DE, DC, MD, NJ, NY, PA)
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Greak Lakes (IL, IN, MI, OH, WI)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Plains (IA, KS, MN, MO, NE, ND, SD)
                                </fieldset>
                            </label>
                        </div> 
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Southwest (AZ, NM, OK, TX)
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                    Rocky Mountains (CO, ID, MT, UT, WY)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox"/>
                                     Outlying Areas (AS, FM GU, MH, MP, PR, PW, VI)
                                </fieldset>
                            </label>
                        </div>
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div><!-- @end #content -->



  </div><!-- @end #w -->

  <div id="w">
  <h1>Form 2</h1>
    <div id="content" align="center">
      <form>
        <div class = "form-group">
        <legend>Please enter your Major</legend>
        <div>
          <form><input type="text" name="currency" class="biginput form-control" id="majorAuto2"></form>
        </div>
        </div>
        
        <div id="outputbox">
          <p id="outputcontent2">Choose a Major and the results will display here.</p>
        </div>
        <div class = "form-group">
              <legend>Please enter your college(s)</legend> 
                <div>
                    <form><input type="text" class="biginput college-auto form-control" name="collegeAuto2"></form>
                </div>
        </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div><!-- @end #content -->



  </div>
    <div id="w">
  <h1>Form 3</h1>
 
    

    <div id="content" align="center">
<form>
        <div class = "form-group">
        <legend>Please enter your Major(s)</legend>
        <div>
          <form><input type="text" name="currency" class="biginput major-auto form-control" id="majorAuto3"></form>
        </div>
        </div>
        
        <div id="outputbox">
          <p id="outputcontent2">Which college would you like to compare them at?</p>
        </div>
        <div class = "form-group">
              <legend>Please enter a college</legend> 
                <div>
                    <form><input type="text" class="biginput college-auto form-control" name="collegeAuto3"></form>
                </div>
        </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div><!-- @end #content -->



  </div>



</body>
</html>