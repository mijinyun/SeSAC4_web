function func1(callback) {
    callback();         //변수를 함수로 받은 거임
}

function func2(a){
    console.log("안녕");
}

func1(func2)       //객체니까 func2를 보낼 수 있음 , 그러면 변수로 함수를 받으니까 함수처럼 실행을 할 수 잇는 거임!


func1(function a(){        // (5~9라인을)한번에 적으면!
    console.log("안녕");   //여기서 a는 그냥 함수 이름 , 내용만 보내는 콜백함수니까 a라는 함수이름을 안적어줘도 됨.
})

