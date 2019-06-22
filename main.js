//Timer header

let headerTimeout = null;
$(window).scroll(function () {
    clearTimeout(headerTimeout);
    $("#navBar ").css("display", "block");
    if($(window).scrollTop() !== 0){
        headerTimeout = setTimeout(function () {
            $("#navBar").css("display", "none")
        }, 2000);
    }
});

// Nav Bar tabs change

$(".navlink").on("click",function (e) {
    $(this).addClass("selected").siblings().removeClass("selected");
});

// Our servise - tabs change

(function($) {
$(function() {
  $('div.services-list-captions').on('click', 'div:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
      .closest('div.services-tabs').find('div.services-content').hide().removeClass('active')
      .eq($(this).index()).addClass('active').fadeIn();
  });
});

})($);

// Our Amazing Work

// button portfolio

let counter = 0;
const btn1 = $('#butPortfolio');
btn1.on('click',function(){
    const loader = $('#gallery-loader-block');
	counter++;
	if(counter === 1){
		btn1.css('display','none');
       	loader.append(`
            <div id="gallery-loader" class="animation-wrapper">
			    <div class = "centered">
				    	<div class = "animate-block"></div>
                </div>
            </div>
	` );
		setTimeout(function(){
		$('.portfolio-container').css('maxHeight','1200px');
		btn1.css('display','block');
		$("#gallery-loader").css('display','none')
		},5000)

	}
	else{
		btn1.css('display','none');
        loader.css('display','block');
		loader.append( `
					<div class="animation-wrapper">
			<div class = "centered">
					<div class = "animate-block"></div>
				</div>
			</div>

	` );
		setTimeout(function(){
		$('.portfolio-container').css('maxHeight','1800px');
			btn1.css('display','none');
			loader.css('display','none')
		},5000)
	}
});

// Filter Portfolio gallery

$('.portfolio-tabs div').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(".portfolio-item").hide();
    const filterClass = $(this).data("filter");
    $(`.portfolio-item${filterClass}`).show();
    if($(`.portfolio-item${filterClass}`).length <= 12) {
        $("#butPortfolio").hide();
    }
    else {
        $("#butPortfolio").show();
    }
});

// Hover portfolio

function getTitles(itemType) {
    switch(itemType) {
        case 'web':
            return {
                title: 'Creative Design',
                description: 'Web Design'
            };
        case 'graphic':
            return {
                title: 'Creative Design',
                description: 'Graphic Design'
            };
        case 'wordpress':
            return {
                title: 'Web Design',
                description: 'Wordpress'
            };
        case 'landing':
            return {
                title: 'Indvidual Pages',
                description: 'Landing Pages'
            };
        default:
            return {
                title: 'Portfolio Design',
                description: 'Some Pages'
            };
    }
}

$('.portfolio-item').hover(function(){
    const itemNames = getTitles(this.classList[1]);

    $(this).append(`
        <div class="portfolio-hover">
            <div class="hover-link">
                <img src="images/icons/Forma1.png">
            </div>
            <div class="hover-search">
                <i class="fa fa-search"></i>
            </div>
            <div class="text-container">
                <div class="text-1">${itemNames.title}</div>
                <div class="text-2">${itemNames.description}</div>
            </div>
        </div>`
    );
}, function(){
    $(this).find('.portfolio-hover').remove();
});


// Slider

$('.slider-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel-reviews'
});

$('.carousel-reviews').slick({
    initialSlide: 1,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.slider-reviews',
    prevArrow: document.querySelector('.prev-btn'),
    nextArrow: document.querySelector('.next-btn'),
    variableWidth: true,
    draggable: false,
    cssEase: 'linear',
    speed: 550
});

// Masonry button

setTimeout(function(){
	$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 40
});
},1000);
let masonaryGrid = $('.grid');
let btn2 = $('#but2');
let loader = $('#masonry-loader-block');
	btn2.on('click',function(){

		btn2.css('display','none');
		loader.append( `
					<div class="animation-wrapper" id="masonry-loader">
					<div class = "centered">
					<div class = "animate-block"></div>
				</div>
			</div>

	` );

// Masonry append gallery

  let $elems = $(`	
	<div class="grid">
				<div class="grid-item grid-block-6">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery%20of%20best%20images/mas17.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/mas18.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/mas19.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/mas20.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/mas21.jpg">
				  	<img class="grid-item--height2 grid-item--width2" src="images/Gallery of best images/mas22.jpg">
				</div>
			
			  <div class="grid-item">
			  	<img class="grid-item--width5 grid-item--height5" src="images/Gallery of best images/mas23.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/mas24.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height3" src="images/Gallery of best images/mas25.jpg">
			  </div>
			
			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/mas26.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width5 grid-item--height5" src="images/Gallery of best images/mas27.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height3" src="images/Gallery of best images/mas28.jpg">
			  </div>
				<div class="grid-item">
			  		<img class="grid-item--width4 grid-item--height5" src="images/Gallery of best images/mas29.jpg">
			  </div>

			  <div class="grid-item">
			  	<img class="grid-item--width4 grid-item--height3" src="images/Gallery of best images/mas30.jpg">
			  </div>
	</div>
				`);
				setTimeout(function(){
					masonaryGrid.append($elems).masonry('appended', $elems);
					gridItemHov();
					$('.best-img-preview').css('padding-bottom', '80px');
					$("#masonry-loader").css('display','none')
				},5000);

btn2.css('visibility','hidden')
});

//	Masonry hover

function gridItemHov(){
    const gridItemHover = $('.grid-item-hover');

	$('.grid-item img').mouseenter(function(){
	    const offset = $(this).offset();
		const width = $(this).width();
		const height = $(this).height();

        gridItemHover.css('display','grid');
        gridItemHover.offset(offset).width(width).height(height)
	});

    gridItemHover.mouseleave(function(){
        gridItemHover.css('display','none');
		$(this).css('left','-9000px');
	});
}

gridItemHov();

// Footer link top up

$('.link-top-up').click(function(){
	$('html, body').animate({ scrollTop: 0 }, 2000)
});

