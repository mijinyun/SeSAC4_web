const { Car } =require('./2_class.js');

console.log( Car );

var car1 = new Car("yellow") ;          //"red" 라는 car를 만든거임
console.log( car1.returnColor());
console.log( car1.isDoor );             // 이렇게 모듈로 클래스를 내보낼 수 있다~!

