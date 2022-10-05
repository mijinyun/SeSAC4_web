import { Link, useLocation } from 'react-router-dom';

function Main() {

    const location = useLocation();
    return (
      <div>
        <h1>Main state = {location.state}</h1> 

        <Link to="/product/1">1번 상품</Link>
        <br />
        <Link to="/product/2">2번 상품</Link>
        <br />
        <Link to="/product/1?search=productName&q=demo#test">a번 상품</Link>
        {/* 위코드를 사용하려면 uselocation을 해줘야함.  */}
      </div>
    );
  }
  
  export default Main;