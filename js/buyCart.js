/*添加购物车*/
$(function() {
	$("#btn-cart").click(function(e) {
		var string = "感谢您的购买！\n您购买的产品是：";
		var proName = $(".pro_options").find("h4").text();		
		var price = $("#price").find('em').text();		
		var color = $(".pro_options__color dt").find("em").text();		
		var size = $(".pro_options__size dt").find("em").text();
		var num = $("#selectNum").val();
		var totalPrice = $("#totalPrice").find("em").text();
		string=	string+proName+"\n单价是："+	price + "\n选择颜色是："+color+
		"\n选择尺寸是："+size+"\n购买数量是："+num+"\n总价为："+totalPrice;
		alert(string);
	});
})
