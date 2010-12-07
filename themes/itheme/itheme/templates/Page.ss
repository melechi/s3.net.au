<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" >

  <head>
	 
		<% base_tag %>
		$MetaTags
		<link rel="shortcut icon" href="/favicon.ico" />
		
		<!--[if IE 6]>
			<style type="text/css">
			 @import url(themes/itheme/css/ie6.css);
			</style> 
		<![endif]-->
		
		<!--[if IE 7]>
			<style type="text/css">
			 @import url(themes/itheme/css/ie7.css);
			</style> 
		<![endif]-->
		
		<!-- Docking boxes (dbx) by brothercake - http://www.brothercake.com/-->
		<script type="text/javascript" src="themes/itheme/templates/dbx.js"></script>
		 
		<!-- dbx configuration script -->
		<script type="text/javascript" src="themes/itheme/templates/dbx-key.js"></script>
		
		<!-- dbx stylesheet -->
		<link rel="stylesheet" type="text/css" href="themes/itheme/css/dbx.css" media="screen, projection" />
	
	</head>
<body>
<div id="BgContainer">
	<div id="Container">
		<div id="Header">
	   		<h1>Your Site Name</h1>
	    	<p>your site&#39;s tagline here</p>
		</div>
			  	
	  	<div class="clear"><!-- --></div>
		
		<div id="Layout">
		<div id="Navigation">
			<% include Navigation %>
	  	</div>
		  $Layout
		</div>
		
	   <div class="clear"><!-- --></div>
	</div>
</div>

</body>
</html>