let y = 0
let z = 0
let bright = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    bright = 250
    z = 0
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x - dx * z, y, bright)
            z += 1
            bright += -50
        }
        y += 1
    }
    basic.pause(100)
})
