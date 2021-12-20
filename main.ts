function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    Pieton = 1
})
function non_pieton () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let Pieton = 0
vert()
Pieton = 0
let Temps = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (Temps == 0) {
        vert()
        basic.pause(5000)
        jaune()
        basic.pause(2000)
        rouge()
        basic.pause(5000)
    }
    if (Pieton == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        Temps = 4
        basic.pause(1000)
        Temps += -1
        basic.pause(1000)
        Temps += -1
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        Temps += -1
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
        Temps += -1
        Pieton = 0
    }
})
basic.forever(function () {
    basic.showNumber(Temps)
})
