$(document).ready(function () {
	
	// ���������� ���. ���� 
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
