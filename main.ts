basic.forever(function () {
    if (input.lightLevel() == 0) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Heart)
    } else if (input.lightLevel() < 128) {
        led.setBrightness(182)
        basic.showIcon(IconNames.Heart)
    } else if (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Heart)
        led.setBrightness(10)
    }
    if (input.lightLevel() >= 255) {
        led.setBrightness(0)
        basic.showIcon(IconNames.Heart)
    }
})
