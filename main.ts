radio.onReceivedValue(function (name, value) {
    num = parseFloat("")
    if (name == "x") {
        sprite.change(LedSpriteProperty.X, value)
    } else if (name == "y") {
        sprite.change(LedSpriteProperty.Y, value)
    } else if (name == "button_c") {
        sprite.set(LedSpriteProperty.Brightness, 10)
    } else if (name == "button_d") {
        sprite.set(LedSpriteProperty.Brightness, 254)
    } else if (name == "button_e") {
        sprite.set(LedSpriteProperty.Blink, 100)
    } else {
        sprite.set(LedSpriteProperty.Blink, 0)
    }
})
let num = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
