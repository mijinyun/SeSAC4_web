function call(name) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        },1000);
    })
}
// 여기서 Promise { "kim "} 상태로 생각하면, 아래서 .then을 만나면 name에 "kim"

function back() {
    return new Promise (function (resolve,reject) {
        setTimeout(function(){
            console.log("back");
            // var a = 'back'
            // resolve(a);
            resolve("back");
        },1000);
    })

}

function hell() {
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve("callback hell");
        },1000);
    })
}

call ('kim')
    .then(function(name){
        console.log(name + '반가워');

        // var b = back();
        // console.log(b);
        // 여기서 Promise { "back "} 이라고 생각함. 밑에 .thne을만나서 txt에 "back" 이 들어간다고 생각.
        return back();             // 이부분은 var b = back(); return b; 와 같음  --function에서 받은 back은 then을 통해서 resolve를 받아야함. var b =back().then()으로 들어가야함. 근데 .then이 붙어 있지 않아서 return b를 해주는 것!!!!
    })
    .then(function(txt){
        console.log(txt + "을 실행했구나");
        return hell();
    })
.then (function(message){
    console.log("여기는" + message);
})
