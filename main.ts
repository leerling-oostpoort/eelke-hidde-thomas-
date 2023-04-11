input.onButtonPressed(Button.A, function () {
    basic.showNumber(var2)
    var1 = fib - var2
    var2 = var1
})
input.onButtonPressed(Button.B, function () {
    fib = var1 + var2
    basic.showNumber(fib)
    var1 = var2
    var2 = fib
})
let fib = 0
let var2 = 0
let var1 = 0
var1 = 1
var2 = 1
