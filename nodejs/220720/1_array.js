let list = ['apple','banana'];

[item1, item2, item3] = list;

//item1 에는 apple , item2 는 banana , item3는 값이 없기 때문에 undefined

console.log("item1 : ", item1);
console.log("item2 : ", item2);
console.log("item3 : ", item3);

//undefinde 대신 기본값을 넣어주고, 기본값을 넣어줘도 구조분해된 값을 넣어주게 됨
//아래가 그 예시

[item1, item2 = "peach" , item3 = "melon"] =list;

console.log("item1 : ", item1);
console.log("item2 : ", item2);
console.log("item3 : ", item3);


let x = 1;
let y = 3;

[y,x] = [x,y];         // 한번에 값을 바꾸는 방법 (2015부터 생긴 문법)



// let temp = x;
// x = y;
// y = temp;         // 이방법의 경우 새로운 변수를 선언해서 바꿔야하므로 복잡함.

