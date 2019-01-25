const SHOT_INTERVAL = 200;
const SHOOTING_SPEED = 15;
const SCORE_INCREASE = 10;

var playerFiring =
    Rx.Observable.merge(Rx.Observable.fromEvent(canvas, 'click'),
        Rx.Observable.fromEvent(canvas, 'keydown')
            .filter(function (evt) {
                return evt.keycode === 32;
            })).sample(SHOT_INTERVAL).timestamp();

var PlayerShots = Rx.Observable.combineLatest(playerFiring, SpaceShip, function (shotEvents, spaceShip) {
    return {timestamp: shotEvents.timestamp, x: spaceShip.x};
}).distinctUntilChanged(function (shot) {
    return shot.timestamp;
}).scan(function (shotArray, shot) {
    shotArray.push({x: shot.x, y: PLAYER_Y});
    return shotArray;
}, []);


function paintPlayerShots(playerShots,enemies) {
    playerShots.forEach(function (shot,i) {
        for (var l = 0; l < enemies.length; l++) {
            var enemy = enemies[l];
            if (!enemy.isDead && collision(shot, enemy)) {
                ScoreSubject.onNext(SCORE_INCREASE);
                enemy.isDead = true;
                shot.x = shot.y = -100;
                break;
            }
        }
        shot.y -= SHOOTING_SPEED;
        drawTriangle(shot.x, shot.y, 5, '#ffff00', 'up');
    });
}