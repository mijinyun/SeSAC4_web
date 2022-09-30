import style from './6CSSModule.module.css';

const CSSModule = () => {
    return(
        // <div className={style.box1}>
        <div className={`${style.box1} ${style.center}`}>
        {/* 스타일 클래스를 두가지이상 설정하는 방법
        1.
        <div className={`${style.box1} ${style.center}`}> 이렇게 사용하거나,
        
        2.
        classnames 라이브러리설치 (npm i classnames)
        import Names from 'classnames';
        <div className = {Names{style.box1, style.center}} />
        */}
            <h2>Css module</h2>
        </div>
    )
}
export default CSSModule;