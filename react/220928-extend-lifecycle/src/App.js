
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

class Shape {
  constructor(w,h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
} 

class Square extends Shape {}

class Triangle extends Shape{

  constructor(x,y,name) {
    super(x,y); // 부모에 constructor가 있기 때문에 super로 써줘야함. 그래서 이내용에는 
    //constructor(w,h) {
    //   this.w = w;
    //   this.h = h;
    // } 이정보가 들어가 있는 것.
    this.name = name;
  }
  getArea() {
    return this.w * this.h/2;
  }
}

let shape1 = new Shape(5,4); 
//같은 클래스로 찍어냈지만 안에 들어가는 속성 요소들이 다르기때문에 다른것이다~
console.log(shape1.getArea());

let shape2 = new Shape(2,3);
console.log(shape2.getArea());

let shpae3 = new Square(4,8); 
console.log(shpae3.getArea());
//class Square extends Shape {} 안에 내용이 없어도 스퀘어가 쉐이프를 상속받았기 때문에 쉐이프 안에 컨스트럭터도 그대로 쓰는 것임.
//즉, class Square extends Shape {
//  constructor(w,h) {
//   this.w = w;
//   this.h = h;
// }
// getArea() {
//   return this.w * this.h;
// }
//} 이렇게 되어있는 거랑 똑같음!

let shape4 = new Triangle(5,6);
console.log(shape4.getArea());


// -----------------------------------실습62.---------------------------------------------------
class Student {
  constructor(name,school,age,num) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.num = num;
  }
  getInfo() {
    return `이름: ${this.name} 
나이: ${this.age}
대학교: ${this.school}대
학번: ${this.num}학번`
  }
}

class Kim extends Student{
  constructor(name,school,age,num) {
    super(name,school,age,num);
  }
  // getEX() { //이렇게 해도됨.
  //   return `안녕, 내 이름은 ${this.name}이고 나이는 ${this.age}살임. 내 학교는 ${this.school}대학교고 학번은 ${this.num}이야.`
  // }
}

class Lee extends Student{
  constructor(name,school,age,num) {
    super(name,school,age,num);
  }
//   getEX2() {  //이렇게 해도됨.
//     return `이름: ${this.name} 
// 나이: ${this.age}
// 대학교: ${this.school}대
// 학번: ${this.num}학번`
//   }

}

let user1 = new Kim ('김수진','새싹',21,21);
console.log(user1.getInfo());
let user2 = new Lee ('연지민','싹새',20,22);
console.log(user2.getInfo());

