<div id="ForumContent">
	<% include ForumLogin %>
	<h1 class="genericTitle">$Parent.Title</h1>
	<% include Menu2 %>
	<div class="forumFeatures">
		<div class="featureLeft">
			<div id="ForumSearch">
				<form action="<% if ForumHolderURLSegment %>{$ForumHolderURLSegment}<% else %>{$URLSegment}<% end_if %>/search/" id="searchForum" method="get">
					<fieldset>
						<!-- span>Search:</span -->
						<input class="text" type="text" name="for" />
						<input class="submit" type="submit" value="Search"/>
					</fieldset>
				</form>
			</div>
			<h2>$Subtitle</h2>
			<% if Abstract %>$Abstract<% else %>$Content<% end_if %>
			<span class="breadcrumbs"><strong>$Breadcrumbs</strong></span>
			
		</div>
    <div class="clear"><!-- --></div>
	</div>