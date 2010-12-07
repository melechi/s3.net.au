$PWT.Class.create
(
	{
		$namespace: 'S3',
		$name:		'TVBoxes'
	}
)
(
	{
		init: function()
		{
			
		}
	}
);
$(document).ready
(
	function()
	{
		window.tvboxes=new S3.TVBoxes();
	}
);