$(document).ready(function () {
	
	// Показываем доп. меню 
	$(".topLine .mainMenu ul li.more").click(function(){
		if(!$('.topLine').hasClass('active')){
			$(".topLine").addClass('active');
			$('.subMenuTop').slideDown("slow");
		}
		else 
		{
			$(".topLine").removeClass('active');
			$('.subMenuTop').slideUp("slow");
		}
	});
});
