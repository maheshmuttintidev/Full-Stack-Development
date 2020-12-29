
// variable hoisting

var a,b,c

a = 1

b = 2

console.log("when func1() calls")

function func1() {
	var a, b, c
	a = 10
	console.log("a value is: "+a) // 10
	console.log("b value is: "+b) // undefined
	console.log("c value is: "+c) // undefined
	console.log("a value is: "+a) // 10
}

func1()


console.log("when func2() calls")

function func2() {
	var a = 10
	console.log("a value is: "+a) // 10
	console.log("b value is: "+b) // 2
	console.log("c value is: "+c) // undefined
	console.log("a value is: "+a) // 10
}

func2()


