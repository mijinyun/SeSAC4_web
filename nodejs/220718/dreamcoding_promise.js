//1. producer
//reject는 보통 Error라는 object를 통해서 값을 전달함. 어떠 에러가 발생했는지 이유를 잘 작성해서 적어야함.
//promise에서는 executor라는 콜백함수를 전달해줘야하는데 이함수에서는 또 다른 두가지의 콜백함수를 받는다.
// 프로미스를 만드는 순간 안에 전달한 콜백함수가 바로 실행되기때문에 유의해야함!!!


const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(()=> {
       resolve('ellie');     //ellie라는 값을 전달해줌.
       //reject(new Error('no network'));
    },2000);
});

//2. consumer : then, catch, finally 를 통해서 값을 받아올 수 있음.
//value라는 파라미터는 프로미스가 정상적으로 잘 수행되어서 리졸브 콜백함수에서 전달된 ellie라는 값이 들어오게됨.

promise
    .then((value) => {
        console.log(value);
    })
    
    .catch(error => {
        console.log(error);
    })
    .finally(()=> {
        console.log("finally");
    });

//프로미스의 then을 호출하게 되면 똑같은 프로미스를 리턴하기때문에 그 리턴된 프로미스에 캐치를 다시 호출할 수가 있는것 = chaining
//finally는 성공과 실패에 상관없이 마지막에 무조건 호출되는 것!


//3. promise chaining
// 서버에서 숫자를 받아오는 새로운 프로미스
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1),1000);
});

//fetchNumber 라는 프로미스
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve,reject) => {
            setTimeout(() => resolve(num -1),1000);
        }); //다른 서버에 보내는 것
    })
    .then(num => console.log(num));

    //then에서는 값을 전달해도되고, 또 다른 프로미스를 전달해도 된당




//4. 체이닝했을 때 에러를 잘 처리 하는 방법
