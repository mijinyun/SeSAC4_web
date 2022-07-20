// class Cat {
//     constructor (name) {        //constructor는 없어도 상관없지만 처음 클래스만들어서 속성을 받아야한다면 필요함
//         this.name = name ; //여기서 this는 클래스 자체를 의미함.
//     }
    
//         mew() {
//             console.log(this.name + "야옹");
//         }
// }

// var cat1 = new Cat("나비");
// var cat2 = new Cat("냥이");   //"냥이"라는 이름을 부여한 것. 그럼 틀안에 받는게 있어야하데 그게 바로 constructor

// console.log(cat1);    //cat1에는 Cat{} 이라는 함수가 들어있는것.
// cat1.mew();
// cat2.mew();





class Car {
    constructor(color) {
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }
    go() {
        console.log("전진");
    }
    back() {
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
}

module.exports = { Car };         //모듈로 내보내보기. 구조분해 이용하려고 { }