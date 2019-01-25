var Rx = require('rx');
Rx.Observable.just('Hello World!').subscribe(function(value:any) {
    console.log(value);
});
