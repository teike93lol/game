function drawTriangle(x, y, width, color, direction) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - width, y);
    ctx.lineTo(x, direction === 'up' ? y - width : y + width);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x - width, y);
    ctx.fill();
}
function collision(target1, target2) {
    return (target1.x > target2.x - 20 && target1.x < target2.x + 20) && (target1.y > target2.y - 20 && target1.y < target2.y + 20);
}

function paintSpaceShip(x, y) {
    drawTriangle(x, y, 20, '#ff0000', 'up');
}

function gameOver(ship, enemies) {
    return enemies.some(function (enemy) {
        if (collision(ship, enemy)) {
            return true;
        }
        return enemy.shots.some(function (shot) {
            return collision(ship, shot);
        });
    });
}


var PLAYER_Y = canvas.height - 30;
var mouseMove = Rx.Observable.fromEvent(canvas, 'mousemove');
var SpaceShip = mouseMove
    .map(function (event) {
        return {x: event.clientX, y: PLAYER_Y};
    }).startWith({x: canvas.width / 2, y: PLAYER_Y});
