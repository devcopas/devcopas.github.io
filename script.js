$('#navbarNav').on('show.bs.collapse', function () {
	$('body').addClass('navbar-open');
	$('nav.navbar').append('<div id="navbar-overlay"></div>');
});

$('#navbarNav').on('hide.bs.collapse', function () {
	$('body').removeClass('navbar-open');
	$('nav.navbar').find('#navbar-overlay').remove();
});

$('body').on('click', '#navbar-overlay', function () {
	$('.navbar-toggler').trigger('click');
});

$(window).on('load scroll', function () {
	const infoPanel = $(".info-panel");
	const scrolled = $(this.scrollY)[0];

	if (scrolled >= infoPanel[0].offsetTop - 100) {
		$('nav.navbar').addClass('nav-scroll');
	} else {
		$('nav.navbar').removeClass('nav-scroll');
	}
});