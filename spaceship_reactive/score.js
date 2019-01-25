const START_SCORE = 0;

var ScoreSubject = new Rx.Subject();
var score = ScoreSubject.scan(function (prev, cur) {
    return prev + cur;
}, 0).concat(Rx.Observable.return(0));