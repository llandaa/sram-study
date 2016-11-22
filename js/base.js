$(function(){
	/**********灯****/
		var dengkey = true;
	$('.dengxian').on('click',function(){
		if(dengkey){
			$(this).addClass('bounceOneK');
			$(this).removeClass('bounceOneG');
			$('.dengtai').find('i').fadeIn(300)
			dengkey = false;
			
		}else{
			$(this).removeClass('bounceOneK');
			$(this).addClass('bounceOneG');
			$('.dengtai').find('i').fadeOut(300)
			dengkey = true;
		}
	})	
})
