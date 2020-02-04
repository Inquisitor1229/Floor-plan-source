$(document).ready(function () {
	$('.about-work__item-head--active').toggleClass('show').next().slideToggle();
	$('.about-work__item-head').click(function () {
		$(this).toggleClass('show').next().slideToggle();
		$('.about-work__item-head').not(this).removeClass('show').next().slideUp();
	});
});