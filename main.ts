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
input.onButtonPressed(Button.B, function () {
    while (yvalue <= 5) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        yvalue += 1
        for (let index = 0; index < 5; index++) {
            xvalue += -1
            led.plot(xvalue, yvalue)
            basic.pause(200)
        }
        yvalue += 1
    }
})
let yvalue = 0
let xvalue = 0
xvalue = 0
yvalue = 0
