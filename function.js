var usersCollection = []

$(document).ready (function(){
	$('.click-modal').click(function() {
				console.log('modal ok')
				$('.modal').addClass('modal-active');
			})	//end of modal click

	$('.button-two').click(function() {
				console.log('modal box closed')
				$('.modal').removeClass('modal-active');
			})  //end of button two 
	// $('.test').click(function() {
	// 		usersCollection.push(getProfileDetails());
	// 	})
	$('.button').click(function(){
		if (validateForm()) {
		usersCollection.push(getFormValues());
		updateUserList(usersCollection);
		}

	}) //end of button click function 

} )  //end of document ready




// function getProfileDetails () {
// 	var person = $('.age' + '.job').val();

// 	infoData = {
// 		person: person,
// 	}

// 	return person 
// }




function getFormValues () {
	var nameVal 	= $('.name').val();
	var ageVal 		= $('.age').val();
	var jobVal 		= $('.job').val();
	var movieVal 	= $('.movie').val();
	var hobbiesVal 	= $('.hobbies').val();
	var emailVal 	= $('.email').val()
	

	formData = {
		name: nameVal,
		age: ageVal,
		job: jobVal,
		movie: movieVal,
		hobbies: hobbiesVal,
		email: emailVal
	};

	$('.preview-name').text(nameVal);	
	$('.preview-age').text('Want to know more about me? Well, I am ' + ageVal + ' years old.');
	$('.preview-job').text('I work as a ' + jobVal + '.');
	$('.preview-movie').text('If I had to pick a favorite movie it would be ' + movieVal + '.');
	$('.preview-hobbies').text('Here are a few of my hobbies: ' + hobbiesVal + '.');
	$('.preview-email').text('You can reach me at ' + emailVal + '.');

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
			var errormessage="ok"																	
			$('.message').removeClass('popup-message')
			$('input').removeClass("warning")
			$('input').each(function(){
					if ($(this).val() == "") {
						console.log("input left empty");
						errormessage="not ok"
						$(this).addClass("warning")
						$('.message').addClass('popup-message')
					}
				})
			return errormessage
		}
 
