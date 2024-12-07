//All code constructed by Ross Gibney (x23233681)
document.querySelectorAll('.serviceForm').forEach(function (form){ //Adapted from https://www.w3schools.com/jsref/met_document_queryselectorAll.asp
	form.addEventListener('submit', function(event) {//All elements selected with 'serviceForm' class and looped through each form.
		event.preventDefault();//Prevent default form from submitting.
		var emailInput = form.querySelector('[type="email"]'); //Adapted from https://www.w3schools.com/jsref/met_element_queryselector.asp
		var emailError = form.querySelector('.error');
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var passwordInput=form.querySelector('[name^="password"]');
		var repeatInput=form.querySelector('[name^="repeat"]');
		var repeatError=form.querySelector('.repeatError');
		let valid=true; //validation flag adapted from https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/
		if (!emailPattern.test(emailInput.value)) {
			emailError.textContent = 'Please enter a valid email address.';
			valid=false;//If email invalid display error message
		} 
		else {
			emailError.textContent = '';//If email valid clear error messages.
		}
		if (repeatInput&&passwordInput){//If password and repeat password are present apply password validation.
			if (passwordInput.value!==repeatInput.value){
				repeatError.textContent= 'Passwords do not match ! Please re-enter passwords.';
				valid=false;
			}
			else {
				repeatError.textContent = '';
			}
		}	
		if (valid){
			alert('Thank you for signing up! Now go ahead and download the Camogie App!');
			form.reset();//Alert message upon successful submission
		}
	});
});
