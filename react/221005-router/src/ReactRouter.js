import { BrowserRouter ,  Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Product from './Product';


const ReactRouter = () => {
    return (
        <div>

            <BrowserRouter>
                <Link to='/'>페이지</Link>
                <Routes>
                    {/* 여러개의 Route를 묶어주는것 */}
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/product' element={<Product />}></Route>
                    <Route path='/product/:id' element={<Product />}></Route>
                    {/* 여기서 :id를 없애면 다른경로로 인식해서 element도 나오지않음. */}
                </Routes>
            </BrowserRouter>
            {/*  URl을 바꾸면 이안에 내용만 바뀌게 되는것.  => 바꾸고싶은 최상단만 해주면됨..?뭔소리야*/}
        </div>
    );
}

export default ReactRouter;