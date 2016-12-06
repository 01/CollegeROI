<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>
<?php include 'content.php'; ?>
<h4>Popout</h4>


 <p class="caption">
          To create a popout collapsible, just add the class <code class="language-markup">popout</code>.
        </p>
        <ul class="collapsible popout collapsible-accordion" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">subtitles</i>Top 10 Easiest and Hardest Schools to Get Into</div>
            <div class="collapsible-body">
             <p> 
             <pre class="tab">  <u>Top 10 Hardest Schools</u>                         <u>Top 10 Easiest Schools</u>
<?php
$debug = false;
$top10AdmEasyQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE < 1) ORDER BY ADM_RATE DESC LIMIT 10";
$top10AdmHardQuery = "Select INSTNM, ADM_RATE From Main_Table WHERE (ADM_RATE > 0) ORDER BY ADM_RATE ASC LIMIT 10";
          
          $top10EasyResult= $conn->query($top10AdmEasyQuery);
          $top10HardResult= $conn->query($top10AdmHardQuery);
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
             
              echo '<p style="display:inline">';
              if(i<10)echo "$i  ";
              else echo "$i.";
              echo $schoolHard;
              echo " $admHard % </p>";
              echo '                <p style="display:inline">';
              echo $schoolEasy;
               echo " $admEasy % </p>";
              echo "</p>";
              $i++;
            //  echo "<pre class="tab">1.) $schoolHard  $admHard %    $schoolEasy $admEasy % </pre><br>";
               
            }
          }

?></pre>
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </li>
          <li>
            <div class="collapsible-header active"><i class="material-icons">games</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">library_books</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </li>
        </ul>