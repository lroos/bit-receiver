radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        strip.clear()
        left = 0 - value
        right = value
        if (right > 0) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        } else if (left > 0) {
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        } else {
        	
        }
        strip.show()
    } else if (name == "y") {
        speed = value
        basic.showIcon(IconNames.Happy, 0)
    } else if (name == "button_c") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 924, 894, 255, 101, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 924, 894, 255, 101, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (name == "button_d") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (name == "button_e") {
        basic.showIcon(IconNames.Skull, 0)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 92, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        strip.clear()
        strip.show()
    } else {
        basic.showIcon(IconNames.Heart, 0)
strip.showRainbow(1, 360)
    }
    wuKong.setAllMotor(speed * 30 + left * 20, speed * 30 + right * 20)
})
let strip: neopixel.Strip = null
let right = 0
let left = 0
let speed = 0
speed = 0
left = 0
right = 0
wuKong.stopAllMotor()
wuKong.setLightMode(wuKong.LightMode.BREATH)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
