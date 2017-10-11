/*实现鼠标滑过a标签的自定义提示*/
$(function() {
	var x = 10, y = 20;
	var myTitle;
	$(".news__content a").mouseover(function(e) {
		myTitle = this.title;
		this.title = "";
		var $tip = $('<span class="news__tootip">'+myTitle+'</span>');
		$("body").append($tip);
		$tip.css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function() {
		this.title = myTitle;
		$(".news__tootip").remove();
	}).mousemove(function(e) {
		$(".news__tootip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		})
	});
})