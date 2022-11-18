package sesac.spring.study.sesacProject.repository;

//인터페이스로 만들면 구조화하기 좋아진다.

import sesac.spring.study.sesacProject.domain.Board;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
//arrayList는 클래스로 List는 인터페이스로 되어있음.list가 arrayLIst보다 더 큰개념

public interface BoardRepository {
    Board save(Board board);
    // save : 함수명, 파라미터? = board , 리턴하는게 board?

    //Optional 자바 8버전부터 나온것 = 보드가 null이여도 optional로 감싸서 들어오는 것. null일때도 보드처럼 보내려고 optional 써준 것.
    Optional<Board> findById(int id);
    Optional<Board> findByName(String name);

    List<Board> findAll();

    //List<> list = new ArrayList() // 이렇게 사용할 수 있음
}
