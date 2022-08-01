CREATE DATABASE sesac;
USE sesac;
CREATE TABLE user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hong1234','8o4bkg','홍길동','M','1990-01-31','33');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('sexysung','87awjkdf','성춘향','F','1992-03-31','31');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('power70','qxur8sda','변사또','M','1970-05-02','53');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hanjo','jk48fn4','한조','M','1984-10-18','39');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('widowmaker','38ewifh3','위도우','F','1976-06-27','47');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('dvadva','k3f3ah','송하나','F','2001-06-03','22');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('jungkrat','4ifha7f','정크랫','M','1999-11-11','24');
      
      SELECT * FROM user;
      SELECT * FROM user ORDER BY birthday ASC;
      SELECT * FROM user WHERE gender='F' ORDER BY name DESC;
      SELECT id,name FROM user WHERE birthday BETWEEN "1990-01-01" AND "1999-12-31";
      SELECT * FROM user WHERE birthday LIKE "%06%" ORDER BY birthday ASC;
      SELECT * FROM user WHERE gender="M" AND birthday BETWEEN "1970-01-01" AND "1979-12-31";
      SELECT * FROM user ORDER BY age ASC LIMIT 3;
      SELECT * FROM user WHERE age BETWEEN "25" AND "50";
      UPDATE user SET pw="12345678" WHERE id="hong1234";
      DELETE FROM user WHERE id="jungkrat";