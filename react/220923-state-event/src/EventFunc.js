import React, {useState} from 'react';

const EventFunc = () => {
    
    const [username,setUsername] = useState("");
    const [message,setMessage] = useState("");
    const onChangeUsername = (e) => setUsername(e.target.value); //input이 두개밖에 없어서 onchange로 해도 되지만, input이 많아질 경우에는 useState를 통해 사용하는 상태에 문자열이 아닌 개체를 넣는게 좋음?
    const onChangeMessage = (e) => setMessage(e.target.value);

    // const onChange = (e) => {
    //     const nextForm = {
    //         ...form, //기존 form내용을 복사한다는 뜻.
    //         [e.target.name]: e.target.value //원하는 값을 덮어씌움.
    //     };
    //     setForm(nextForm);
    // }


    const onClick = () => {
        alert(username + ": " + message);
        setUsername("");
        setMessage("");
    };
    const keyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    } 


    return (
        <div>
                <h1>리액트의 이벤트!!</h1>


                <input 
                    type = "text"
                    name = "username"
                    placeholder='사용자 이름'
                    value={username}
                    onChange={onChangeUsername}
                />

                <input 
                    type = "text"
                    name = "message"
                    placeholder = '이곳에 입력해보세요.'
                    value={message}
                    onChange={onChangeMessage}
                    onKeyPress = {keyPress}
                />

                <button onClick={onClick}>클릭</button>
            </div>
    )
}

export default EventFunc;