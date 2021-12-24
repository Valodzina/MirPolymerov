$(function() { 
    $('.slick__slider').slick({
        arrows:true,
        dots: false,
        prevArrow: "<img src='images/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='images/right.svg' class='next' alt='2'>",
        infinite: true,
		autoplay: true,
        autoplaySpeed:3000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    
                }
            } ]
        
    }) 
});

 $(function() { 
    $(".btn").click(function () {
		$(".hide__part").slideToggle("slow");
	
		if (this.innerHTML == "Показать меньше") {
			this.innerHTML = "Показать больше";
			return;
		}
		else this.innerHTML = "Показать меньше";
	
	
	})
 });
