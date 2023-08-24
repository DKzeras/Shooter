input.onButtonPressed(Button.A, function () {
    if (canShoot) {
        Bullet = game.createSprite(Spaceship.get(LedSpriteProperty.X), Spaceship.get(LedSpriteProperty.Y))
        Bullet.turn(Direction.Left, 50)
        canShoot = false
    }
})
function Crash () {
    if (Bullet.isTouching(Enemy)) {
        game.addScore(1)
        Bullet.delete()
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), 0)
        canShoot = true
    } else if (Bullet.get(LedSpriteProperty.Y) == 0) {
        Bullet.delete()
        canShoot = true
    }
}
let Bullet: game.LedSprite = null
let canShoot = false
let Enemy: game.LedSprite = null
let Spaceship: game.LedSprite = null
Spaceship = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
canShoot = true
game.startCountdown(20000)
basic.forever(function () {
    Spaceship.move(1)
    Spaceship.ifOnEdgeBounce()
    if (Bullet) {
        Bullet.move(1)
        Crash()
    }
    basic.pause(200)
})
