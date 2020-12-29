
function check_password() {
	if(document.getElementById("password").value.length > 5) {
		alert("password accepted")
	}
	else {
		alert("password should be atleast 5 characters")
	}
}
