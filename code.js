// (function (){
const inputs = document.querySelectorAll('input');

function detectFilled () {
	if (this.value.length > 0) {
		this.classList.add('filled');
	} else {
		this.classList.remove('filled');
	}
}

inputs.forEach(input => input.addEventListener('change', detectFilled));

function checkMatching () {
	if (registerPassword.value === confirmRegisterPassword.value) {
		console.log('yay!');
	} else {
		console.log('nay!');
	}
}

const registerPassword = document.querySelector('#password-register');
const confirmRegisterPassword = document.querySelector('#passconfirm-register');

registerPassword.addEventListener('change', checkMatching);
confirmRegisterPassword.addEventListener('change', checkMatching);


// })();