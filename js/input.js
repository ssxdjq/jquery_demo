/* 搜索文本框效果 */
$(function(){
	$("#inputSearch01").focus(function(){
		  
		  if($(this).val() ==this.defaultValue){  
			  $(this).val("");           
		  } 
	}).blur(function(){
		
		 if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		 }
	}).keyup(function(e){
		if(e.which == 13){
			alert('回车提交表单!');
		}
	})
})