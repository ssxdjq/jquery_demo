$(function() {
	//第一次加载页面首先判断cookie有没有值，如果有的话就加载cookie的颜色值
	var $cookieSkin = $.cookie("SkinCSS");
	if($cookieSkin) {
		switchSkin($cookieSkin);
	}
	var $li = $(".header__skin li");
	$li.click(function() {
		$id = $(this).attr("id");
		switchSkin($id);
	})

})

function switchSkin(skin)
{	
	$('#'+skin).addClass('selected').siblings().removeClass('selected');
	$("#skinCss").attr({ href: "css/skin/"+skin+".css"});
	$.cookie("SkinCSS",skin,{
			path:'/',
			expires:'10'
		});
}