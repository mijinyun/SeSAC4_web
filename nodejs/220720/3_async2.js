function login(id,pw) {
    return new Promise( function (resolve, reject) {
        setTimeout( function () {
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}

function getVideo(id) {
    return new Promise (function (resolve, reject) {
        setTimeout( function() {
            resolve(['아이언맨1','아이언맨2']);
        },2000);
    });
}

function getDetail(video) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve("비디오 제목은:"  + video);
        });
    });
}

// function exec() {
//     login('kim','1234')
//     .then(function(user) {
//         console.log('user님 환영');
//         return getVideo(user);
//     })
//     .then(function(videos){
//         console.log(videos);
//         return getDetail(videos[0]);
//     })

// .then (function(title) {
//     console.log(title);
// });

// }

async function exec() {                          //DB연결할 때 db결과 자체가 프라미스 상태라서 async를 이용ㅇ해서 디비 연동자체를 동기식으로 처리할 수 있음. ! 그 때 사용할거임
    let user = await login("kim","1234");
    console.log('user님 환영');
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
}

exec();

//await를 이용해서 비동기처리들을 실행하려고 하는 것. 여기서 await를 지우면 값이 리턴되기전에 콘솔로그를 찍은거라 이상한 문구가 나옴
//await를 이용하면 리턴되는 것으르 기다려다가 실행함.
//비동기 코드를 동기식처럼 적고 동기식처럼 사용할 수 있음 (async/ await의 특징)


