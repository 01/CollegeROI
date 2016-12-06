<!doctype html>
<html lang="en-US">
<head>
 <meta charset="utf-8">
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
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>





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
          if (isset($_GET["compareQuery"])) {
              $sql = "SELECT * FROM Main_Table WHERE ";
              $sql1 = $_GET["compareQuery"];
              $sql = $sql.$sql1;
              echo $sql;
              //echo '5';
          }else{
              //echo 'no variable received';
          }
          if($debug==true){
            $sql = "SELECT * FROM Main_Table Limit 10";
          }
          else{}
          $result = $conn->query($sql);
          if (!$result) {
            //echo "Could not successfully run query ($sql) from DB: " . mysql_error();
            //echo $sql;
            echo 'ended up here';
            exit;
            }
            if ($result->num_rows > 0) {
    // output data of each row
                $netPriceNames= array();
                $netPriceValues = array();
          
?>
<script>
$(function () {
    var chart1 = Highcharts.chart('container', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Net Price Comparison By Income Level'
        },

        subtitle: {
            text: 'Resize the frame or click buttons to change appearance'
        },

        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },

        xAxis: {
            categories: ['Income $0-30k', 'Income $30k-48k', 'Income $48k-75k', 'Income $75k-110k', 'Income 110k+'],
            labels: {
                x: -20
            }
        },

        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Net Price $'
            }
        },

        series: [
        <?php 
        $number = $result->num_rows;
        $i = 1;
         while($row = $result->fetch_assoc()) {

                //echo "id: " . $row["INSTNM"]."<br>";
            $netPriceNames[]=$row["INSTNM"];
            if(!$row["Net_Price"])$netPriceValues[]=0;
             else $netPriceValues[] = $row["Net_Price"];
           echo "{";
            echo "name: '".$row["INSTNM"]."',";
           echo "data: [".$row["NP_0_30"].",".$row["NP_30_48"].",". $row["NP_48_75"].",".$row["NP_75_110"].",".$row["NP_110_Plus"]."]";
            if($i==$number){echo "}";}
            else {echo "},";}
              $i++;
    }?>
      
      ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    });

    $('#small').click(function () {
        chart1.setSize(400, 300);
    });

    $('#large').click(function () {
        chart1.setSize(600, 300);
    });

});
</script>
<?php
} else {
    echo "0 results";
}

           //echo $result;

           //echo 'Made it here';
           $conn->close();
?> 
<div id="container"></div>
<br><br><br>
<div id="container1"></div>
<script type="text/javascript">

$(function () {
    var chart = Highcharts.chart('container1', {
        yAxis: {
                  labels: {
                      formatter: function() {
                          return '$' +this.value ;
                        }
                  }
          },
        title: {
            text: 'Average Net Price Comparison'
        },
        subtitle: {
            text: 'Comparison of Average Net Price of Attendence of Selected Colleges'
        },
        xAxis: {
             categories: [<?php echo "'" .join($netPriceNames, "','"). "'" ?>]
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [<?php echo join($netPriceValues, ', ') ?>],
            showInLegend: false


            
            
        }]
    });
  })

</script>



</html>