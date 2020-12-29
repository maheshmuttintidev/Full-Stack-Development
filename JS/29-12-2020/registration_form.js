function getDetails() {
	const id = e => document.getElementById(e)

	const [username, email, password, dob] = [id("username").value, id("email").value, id("password").value, id("date")]

	const details = id("details")

	details.innerHTML = `
			    <table border='1' style='border-collapse: collapse;'>
				<tr style="text-align:center">
					<th>username</th>
					<td>${username}</td>
				</tr>
				 <tr style="text-align:center">
                                        <th>email</th>
                                        <td>${email}</td>
                                </tr>
				 <tr style="text-align:center">
                                        <th>password</th>
                                        <td>${password}</td>
                                </tr>
				 <tr style="text-align:center">
                                        <th>Date of Birth</th>
                                        <td>${date}</td>
                                </tr>
			    </table>
			    `
}
