// JavaScript Document
$(document).ready(function(e) 
{
	
	$(".block").mouseenter(function(e) 
	{
		
		if(!$(this).hasClass('open'))
		{
			
		
		$(this).css({"margin-top":"-20px","z-index":"5"});
		$(this).nextAll('.block').css('margin-left',$(".block").width()-$(document).width()*.05);

		/*var i=0, j=$(this).nextAll('.block').length,first=$(".block").width(), b=$(this).next('.block');

			for(i=0;i<j;i++)
			{
				//alert(parseInt(b.css('margin-left')) - parseInt(b.prev('.block').css('margin-left')));
			//i++;
			
			b.css('margin-left',parseInt(b.css('margin-left'))+first-($(document).width()*.05) + "px");
			b=b.next('.block');
		
			}*/
		
		/*$(this).next('.block').css('margin-left',parseInt($(this).css('margin-left'))+$(".block").width() + "px").delay(800);
		alert(parseInt($(this).css('margin-left'))+$(".block").width() + "px");
		for(var i=1;i<$('.block').length;i++)
		{
			
			if($(this).attr('id')=='resume')
			{
				 b.css("margin-left",parseInt(b.prev('.block').css('margin-left')) + ($(document).width()*.05) + "px").delay(800);
				 alert(parseInt(b.prev('.block').css('margin-left')) + ($(document).width()*.05) + "px");
			}
			else
			{
	        b.css("margin-left",parseInt($(this).prev('.block').css("margin-left"))+$(".block").width()-($(document).width()*.05));
			}
		b=b.next('.block');			
		}*/
		//$(this).find('.h1two').css({'position':'relative','top':'auto','left':'auto'});		
		//$(this).find('h1').width('auto');
		//$(this).find('h1').css({'left':'75px','top':'20%','position':'absolute'});		
$(this).find('h1').css({'text-align':'center','margin-right':'0','margin-left':'0','margin-top':'100px'});
		$(this).find('span').not('.button').addClass('hidden');
		$(this).find('.goBox').removeClass('invisable');
		//})
		}
	
    });    
	
	$(".block").mouseleave(function(e) 
	{
		if(!$(this).hasClass('open'))
		{
		$(this).css({"margin-top":"0px","z-index":"1"});
        $(this).nextAll('.block').css("margin-left",$(this).css("margin-left"));
	   /*var b=$(this).next('.block');
	   		for(var i=1;i<$('.block').length;i++)
		{
	       $(".block").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',function(){
			    b.css("margin-left",parseInt(b.css("margin-left"))-$(".block").width()+(($(document).width()*.05)) + "px");
			b=b.next('.block');		
		   });
		}
		*/
		//$(this).find('h1').width('10px');
		//$(this).find('h1').css({'left':'0','top':'0'});
		$(this).find('h1').css({'margin-right':'99%','margin-left':'0','margin-top':'5%'});
		$(this).find('span').removeClass('hidden');
		//$(this).find('.h1two').css({'position':'absolute','top':'0','left':'40px'});
		$(this).find('.goBox').addClass('invisable');
		}
    });  
	
	$(".block .goBox").click(function(e) 
	{
	
		$(this).addClass('hidden');
		$('.link').addClass('hidden');
		$(this).parent().find('h1').css({'text-align':'center','margin-right':'0','margin-left':'0','margin-top':'5%'});
        $(this).parent().addClass("open");
		
		$(this).parent().parent(this).find(".block").not(".open").addClass("hidden");
		$(this).parent().find(".content").removeClass("hidden");
		//$('h1').css('margin-top','0%');
		
		
	$(".block").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',function(){
		var blockID = '#' + $(this).attr('id');
		var navID =blockID +'Nav';
		  var navpos = $(navID).offset();
		  $(blockID).on('scroll',function(){
		  
		//alert($(blockID).scrollTop() + " " + navpos.top);
				  
	 	 console.log(navpos.top);
	  
	      if ($(blockID).scrollTop() > navpos.top) {
	        $(navID).addClass('fixed');
	       }
	       else {
	         $(navID).removeClass('fixed');
	         }
	       
       });
       
    });
		
		
			
    });
	$(".block").on('click','#close',function(e)
	{
		e.stopPropagation();
		$('.goBox').removeClass('hidden');
		$('.link').removeClass('hidden');		
		$(".open").find(".content").addClass("hidden");
		$(this).parent().parent().parent().removeClass("open");
		$(this).parent().parent().parent().parent().find(".block.hidden").removeClass("hidden");
		$(this).parent().parent().parent().find('h1').css({'margin-right':'99%','margin-left':'0px','margin-top':'5%'});		
		//$('h1').css('margin-top','50%');

				
	});
	
	$('.button').on('click',function()
	{
		var targetClass = $(this).data("class");
		
		$(this).parent().parent().parent().find('.wrapper').load(targetClass);
	});
	

});