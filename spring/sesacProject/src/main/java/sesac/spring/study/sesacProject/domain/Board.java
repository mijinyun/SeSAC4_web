package sesac.spring.study.sesacProject.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Board {
    private int ID;
    private String name;
    private String content;
}
