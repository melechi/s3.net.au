<!DOCTYPE html>

<html lang="$ContentLocale">
  <head>
		<% base_tag %>
		<title><% if MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
		$MetaTags(false)
		<link rel="shortcut icon" href="/favicon.ico" />
		
		<% require themedCSS(layout) %> 
		<% require themedCSS(style) %> 
		<% require themedCSS(tvboxes) %> 
		
		<% require javascript(s3/javascript/thirdparty/PWT-lite-mini.js) %>
		<% require javascript(s3/javascript/thirdparty/jquery.js) %>
		<% require javascript(s3/javascript/thirdparty/tvboxes.js) %>
		<% require javascript(s3/javascript/thirdparty/cufon-yui.js) %>
		<% require javascript(s3/javascript/thirdparty/cufon-replace.js) %>
		<% require javascript(s3/javascript/thirdparty/VAG_Round_400.font.js) %>
		<% require javascript(s3/javascript/thirdparty/VAGRounded_Lt_400.font.js) %>
	</head>
<body id="page1">
	<div id="main">
		<% include Header %>
		<% include Content %>
		<% include Footer %>
	</div>
   <script type="text/javascript"> Cufon.now(); </script>
</body>
</html>