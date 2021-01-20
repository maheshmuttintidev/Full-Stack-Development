(function() {
	var http = new XMLHttpRequest()

	http.open('GET','../JSON/config.json')

	http.send()

	http.onreadystatechange = function() {
		if(http.responseText != ''){
			initializeApp()
		}
	}
})()

function initializeApp() {
	alert("App Initialised")
}