// Get DOM objects
const name = document.querySelector(".name");
const pc = document.querySelector(".postal-code");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone-number");
const button = document.querySelector(".btn");
const nameAlert = document.getElementById("validate-name");
const postalCodeAlert = document.getElementById("validate-postal-code");
const emailAlert = document.getElementById("validate-email");
const numberAlert = document.getElementById("validate-number");

// Validation parameters
const vName = /[^\d\W]{2,} [^\d\W]{2,}/g;
const vPostalCode = /[A-Z][0-9][A-Z] [0-9][A-Z][0-9]/;
const vEmail = /\w{2,}@\w{2,}.\w{2,}/;
const vNumber = /\d{3}-\d{3}-\d{4}/;
// Get user input and validate it
button.addEventListener("click", () => {
	if (vName.test(name.value) == true) {
		name.setAttribute("class", "form-control is-valid name");
		nameAlert.textContent = "";
	} else if (vName.test(name.value) == false) {
		nameAlert.setAttribute("class", "text-danger");
		name.setAttribute("class", "form-control is-invalid name");
		nameAlert.textContent =
			"Please input your first name and last name seperated by a space";
	}
	if (vPostalCode.test(pc.value)) {
		pc.setAttribute("class", "form-control is-valid postal-code");
		postalCodeAlert.textContent = "";
	} else {
		postalCodeAlert.setAttribute("class", "text-danger");
		pc.setAttribute("class", "form-control is-invalid postal-code");
		postalCodeAlert.textContent =
			"Please input your postal code in the correct format. Example: H4A 3H2";
	}
	if (vEmail.test(email.value)) {
		email.setAttribute("class", "form-control is-valid email");
		emailAlert.textContent = "";
	} else {
		email.setAttribute("class", "form-control is-invalid email");
		emailAlert.textContent =
			"Please input your email in the correct format. Example: hasoun7772@gmail.com";
		emailAlert.setAttribute("class", "text-danger");
	}
	if (vNumber.test(phone.value)) {
		phone.setAttribute("class", "form-control is-valid phone-number");
		numberAlert.textContent = "";
	} else {
		phone.setAttribute("class", "form-control is-invalid email");
		numberAlert.textContent =
			"Please input your phone number in the correct format. Example: 438-346-6327";
		numberAlert.setAttribute("class", "text-danger");
	}
});
