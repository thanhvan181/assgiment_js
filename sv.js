const form = document.getElementById('form');
const username = document.getElementById('username');
const subject = document.getElementById('subject');
const absent = document.getElementById('absent');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const subjectValue = subject.value.trim();
	const absentValue = absent.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
    }
    
    if( subjectValue=== '') {
		setErrorFor(subject, 'subject cannot be blank');
	} else {
		setSuccessFor(subject);
    }
    if(absentValue === '') {
        
		setErrorFor(absent, 'absent cannot be blank');
	} else {
		setSuccessFor(absent);
    }
    
	
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	












