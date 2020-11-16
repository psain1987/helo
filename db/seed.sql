CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INT REFERENCES users (id)
);

INSERT INTO users  (username, password)
VALUES
('username1', 'password1'),
('username2', 'password2'),
('username3', 'password3');

INSERT INTO posts (title, img, content, author_id)
VALUES
('title1', 'img1', 'content1', 'author_id1'),
('title2', 'img2', 'content2', 'author_id2'),
('title3', 'img3', 'content3', 'author_id3');
