import React, {useState} from 'react';

const Event = () => {

    const [userNames, setNames] = useState([
        {id : 1 , name : '코디', email : 'codi@gmail.com'},
        {id : 2 , name : '윤소희', email : 'yoonsohee@gmail.com'}
    ]);

    const [inputName,setInputName] = useState('');
    const [inputMail,setInputMail] = useState('');
    const [ nextId, setNextId ] = useState(3);

    const onChangeName = (e) => setInputName(e.target.value);
    const onChangeMail = (e) => setInputMail(e.target.value);

    const onClick = () => {
        const nextNames = userNames.concat({
            id : nextId,
            name: inputName,
            email : inputMail,
        });

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputName('');
        setInputMail('');
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    } 

    const onRemove = id => {
        const nextNames = userNames.filter( user => user.id !== id );
        setNames(nextNames);
    }

    const userNamesList = userNames.map(user => <li key={user.id} onDoubleClick ={() => onRemove(user.id)}>{user.name} : {user.email}</li>);


    return (
        <div>
            <input type= 'text' name = "username"
                    placeholder='이름' value={inputName} onChange={onChangeName}></input>
            <input type='email' name = "usermail"
                    placeholder='이메일' value={inputMail} onChange={onChangeMail} onKeyPress = {keyPress}></input>
            <button onClick={onClick}>등록</button>
            
            <h3>
                <ul style={{listStyle : 'none'}}>
                    {userNamesList}
                </ul>
            </h3>
        </div>
    )
}

export default Event;