let sum = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 10; index++) {
        sum = index + sum
    }
    basic.showNumber(sum)
})
basic.forever(function () {
	
})
