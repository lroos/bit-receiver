radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        sprite.change(LedSpriteProperty.X, value)
        left = 0 - value
        right = value
    } else if (name == "y") {
        sprite.change(LedSpriteProperty.Y, value)
        speed = value
    } else if (name == "button_c") {
        music.playMelody("G G G C5 C5 - E E ", 500)
        music.playMelody("C5 - C5 B B A A G ", 404)
    } else if (name == "button_d") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 92, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (name == "button_e") {
    	
    } else {
    	
    }
    wuKong.setAllMotor(speed * 30 + left * 20, speed * 30 + right * 20)
})
let right = 0
let left = 0
let speed = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
speed = 0
left = 0
right = 0
wuKong.stopAllMotor()
wuKong.setLightMode(wuKong.LightMode.BREATH)
