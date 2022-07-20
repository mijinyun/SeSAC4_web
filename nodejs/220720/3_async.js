function func() {
    return new Promise(function(resolve,reject) {
        resolve(1);
    });
}
//함수앞에 async를 붙이면 Promise를 반환함!

async function func() {
    return 1;
}

//  위 두개가 같은 거임.

func().then(function(result){console.log(result);});