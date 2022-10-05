import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
    const { id } = useParams(); //이름 그대로 쓸거면 이렇게 해도됨.
    // 이름을 다르게 해서 받고 싶다면, const id2 = useParams().id;
    const location = useLocation();
    // const {useSearchParams} = useSearchParams(); 
    const [searchParams,setSearchParams] = useSearchParams();//받아온값. setSearchParams내가 뭔가 변경할때의 함수
    
    const navigate = useNavigate(); // navigate는 함수로 사용할 수 있음.
    
    
    return (
      <div>
        <h1>{id}번 Product</h1>

        <ul>
            <li>hash: {location.hash}</li>
            <li>pathname: {location.pathname}</li>
            <li>search: {location.search}</li>
            <li>state: {location.state}</li>
            <li>key: {location.key}</li>
        </ul>

        <ul>
            <li>keyWords : {searchParams}</li>
            <li>keyWord : {searchParams.get("search")}</li>
        </ul>
        
        <ul>
            <li><button onClick={() =>  navigate(-2)}>Go 2 pages back</button></li>
            <li><button onClick={() =>  navigate(-1)}>Go back</button></li>
            <li><button onClick={() =>  navigate(1)}>Go forward</button></li>
            <li><button onClick={() =>  navigate(2)}>Go 2 pages forward</button></li>
            <li><button onClick={() =>  navigate('/')}>Go Root</button></li>
            <li><button onClick={() =>  navigate('/',{state:'aa'})}>Go Root2</button></li>
        </ul>
      </div>
    );
  }
  
  export default Product;