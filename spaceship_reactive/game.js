function paintScore(score) {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('Score: ' + score, 40, 43);
}

function renderScene(actors) {
    paintStars(actors.stars);
    paintSpaceShip(actors.spaceship.x, actors.spaceship.y);
    paintEnemies(actors.enemies);
    paintPlayerShots(actors.playerShots,actors.enemies);
    paintScore(actors.playerScore);
}

var Game = Rx.Observable.combineLatest(StarStream, SpaceShip, Enemies, PlayerShots, function (stars, spaceship, enemies, playerShots,score) {
    return {stars: stars, spaceship: spaceship, enemies: enemies, playerShots: playerShots, playerScore: score};
}).sample(SPEED).takeWhile(function(actors) {return gameOver(actors.spaceship, actors.enemies) === false;})
.subscribe(renderScene);