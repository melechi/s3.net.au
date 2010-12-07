<% if CurrentGalleryItems %>
	<div id="ImageGallery">
		<div style="display:none">
			<% control PrevGalleryItems %>
				<a id="ViewLink-$ID" class="$JSLightWindow"<% if JSMedia %> rel="$JSMedia"<% end_if %> href="$ViewLink" title="$Title" caption="<% if Content %>$Content - <% end_if %><% if HasDimensions %>$Width x $Height - <% end_if %>$Size"<% if PopupParams %> params="$PopupParams"<% end_if %>/>
			<% end_control %>
		</div>
		<table>
			<% control CurrentGalleryItems %>
				<% if First %>
					<tr>
				<% else_if FirstItemLine %>
					<tr>
				<% end_if %>
				<td>
					<a id="ViewLink-$ID" class="$JSLightWindow"<% if JSMedia %> rel="$JSMedia"<% end_if %> href="$ViewLink" title="$Title" caption="<% if Content %>$Content - <% end_if %><% if HasDimensions %>$Width x $Height - <% end_if %>$Size"<% if PopupParams %> params="$PopupParams"<% end_if %>>
						<img src="$ThumbnailURL" alt="$Title"/>
						<% if ShowTitle %>
							<p class="galleryImageTitle">$Title</p>
						<% end_if %>
						<% if IsNotImage %>
							<% if ShowSize %>
								<p class="galleryImageDetails">$Size</p>
							<% end_if %>
						<% else %>
							<% if ShowImageDimensions %>
								<p class="galleryImageDetails">$Width x $Height<% if ShowSize %> - $Size<% end_if %></p>
							<% else_if ShowSize %>
								<p class="galleryImageDetails">$Size</p>
							<% end_if %>
						<% end_if %>
					</a>
				</td>
				<% if Last %>
					</tr>
				<% else_if LastItemLine %>
					</tr>
				<% end_if %>
			<% end_control %>
		</table>
		<div style="display:none">
			<% control NextGalleryItems %>
				<a id="ViewLink-$ID" class="$JSLightWindow"<% if JSMedia %> rel="$JSMedia"<% end_if %> href="$ViewLink" title="$Title" caption="<% if Content %>$Content - <% end_if %><% if HasDimensions %>$Width x $Height - <% end_if %>$Size"<% if PopupParams %> params="$PopupParams"<% end_if %>/>
			<% end_control %>
		</div>
		<% if MediaPerPageLimit %>
			<% if CurrentGalleryItems.MoreThanOnePage %>
				<div id="NavigationBar">
					<div id="Previous">
						<% if CurrentGalleryItems.NotFirstPage %>
							<a rel="$JSPrevPage" href="$CurrentGalleryItems.PrevLink" title="View the previous page">&lt; Previous</a>
						<% end_if %>
					</div>
					<div id="PageNumbers">
						<% control CurrentGalleryItems.Pages %>
							<% if CurrentBool %>
								<span class="currentPage">$PageNum</span>
							<% else %>
								<a href="$Link" title="View page number $PageNum">$PageNum</a>
							<% end_if %>
						<% end_control %>
					</div>
					<div id="Next">
						<% if CurrentGalleryItems.NotLastPage %>
							<a rel="$JSNextPage" href="$CurrentGalleryItems.NextLink" title="View the next page">Next &gt;</a>
						<% end_if %>
					</div>
					<div class="clear"><!-- --></div>
				</div>
			<% end_if %>
		<% end_if %>
	</div>
<% end_if %>