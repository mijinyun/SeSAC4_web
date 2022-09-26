

function EventEx() {
    function clickEvent(e) {
        console.log(e);

        //220926 map 수업예시
        let list = ['a','b','c','d'];
        let newList = list.map((value,index,arr) => {
            console.log(value);
            console.log(index);
            console.log(arr);
            return value + index;
        });
        console.log(newList);
        //여기까지.
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