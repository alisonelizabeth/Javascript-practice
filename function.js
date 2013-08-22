$(document).ready(function() {	

$('.button').click(function(){
	var nameValue = $('.name').val();
	$('.preview-name').text(nameValue);

	var ageValue = $('.age').val();
	$('.preview-age').text('Want to know more about me? Well, I am ' + ageValue + ' years old.');

	var jobValue = $('.job').val();
	$('.preview-job').text('I work as a ' + jobValue + '.');

	var movieValue = $('.movie').val();
	$('.preview-movie').text('If I had to pick a favorite movie it would be ' + movieValue + '.');

	var hobbiesValue = $('.hobbies').val();
	$('.preview-hobbies').text('Here are a few of my hobbies: ' + hobbiesValue + '.');

	var emailValue = $('.email').val();
	$('.preview-email').text('You can reach me at ' + emailValue + '.');

})

})

