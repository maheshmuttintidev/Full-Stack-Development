function getDetails() {
	const username = document.getElementById("username").value
	const password = document.getElementById("password").value
	document.write(`<strong>Username: </strong> ${username} <br /> <strong>Password: </strong> ${password}`)
	alert(username+"\n"+password)
}
