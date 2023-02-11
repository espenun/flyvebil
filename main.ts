input.onButtonPressed(Button.A, function () {
    throttle += -10
})
input.onGesture(Gesture.Shake, function () {
    throttle = 0
    arm = 0
})
input.onButtonPressed(Button.AB, function () {
    if (arm) {
        arm = 0
    } else {
        arm = 1
    }
    throttle = 0
})
input.onButtonPressed(Button.B, function () {
    throttle += 10
})
let roll = 0
let arm = 0
let throttle = 0
let Radiokanal = 42
basic.showNumber(Radiokanal)
radio.setGroup(Radiokanal)
basic.forever(function () {
	
})
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (arm) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(Math.map(roll, -45, 45, 0, 4), 2)
    radio.sendValue("A", arm)
    radio.sendValue("R", roll)
    radio.sendValue("T", throttle)
})
