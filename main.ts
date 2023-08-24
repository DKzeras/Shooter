input.onButtonPressed(Button.A, function () {
    if (canShootDKzeras) {
        BulletDkzeras = game.createSprite(SpaceshipDkzeras.get(LedSpriteProperty.X), SpaceshipDkzeras.get(LedSpriteProperty.Y))
        BulletDkzeras.turn(Direction.Left, 50)
        canShootDKzeras = false
    }
})
function Crash () {
    if (BulletDkzeras.isTouching(EnemyDkzeras)) {
        game.addScore(1)
        BulletDkzeras.delete()
        EnemyDkzeras.delete()
        EnemyDkzeras = game.createSprite(randint(0, 4), 0)
        canShootDKzeras = true
    } else if (BulletDkzeras.get(LedSpriteProperty.Y) == 0) {
        BulletDkzeras.delete()
        canShootDKzeras = true
    }
}
let BulletDkzeras: game.LedSprite = null
let canShootDKzeras = false
let EnemyDkzeras: game.LedSprite = null
let SpaceshipDkzeras: game.LedSprite = null
SpaceshipDkzeras = game.createSprite(2, 4)
EnemyDkzeras = game.createSprite(randint(0, 4), 0)
canShootDKzeras = true
game.startCountdown(20000)
basic.forever(function () {
    SpaceshipDkzeras.move(1)
    SpaceshipDkzeras.ifOnEdgeBounce()
    if (BulletDkzeras) {
        BulletDkzeras.move(1)
        Crash()
    }
    basic.pause(200)
})
