
var likeCount = 0

var dislikeCount = 0


function like() {
	if(document.getElementById("like").innerHTML == 0) {
		likeCount = 1
		dislikeCount = 0
		document.getElementById("like")
.innerHTML = likeCount
		document.getElementsByClassName("fa fa-thumbs-up")[0].style.color = "blue"
		document.getElementById("dislike").innerHTML = dislikeCount
		document.getElementsByClassName("fa fa-thumbs-down")[0].style.color = "gray"
	}
	else {
		likeCount = 0
		document.getElementById("like").innerHTML = likeCount
		document.getElementsByClassName("fa fa-thumbs-up")[0].style.color = "gray"
	}
}

function dislike() {
	if(document.getElementById("dislike").innerHTML == 0) {
		dislikeCount = 1
		likeCount = 0
		document.getElementById("dislike").innerHTML = dislikeCount
		document.getElementsByClassName("fa fa-thumbs-down")[0].style.color = "blue"
		document.getElementById("like").innerHTML = likeCount
		document.getElementsByClassName("fa fa-thumbs-up")[0].style.color = "gray"
	}
	else {
		dislikeCount = 0
		document.getElementById("dislike").innerHTML = dislikeCount
		document.getElementsByClassName("fa fa-thumbs-down")[0].style.color = "gray"
	}
}
