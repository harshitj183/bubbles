controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.load_bubble()
    bubble.tossBubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
bubble.load_bubble()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . . . . 3 3 . . . . . 
    . . . 3 . . . . . 3 . . . . . . 
    . . . 3 . . . . . 3 3 . . . . . 
    . . . 3 . . . . . 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
