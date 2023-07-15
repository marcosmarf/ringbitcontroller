input.onButtonPressed(Button.A, function () {
    if (state == 50) {
        state = 0
        basic.pause(100)
    } else {
        state += -1
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("dir", 50)
})
input.onButtonPressed(Button.AB, function () {
    if (state == 50) {
        state = 0
        basic.pause(100)
    } else {
        state += 2
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 50) {
        state = 0
        basic.pause(100)
    } else {
        state += 1
        basic.pause(100)
    }
})
let state = 0
radio.setGroup(7)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
state = 50
basic.forever(function () {
    if (state == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendValue("dir", 0)
    } else if (state == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendValue("dir", 1)
    } else if (state == -1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendValue("dir", -1)
    } else if (state == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendValue("dir", 2)
    } else if (state == 50) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        radio.sendValue("dir", -2)
    }
    basic.pause(100)
})
