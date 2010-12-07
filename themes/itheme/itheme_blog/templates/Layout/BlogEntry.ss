<% include BlogSideBar %>
<div id="BlogContent" class="typography">
	<% include BreadCrumbs %>
	
	<div class="blogEntry">
			<div class="date"><span>$Date.ShortMonth</span>$Date.DayOfMonth</div>
			<div class="title"><h2>$Title</h2>
			<a class="add_comments" href="$Link#PageComments_holder" title="View Comments Posted">Add comments</a>
				<% if Tags %>
					<p class="tags">
						<% control Tags %>
							<a href="$Link" title="View all posts tagged '$Tag'">$Tag</a><% if Last %><% else %><% end_if %>
						<% end_control %>
					</p>
				<% end_if %>
			</div>
			<div class="entry">
			<p>$Content.Parse(BBCodeParser)</p>
			</div>
	</div>
			<% if CurrentMember %><p><a href="$EditURL" id="editpost" title="Edit this post">Edit this post</a> | <a href="$Link(unpublishPost)" id="unpublishpost">Unpublish this post</a></p><% end_if %>
			
	$PageComments

</div>
<div id="Footer">
<% include Footer %>
</div>