input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        yvalue += 1
        xvalue = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("2D03 Rachel Chan")
})
let yvalue = 0
let xvalue = 0
xvalue = 0
yvalue = 0
