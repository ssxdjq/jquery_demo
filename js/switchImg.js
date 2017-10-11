/*点击小图切换到大图*/
$(function() {
	/*产品图小图点击事件*/
	var $lis = $(".img-button__item a");
	var $showImg = $(".img-button__item a img");
	$lis.click(function(e) {
		var newBIHref = $(".jqzoomWrap a.jqzoom").attr("href");
		console.log(newBIHref);
		$("#thickImg").attr("href",newBIHref);
	});

	/*颜色小图点击事件*/
	var $colorLis = $(".pro_options__color li a");
	var $title = $(".pro_options__color dt");
	var newSrc,lastIndex,firstIndex,color;
	$colorLis.click(function(e) {
		$(this).parent().addClass('select')
		.siblings().removeClass('select');
		$title.find('em').text(this.title);
		 newSrc = $(this).find("img").attr("src");
		 lastIndex = newSrc.lastIndexOf(".");
		 firstIndex = newSrc.lastIndexOf("/");
		 color = newSrc.substring(firstIndex+1, lastIndex);
		 // console.log(color);

		 $showImg.each(function(index, el) {

		 	if (this.src.indexOf(color) < 0) {
		 		console.log(this.src);
		 		$(this).parents("li").hide();		
		 	}
		 	else{
		 		$(this).parents("li").show();
		 	}
		 });
		 $("#thickImg").attr("href","./img/pro_img/"+color+"_one_big.jpg");
	});
})