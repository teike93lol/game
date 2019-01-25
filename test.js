function descendingOrder(n){
    //...
    var descendingNumber = "";
    var numberString = n.toString();
    for(var i = numberString.length+1; i >= 0 ; i--){
        descendingNumber = descendingNumber + numberString.charAt(i);
    }
    return parseInt(descendingNumber);
}
//2110
console.log(descendingOrder('0112'));