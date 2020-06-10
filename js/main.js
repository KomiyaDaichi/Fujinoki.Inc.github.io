

$(function(){
	$(window).on('resize scroll', function(){
		if(window.matchMedia('(min-width:896px)').matches){
			
			if($(window).scrollTop() > 450){
				$('.fixed-menu').css('right','20px');
				$('.header').addClass('active');
				
			}else{
				$('.fixed-menu').css('right','-100px');
				$('.header').removeClass('active');
			}
		}
	});
});

$(function(){
	$(document).click(function(event){
		if($(event.target).closest(".res-menu").length){
			$(".res-menu").toggleClass("active");
			$(".res-menulist").toggleClass("active");
		}else{
			$(".res-menu").removeClass("active");
			$(".res-menulist").removeClass("active");
		}
	});
});

$(function(){
	$(".scroll-top").click(function(){
		$("html,body").animate({scrollTop:0},800);
	});
});

$(function(){
	$('.scroll-down').click(function(){
		$('html,body').animate({scrollTop:$('.about').offset().top},800);
	});
});

$(function(){
	$('.mainphoto').slick({
		autoplay:true,
		arrows:false,
		fade:true,
		autoplaySpeed:9000,
		speed:800,
		infinite:true,
		accessibility: true,
	})
});

$(function(){
	$(".news-mainbox").slick({
		infinite:true,
		autoplay:true,
		slidesToShow:3,
		arrows:false,
		responsive:[
			{
		breakpoint: 896,
		settings:{
		slidesToShow:2,
				}
			}
		]
	});
});

