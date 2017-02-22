$(document).ready(function () {
	var scrollToFlag = true;
	// фиксируем левую колонку
	function leftSideBarScroll(){
		var topLineHeight = $('.topLine').height();
		var ul1Height = $('.getHeight').height();
		var grid77Height = $('.wrapper .grid77.left').height();
		var windowHeight = $(window).height();
		var leftHeight = $('.wrapper .leftSidebar').outerHeight();
		$('.wrapper .leftSidebar').css('height', grid77Height);
		$('.leftSidebar .scrollCont').css('height', windowHeight-topLineHeight);
		var scrollBlockHeight = $('.leftSidebar .scrollCont').height();
		var window_top = $(window).scrollTop();
		
		var p = $(".wrapper .leftSidebar");
		var ppp = p.position();
		console.log(ppp.top);
		var botLeftPos = ppp.top+leftHeight;

		
		if (window_top > ul1Height){
			//console.log(' > ul1Height');
			if(window_top < botLeftPos - windowHeight){
				//console.log(' < botLeftPos');
				var res;
				if(!$('.topLine').hasClass('active'))
					res = window_top - topLineHeight;
				else res = window_top;
				$('.wrapper').addClass('active');
				$('.wrapper.active .scrollCont').css('top', res);
				if(scrollToFlag){
					$('.leftSidebar .scrollCont').scrollTo('.leftSideFadeCont', 0);
					scrollToFlag = false;
				}
			}
			else if (window_top > botLeftPos - windowHeight){
				//console.log(' > botLeftPos');
				if(!$('.topLine').hasClass('active'))
					res = botLeftPos - scrollBlockHeight - 60;
				else res = res = botLeftPos - scrollBlockHeight - 60;
				$('.wrapper').addClass('active');
				$('.wrapper.active .scrollCont').css('top', res);
				
			}
			
		}
		else if (window_top < ul1Height ){
			//console.log(' < ul1Height');
			$('.wrapper').removeClass('active');
			$('.wrapper .scrollCont').css('top', 0);
			//scrollToFlag = true;
		}
	}
	$(window).scroll(function(){
		leftSideBarScroll();
	});
	
	
	
	leftSideBarScroll();
	
	$(window).resize(function () {
		leftSideBarScroll();
	});
	
	// ѕоказываем доп. меню 
	$(".topLine .mainMenu ul li.more").click(function(){
		$(window).resize();		
		if(!$('.topLine').hasClass('active')){
			
			$(".topLine").addClass('active');
				
			$('.subMenuTop').slideDown( "slow", function() {
				leftSideBarScroll();
			});

		}
		else 
		{
			$(".topLine").removeClass('active');
			$('.subMenuTop').slideUp( "slow", function() {
				leftSideBarScroll();
			});
		}
	});
	
});
