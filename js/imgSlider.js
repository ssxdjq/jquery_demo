$(function() {
	var $topLis = $(".tab__top__menu li");
	var len = $topLis.length;
	var index = 0;
	$topLis.click(function(e) {
		index = $topLis.index(this);
		$(this).addClass('select')
		.siblings().removeClass('select');
		scrollImg(index);
		return false;	
	}).eq(0).click();
})

function scrollImg(index) {
	var fig_w = $(".tab__content figure").outerWidth(true);
	var $srollobj = $(".tab__content");
	var scroll_w = fig_w * 4 *index;
	$srollobj.stop(true,false).animate({
		left:-scroll_w,
	},"slow","swing");
}
