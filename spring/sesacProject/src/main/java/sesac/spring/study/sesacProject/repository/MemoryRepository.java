package sesac.spring.study.sesacProject.repository;

import sesac.spring.study.sesacProject.domain.Board;

import java.util.*;

public class MemoryRepository implements BoardRepository{
    //자바는 맵 선정할때 타입을 다 지정해놔야함.
    private static Map<Integer, Board> store = new HashMap<>();
    //{ 1: [Object object]}
    // Map <타입, 객체>
    //{ ke: value} // key가 Integer타입, value가 Board 타입이라는 뜻..........

    private static int id = 0;

    // 방명록 저장
    @Override
    public Board save(Board board) {
        // board 값은 이름과 내용이 적혀 왔다.
        //추가하는 코드
        board.setID((++id)); // db연결한게아니여서 autoIncrement를 수동으로 해준것.
        store.put(board.getID(),board); //맵에 키값쌍을 하나 넣어준 것.
        return board;
        // obj = {}
        // obj['Stirng'] = "abc"; 요거처럼 put사용
        // put(키, 값);

    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream() //store에서 board객체드(value)를 하나씩 찾아볼거다.
                .filter(board -> board.getName().equals(name)) // board의 이름이 내가 전달받은 이름과 같은 것을 filter
                .findAny();//처음부터 끝까지 쭉보다가 원하는걸 찾으면 그것을 선택하는 것 //stream에서 가장 먼저 탐색되는 요소를 return
    }



    // 방명록 저장된걸 가져오는 부분
    @Override
    public List<Board> findAll() {
        //찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
        // ArrayList<integer> inList = new ArrayList<Integer>(Arrays.asList(10,20,30));

        //Map(store)에서 value를 (= 값들을_ 모두 찾고 ArrayList로 만든다....
        //만약 키를 가져오게되면
        // ArrayList<Integer> ~ = new ArrayList<>(store.keys());
        return result;
    }
}
