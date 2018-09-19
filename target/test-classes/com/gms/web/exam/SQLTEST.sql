CREATE TABLE MEMBER(
  userid VARCHAR(20)  PRIMARY KEY,
  ssn VARCHAR(20),
  name VARCHAR(20),
  roll VARCHAR(20),
  teamid VARCHAR(20),
  password VARCHAR(20),
  age VARCHAR(20),
  gender VARCHAR(20),
  subject VARCHAR(20),
  email VARCHAR(30),
  profile VARCHAR(20),
  phone VARCHAR(20)
);

CREATE TABLE IMAGE(
IMG_SEQ DECIMAL PRIMARY KEY,
IMG_NAME VARCHAR2(20),
EXTENSION VARCHAR2(10),
USERID VARCHAR2(20),
CONSTRAINT FK_IMAGE_MEMBER
FOREIGN KEY(USERID)
REFERENCES MEMBER (USERID)
);

insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES ('A1','nolja','형준',34, 'leader','1', '850417-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('A2','nolja','세인',35, 'front','1', '840221-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('A3','nolja','희태',21, 'back','1', '980505-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('A4','nolja','상훈',29, 'android','1', '900925-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('A5','nolja','태형',25, 'back','1', '940822-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('B1','jieunHouse','혜리',26, 'leader','1', '930718-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('B2','jieunHouse','지은',26, 'front','1', '930818-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('B3','jieunHouse','준',27, 'back','1', '920714-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('B4','jieunHouse','재경',30, 'android','1', '890129-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('B5','jieunHouse','단아',26, 'back','1', '930116-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('C1','codingZzang','최정훈',32, 'leader','1', '960903-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('C2','codingZzang','윤호',31, 'front','1', '880931-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('C3','codingZzang','가은',29, 'back','1', '900801-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('C4','codingZzang','정훈',23, 'android','1', '960526-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('C5','codingZzang','승태',30, 'back','1', '890727-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('D1','turtleKing','승호',27, 'leader','1', '920721-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('D2','turtleKing','소진',26, 'back','1', '930312-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('D3','turtleKing','이슬',29, 'front','1', '901028-2','woman');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('D4','turtleKing','진태',26, 'back','1', '930408-1','man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
VALUES('D5','turtleKing','누리',30, 'android','1', '891107-2');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A6', 'nolja', '진호', '30', 'front', '1', '890504-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A7', 'nolja', '경민', '31', 'back', '1', '880611-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A8', 'nolja', '재원', '32', 'android', '1', '870828-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A9', 'nolja', '건우', '31', 'front', '1', '881212-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A10', 'nolja', '재환', '32', 'back', '1', '871010-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A11', 'nolja', '의지', '33', 'android', '1', '860325-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('A12', 'nolja', '현승', '34', 'android', '1', '850429-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B6', 'jieunHouse', '김진호', '30', 'front', '1', '890504-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B7', 'jieunHouse', '김경민', '31', 'back', '1', '880611-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B8', 'jieunHouse', '김재원', '32', 'android', '1', '870828-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B9', 'jieunHouse', '김건우', '31', 'front', '1', '881212-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B10', 'jieunHouse', '김재환', '32', 'back', '1', '871010-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B11', 'jieunHouse', '김의지', '33', 'android', '1', '860325-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('B12', 'jieunHouse', '김현승', '34', 'android', '1', '850429-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C6', 'codingZzang', '이진호', '30', 'front', '1', '890504-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C7', 'codingZzang', '이경민', '31', 'back', '1', '880611-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C8', 'codingZzang', '이재원', '32', 'android', '1', '870828-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C9', 'codingZzang', '이건우', '31', 'front', '1', '881212-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C10', 'codingZzang', '이재환', '32', 'back', '1', '871010-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C11', 'codingZzang', '이의지', '33', 'android', '1', '860325-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('C12', 'codingZzang', '이현승', '34', 'android', '1', '850429-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D6', 'turtleKing', '박진호', '30', 'front', '1', '890504-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D7', 'turtleKing', '박경민', '31', 'back', '1', '880611-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D8', 'turtleKing', '박재원', '32', 'android', '1', '870828-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D9', 'turtleKing', '박건우', '31', 'front', '1', '881212-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D10', 'turtleKing', '박재환', '32', 'back', '1', '871010-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D11', 'turtleKing', '박의지', '33', 'android', '1', '860325-1', 'man');
insert into member (userid, teamid, name, age, roll, password, ssn, gender)
values('D12', 'turtleKing', '박현승', '34', 'android', '1', '850429-1', 'man');