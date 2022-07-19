class UserStorage {
    loginUser(id,password,onSuccess,onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder'&& password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

//사용자의 데이터를 서버에서 데이터를 받아오는 class
//onSuccess,onError 는 콜백함수를 호출해주는 것. if문이 true라면 
//onSuccess 호출에서 id를 전달해주게됨.
//여기서 받아온 id는 role을 알 수있게 해줌

    getRoles(user,onSuccess,onError) { 
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess ({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error ('no access'));
            }
    },1000);
    }
}
//사용자의 데이터를 받아서 역할들을 서버에서 정보를 받아오는 api



const Userstorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

//id,password를 받아옴
// prompt도 브라우저의 api!

UserStorage.loginUser ( 
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert('Hello ${userWithRole.name}, you have a ${userWithRole.role} role');
            },
            error => {}
        );
    },
    error => {console.log(error);}
);

//user => {} , error => {} 이런 구조로 보면 좀 더 이해하기 쉬울듯!