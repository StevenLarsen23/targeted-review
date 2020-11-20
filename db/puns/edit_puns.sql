UPDATE puns
SET content = $2, rating = 5
WHERE pun_id = $1;

SELECT * FROM puns;