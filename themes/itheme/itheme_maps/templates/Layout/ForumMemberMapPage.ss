<div class="typography">
	<% if Menu(2) %>
		<% include SideBar %>
	<% end_if %>
	
		<div id="Content">
		
	<% if Level(2) %>
	  	<% include BreadCrumbs %>
	<% end_if %>
	
		<h2>$Title</h2>
	
		$Content
	
		</div>
	<div id="Footer">
		<% include Footer %>
	</div> 
</div>