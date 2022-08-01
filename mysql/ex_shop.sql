CREATE DATABASE sesac;
USE sesac;

/* 회원정보 */
CREATE TABLE user (
	user_id varchar(10) not null primary key,
    user_name varchar(5) not null,
    user_pw varchar(15) not null,
    user_gender ENUM('F','M','') default '',
    user_birth date not null,
    user_address text,
    user_cellphone int(11) not null,
    user_register date not null,
    user_membership ENUM('SILVER','GOLD','VIP','VVIP') default 'SILVER'
);

/* 품목정보 */
CREATE TABLE item (
	item_id varchar(30) primary key,
    item_name varchar(20),
    item_type varchar(10),
    item_qty int(3) not null,
    item_price int not null,
    item_mem_coupon ENUM('','0.05','0.1') default '' 
);

/* 주문정보 */
/* 주문자 정보 및 아이템 주문 수량,가격,결제타입,멤버쉽 쿠폰 적용,주문날짜,전달메세지*/
CREATE TABLE user_order (
	order_id varchar(30) not null primary key,
	user_id varchar(10) not null,
    item_id varchar(30) not null,
    order_number int not null,
    item_price int not null,
    order_price int not null,
    order_payment_type varchar(15) not null,
    user_membership ENUM('SILVER','GOLD','VIP','VVIP') default 'SILVER',
    item_mem_coupon ENUM('','0.05','0.1') default '',
    order_date datetime not null,
    order_message TINYTEXT,
    foreign key(user_id) REFERENCES user (user_id),
    foreign key(item_id) REFERENCES item (item_id)
    
);

/* 배송정보 */
/* 주문자정보, 배송회사, 배송 송장번호, 배송비, 배송날짜, 보낸(쇼핑몰)이름 */
CREATE TABLE delivery (
	user_name varchar(5) not null,
    user_address text not null,
    user_cellphone int(11) not null,
    delivery_id varchar(50) not null primary key,
    delivery_company varchar(10) not null,
    delivery_invoice_number varchar(20) not null,
    delivery_fee int not null,
    delivery_date datetime not null,
    sender_name varchar(10) not null
);


desc user;