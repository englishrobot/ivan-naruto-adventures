namespace SpriteKind {
    export const Rings = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 6 6 6 6 . . 
        . 6 1 1 9 9 6 . 
        6 1 1 1 9 9 9 6 
        6 1 1 1 9 9 9 6 
        6 9 9 9 9 9 9 6 
        . 6 9 9 9 9 6 . 
        . . 6 6 6 6 . . 
        `, Naruto, 50, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Naruto.isHittingTile(CollisionDirection.Bottom)) {
        Naruto.vy = -150
    }
})
function createBer () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value of scene.getTilesByType(1)) {
        ber = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            1 1 1 1 . . . . 
            1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value, ber)
        animation.runImageAnimation(
        ber,
        [img`
            . . . f . . . 
            . . f f f . . 
            . f f . f f . 
            f f . . . f f 
            . f f . f f . 
            . . f f f . . 
            . . . f . . . 
            `,img`
            f . . . . . f 
            . f f f f f . 
            . f . f . f . 
            . f f . f f . 
            . f . f . f . 
            . f f f f f . 
            f . . . . . f 
            `,img`
            f . . . . . f 
            . f f f f f . 
            . f . f . f . 
            . f f . f f . 
            . f . f . f . 
            . f f f f f . 
            f . . . . . f 
            `],
        500,
        true
        )
        animation.runMovementAnimation(
        ber,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    CHANGELEVEL(true)
})
function crateRings () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Rings)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    for (let value of scene.getTilesByType(5)) {
        Rings = sprites.create(img`
            . . . . . . . . 
            . . 5 5 5 5 . . 
            . 5 . . . . 5 . 
            5 . . . . . . 5 
            5 . . . . . . 5 
            5 . . . . . . 5 
            . 5 . . . . 5 . 
            . . 5 5 5 5 . . 
            `, SpriteKind.Rings)
        scene.place(value, Rings)
        animation.runImageAnimation(
        Rings,
        [img`
            . . 5 5 5 5 4 . 
            . 5 5 5 5 5 5 4 
            5 5 4 4 4 5 5 4 
            5 5 4 . . 5 5 4 
            5 5 4 . . 5 5 4 
            5 5 4 4 4 5 5 4 
            . 5 5 5 5 5 5 4 
            . . 5 5 5 5 4 . 
            `,img`
            . . 5 5 5 4 . . 
            . 5 5 5 5 5 4 . 
            . 5 4 4 5 5 4 . 
            . 5 4 . 5 5 4 . 
            . 5 4 . 5 5 4 . 
            . 5 4 4 5 5 4 . 
            . 5 5 5 5 5 4 . 
            . . 5 5 5 4 . . 
            `,img`
            . . 5 5 4 . . . 
            . 5 5 5 5 4 . . 
            . 5 4 5 5 4 . . 
            . 5 4 5 5 4 . . 
            . 5 4 5 5 4 . . 
            . 5 4 5 5 4 . . 
            . 5 5 5 5 4 . . 
            . . 5 5 4 . . . 
            `,img`
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            . . 5 4 . . . . 
            `,img`
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            . . 4 5 . . . . 
            `,img`
            . . 4 5 5 . . . 
            . 4 5 5 5 5 . . 
            . 4 5 5 4 5 . . 
            . 4 5 5 4 5 . . 
            . 4 5 5 4 5 . . 
            . 4 5 5 4 5 . . 
            . 4 5 5 5 5 . . 
            . . 4 5 5 . . . 
            `,img`
            . . 4 5 5 5 . . 
            . 4 5 5 5 5 5 . 
            . 4 5 5 4 4 5 . 
            . 4 5 5 . 4 5 . 
            . 4 5 5 . 4 5 . 
            . 4 5 5 4 4 5 . 
            . 4 5 5 5 5 5 . 
            . . 4 5 5 5 . . 
            `,img`
            . 4 5 5 5 5 . . 
            4 5 5 5 5 5 5 . 
            4 5 5 4 4 4 5 5 
            4 5 5 . . 4 5 5 
            4 5 5 . . 4 5 5 
            4 5 5 4 4 4 5 5 
            4 5 5 5 5 5 5 . 
            . 4 5 5 5 5 . . 
            `],
        200,
        true
        )
    }
    createBer()
}
function CHANGELEVEL (pasado: boolean) {
    if (pasado) {
        CURRENTLEVEL += 1
    }
    if (CURRENTLEVEL == 1) {
        scene.setTileMap(img`
            ........................b...........b.......................
            ........................b.......5...b.......................
            ........................b77.........b.......................
            ........................b.......7...b.....................5.
            ........................b....77.b...b.....................5a
            ........................b77.....b...b.....................77
            ........................b...5...b...b..................5...7
            ........................b777777.b...b...................77..
            ........................b...5...b...b..........5......55....
            ........................b.777777b...b.......5......55.777...
            ........................b.......b...b..........77..77.......
            ...5...5....5....5......b777777.b...........77..............
            3....1....1....1....1.5.........b11.....5...................
            7777...77...77...77...7777777777b777777.77..................
            eeee222ee222ee222ee222eeeeeeeeeeeeeeeee222222222222222222222
            `, TileScale.Eight)
    } else {
        game.over(true, effects.dissolve)
    }
    scene.setTile(14, img`
        e b b b b b b b 
        e b b b b b b b 
        e e b b b b b b 
        e e e e 4 e e b 
        e e 5 e e 2 f 2 
        4 5 5 2 e 2 5 f 
        4 e 2 2 4 4 f f 
        2 4 2 f 2 4 2 2 
        `, true)
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 6 7 7 7 
        7 7 7 6 5 6 7 7 
        7 7 7 7 6 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 e e 7 7 7 
        7 e e e e e 7 7 
        e e e e e e e e 
        `, true)
    scene.setTile(2, img`
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 4 5 4 4 4 5 2 
        4 5 4 5 2 4 5 4 
        2 4 4 2 5 4 2 4 
        2 4 2 5 4 4 4 4 
        `, true)
    scene.setTile(11, img`
        b b e e b e e e 
        b b e b b e e e 
        e e e e e e e e 
        e e e b e e b e 
        e e e e e e e e 
        b b b b e e e e 
        b b b e e e e b 
        b b e e e e b b 
        `, true)
    scene.setTile(3, img`
        . 8 8 8 8 8 8 8 
        . 8 e e e e f 8 
        . 8 e e e e f 8 
        . 8 e e e e f 8 
        . 8 e e e 5 f 8 
        . 8 e e e e f 8 
        . 8 e e e e f 8 
        . 8 e e e e f 8 
        `, false)
    scene.setTile(10, img`
        8 8 8 8 8 8 8 . 
        8 f e e e e 8 . 
        8 f e e e e 8 . 
        8 f e e e e 8 . 
        8 f 5 e e e 8 . 
        8 f e e e e 8 . 
        8 f e e e e 8 . 
        8 f e e e e 8 . 
        `, true)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.placeOnRandomTile(Naruto, 3)
    crateRings()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rings, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprite.vy = -150
        otherSprite.destroy(effects.fire, 500)
        music.spooky.play()
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    CHANGELEVEL(false)
    info.setScore(0)
})
let Rings: Sprite = null
let ber: Sprite = null
let projectile: Sprite = null
let CURRENTLEVEL = 0
let Naruto: Sprite = null
scene.setBackgroundColor(9)
Naruto = sprites.create(img`
    . 5 5 5 . 
    . 8 b 8 . 
    . 3 3 3 . 
    4 4 8 4 4 
    . 4 8 4 . 
    8 . . . 8 
    `, SpriteKind.Player)
Naruto.ay = 500
controller.moveSprite(Naruto, 65, 0)
Naruto.setStayInScreen(true)
scene.cameraFollowSprite(Naruto)
CURRENTLEVEL = 0
CHANGELEVEL(true)
