$(function() {
	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate({'marginLeft':-800}, 600, moveFirstSlide);
	}
	setInterval(changeSlide, 3500); 
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
    
    $('#next').on('click', changeSlide);

    $('#previous').click(function() {
        var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
        carouselList.css({marginLeft:-800});
        carouselList.animate({'marginLeft':0}, 600);
    })
});