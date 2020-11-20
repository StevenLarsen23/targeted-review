CREATE TABLE pun_users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200),
    password VARCHAR(250),
    profile_img VARCHAR(300)
);

CREATE TABLE puns (
    pun id SERIAL PRIMARY KEY,
    content VARCHAR(200),
    creator_id INT REFERENCES pun_users(user_id),
    rating INT
);

CREATE TABLE pun_comments (
    comment_id SERIAL PRIMARY KEY,
    content VARCHAR(1000),
    creator_id INT REFERENCES pun_users(user_id),
    pun_id INT REFERENCES puns(pun_id)
);
