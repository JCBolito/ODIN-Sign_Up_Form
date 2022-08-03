const submit = document.querySelector('button[type="submit"]');
const passwordLabel = document.querySelector('.passwordLabel');
const password = document.querySelector('.passwordInput');
const passwordConfirmation = document.querySelector('.passwordConfirmation');

function passwordMatching() {
	if (password.value != passwordConfirmation.value) {
		passwordLabel.classList.add('errorCode');
		password.classList.add('error');
		passwordConfirmation.classList.add('error');
		submit.classList.add('disabledButton');
		submit.disabled = true;
	}
	else {
		passwordLabel.classList.remove('errorCode');
		password.classList.remove('error');
		passwordConfirmation.classList.remove('error');
		submit.classList.remove('disabledButton');
		submit.disabled = false;
	}
}

//MAIN
passwordConfirmation.addEventListener('keyup', passwordMatching);
