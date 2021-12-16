let mean = 0
let f = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
serial.redirectToUSB()
basic.showIcon(IconNames.Duck)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < 1200) {
        a = input.acceleration(Dimension.Y)
        b = input.acceleration(Dimension.Y)
        c = input.acceleration(Dimension.Y)
        d = input.acceleration(Dimension.Y)
        e = input.acceleration(Dimension.Y)
        f = input.acceleration(Dimension.Y)
        mean = (a + (b + (c + (d + (e + f))))) / 6
        mean = Math.idiv(mean, Math.constrain(1, 9, 9))
        serial.writeNumber(mean)
        serial.writeLine("")
    }
})
