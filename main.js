jQuery('document').ready(function(){

	jQuery('input').on('keyup',function(){
		
		var value1, value2, value3;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();
		
		value1 = parseInt(value1);
		value2 = parseInt(value2);
		value3 = value1 * value2;

		jQuery('#amount').val(value3);
	
	});

}); 
