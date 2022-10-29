(document).ready(function(){
	$(".hideme").click(function(){
		$(this).hide();
	});
	$("#showmodal").click(function(){
		$(".modalbox").fadeToggle();
	});
});
