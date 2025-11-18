const a = function() {
    return "ab";
}

const printer = function (fn){
    console.log(fn());
}
printer(a);
