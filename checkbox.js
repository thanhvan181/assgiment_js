const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const address = document.getElementById('address');
const website = document.getElementById('website-input');
const maleSex = document.getElementById('male-sex');
const femaleSex = document.getElementById('female-sex');
const ViLanguage = document.getElementById('vi-language');
const EnLanguage = document.getElementById('en-language');
const note = document.getElementById('text-note');
const submit = document.getElementById('btn-submit');
const bodyConten = document.getElementById('body-content');
console.log("Run CheckBox js")
// Form Blur event
username.addEventListener('blur', validateUsername);
password.addEventListener('blur', validatePassword);
fullName.addEventListener('blur', validateFullName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
address.addEventListener('blur', validateAddress);
website.addEventListener('blur', validateWebsite);
submit.addEventListener("click", showData)

function showData(e){
	console.log(e)
	console.log("Click Submit")
	let data = getDataForm()
	if (Object.keys(data).length > 1){
		bodyConten.innerHTML = ''
        document.write(JSON.stringify(data))
	}

}

function getDataForm(){
	let data = {};
  // console.log(JSON.stringify());
	let validators = [validateUsername, validatePassword, validateAddress, validateFullName, validateEmail, validatePhone, validateWebsite];
	let result = validators.every(function (validator){
		return validator()
	})
    console.log("Check All ", result)
	if (result) {
		data[username.name] = username.value;
		data[password.name] = password.value;
		data[fullName.name] = fullName.value;
		data[address.name] = address.value;
		data[website.name] = website.value;
		data[email.name] = email.value;
		data[phone.name] = phone.value;
		data[maleSex.name] = maleSex.value;
		data[femaleSex.name] = femaleSex.value;
		let languages = {};
			languages[ViLanguage.name] = ViLanguage.value;
		    languages[EnLanguage.name] = EnLanguage.value;
		data["languages"] = languages;

		data[note.name] = note.value;
	}
	return data;
}

function validateUsername(){
    const re = /^[a-z0-9_-]{3,16}$/igm;
    if (!re.test(username.value)){
		setErrorFor(username, "Username invalid")
		return false
    } else {
        setSuccessFor(username)
        return true

    }
}

function validatePassword(e){
	const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/igm;
	if (!re.test(password.value)){
		setErrorFor(password, "Password Invalid ! Minimum eight characters, at least one letter, one number and one special character")
        return false
	} else {
		setSuccessFor(password)
		return true
	}

}
function validateFullName(e){
	const re = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/igm;
	if (!re.test(fullName.value)){
		setErrorFor(fullName, "Full name invalide !")
		return false
	} else {
		setSuccessFor(fullName)
		return true
	}
}
function validatePhone(e){
	const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/igm;
	if (!re.test(phone.value)){
		setErrorFor(phone, "Phone invalide !")
		return false
	} else {
		setSuccessFor(phone)
		return true
	}

}
function validateEmail(e){
	const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/igm;
	if (!re.test(email.value)){
		setErrorFor(email, "Email invalide !")
		return false
	} else {
		setSuccessFor(email)
        return true
	}
}
function validateAddress(e){
	const re = /^.{6,}$/igm;
	if (!re.test(address.value)){
		setErrorFor(address, "Address invalide !")
		return false
	} else {
		setSuccessFor(address)
		return true
	}

}
function validateWebsite(e){
	const re = /^.+\..+$/igm;
	if (!re.test(website.value)){
		setErrorFor(website, "Website invalide !")
		return false
	} else {
		setSuccessFor(website)
		return true
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
