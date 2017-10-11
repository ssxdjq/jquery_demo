/*产品信息切换tab*/
$(function() {
	var $p = $(".pro-tabs__centent p");
	var index = 0;
	var $li = $(".pro-tabs__top li");
	$li.click(function(e) {
		$(this).addClass('select')
		.siblings().removeClass('select');
		index = $li.index(this);
		$p.attr('class','hide');
		$p.eq(index).attr('class','show');

	}).eq(0).click();
})