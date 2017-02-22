$(function() {
	// Карусель одна картинка
		$('.jcarousel.carusel')
		.on('jcarousel:create jcarousel:reload', function() {
			var element = $(this),
				width = element.innerWidth();
				width = (width / 1) + 1;
	
	
			element.jcarousel('items').css('width', width + 'px');
		}).jcarousel({
			// Your configurations options
			});
		$('.jcarousel').jcarousel({
				wrap: 'circular'
			}).jcarouselAutoscroll({
				interval: 300000000,
				target: '+=1',
				autostart: true
		});
			// навигация каруселей
		$('.jcarousel-control-prev').jcarouselControl({
			target: '-=1'
		});
		$('.jcarousel-control-next').jcarouselControl({
			target: '+=1'
		});
		// останавливаем слайдер при наведении
		$('.jcarousel.carusel').hover(function() {
			$(this).jcarouselAutoscroll('stop');
			}, function() {
				$(this).jcarouselAutoscroll('start');
		});
		$('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            }).on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            }).jcarouselPagination();
			
		// получаем текущий слайд галереи
		function CurrentSlideCarusel(ths){
			var item = ths.closest('.jcarousel-wrapper').find('.jcarousel-pagination a.active');
			var current = parseInt(item.text());
			//alert(current);
			if(current>0)
				current--;
			$('.v1').text(current);
		}
		$('.jcarousel').on('jcarousel:scrollend', function(event, carousel) {
			CurrentSlideCarusel($(this));
		});
			
			var current = parseInt($('.gallery .jcarousel-pagination a.active').text());
			$('.v2').text($('.gallery .jcarousel-pagination a').length);
	
		// Аккардеон графиков на главной
		$('.gallery .jcarousel li img').click(function() {	
			$('.jcarousel.carusel').jcarousel('scroll', '+=1');
		});
		// Аккардеон графиков на главной
		$('.infographics ul li').hover(function() {	
			if(!$(this).hasClass('active')){
				$('.infographics ul li').removeClass('active');
				$(this).addClass('active');
				$('.infographics .graphics').stop().hide('fast');
				$(this).find('.graphics').show('fast');
			}
		});
		
		// календари
		$( "#cal1").datepicker({ 
			dateFormat: 'dd MM yy',
			showOtherMonths:true,
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
				onSelect: function(dateText) {
					$("#cal1" ).closest('.calendarCont').slideUp(500);
					var selected = $("#cal1" ).val();
					$('.clickCont').removeClass('active');
					$('.date.d1').text(selected);
					
			  }
		});
		$( "#cal2").datepicker({ 
			dateFormat: 'dd MM yy',
			showOtherMonths:true,
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
				onSelect: function(dateText) {
					$("#cal2" ).closest('.calendarCont').slideUp(500);
					var selected = $("#cal2" ).val();
					$('.clickCont').removeClass('active');
					$('.date.d2').text(selected);
					
			  }
		});
		
		// отображаем календари
		$(".filter .clk").click(function(){
			if(!$(this).closest('.clickCont').hasClass('active')){
				$('.clickCont').removeClass('active');
				$(this).closest('.clickCont').addClass('active');
				$('.calendarCont').slideUp(500);
				$(this).closest('.clickCont').find('.calendarCont').slideDown(500);
			}
			else {
				$(this).closest('.clickCont').removeClass('active');
				$(this).closest('.clickCont').find('.calendarCont').slideUp(500);
			}
		});
		// выбор даты
		$(".clk1 .calendarBot .left").click(function(){
			$('#cal1').datepicker("setDate", new Date(1500,1,00) );
		});
		$(".clk1 .calendarBot .right").click(function(){
			$('#cal1').datepicker("setDate", new Date("getDate") );
		});
		$(".clk2 .calendarBot .left").click(function(){
			$('#cal2').datepicker("setDate", new Date(1500,1,00) );
		});
		$(".clk2 .calendarBot .right").click(function(){
			$('#cal2').datepicker("setDate", new Date("getDate") );
		});
		
$(document).ready(function()
{
    $("html").mouseup(function(e)
    {
        var subject = $(".dateCont"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
			$('.clickCont').removeClass('active');
			$('.calendarCont').slideUp(500);
        }
    });
});
		
		
		// стилизованный селект
		$("select").selectBoxIt({ 
			autoWidth: false, 
			copyClasses: "container",
			showEffect: "slideDown",
			hideEffect: "slideUp",
			showEffectSpeed: 400,
		 });
		$("select").bind({
			"change": function(ev, obj) {
				$(this).closest('.selectCont').find('.labelAnim').css('zIndex',1).animate({top: 0});
			}
		});

		
		// большая плашка справа
		$('.blockCaptionRight.c416_294').hover(function() {
			if(!$(this).hasClass('active')){
				var $elem = $(this);
				$elem.addClass('active');
				$elem.find('.caption').stop().animate({width: 78+'%'});
			}
		}, function() {
			var $elem = $(this);
			$elem.removeClass('active');
			$elem.find('.caption').stop().animate({width: 61+'%'});
		});
		// большая плашка справа
		$('.blockCaptionRight.large').hover(function() {
			if(!$(this).hasClass('active')){
				var $elem = $(this);
				$elem.addClass('active');
				$elem.find('.caption').stop().animate({width: 67+'%'});
			}
		}, function() {
			var $elem = $(this);
			$elem.removeClass('active');
			$elem.find('.caption').stop().animate({width: 56+'%'});
		});
		// маленькая плашка справа
		$('.blockCaptionRight.small').hover(function() {
			if(!$(this).hasClass('active')){
				var $elem = $(this);
				$elem.addClass('active');
				$elem.find('.caption').stop().animate({width: 100+'%'},
				{
					duration: 500,
					complete: function() {
					}
				});
				$elem.find('.desc').stop().animate({margin: 0},
				{
					duration: 500,
					complete: function() {
					}
				});
			}
		}, function() {
				var windowWidth = $(window).width();
				var $elem = $(this);
				$elem.removeClass('active');
				if(windowWidth<1240)
					$elem.find('.caption').stop().animate({width: 58+'%'});
				else $elem.find('.caption').stop().animate({width: 64+'%'});
				$elem.find('.desc').stop().animate({marginRight: -165});
		});
		// средняя плашка справа
		$('.blockCaptionRight.average').hover(function() {
			if(!$(this).hasClass('active')){
				var $elem = $(this);
				$elem.addClass('active');
				$elem.find('.caption').stop().animate({width: 61+'%'});
			}
		}, function() {
			var windowWidth = $(window).width();
			var $elem = $(this);
			$elem.removeClass('active');
			if(windowWidth<1240)
				$elem.find('.caption').stop().animate({width: 52+'%'});
			else $elem.find('.caption').stop().animate({width: 44+'%'});
		});
		
		
		// позиционируем большие плашки 
		function MainLargeBlockCaptionBotPosition(){
			var windowWidth = $(window).width();
			// для главной новости на главной
			var $elem = $('.largeBlockCaptionBot');
			var elemHeight = $elem.height();
			if(windowWidth<1240)
				$elem.find('.caption').css('marginTop', - 100);
			else 
				$elem.find('.caption').css('marginTop', - 125);
			$elem = $('.largeBlockCaptionBot.descShow');
			if(windowWidth<1240)
				$elem.find('.caption').css('marginTop', - 75);
			else 
				$elem.find('.caption').css('marginTop', - 93);
			
			var $elem = $('.largeBlockCaptionBot.topAnim.c650_461');
			var descHeight = $elem.find('.desc').height();
			$elem.find('.desc').css('top', elemHeight);
		}
		
		function LargeBlockCaptBotAnimUp(ths){
			if(!ths.hasClass('active')){
				var $elem = ths;
				var imageHeight = $elem.find('.image').outerHeight();
				var captionHeight = $elem.find('.caption').outerHeight();
				var titleHeight = $elem.find('h2').outerHeight();
				$elem.addClass('active');
				var windowWidth = $(window).width();
				
				if(windowWidth<1240){
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-100+23});
					$elem.find('.backBg').css('height',imageHeight+captionHeight);
					$elem.find('.backBg').stop().animate({top: -imageHeight+captionHeight});
					$elem.find('.desc').stop().animate({top: 0});
				}
				else 
				{
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-125+23});
					$elem.find('.backBg').css('height',imageHeight+captionHeight);
					$elem.find('.backBg').stop().animate({top: -imageHeight+captionHeight});
					$elem.find('.desc').stop().animate({top: 0});
				}
			}
		}
		function LargeBlockCaptBotAnimDwn(ths){
			var windowWidth = $(window).width();
			var $elem = ths;
			var elemHeight = $elem.height();
			var descHeight = $elem.find('.desc').height();
			$elem.removeClass('active');
			if(windowWidth<1240){
				$elem.find('.caption').stop().animate({marginTop: -100});
			}
			else{
				$elem.find('.caption').stop().animate({marginTop: -125});
			}
			$elem.find('.backBg').stop().animate({top: 0});
			$elem.find('.desc').stop().animate({top: elemHeight+'px'});

		}
		// большая новость на главной
		$('.largeBlockCaptionBot.c650_461.topAnim').hover(function() {
			LargeBlockCaptBotAnimUp($(this));
		}, function() {
			LargeBlockCaptBotAnimDwn($(this));
		});
		
		// большая новость на внутренних с описанием анимация 100
		function LargeBlockCaptBotDescShowAnimTop100Up(ths){
			if(!ths.hasClass('active')){
				var $elem = ths;
				var imageHeight = $elem.find('.image').outerHeight();
				var captionHeight = $elem.find('.caption').outerHeight();
				var titleHeight = $elem.find('h2').outerHeight();
				$elem.addClass('active');
				var windowWidth = $(window).width();
				
				if(windowWidth<1240){
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-75});
					$elem.find('.backBg').css('height',imageHeight+captionHeight);
					$elem.find('.backBg').stop().animate({top: -imageHeight+captionHeight});
				}
				else 
				{
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-93});
					$elem.find('.backBg').css('height',imageHeight+captionHeight);
					$elem.find('.backBg').stop().animate({top: -imageHeight+captionHeight});
				}
			}
		}
		function LargeBlockCaptBotDescShowDescShowAnimTop100Dwn(ths){
			var windowWidth = $(window).width();
			var $elem = ths;
			$elem.removeClass('active');
			if(windowWidth<1240){
				$elem.find('.caption').stop().animate({marginTop: -75});
			}
			else{
				$elem.find('.caption').stop().animate({marginTop: -93});
			}
			$elem.find('.backBg').stop().animate({top: 0});
		}

		$('.largeBlockCaptionBot.descShow.animTop100').hover(function() {
			LargeBlockCaptBotDescShowAnimTop100Up($(this));
		}, function() {
			LargeBlockCaptBotDescShowDescShowAnimTop100Dwn($(this));
		});
		
		
		
		// большая новость на внутренних с описанием анимация 50
		function LargeBlockCaptBotDescShowAnimTop50Up(ths){
			if(!ths.hasClass('active')){
				var $elem = ths;
				var imageHeight = $elem.find('.image').outerHeight();
				var captionHeight = $elem.find('.caption').outerHeight();
				var titleHeight = $elem.find('h2').outerHeight();
				$elem.addClass('active');
				var windowWidth = $(window).width();
				
				if(windowWidth<1240){
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-75});
					$elem.find('.backBg').css('height', captionHeight+93);
				}
				else 
				{
					$elem.find('.caption').stop().animate({marginTop: -titleHeight-93});
					$elem.find('.backBg').css('height', captionHeight+93);
				}
			}
		}
		function LargeBlockCaptBotDescShowAnimTop50Dwn(ths){
			var windowWidth = $(window).width();
			var $elem = ths;
			$elem.removeClass('active');
			if(windowWidth<1240){
				$elem.find('.caption').stop().animate({marginTop: -75});
			}
			else{
				$elem.find('.caption').stop().animate({marginTop: -93});
			}
			$elem.find('.backBg').stop().animate({top: 0});
		}
		$('.largeBlockCaptionBot.descShow.animTop50').hover(function() {
			LargeBlockCaptBotDescShowAnimTop50Up($(this));
		}, function() {
			LargeBlockCaptBotDescShowAnimTop50Dwn($(this));
		});
		
		// позиционируем полоски для маленьких блоков
		function smallCaptPosition116(){
			var $elem, imageBlockHeight, lineHeight, captionHeight, descHeight, elemHeight;
			
			$elem = $('.smallBlockCaptionBot.amimCapt100');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.amimOutIm.c202_127');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.amimOutIm.c460_336');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.amimOutIm.c313_222');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();

			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			
			$elem = $('.c308_212.amimOutIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.c308_217.amimOutIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			
			$elem = $('.c299_214.amimOutIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.c313_222.amimOutIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.c621_438.amimInIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-captionHeight);
			$elem.find('.caption').css('top', imageBlockHeight - captionHeight);
			
			
			$elem = $('.c308_212.amimInIm');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-captionHeight);
			$elem.find('.caption').css('top', imageBlockHeight - captionHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.h23');
			
			imageBlockHeight = $elem.find('.image').outerHeight();
			$elem.find('.backBg').css('top', imageBlockHeight);
			$elem.find('.caption').css('top', imageBlockHeight);
			
			$elem = $('.c308_217.colorCapt');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			$elem = $('.c202_148.colorCapt');
			elemHeight = $elem.outerHeight();
			imageBlockHeight = $elem.find('.image').outerHeight();
			lineHeight = $elem.find('a.line').outerHeight();
			captionHeight = $elem.find('.caption').outerHeight();
			descHeight = $elem.find('.desc').outerHeight();
			
			$elem.find('.backBg').css('top', imageBlockHeight-lineHeight);
			$elem.find('.caption').css('top', imageBlockHeight - lineHeight);
			$elem.find('.desc').css('top', elemHeight);
			
			
			$elem = $('.smallBlockCaptionBot.h23');
			elemHeight = $elem.outerHeight();
			dateHeight = $elem.find('.date').outerHeight();
			$elem.find('.date').stop().css('top', elemHeight);

	}
	
	
		//**********************************************************//
		function smallBlockCaptBotCategoryAnimUp(ths){
			var $elem = ths;
			$elem.addClass('active');
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			
			$elem.find('.backBg').stop().animate({top: 0});
			$elem.find('.caption').stop().animate({top: 18});
			$elem.find('.desc').stop().animate({top:0});
		}
		function smallBlockCaptBotCategoryAnimDwn(ths){
			var $elem = ths;
			var elemHeight = $elem.outerHeight();
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			var descHeight = $elem.find('.desc').outerHeight();

			$elem.find('.backBg').stop().animate({top: imageBlockHeight-lineHeight});
			$elem.find('.caption').stop().animate({top: imageBlockHeight-lineHeight},{
				complete: function() {
					$elem.removeClass('active');
				}
			});
			$elem.find('.desc').stop().animate({top:elemHeight},500);
		}
		
		
		function smallBlockCaptBotAnimUp(ths){
			var $elem = ths;
			$elem.addClass('active');
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			
			$elem.find('.backBg').stop().animate({top: 0});
			$elem.find('.caption').stop().animate({top: 18});
			$elem.find('.desc').stop().animate({top:0});
		}
		function smallBlockCaptBotAnimDwn(ths){
			var $elem = ths;
			var elemHeight = $elem.outerHeight();
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			var descHeight = $elem.find('.desc').outerHeight();

			$elem.find('.backBg').stop().animate({top: imageBlockHeight-lineHeight});
			$elem.find('.caption').stop().animate({top: imageBlockHeight-lineHeight},{
				complete: function() {
					$elem.removeClass('active');
				}
			});
			$elem.find('.desc').stop().animate({top:elemHeight},500);
		}
		function smallBlockCaptBotAnimCnoAftUp(ths){
			var $elem = ths;
			$elem.addClass('active');
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			
			$elem.find('.backBg').stop().animate({top: 0});
			$elem.find('.caption').stop().animate({top: imageBlockHeight-itemHeight-20});
			$elem.find('.desc').stop().animate({top:0});
			$elem.next('.location').addClass('active');
		}
		function smallBlockCaptBotAnimCnoAftDwn(ths){
			var $elem = ths;
			var titleHeight = $elem.find('.title').outerHeight();
			var imageBlockHeight = $elem.find('.image').outerHeight();
			var lineHeight = $elem.find('a.line').outerHeight();
			var itemHeight = $elem.find('.caption').outerHeight();
			var descHeight = $elem.find('.desc').outerHeight();
			var elemHeight = $elem.outerHeight();

			$elem.find('.backBg').stop().animate({top: imageBlockHeight-lineHeight});
			$elem.find('.caption').stop().animate({top: imageBlockHeight-lineHeight});
			$elem.find('.desc').stop().animate({top:elemHeight+'px'},500);
			$elem.removeClass('active');
			$elem.next('.location').removeClass('active');
		}
	
	
		$('.smallBlockCaptionBot.amimOutIm').hover(function() {
			smallBlockCaptBotAnimCnoAftUp($(this));
		}, function() {
			smallBlockCaptBotAnimCnoAftDwn($(this));
		});
		$('.smallBlockCaptionBot.colorCapt').hover(function() {
			smallBlockCaptBotAnimUp($(this));
		}, function() {
			smallBlockCaptBotAnimDwn($(this));
		});
		$('.smallBlockCaptionBot.category').hover(function() {
			smallBlockCaptBotCategoryAnimUp($(this));
		}, function() {
			smallBlockCaptBotCategoryAnimDwn($(this));
		});
		//**********************************************************//
		
		
		//**********************************************************//
		// Anim Person
			function smallBlockCaptBotAmimInImAnimUp(ths, value){
				var $elem = ths;
				if(!ths.hasClass('active')){
					var imageBlockHeight = $elem.find('.image').outerHeight();
					var captionHeight = $elem.find('.caption').outerHeight();
					$elem.find('.caption').css('top', imageBlockHeight);
					$elem.find('.backBg').css('top', imageBlockHeight);
					
					$elem.addClass('active');
					$elem.find('.backBg').stop().animate({top: imageBlockHeight-captionHeight - value}, 350);
					$elem.find('.caption').stop().animate({top: imageBlockHeight-captionHeight - value}, 350);
					$("img.scale").imageScale({scale:'best-fill', align:'center'});
				}
			}
			function smallBlockCaptBotAmimInImAnimDwn(ths, value, value2){
				var $elem = ths;
				if(ths.hasClass('active')){
					var imageBlockHeight = $elem.find('.image').outerHeight();
					var captionHeight = $elem.find('.caption').outerHeight();
					$elem.find('.caption').stop().animate({top: imageBlockHeight},250);
					$elem.find('.backBg').stop().animate({top: imageBlockHeight},
					{
						duration: 250,
						complete: function() {
							$elem.removeClass('active');
							$elem.find('.backBg').stop().animate({top: imageBlockHeight-value2},250);
							$elem.find('.caption').stop().animate({top: imageBlockHeight-value2},250);
							$("img.scale").imageScale({scale:'best-fill', align:'center'});
						}
					});
				}
			}
			$('.photoBlock.large').hover(function() {
				smallBlockCaptBotAmimInImAnimUp($(this),27);
			}, function() {
				smallBlockCaptBotAmimInImAnimDwn($(this),27, 93);
			});
			
			$('.photoBlock.small').hover(function() {
				smallBlockCaptBotAmimInImAnimUp($(this),40);
			}, function() {
				smallBlockCaptBotAmimInImAnimDwn($(this),40,45);
			});
		//**********************************************************//
		
		
		
		
		
		// voise_person
			function smallBlockCaptBotAmimCaptColorUp(ths, value){
				var $elem = ths;
				var imageBlockHeight = $elem.find('.image').outerHeight();
				var captionHeight = $elem.find('.caption').outerHeight();
				$elem.find('.backBg').stop().animate({top: imageBlockHeight-captionHeight});
				$elem.find('.caption').stop().animate({top: imageBlockHeight-captionHeight});
				$elem.find('.date').stop().animate({top: 0});
			}
			function smallBlockCaptBotAmimCaptColorDwn(ths){
				var $elem = ths;
				var imageBlockHeight = $elem.find('.image').outerHeight();
				var captionHeight = $elem.find('.caption').outerHeight();
				var dateHeight = $elem.find('.date').outerHeight();
				$elem.find('.backBg').stop().animate({top: imageBlockHeight});
				$elem.find('.caption').stop().animate({top: imageBlockHeight});
				$elem.find('.date').stop().animate({top: dateHeight*5+'px'});

			}
			
			$('.h23').hover(function() {
				smallBlockCaptBotAmimCaptColorUp($(this));
			}, function() {
				smallBlockCaptBotAmimCaptColorDwn($(this));
			});
		
		
		function eachFade($ths, val){
			var h;
			$ths.each(function(indx, element){
				$(this).removeClass('noFade');
				item = $(this);
				h = item.height();
				if(h<=val){
					$(this).addClass('noFade');
				}
			});
		}

		
		
		// выставляем высоту для блоков
		function BlockCaptAutoHeight621_442(ths){
			var $item = ths; var lineHeight = 0, imageHeight = 0, captionHeight = 0, descHeight = 0;
			lineHeight = $item.find('a.line').outerHeight();
			imageHeight = $item.find('.image').outerHeight();
			captionHeight = $item.find('.caption').outerHeight();
			descHeight = $item.find('.desc').outerHeight();
			var res = imageHeight + captionHeight + 10;
			$item.css('height', res);
		}
		// выставляем высоту для блоков
		function BlockCaptAutoHeightc650_461(ths){
			var $item = ths; var lineHeight = 0, imageHeight = 0, captionHeight = 0, descHeight = 0;
			imageHeight = $item.find('.image').outerHeight();
			captionHeight = $item.find('.caption').outerHeight();
			titleHeight = $item.find('h2').outerHeight();
			descHeight = $item.find('.desc').outerHeight();
			var res = imageHeight + captionHeight +  descHeight - 125;
			//$item.css('height', res);
		}
		// выставляем высоту для блоков
		function BlockCaptAutoHeight_c638_452(ths){
			var $item = ths; var lineHeight = 0, imageHeight = 0, captionHeight = 0, descHeight = 0;
			lineHeight = $item.find('a.line').outerHeight();
			imageHeight = $item.find('.image').outerHeight();
			captionHeight = $item.find('.caption').outerHeight();
			descHeight = $item.find('.desc').outerHeight();
			titleHeight = $item.find('.title').outerHeight();
			var res = imageHeight + captionHeight + descHeight;
		}
		// выставляем высоту для блоков
		function BlockCaptAutoHeight(ths){
			var $item = ths; var lineHeight = 0, imageHeight = 0, captionHeight = 0, descHeight = 0;
			lineHeight = $item.find('a.line').outerHeight();
			imageHeight = $item.find('.image').outerHeight();
			captionHeight = $item.find('.caption').outerHeight();
			descHeight = $item.find('.desc').outerHeight();
			titleHeight = $item.find('.title').outerHeight();
			//alert(descHeight);
			if(descHeight<titleHeight){
				var res = imageHeight + titleHeight + descHeight;
				$item.css('height', res);
			}	
			else {
				var res = imageHeight + titleHeight + descHeight;
				$item.css('height', res);
			}
		}
		function BlockCaptAutoHeightPerson(ths){
			var $item = ths;
			var descHeight = 0;
			var imageHeight = $item.find('.image').outerHeight();
			var titleHeight = $item.find('.title').outerHeight();
			descHeight = $item.find('.desc').outerHeight();
			var res = imageHeight + titleHeight + descHeight;
			$item.css('height', res);
		}
		function BlockCaptAutoHeightPerson3(ths){
			var $item = ths;
			var imageHeight = $item.find('.image').outerHeight();
			var titleHeight = $item.find('.title').outerHeight();
			var date = $item.find('.date').outerHeight();
			var res = imageHeight + titleHeight + date;
			$item.css('height', res);
		}
		//IMG SCALE 
		//------------------------------------------------------//
		function ImgResize($item, coeficient){
			var res = 0;
			var width = $item.width();
			res = width/coeficient
			$item.css('height', res);
		}
		function ImgResizeItem2($item, $item2, coeficient){
			var res = 0;
			var width = $item.width();
			res = width/coeficient
			$item.css('height', res);
			$item2.css('height', res);
		}
		function ResizeElements(){
			var $item;
			//----------------------------blockPeopleAngle--------------------------//
			$item = $(".blockPeopleAngle .border");
			ImgResize($item, 2.13);
			
			

			//----------------------------.interviewVertical.captionRight .caption--------------------------//
			$elem = $(".interviewVertical.captionRight .caption");
			var $elem2= $(".interviewVertical.captionRight .image");
			var height = $elem.outerHeight();
			$elem2.css('height', height);
			//----------------------------colorITBlock--------------------------//
			$elem = $(".colorITBlock .image");
			var $elem2= $(".colorITBlock .caption");
			var height = $elem2.height();
			//alert(height);
			$elem.css('height', height);
			//----------------------------posterPageItems--------------------------//
			
			$elem = $(".posterPageItems .item .image");
			var $elem2= $(".posterPageItems .item");
			var $elem3= $(".posterPageItems .item .caption");
			var elemHeight= $(".posterPageItems .item .image").height();
			width = $elem.width();
			var coeficient = 3.975;
			var res= width/coeficient+((width/coeficient)/3);
			if(res<180){
				$elem.css('height', res);
				$elem2.css('height', res);
				$elem3.css('height', res);
			}
			else {
				$elem.css('height', 160);
				$elem2.css('height', 160);
				$elem3.css('height', 160);
			}

			//----------------------------poster mainpage--------------------------//
			$elem = $(".poster .item .imageCont");
			var $elem2= $(".poster .sepCont");
			width = $elem.width();
			if(width<300){
				$elem.css('height', width-147);
				$elem2.css('height', width-147);
			}
			else {
				$elem.css('height', 100);
				$elem2.css('height', 100);
			}
			//----------------------------largeBlockCaptionBot c622_439--------------------------//
			$item = $(".largeBlockCaptionBot.c622_439 .image");
			ImgResize($item, 1.41);
			//----------------------------largeBlockCaptionBot c621_438--------------------------//
			$item = $(".c621_438 .image");
			ImgResize($item, 1.40);
			//----------------------------largeBlockCaptionBot c621_442--------------------------//
			$item = $(".largeBlockCaptionBot.c621_442 .image");
			ImgResize($item, 1.40);
			//----------------------------largeBlockCaptionBot c638_452--------------------------//
			$item = $(".largeBlockCaptionBot.c638_452 .image");
			ImgResize($item, 1.41);
			//----------------------------largeBlockCaptionBot c650_461--------------------------//
			$item = $(".largeBlockCaptionBot.c650_461 .image");
			ImgResize($item, 1.40);
			
			//----------------------------.blockCaptionRight.c299_213--------------------------//
			$item = $(".blockCaptionRight.c299_213 .image");
			ImgResize($item, 1.40);
			
			//----------------------------.blockCaptionRight.c312_222--------------------------//
			$item = $(".blockCaptionRight.c312_222 .image");
			ImgResize($item, 1.40);
			
			//----------------------------.blockCaptionRight.c376_266--------------------------//
			$item = $(".blockCaptionRight.c376_266 .image");
			ImgResize($item, 1.41);
			
			//----------------------------.blockCaptionRight.c538_381--------------------------//
			$item = $(".blockCaptionRight.c538_381 .image");
			ImgResize($item, 1.41);
			
			//----------------------------.blockCaptionRight.c422_299--------------------------//
			$item = $(".blockCaptionRight.c422_299 .image");
			ImgResize($item, 1.41);
			//----------------------------.blockCaptionRight.c416_294--------------------------//
			$item = $(".blockCaptionRight.c416_294 .image");
			ImgResize($item, 1.41);

			//----------------------------smallBlockCaptionBot c202_148--------------------------//
			
			$item = $(".smallBlockCaptionBot.c202_148 .image");
			ImgResize($item, 1.37);
			//----------------------------smallBlockCaptionBot c202_127--------------------------//
			
			$item = $(".smallBlockCaptionBot.c202_127 .image");
			ImgResize($item, 1.59);
			
			
			//----------------------------smallBlockCaptionBot c313_222--------------------------//
			$item = $(".c313_222 .image");
			ImgResize($item, 1.40);
			
			//----------------------------smallBlockCaptionBot c308_212--------------------------//
			$item = $(".smallBlockCaptionBot.c308_212 .image");
			ImgResize($item, 1.45);
			//----------------------------smallBlockCaptionBot c308_217--------------------------//
			$item = $(".smallBlockCaptionBot.c308_217 .image");
			ImgResize($item, 1.41);
			//----------------------------smallBlockCaptionBot c299_214--------------------------//
			$item = $(".smallBlockCaptionBot.c299_214 .image");
			ImgResize($item, 1.39);
			//----------------------------smallBlockCaptionBot c298_218--------------------------//
			$item = $(".smallBlockCaptionBot.c298_218 .image");
			ImgResize($item, 1.39);

			//----------------------------.smallBlockCaptionBot.c299_213--------------------------//
			$item = $(".smallBlockCaptionBot.c299_213 .image");
			ImgResize($item, 1.40);
			
			//----------------------------smallBlockCaptionBot c460_336--------------------------//
			$item = $(".smallBlockCaptionBot.c460_336 .image");
			ImgResize($item, 1.36);

			//----------------------------specialProject mainPage--------------------------//
			$item = $(".specialProject.mainPage .image");
			ImgResize($item, 2.64);
			//$item = $(".imageLRead");
			//ImgResize($item, 1.66);
			$item = $(".contentFullImg .image");
			ImgResize($item, 2.82);
			//var specItemHeight = $(".lReadCont").height();
			//$(".lReadCont .inner").css('height', specItemHeight);
			
			var specProjMImageContHeight = $(".specProjMImageCont").height();
			$(".specProjMImageCont .inner").css('height', specProjMImageContHeight);
			//----------------------------interview.resize--------------------------//
			$item = $(".interview.resize .image");
			ImgResize($item, 1.41);
			//----------------------------contentFullImg--------------------------//
			$item = $(".contentFullImg .image");
			ImgResize($item, 2.22);
			//----------------------------.articlePageNoImage--------------------------//
			$item = $(".articlePageNoImage");
			var $item2 = $(".articlePageNoImage .table .cell");
			ImgResizeItem2($item, $item2, 1.39);
			
			//----------------------------allScale--------------------------//
			$("img.scale").imageScale({scale:'best-fill', align:'center'});
			
			
			$item = $(".largeBlockCaptionBot.c650_461");
			BlockCaptAutoHeightc650_461($item);
			$item = $(".largeBlockCaptionBot.c621_442");
			//BlockCaptAutoHeight621_442($item);
			$item = $(".largeBlockCaptionBot.c638_452");
			BlockCaptAutoHeight_c638_452($item);
			$item = $(".smallBlockCaptionBot.c460_336");
			//BlockCaptAutoHeight($item);
			$item = $(".largeBlockCaptionBot.c621_438");
			BlockCaptAutoHeight($item);
			$item = $(".photoBlock.c621_438");
			BlockCaptAutoHeightPerson($item);
			
			
			$('.smallBlockCaptionBot.c202_148').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c202_127').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c313_222').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c299_214').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c298_218').each(function(indx, element){
				$item = $(this);
				BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c308_212').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.smallBlockCaptionBot.c308_217').each(function(indx, element){
				$item = $(this);
				//BlockCaptAutoHeight($item);
			});
			$('.photoBlock.c308_212').each(function(indx, element){
				$item = $(this);
				BlockCaptAutoHeightPerson($item);
			});
			$('.h23').each(function(indx, element){
				$item = $(this);
				BlockCaptAutoHeightPerson3($item);
			});
			
			//***************FADE DESC**********************//
			$item = $('.mainLineBlocks .smallBlockCaptionBot .desc');
			eachFade($item, 36);
			$item = $('.smallBlockCaptionBot.category.h35.c202_127.amimOutIm .desc');
			eachFade($item, 36);
			$item = $('.smallBlockCaptionBot.h45 .desc');
			eachFade($item, 40);
			
			$item = $('.largeBlockCaptionBot.topAnim.c650_461 .desc');
			eachFade($item, 93);
			$item = $('.c1240.largeBlockCaptionBot.topAnim.c650_461 .desc');
			eachFade($item, 83);
			
			$item = $('.largeBlockCaptionBot.c621_442 .desc');
			eachFade($item, 73);
			$item = $('.c1240 .largeBlockCaptionBot.c621_442 .desc');
			eachFade($item, 60);
			$item = $('.largeBlockCaptionBot.c638_452 .desc');
			eachFade($item, 44);
		}
		// начальные высоты картинок архива
	  function ImageSizeIni(){
		$('.archiveList ul li').each(function(indx, element){
			var item = $(this);
			  var $img = $(this).find('img');
			  $img.load(function(){
				$(this).removeAttr("width").removeAttr("height").css({ width: "", height: "" });
			 
				var width = $(this).width();
				var height = $(this).height();
				$(this).css('width', width+'px').css('height', height+'px');
				$(this).closest('.image').css('width', width+'px').css('height', height+'px');
				$(this).closest('li').find('.cell').css('height', height+'px');
			});
												
			$img.each(function() {
				var src = $(this).attr('src');
				$(this).attr('src', '');
				$(this).attr('src', src);
			});		
		});
		

	}
	
		
		
		
	// доп. класс для узкой версии
	  function AddClassResp(){
			var windowWidth = $(window).width();
			if(windowWidth<1276)
				$('body').addClass('c1276');
			else $('body').removeClass('c1276');
			if(windowWidth<1240)
				$('body').addClass('c1240');
			else $('body').removeClass('c1240');
	}
	// Анимация поиска
	$(".search").click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(".search").stop().animate({width: 15+'px'});
			$(this).stop().animate({width: 27+'%'});
		}
	});
	// прячем поиск
	$(document).click( function(event){
		if($(".search").hasClass('active')){
			if( $(event.target).closest(".search").length ) 
				return;
		
			$(".search").removeClass('active')
			$(".search").stop().animate({width: 15+'px'});
		}

      event.stopPropagation();
    });
	// плавный фейд
	$(".fadeAnim").hover(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('.fade').stop().animate({top: 0+'%'});
		}
	},function() {
		$(this).removeClass('active')
			$(this).find('.fade').stop().animate({top: 100+'%'});
	});
	$(".fadeAnimSelected").hover(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('.fade').stop().animate({left: 0+'%'});
		}
	},function() {
		$(this).removeClass('active')
			$(this).find('.fade').stop().animate({left: 100+'%'});
	});
	$(".fadeHoverAnim").hover(function(){
		var item = $(this);
		if(!$(this).hasClass('active')){
			item.addClass('active');
			$(this).find('.fadeHover').stop().animate({top: 0+'%'},
			{
				duration: 300,
				complete: function() {
					item.find('.fade').fadeOut(1);
				}
			});
		}
	},function() {
		var item = $(this);
		item.removeClass('active')
					item.find('.fade').fadeIn(100);
			$(this).find('.fadeHover').stop().animate({top: 100+'%'},
			{
				duration: 300,
				complete: function() {
				}
			});
	});
	// Показываем комментарии
	$(".commentCont .dot").click(function(){
		$('.commentCont .commentBlock').toggle('fast');
	});
	
	// табы новости
	$(".borderTopLine ul.newsTabsNav li a").click(function(){
		var item = $(this).closest('li');
		var index;
		if(!item.hasClass('active')){
			$(".borderTopLine ul.newsTabsNav li").removeClass('active');
			item.addClass('active');
			index = item.index();
			//alert(index);
			$(".newsTabs .nTab").removeClass('active');
			$(".newsTabs .nTab").eq(index).addClass('active');
		}
	});

	
	// липкая верхняя полоса 
	$('.topLine').scrollToFixed();
	// треугольник новости
	$('.modNews.trgle ul li').hover(function() {
		if(!$(this).hasClass('active')){
			var item = $(this);
			var el = $(this).find('.color'),
			curWidth = el.width(),
			autoWidth = el.css('width', 'auto').width();
			el.width(curWidth).stop().animate({width: autoWidth},
			{
				duration: 300,
				complete: function() {
					item.addClass('active');
				}
			});
		}
	},function() {
		var item = $(this);
		var el = $(this).find('.color');
		el.removeClass('active');
		el.stop().animate({width: 16},
		{
			duration: 300,
			complete: function() {
				item.removeClass('active');
			}
		});
	});
	// соц. кнопки
	$('.share').ShareLink({
		title: '',
		text: '',
		image: '',
		url: ''
	});
	
	
	AddClassResp();
	ResizeElements();
	MainLargeBlockCaptionBotPosition();
	smallCaptPosition116();
	
	$(window).resize(function () {
		AddClassResp();
		ResizeElements();
		MainLargeBlockCaptionBotPosition();
		smallCaptPosition116();
	});
	$(window).load(function () {
		ImageSizeIni();
		ResizeElements();
	});
		
});
