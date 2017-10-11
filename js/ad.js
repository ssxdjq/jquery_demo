/*广告轮播图*/
$(function() {
	$tabs = $(".ad__tabs a");
	var index = 0;
	var len = $tabs.length;
	var $ad = $(".content__ad");
	var addTimer = null;
	/*实现手动滑动动画效果*/
	$tabs.mouseover(function() {
		index = $tabs.index(this);		
		showImg(index);
	}).eq(0).mouseover();
	/*实现自动播放图片效果*/
	$ad.hover(function() {
		clearInterval(addTimer);
	}, function() {
		addTimer = setInterval(function () {
			showImg(index);
			index++;
			if (index === len) {
				index = 0;
			}
		},5000);
	}).trigger('mouseleave');

})

/*显示图片*/
/*stop(true,true)是清除未完成的动画*/
function showImg(index) {
	$tabs.eq(index).addClass('chos').siblings().removeClass('chos');
	var newHref = $(".ad__tabs a").eq(index).attr("href");
	$(".ad__imgList").find("img").eq(index).stop(true,true).fadeIn().
		siblings().fadeOut();
}