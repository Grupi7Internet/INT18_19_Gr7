use register;

CREATE TABLE `admins` (
  `username` varchar(30) NOT NULL,
  `passHash` varchar(255) DEFAULT NULL,
  `token` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`username`)
);

CREATE TABLE `Books` (
  `bookId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `author` varchar(30) DEFAULT NULL,
  `source` varchar(100) DEFAULT NULL,
  `cover` varchar(30) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `pages` varchar(30) DEFAULT NULL,
  `rating` double DEFAULT NULL,
  PRIMARY KEY (`bookId`)
);

CREATE TABLE `Chat` (
  `chatId` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(400) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`chatId`),
  FOREIGN KEY (`email`) REFERENCES `infos` (`email`)
);

CREATE TABLE `gadgets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(30) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `infos` (
  `name` varchar(30) DEFAULT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `brth` date DEFAULT NULL,
  `salt` varchar(100) DEFAULT NULL,
  `pswhash` varchar(100) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `confirmed` varchar(40) DEFAULT NULL,
  `token` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`email`)
);

CREATE TABLE `Videos` (
  `VideoId` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `author` varchar(30) DEFAULT NULL,
  `source` varchar(100) DEFAULT NULL,
  `cover` varchar(200) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `length` varchar(30) DEFAULT NULL,
  `rating` double DEFAULT NULL,
  PRIMARY KEY (`VideoId`),
  foreign key (cid) REFERENCES courses (cid) on delete cascade
);

CREATE TABLE courses (
	cid int PRIMARY KEY AUTO_INCREMENT,
    ctitle varchar(30),
    cProfesor varchar(30)
);
