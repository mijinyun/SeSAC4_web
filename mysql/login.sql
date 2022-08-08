use sesac;
CREATE TABLE loginUser (
	id varchar(8) not null primary key,
    name mediumtext not null,
    password int not null
);

select * from loginUser;
INSERT INTO loginUser (id,name,password) VALUES ('mijin1','윤미진','1111');
INSERT INTO loginUser (id,name,password) VALUES ('mijin2','미진','2222');
INSERT INTO loginUser (id,name,password) VALUES ('mijin3','미진윤','1234');

DROP TABLE loginuser;