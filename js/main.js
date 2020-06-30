$(function(){
	$(window).on("load",function(){
		setTimeout(function(){
			$('.loading').fadeOut();
		},1000)
	});
});

$(function(){
	$(window).on('resize scroll', function(){
		if(window.matchMedia('(min-width:1024px)').matches){
			
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
	if(window.matchMedia('(min-width:1024px)').matches){
		$('.solution-text-box1').hover(function(){
			$('.solution-photo1').fadeToggle(200);
		});
	}
		
});

$(function(){
	if(window.matchMedia('(min-width:1024px)').matches){
		$('.solution-text-box2').hover(function(){
			$('.solution-photo2').fadeToggle(200);
		});
	}
		
});

$(function(){
	if(window.matchMedia('(min-width:1024px)').matches){
		$('.solution-text-box3').hover(function(){
			$('.solution-photo3').fadeToggle(200);
		});
	}
		
});


$(function(){
	$(".news-mainbox").slick({
		infinite:true,
		autoplay:true,
		slidesToShow:3,
		arrows:false,
		responsive:[
			{
		breakpoint: 1025,
		settings:{
		slidesToShow:2,
				}
			}
		]
	});
});

