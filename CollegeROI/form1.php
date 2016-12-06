<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>
<?php include 'content.php'; ?>

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

  <div id="w mainbody">
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
                                    <input type="checkbox" value = "UGDS < 2000" id= "popBox"/>
                                    Small School < 2000 people
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value= "(UGDS > 2000 AND UGDS < 15001)" id= "popBox"/>
                                     Medium School 2000-15,000 people
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "(UGDS > 15000)" id= "popBox"/>
                                    Large School > 15,000 people
                                 </fieldset>   
                            </label>
                        </div>
    
  </fieldset>
   <div class="form-group">
    <legend>I want to go to:</legend>
    <div class="checkbox">
       <label>
         <fieldset class="form-inline">
            <input type="checkbox" value = "ispublic = 1" id = "isPublic"/>
                Public 
         </fieldset>   
       </label>
   </div>
      <div class="checkbox">
       <label>
         <fieldset class="form-inline">
            <input type="checkbox" value = "ispublic = 2" id = "isPublic"/>
                Private For Profit
         </fieldset>   
       </label>
   </div>
      <div class="checkbox">
       <label>
         <fieldset class="form-inline">
            <input type="checkbox" value = "ispublic = 3" id = "isPublic"/>
                Private Not For Profit
         </fieldset>   
       </label>
   </div>
  
  <div class="form-group">
    <legend>Choose a Region that you want to go to school in</legend>

                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 1" id = "regionBox"/>
                                    New England (CT, ME, MA, NH, RI, VT)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 2" id = "regionBox"/>
                                    Mid-Atlantic (DE, DC, MD, NJ, NY, PA)
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 3" id = "regionBox"/>
                                    Greak Lakes (IL, IN, MI, OH, WI)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 4" id = "regionBox"/>
                                    Plains (IA, KS, MN, MO, NE, ND, SD)
                                </fieldset>
                            </label>
                        </div> 
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 5" id = "checkbox5"/>
                                    Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 6" id = "checkbox6"/>
                                    Southwest (AZ, NM, OK, TX)
                                </fieldset>
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 7" id = "checkbox7"/>
                                    Rocky Mountains (CO, ID, MT, UT, WY)
                                 </fieldset>   
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <fieldset class="form-inline">
                                    <input type="checkbox" value = "REGION = 8" id = "checkbox8"/>
                                     Outlying Areas (AS, FM GU, MH, MP, PR, PW, VI)
                                </fieldset>
                            </label>
                        </div>
  </div>


  <button type="submit" class="btn btn-primary" id= "submit1">Submit</button>
</form>
    </div><!-- @end #content -->



  </div><!-- @end #w -->