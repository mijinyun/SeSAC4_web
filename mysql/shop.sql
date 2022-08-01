use sesac;
/* 회원정보 */
CREATE TABLE mall (
	id varchar(10) not null primary key,
    name varchar(5) not null,
    pw varchar(20) not null,
    gender ENUM('F','M','') default '',
    birth DATE,
    address mediumtext,
    sign DATE not null,
    membership ENUM('VVIP','VIP','GOLD','SILVER') default 'SILVER'
);

INSERT INTO mall (id,name,pw,gender,birthday,address,sign,membership) VALUES ('mjzzang','윤미진','1234','F',null,null,'2022-08-01','VVIP');

CREATE TABLE center (
	

);
/* 상품정보 */



SELECT * FROM mall;
DROP TABLE mall;