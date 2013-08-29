describe("usersCollection", function(){
	it ("warning if usersCollection variable is 'undefined'", function () {
		var usersCollection = []
		expect(usersCollection).toBeDefined();

		});
	})

describe("modal box", function (){ 
	it ("model box should open after the class 'span.click-here' is clicked", function () {
		$("span.click-here").click()
		expect($(".modal").addClass("modal-active"));
		});

	it ("modal box should close when the class '.button-two'is clicked", function () {
		$(".button-two").click()
	expect ($(".modal").removeClass("modal-active"));
		});
	})

describe("validateForm", function () {
	beforeEach(function() {
		$('input').val('');
	})

	it ("should highlight input fields that are left blank", function () {
		$(".button").click()
		expect($("input").addClass("warning"));
	})

	it ("should insert warning message when fields are left blank", function () {
		$(".button").click()
		expect($(".message").addClass("popup-message"));
	})

	it ("should return false if inputs are empty", function() {
		$(".button").click();
		expect(validateForm()).toBe(false);
		});

}) //end of validateForm tests 

describe("updateUserList", function (){
	beforeEach(function() {
		$("input").val("test")
	});

	it ("should add an li with username and email address to '.users-list' ol", function (){
		$(".name").val("Jane Doe");
		$(".email").val("email@gmail.com");
		$(".button").click();
		expect ($(".users-list ol li").last().text()).toContain("Jane Doe")&&("email@gmail.com");

	});

}) //end of updateUserList tests 

describe("getProfileInfo", function () {
		beforeEach(function() {
		$("input").val("test")
	});
	it ("should add profile information to the preview profile page when submitted", function (){
		$(".button").click();
		expect($(".preview-name").text()).toContain("test")
		expect($(".preview-age").text()).toContain("test")
		expect($(".preview-job").text()).toContain("test")
		expect($(".preview-movie").text()).toContain("test")
		expect($(".preview-hobbies").text()).toContain("test")
		expect($(".preview-email").text()).toContain("test")
	});
}) //end of getProfileInfo tests

describe("getFormValues", function (){
	beforeEach(function() {
		$(".name").val("Jane Doe");
		$(".email").val("email@gmail.com")
	});
	it ("should return formData", function (){
		expect(getFormValues().name).toBe("Jane Doe")
		expect(getFormValues().email).toBe("email@gmail.com")
	});

})//end of getFormValues





