package sesac.spring.study.sesacProject.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class FormDTO {
    // 이름, 나이, 성별, 생년월일, 취미
    private String name;
    private int age;
    private String gender;
    private int year;
    private int month;
    private int day;
    private String hobby;

}
