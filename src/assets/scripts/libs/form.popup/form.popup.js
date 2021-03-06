/**
* 1. Надо подключить fancybox
* 2. В action подключаемой формы всегда надо прописывать action, который будет отдавать ajax-friendly ответ. Т.е. просто эту же форму, но без шаблона.
* 
*/
$(function() {
	// Добавь параметров в fancybox, если нужно
	$('a.popup-form').each(function(){
		var elem = $(this);
		var wrap = elem.data('class');
		elem.addClass('fancybox.ajax').fancybox({
			afterLoad : function(data) {
				if(typeof $.prototype.validate == 'function' && data.content.indexOf('valid_form') != -1)
				{
					setTimeout(
						function() {
							$('.fancybox-inner form').validate({
								messages: validateMessages
							});
						},
						100
					);
				}
			},
			wrapCSS: wrap || ''
		});
	});
	
	$(document).on('submit', '.fancybox-inner form', function(e){
		e.preventDefault();
		var action = $(this).data('action');
		var submitButton = $(this).find('.submit_ajax_form');
		//var data = $(this).serialize()+'&'+submitButton.attr('name')+'='+submitButton.val();
		var formdata = new FormData(this);
		$.ajax(
			action,
			{	
				type: 'POST',
				data: formdata,
				processData: false,
				contentType: false,
				success: function(response) {
					$('.fancybox-inner').html(response);
					if(typeof $.prototype.validate == 'function' && response.indexOf('valid_form') != -1)
					{
						$('.fancybox-inner form').validate({
							messages: validateMessages
						});
					}
				}
			}
			
		)
	})
	
	$(document).on('submit','form.ajaxSubmit',function(e){
		e.preventDefault();
		if($(this).parents('.fancybox-inner').length) 
			return false;
		var action = $(this).data('action');
		var submitButton = $(this).find('.submit_ajax_form');
		//var data = $(this).serialize()+'&'+submitButton.attr('name')+'='+submitButton.val();
		var formdata = new FormData(this);
		var parent = $(this).parent();
		
		$.ajax(
			action,
			{	
				type: 'POST',
				data: formdata,
				processData: false,
				contentType: false,
				success: function(response) {
					parent.html(response);
				}
			}
			
		)
	})
	
});
