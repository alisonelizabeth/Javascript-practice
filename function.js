$(document).ready
(
	function() 
	{		
		$('.button').click
		(
			function()
			{
				if (validateForm())
				{
					var nameValue = $('.name').val();
					var ageValue = $('.age').val();
					var jobValue = $('.job').val();
					var movieValue = $('.movie').val();
					var hobbiesValue = $('.hobbies').val();
					var emailValue = $('.email').val();

					$('.preview-name').text(nameValue);	
					$('.preview-age').text('Want to know more about me? Well, I am ' + ageValue + ' years old.');
					$('.preview-job').text('I work as a ' + jobValue + '.');
					$('.preview-movie').text('If I had to pick a favorite movie it would be ' + movieValue + '.');
					$('.preview-hobbies').text('Here are a few of my hobbies: ' + hobbiesValue + '.');
					$('.preview-email').text('You can reach me at ' + emailValue + '.');
				}
			}
		)

	
			
		$('.click-modal').click
		(
			function () 
			{
				console.log('modal ok')
				$('.modal').addClass('modal-active');
			}
		)	

		$('.button-two').click 
		(
			function()
			{
				console.log('modal box closed')
				$('.modal').removeClass('modal-active');
			}
							)

})

		function validateForm ()
		{
			var errormessage="ok"																	
			$('.message').removeClass('popup-message')
			$('input').removeClass("warning")
			$('input').each
			(
				function()
				{
					if ($(this).val() == "") 
					{
						console.log("input left empty");
						errormessage="not ok"
						$(this).addClass("warning")
						$('.message').addClass('popup-message')
					}
				}
			)
			return errormessage
		}


	


	