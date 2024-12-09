// Create the player sprite
let player = sprites.create(img`
    . . . . . 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 . . . . . . . 
    `, SpriteKind.Player);

// Set player controls
controller.moveSprite(player, 100, 100);
player.setStayInScreen(true);

// Add bubbles
game.onUpdateInterval(1000, function () {
    let bubble = sprites.create(img`
        . . . . 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 . . . . 
        `, SpriteKind.Enemy);

    bubble.setVelocity(0, 50);
    bubble.setPosition(Math.randomRange(10, 150), 0);
});

// Destroy bubbles on overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100);
    info.changeScoreBy(1);
});

// Game over if bubbles reach bottom
game.onUpdate(function () {
    sprites.allOfKind(SpriteKind.Enemy).forEach(function (bubble) {
        if (bubble.y > 120) {
            game.over(false);
        }
    });
});

// Initialize score
info.setScore(0);

