$(function() {
	$(document).ready(function () {
		var winHeight = $(window).height();
		var chronHeight = $(".lReadCont .inner .center .chronology").height();
		//$(".lReadCont").css('background','red');
		$(".imageLRead").css('height',winHeight);
		$(".lReadCont .inner .center .chronology").css('height',winHeight+chronHeight);
		$(".lReadCont .inner .center").css('paddingTop',winHeight);
		var innerHeight = $(".lReadCont .inner").outerHeight();
		$(".lReadCont").css('height',innerHeight+60);
		
		$('.chronology .item').addClass("chronologyHidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 100
		});
	});

	
	// longrid
	var longridHeight =	$('.lReadCont').height();
	var flagLongrid = true;
	$(window).scroll(function(){
	  var windowTop = $(window).scrollTop();
	  var offsetTop = $('.lReadCont').offset().top;
	  var sliderHeight = $(".lReadCont .slider").height();
	  
	  var div_top2 = $('.lReadCont .slider').offset().top;
		if (windowTop > offsetTop && windowTop < div_top2+sliderHeight){
			if(flagLongrid){
				$('body').addClass('longrid');
				flagLongrid = false;
			}
		}
		else{
			$('body').removeClass('longrid');
			flagLongrid = true;
			$(".imageLRead img").imageScale({scale:'best-fill', align:'center'});
		}
	});
});
