/*星星变换*/
$(function() {
	$(".pro_options__score li a").click(function(e) {
		var title = $(this).attr("title");
		alert("您给商品评分为："+title);
		var num = $(this).parent().attr("class");
		$(this).parents("ul").removeClass().addClass(num+"star");
		return false;
	});
})