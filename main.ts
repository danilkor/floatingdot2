input.onGesture(Gesture.TiltLeft, function () {
    direction = 3
    timer2 = control.millis()
})
input.onGesture(Gesture.TiltRight, function () {
    direction = 1
    timer2 = control.millis()
})
function MoveDot () {
    if (control.millis() - TimeBeforAuto >= timer2) {
        if (direction == 0) {
            if (doty == 0) {
                direction = randint(1, 3)
            }
        }
        if (direction == 3) {
            if (dotx == 0) {
                direction = randint(0, 2)
            }
        }
        if (direction == 1) {
            if (dotx == 4) {
                if (Math.randomBoolean()) {
                    direction = 0
                } else {
                    direction = randint(2, 3)
                }
            }
        }
        if (direction == 2) {
            if (doty == 4) {
                if (Math.randomBoolean()) {
                    direction = randint(3, 0)
                } else {
                    direction = 3
                }
            }
        }
    }
    if (Math.randomBoolean()) {
        if (direction == 1 || direction == 3) {
            if (Math.randomBoolean()) {
                if (doty < 4) {
                    doty += 1
                }
            } else {
                if (doty > 0) {
                    doty += -1
                }
            }
        }
    }
    if (Math.randomBoolean()) {
        if (direction == 0 || direction == 2) {
            if (Math.randomBoolean()) {
                if (dotx < 4) {
                    dotx += 1
                }
            } else {
                if (dotx > 0) {
                    dotx += -1
                }
            }
        }
    }
    if (direction == 1) {
        if (dotx < 4) {
            dotx += 1
        }
    }
    if (direction == 3) {
        if (dotx > 0) {
            dotx += -1
        }
    }
    if (direction == 0) {
        if (doty > 0) {
            doty += -1
        }
    }
    if (direction == 2) {
        if (doty < 4) {
            doty += 1
        }
    }
}
input.onButtonPressed(Button.A, function () {
    periodOfTime += 5
    br += -0.5
    if (br < 3) {
        br = 3
    }
})
input.onButtonPressed(Button.B, function () {
    periodOfTime += -5
    br += 0.5
    if (br > 255) {
        br = 255
    }
})
input.onGesture(Gesture.LogoDown, function () {
    direction = 0
    timer2 = control.millis()
})
input.onGesture(Gesture.LogoUp, function () {
    direction = 2
    timer2 = control.millis()
})
let mil = 0
let checky = 0
let checkx = 0
let direction = 0
let timer2 = 0
let TimeBeforAuto = 0
let doty = 0
let dotx = 0
let br = 0
br = 10
dotx = 2
doty = 2
let periodOfTime = 100
let miniTimer = control.millis()
TimeBeforAuto = 4000
timer2 = control.millis()
basic.forever(function () {
    checkx = 0
    checky = 0
    mil = control.millis()
    for (let index = 0; index < 5; index++) {
        checkx = 0
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(checkx, checky, led.pointBrightness(checkx, checky) - br)
            checkx += 1
        }
        checky += 1
    }
    if (control.millis() - miniTimer >= periodOfTime) {
        MoveDot()
        miniTimer = control.millis()
        led.plotBrightness(dotx, doty, 255)
    }
})
