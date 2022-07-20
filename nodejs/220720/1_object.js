let obj = {
    key1 : "value",
    key2 : "value2",
    key3 : function() {
        console.log("a");
    }
};

//obj객체 안에 key1, key2 변수

// const { key1, key2, key3, key4="a" } = obj;    //객체 구조를 분해한 것. //220718 url 했던 부분과 같은것 (같이 복습하기!))
// key3();
// console.log(key4); //변수에 undefined가 들어온다면 설정된 기본값이 들어올 수 있음



const { key1: key00, key2, key3, key4="a" } = obj;  //가져온 변수명을 바꿀수도 있음 key1은 key00으로
console.log( key00 ); //value라고 값이 출력됨. ( 왜죵? )


let obj2 = { a:1, b:2, c:3, d:4 };
const {a, b, ...rest } = obj2;    /// ... 이거는 나머지 애들을 다 가져오는것 = 전계 연산자

console.log( rest ); //그래서 남은 c랑 d만 출력이 되는 것.
