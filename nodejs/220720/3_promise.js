function promise1(flag) {
    return new Promise( function (resolve, reject) {
        if(flag) {
            resolve ("then으로 연결");
        } else {
            reject("catch로 연결");
        }
    });
}

promise1(true)
    .then( function (result) {
        console.log("then : ", result);
    })
    .catch (function(err){
        console.log("c : ", err);
    });


promise1(false)
    .then( function (result) {
        console.log("t : ", result);
    })
    .catch (function(err){
        console.log("catch : ", err);
    });


//요거 헷갈림

