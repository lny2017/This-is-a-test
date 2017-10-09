function fun1(arr){
    var i = 0;
    var brr = [];

    while(i < arr.length){
        if (brr.indexOf(arr[i]) === -1) {
            brr.push(arr[i]);
        }
        i++;
    }

    return brr;
}