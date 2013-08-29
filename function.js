var usersCollection = []

$(document).ready (function(){
	$('span.click-here').click(function() {
				console.log('modal ok')
				$('.modal').addClass('modal-active');
			})	//end of modal click

	$('.button-two').click(function() {
				console.log('modal box closed')
				$('.modal').removeClass('modal-active');
			})  

	$('.button').click(function(){
		if (validateForm()) {
			getProfileInfo();
			usersCollection.push(getFormValues());
			updateUserList(usersCollection);
		}
	}) //end of button click function 

})  //end of document ready

function getProfileInfo () {
	var nameVal 	= $('.name').val();
	var ageVal 		= $('.age').val();
	var jobVal 		= $('.job').val();
	var movieVal 	= $('.movie').val();
	var hobbiesVal 	= $('.hobbies').val();
	var emailVal 	= $('.email').val()

	$('.preview-name').text(nameVal);	
	$('.preview-age').text('Want to know more about me? Well, I am ' + ageVal + ' years old.');
	$('.preview-job').text('I work as a ' + jobVal + '.');
	$('.preview-movie').text('If I had to pick a favorite movie it would be ' + movieVal + '.');
	$('.preview-hobbies').text('Here are a few of my hobbies: ' + hobbiesVal + '.');
	$('.preview-email').text('You can reach me at ' + emailVal + '.');

}

function getFormValues () {
	var name 	= $('.name').val();
	var email 	= $('.email').val();
	

	formData = {
		name: name,
		email: email
	};

	return formData // returns an object
	//if you return something, can store it

	}


function updateUserList (list) {
	var ol = $('.users-list ol');
	ol.html(''); //clears 

	list.forEach(function(user) {
		var text = "<li>" + ("<b>" + "Name: " + "</b>") + user.name + "," + 
		("<b>" + "		Email address: " + "</b>") + user.email + "</li>";
		ol.append(text);
	})
}


function validateForm () {
			var valid = true;
			$('.message').removeClass('popup-message')
			$('input').removeClass("warning")
			$('input').each(function(){
				if ($(this).val() == "") {
					console.log("input left empty");
					valid = false
					$(this).addClass("warning")
					$('.message').addClass('popup-message')
				}
			})


			 return valid
		}
 
