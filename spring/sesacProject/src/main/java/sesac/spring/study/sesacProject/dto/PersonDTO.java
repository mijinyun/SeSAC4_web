package sesac.spring.study.sesacProject.dto;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter //롬복을 이용해서 사용하면 알아서 아래 4줄 코드처럼 getter, setter를 설정해줌.
// 만약 Getter, Setter를 적는 위치에 따라 적용되는 것이 달라짐. 만약 private Stirng name위에 쓰면 name에만,
// class위에 쓰면 클래스에 적용되는 것.

public class PersonDTO {
        private String name;
        private int age;
        private String gender;


//        public String getName() { return name; }
//        public  void setName(String name) { this.name = name;}
//
//        public int getAge() { return age; }
//        public  void setAge(int age) { this.age = age;}

}
