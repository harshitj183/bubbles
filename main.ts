// Destroy bubbles on overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let bubble2: Sprite = null
// Create the player sprite
let player = sprites.create(img`
    . . . . . . 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 . . . . 2 2 . . . . 2 . 
    . 2 . . 2 2 2 2 2 2 . . 2 . 
    . . . . 2 . . . . 2 . . . . 
    `, SpriteKind.Player)
// Set player controls
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
// Initialize score
info.setScore(0)
// Game over if bubbles reach bottom
game.onUpdate(function () {
    sprites.allOfKind(SpriteKind.Enemy).forEach(function (bubble) {
        if (bubble.y > 120) {
            game.over(false);
        }
    });
})
// Add bubbles
game.onUpdateInterval(1000, function () {
    bubble2 = sprites.create(img`
        . . 6 . . 6 6 6 . . 6 . . 
        6 . . 6 . . 6 . . 6 . . 6 
        6 . . . 6 . 6 . 6 . . . 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 . . . 6 . 6 . 6 . . . 6 
        . . . 6 . . 6 . . 6 . . . 
        . . 6 . . 6 6 6 . . 6 . . 
        `, SpriteKind.Enemy)
    bubble2.setVelocity(0, 50)
    bubble2.setPosition(Math.randomRange(10, 150), 0)
})
