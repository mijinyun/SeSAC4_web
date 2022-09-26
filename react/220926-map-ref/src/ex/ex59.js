import React, {useState} from 'react';

    const Example1 = () => {
        
        const [inputs, setInputs] = useState([
            {num : 1, name : '미진', text : 'hello'}
        ]);

        const [Num , setNum] = useState(1);
        const [inputName , setInputName] = useState('');
        const [inputText , setInputText] = useState('');

        const onClickForm = () => {
            const users = inputs.concat({
                num : Num+1,
                name : inputName,
                text : inputText
            });
            setNum(Num+1);
            setInputs(users);
            setInputName('');
            setInputText('');
        }

        const onChangeName = (e) => setInputName(e.target.value);
        const onChangeText = (e) => setInputText(e.target.value);

        const userList = inputs.map((user,index) => <tr key={index}><td>{user.num}</td><td>{user.name}</td><td>{user.text}</td></tr>)
        
        return(
            <div>
                <form style={{width :'700px'}}>
                    <fieldset>
                        작성자 : <input type = 'text' placeholder='작성자' name='username' value={inputName} onChange={onChangeName}></input>
                        제목 : <input type='text' name='userText' value={inputText} onChange={onChangeText}></input>
                        <button type='button' onClick={onClickForm}>작성</button>
                    </fieldset>
                </form><br />
                
                <select>
                    <option>작성자</option>
                </select>
                
                <input type='text' placeholder='검색어'></input>
                <button>검색</button><br /><br />

                
                <table border='1' cellPadding='10' cellSpacing='0' style={{width :'500px'}}>
                    <thead>
                    <tr style={{textAlign:'center',fontWeight:'bold'}}>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                    </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
            </div>
        )
}

export default Example1;