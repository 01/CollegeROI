<?php include 'header.php'; ?>
<?php include 'connect.php'; ?>
<?php include 'sidebar.php'; ?>
<?php include 'content.php'; ?>


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
                $AdmRate = array();
                $salary1 = array();
                $salary2 = array();
                $salary3 = array();
                $debt = array();
                $debtM = array();
                $debtF = array();
          
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
            if(!$row["ADM_RATE"])$AdmRate[]=0;
            else $AdmRate[] = $row["ADM_RATE"]*100;
            
            if(!$row["MD_EARN_WNE_P6"])$salary1[]=0;
            else $salary1[] = $row["MD_EARN_WNE_P6"];
            if(!$row["MD_EARN_WNE_P8"])$salary2[]=0;
            else $salary2[] = $row["MD_EARN_WNE_P8"];
            if(!$row["MD_EARN_WNE_P10"])$salary3[]=0;
            else $salary3[] = $row["MD_EARN_WNE_P10"];

            if(!$row["DEBT_MDN"])$debt[]=0;
            else $debt[] = $row["DEBT_MDN"];
            if(!$row["FEMALE_DEBT_MDN"])$debtF[]=0;
            else $debtF[] = $row["FEMALE_DEBT_MDN"];
            if(!$row["MALE_DEBT_MDN"])$debtM[]=0;
            else $debtM[] = $row["MALE_DEBT_MDN"];





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
<br><br><br>
<div id="container2"></div>
<br><br><br>
<div id="container4"></div>
<br><br><br>
<div id="container5"></div>


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
            text: 'Average Admission Rate comparison'
        },
        subtitle: {
            text: 'Comparison of Admission Rate of Selected Colleges'
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
<script type="text/javascript">

$(function () {
    var chart = Highcharts.chart('container2', {
        yAxis: {
                  labels: {
                      formatter: function() {
                          return  this.value+'%' ;
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
            data: [<?php echo join($AdmRate, ', ') ?>],
            showInLegend: false


            
            
        }]
    });
  })
$(function () {
    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Salary Growth'
        },
        subtitle: {
            text: 'Salary Growth'
        },
        xAxis: {
            categories: [<?php echo "'" .join($netPriceNames, "','"). "'" ?>],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Salary'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '1 year',
            data: [<?php echo join($salary1, ', ') ?>]

        }, {
            name: '3 year',
            data: [<?php echo join($salary2, ', ') ?>]

        }, {
            name: '5 year',
            data: [<?php echo join($salary3, ', ') ?>]

        },]
    });
});


$(function () {
    Highcharts.chart('container5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Expected Debt'
        },
        subtitle: {
            text: 'Average Debt comparison of Female to Male'
        },
        xAxis: {
            categories: [<?php echo "'" .join($netPriceNames, "','"). "'" ?>],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Average Debt'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Average',
            data: [<?php echo join($debt, ', ') ?>],
            color: 'grey'

        }, {
            name: 'Female',
            data: [<?php echo join($debtM, ', ') ?>],
            color: 'red'

        }, {
            name: 'Male',
            data: [<?php echo join($debtF, ', ') ?>],
            color: 'blue'


        },]
    });
});

</script>



</html>