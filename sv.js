const form = document.getElementById('form');
const username = document.getElementById('username');
const subject = document.getElementById('subject');
const absent = document.getElementById('absent');

document.getElementById('username').addEventListener('blur', validateUsename)
document.getElementById('subject').addEventListener('blur', validateSubject);
document.getElementById('absent').addEventListener('blur', validateAbsent);
document.getElementById("checker").addEventListener('click', calculate);

form.addEventListener('submit', e => {
	const usernameData = document.getElementById('username').value;
	const subjectData = document.getElementById('subject').value;
	const absentData = document.getElementById('absent').value;
	const absentTable = document.getElementById("absent-table");
	const validators = [validateUsename, validateSubject, validateAbsent]
	let result = validators.every(function (validator) {
		return validator()
	});
	if (result){
		const row = document.createElement("tr");
		row.innerHTML = `<td>${usernameData}</td>
                     <td>${subjectData}</td>
                     <td>${absentData}</td>
`
		absentTable.appendChild(row);
	}
	e.preventDefault();
});

function calculate(){
   const absentTable = document.getElementById("absent-table");
   let rows = absentTable.getElementsByTagName('tr');
   console.log("TR", rows)
   for (let i=0; i < rows.length; i++){
       let cells = rows[i].getElementsByTagName('td');
       if (cells.length !== 3){
       	continue;
	   }
       console.log("Cells", cells)
       let absentCell = cells[2];
	   let num = parseInt(absentCell.innerText);
	   if (num >= 4){
	   	 rows[i].style.backgroundColor = "yellow";
	   }
	   console.log("Absent-Number", num);
   }
}

function getData(){
	let items;
	if (localStorage.getItem("items") === null){
		items = [];
	} else{
		items = Json.parse(localStorage.getItem("items"));
	}
	return items;
}

function validateUsename() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const re = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{8,}$/igm;

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false
	} else if (!re.test(usernameValue)){
		setErrorFor(username, 'Ho ten nhap it nhat 8 ky tu');
		return false
	}
	else {
		setSuccessFor(username);
		return true
    }
}

function validateSubject() {
	// trim to remove the whitespaces
	const regex = /Fpoly/g;
	const subjectValue = subject.value.trim();
	if( subjectValue=== '') {
		setErrorFor(subject, 'subject cannot be blank');
		return false
	} else if (subjectValue.search(regex) === -1){
		setErrorFor(subject, 'Mon hoc phai co ky tu Fpoly');
		return false
	}
	else {
		setSuccessFor(subject);
		return true
	}
}

function validateAbsent() {
	// trim to remove the whitespaces
	const absentValue = absent.value.trim();
	const regex = /^0\d$/g;
	if(absentValue === '') {
		setErrorFor(absent, 'absent cannot be blank');
		return false
	} else if (!regex.test(absentValue)) {
		setErrorFor(absent,'So phai co 2 chu so bat dau bang so 0: VD 01, 02 ...');
		return false
	}
	else {
		setSuccessFor(absent);
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
	












