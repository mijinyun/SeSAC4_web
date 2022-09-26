import React, {useState} from 'react';

    const Example2 = () => {
        
        const [inputs, setInputs] = useState([
            {num : 1, name : '미진', text : 'hello'}
        ]);

        const [Num , setNum] = useState(1);
        const [inputName , setInputName] = useState('');
        const [inputText , setInputText] = useState('');

        //내가 검색한 결과를 담고 있는 state
        const [findContent,setFindContent] =useState([]);
        const [findText, setFindText] = useState('');

        //작성등록 버튼
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

        // 검색버튼
        const onFindText = () => {
            let result = inputs.filter((value) => {
                console.log(value.name);
                return value.name.includes(findText)
            });
        console.log(result);
        setFindContent(result);
        setFindText('');
        }

        //전체 검색 버튼
        const onFindAll = () => {
            let result2 = inputs.filter((value) => {
                console.log(value.name);
                return value.name.includes(findText)
            });
        console.log(result2);
        setFindContent(result2);
        setFindText('');
        }

        const onChangeName = (e) => setInputName(e.target.value);
        const onChangeText = (e) => setInputText(e.target.value);
        const onChangeSearch =(e) => setFindText(e.target.value);

        //작성했을 때 추가되는 부분
        const userList = inputs.map((user,index) => <tr key={index}><td>{user.num}</td><td>{user.name}</td><td>{user.text}</td></tr>)

        // 검색한 것들이 나타나는 부분
        const txtList = findContent.map((txt,index) => <tr key={index}><td>{txt.num}</td><td>{txt.name}</td><td>{txt.text}</td></tr>)

        
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
                
                <input type='text' placeholder='검색어' value={findText} onChange={onChangeSearch}></input>
                <button onClick={onFindText}>검색</button>
                <button onClick={onFindAll}>전체</button><br /><br />

                
                <table border='1' cellPadding='10' cellSpacing='0' style={{width :'500px'}}>
                    <thead>
                    <tr style={{textAlign:'center',fontWeight:'bold'}}>
                        <td>번호</td>
                        <td>작성자</td>
                        <td>제목</td>
                    </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>

                {
                    findContent.length > 0 ? (
                <div>
                    <h4>검색 결과</h4>
                    <table border='1' cellPadding='10' cellSpacing='0' style={{width :'500px'}}>
                    <thead>
                        <tr style={{textAlign:'center',fontWeight:'bold'}}>
                            <td>번호</td>
                            <td>작성자</td>
                            <td>제목</td>
                        </tr>
                        </thead>
                        <tbody>
                            {txtList}
                        </tbody>
                    </table>
                </div>
                    ) : (
                        <div>
                            <h4>검색 결과가 없습니다.</h4>
                        </div>
                    )}
            </div>
        )
}

export default Example2;