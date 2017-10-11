/*点击切换尺寸选项*/
$(function() {
	var $lis = $(".pro_options__size li");
	var $title = $(".pro_options__size dt em");
	$lis.click(function(e) {
		$(this).addClass('select')
		.siblings().removeClass('select');
		$title.text($(this).text());
	});

})