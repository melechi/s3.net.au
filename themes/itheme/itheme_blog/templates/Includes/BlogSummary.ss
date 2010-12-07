<div class="blogSummary">
	<div class="date"><span>$Date.ShortMonth</span>$Date.DayOfMonth</div>
	<div class="title"><h2><a href="$Link" title="View full post titled - '$Title'">$MenuTitle</a></h2>
		<a class="comment_count" href="$Link#PageComments_holder" title="View Comments Posted">$Comments.Count Comments &raquo;</a>
		<% if Tags %>
			<p class="tags">
				<% control Tags %>
					<a href="$Link" title="View all posts tagged '$Tag'">$Tag</a><% if Last %><% else %> <% end_if %>
				<% end_control %>
			</p>
		<% end_if %>
	</div>
	<div class="entry">
		<p>$ParagraphSummary</p>
	</div>
</div>