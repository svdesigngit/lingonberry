/**
* 1. Надо подключить fancybox
* 2. В action подключаемой формы всегда надо прописывать action, который будет отдавать ajax-friendly ответ. Т.е. просто эту же форму, но без шаблона.
* 
*/
$(function() {
	
	$(document).on('submit', '.modal-body form', function(e){
		e.preventDefault();
		var $form = $(this);
		var action = $form.data('action');
		// Этот класс надо на кнопку сабмита вроде бы
		var submitButton = $form.find('.submit_ajax_form');
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
					// Тут  можно внести  правки, если нужно форму класть в другой элемент
					$form.closest('.modal-body').html(response);
					
					if(typeof $.prototype.validate == 'function' && response.indexOf('valid-form') != -1)
					{
						$form.closest('.modal-body form').validate({
							messages: validateMessages
						});
					}
				}
			}
			
		)
	})
	
	$(document).on('submit','form.ajaxSubmit',function(e){
		e.preventDefault();
		if($(this).closest('.modal-body').length) 
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
