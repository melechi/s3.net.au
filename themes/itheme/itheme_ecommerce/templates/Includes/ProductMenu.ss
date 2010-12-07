<div id="Sidebar" class="typography">
	<div class="dbx-group" id="ecommerceSidebar" style="position: relative; display: block;">
		<div class="sidebarBox dbx-box">
			<h3 class="dbx-handle">
				<% control Level(1) %>
					$Title
				<% end_control %>
			</h3>
			
			<div class="dbx-content" style="position: relative; display: block;">
			<ul>
				<% control GroupsMenu %>
					<% if Children %>
						<li class="$LinkingMode"><a href="$Link" title="Go to the $Title.XML page" class="$LinkingMode Nobottom">$MenuTitle</a>
					<% else %>
						<li><a href="$Link" title="Go to the $Title.XML page" class="$LinkingMode">$MenuTitle</a>
					<% end_if %>	  
				
					<% if LinkOrSection = section %>
						<% if ChildGroups %>
							<ul class="sub">
								<li>
									<ul>
										<% control ChildGroups %>
											<li class="$LinkingMode">
												<a href="$Link" title="Go to the $Title.XML page" class="$LinkingMode">$MenuTitle.LimitCharacters(22)</a>
											</li>
										<% end_control %>
									</ul>
								 </li>
							</ul>
						 <% end_if %>
					<% end_if %> 
				</li> 
				<% end_control %>
			</ul>
			</div>
		</div>
	<div class="sidebarBox cart dbx-box">
		<% include Cart %>
	</div>
</div>
</div>
  
  	
