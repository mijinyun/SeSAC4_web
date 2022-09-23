

function EventEx() {
    function clickEvent(e) {
        console.log(e);
    }
    function aClick(e) {
        e.preventDefault();//윈도우의 기본 동작을 막아주는것
        console.log("aClick");
        console.log(e);
    }

    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default EventEx;