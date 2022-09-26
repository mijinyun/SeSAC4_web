import React, {Component} from 'react';

class Example_Class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num : 1, 
            name : '미진', 
            text : 'hello'
        }

        //내가 검색한 결과를 담고 있는 state
        const [findContent,setFindContent] =useState([]);
        const [findText, setFindText] = useState('');

        //작성등록 버튼
        onClickForm = () => {
            const { num, name, text } = this.state;

            // let form = document.getE
            this.setState({
                num : Num + 1,
                name : inputName,
                text : inputText
            })
        }

        // 검색버튼
        onFindText = () => {
            let result = inputs.filter((value) => {
                console.log(value.name);
                return value.name.includes(findText)
            });
        console.log(result);
        setFindContent(result);
        setFindText('');
        }

        //전체 검색 버튼
        onFindAll = () => {
            let result2 = inputs.filter((value) => {
                console.log(value.name);
                return value.name.includes(findText)
            });
        console.log(result2);
        setFindContent(result2);
        setFindText('');
        }

        onChangeName = (e) => setInputName(e.target.value);
        onChangeText = (e) => setInputText(e.target.value);
        onChangeSearch =(e) => setFindText(e.target.value);

        //작성했을 때 추가되는 부분
        const userList = inputs.map((user,index) => <tr key={index}><td>{user.num}</td><td>{user.name}</td><td>{user.text}</td></tr>)

        // 검색한 것들이 나타나는 부분
        const txtList = findContent.map((txt,index) => <tr key={index}><td>{txt.num}</td><td>{txt.name}</td><td>{txt.text}</td></tr>)
    }

    
    render() {
        return(
            <div>
                <form style={{width :'700px'}}>
                    <fieldset>
                        작성자 : <input type = 'text' placeholder='작성자' name='username' value={inputName} onChange={onChangeName}></input>
                        제목 : <input type='text' name='userText' value={inputText} onChange={this.onChangeText}></input>
                        <button type='button' onClick={this.onClickForm}>작성</button>
                    </fieldset>
                </form><br />
                
                <select>
                    <option>작성자</option>
                </select>
                
                <input type='text' placeholder='검색어' value={findText} onChange={this.onChangeSearch}></input>
                <button onClick={this.onFindText}>검색</button>
                <button onClick={this.onFindAll}>전체</button><br /><br />

                
                <table border='1' cellPadding='10' cellSpacing='0' style={{width :'500px'}}>
                    <thead>
                    <tr style={{textAlign:'center',fontWeight:'bold'}}>
                        <td>번호</td>
                        <td>작성자</td>
                        <td>제목</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.userList}
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
                            {this.txtList}
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
}

export default Example_Class;