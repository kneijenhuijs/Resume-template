var $divs = $("#pages > div");
$("#menu-picker a").click(function() {
	$('.menu-text').removeClass('currentlyActive');
	$(this).addClass('currentlyActive');
	$divs.hide().filter(".portfolio" + $(this).data('id')).show();
}).first().click();