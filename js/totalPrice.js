/*计算总价*/
$(function() {
	var price = $("#price").find("em").text();
	var num = 5;
	var $selectNum = $("#selectNum");
	var $totalPrice = $("#totalPrice").find("em");
	var totalPrice = $totalPrice.text();
	$selectNum.change(function(e) {
		num = $(this).val();
		totalPrice = parseInt(price*num);
		$totalPrice.text(totalPrice);
	}).change();
})