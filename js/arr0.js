function fun0(arr){
    var brr = [];
    for (var i = 0; i < arr.length; i++) {
        if (brr.indexOf(arr[i]) === -1) {
            brr.push(arr[i]);
        }
    }
    return brr;
}