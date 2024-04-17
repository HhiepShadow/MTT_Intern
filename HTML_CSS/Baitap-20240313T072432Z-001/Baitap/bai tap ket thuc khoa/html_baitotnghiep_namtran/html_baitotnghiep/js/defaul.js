	
function showmenu()
	{
		if($(".navi").css('display')=='none')
		{
			$(".navi").fadeIn("fast");
		}
		else
		{
			$(".navi").fadeOut("fast");
		}
	}