$(function() {

	// CBlocks Initialization
	$('.cblock').each(function(){
		var data = $(this).attr('class').split(' ')[1];
		var wrapper = $(this).find('.cblock__items');
		$('.header__navblocks div').each(function(){
			if($(this).data('category')==data){
				wrapper.append($(this));
			}
		});
	});
});
