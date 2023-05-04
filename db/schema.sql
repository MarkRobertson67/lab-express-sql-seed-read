-- if our db already exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- Create our Database
CREATE DATABASE songs_dev;

-- Connect to the db
\c songs_dev;

-- Create a table for our songs
CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

// if anything gets changed in schema.sql or seed.sql, have to re-run these commands in the terminal
// npm run db:init
// npm run db:seed