// JavaScript Document

$(document).ready(function()
{
	$('#navRight').height($('#navLeft').height()-210);
	$('header').on('click','button',function()
	{
		var targetClass = $(this).data("class");
		var target = $('#content').find('.current');
		
		target.addClass("visuallyhidden");
		target.one('transitionend',function() 
		{
			target.addClass("hidden");
		});
		//$('nav').animate({"padding-left":"37%"},"100").delay(700);	
		
    	$('#content').animate({"margin-left":"50%","margin-right":"50%","padding":"0"},"100").delay(900);
		$("#navLeft").animate({"padding-left":"45%"},"100").delay(900);
		$("#navRight").animate({"padding-right":"45%"},"100").delay(900);
		$('#content').animate({"margin-left":"200px","margin-right":"200px","padding":"100px"},"100").delay(500);
		$("#navLeft").animate({"padding-left":"20px"},"100");
		$("#navRight").animate({"padding-right":"20px"},"100").delay(650);
		$("#navRight").promise().done(function()
		{
			target.removeClass("current");
			$("#"+targetClass).addClass("current");
			$("#"+targetClass).removeClass("hidden");
			//$("#"+targetClass).css("opacity","0");
			setTimeout(function()
			{			
				$("#"+targetClass).removeClass("visuallyhidden");
				$("#"+targetClass).css("opacity","1");
			});
		});
	});
	
	$(".has_sub").mouseenter(function()
	{
		$(this).find("> .dropDown").css("display","inline-block");
		//$(this).height(200);
	});
		$(".has_sub").mouseleave(function()
	{
		$(this).find("> .dropDown").toggle();
		//$(this).height(20)
	});
	
	
});