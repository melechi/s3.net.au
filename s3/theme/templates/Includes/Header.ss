		<!--header -->
		<div id="header">
			<div class="main">
				<div id="headerLogoContainer" class="wrapper">
					<ul class="menu right">
    					<% control Menu(1) %>
							<li><a href="$Link"<% if LinkingMode = current %> class="active"<% end_if %>><span><span>$MenuTitle</span></span></a></li>
						<% end_control %>
					</ul>
					<a id="logo" href="/"><img src="/s3/theme/images/icon.png" alt=""/></a>
				</div>
				<% include HeaderGallery %>
			</div>
		</div>
		<!--header end-->