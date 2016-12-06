<!doctype html>
<html lang="en-US">
<head>
 <meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>College ROI</title>
  
	<!-- stylesheets -->
		
		<script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link href="/css/style.css" rel="stylesheet">
  <link href="/css/bootstrap.min.css" rel="stylesheet">

		<link href="/css/font-awesome.min.css" rel="stylesheet">
		
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css">
      <link href = "https://code.jquery.com/ui/1.10.2/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
       <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.js"></script>
     <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
      <script src = "https://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
    
  <!--<script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>-->
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/currency-autocomplete.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>
  <script type="text/javascript" src="js/slider.js"></script>
  <script type="text/javascript" src="js/string-build.js"></script>
  <script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script>
			$(function () {
				// #sidebar-toggle-button
				$('#sidebar-toggle-button').on('click', function () {
						$('#sidebar').toggleClass('sidebar-toggle');
						$('#page-content-wrapper').toggleClass('page-content-toggle');	
						fireResize();					
				});
				
				// sidebar collapse behavior
				$('#sidebar').on('show.bs.collapse', function () {
					$('#sidebar').find('.collapse.in').collapse('hide');
				});
				
				// To make current link active
				var pageURL = $(location).attr('href');
				var URLSplits = pageURL.split('/');

				//console.log(pageURL + "; " + URLSplits.length);
				//$(".sub-menu .collapse .in").removeClass("in");

				if (URLSplits.length === 5) {
					var routeURL = '/' + URLSplits[URLSplits.length - 2] + '/' + URLSplits[URLSplits.length - 1];
					var activeNestedList = $('.sub-menu > li > a[href="' + routeURL + '"]').parent();

					if (activeNestedList.length !== 0 && !activeNestedList.hasClass('active')) {
						$('.sub-menu > li').removeClass('active');
						activeNestedList.addClass('active');
						activeNestedList.parent().addClass("in");
					}
				}

				function fireResize() {
					if (document.createEvent) { // W3C
						var ev = document.createEvent('Event');
						ev.initEvent('resize', true, true);
						window.dispatchEvent(ev);
					}
					else { // IE
						element = document.documentElement;
						var event = document.createEventObject();
						element.fireEvent("onresize", event);
					}
            	}
			})
		</script>
		
	</head>
	
	<body>
		<!-- header -->
		<nav id="header" class="navbar navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<div id="sidebar-toggle-button">
						<i class="fa fa-bars" aria-hidden="true"></i>
					</div>
					<div class="brand">
						<a href="/">
							College ROI <span class="hidden-xs text-muted">CS 344</span>
						</a>
					</div>
					
				</div>
			</div>
		</nav> 
		<!-- /header -->         