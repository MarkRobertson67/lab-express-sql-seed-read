-- if our db already exists, drop it
DROP DATABASE IF EXISTS tuner;

-- Create our Database
CREATE DATABASE tuner;

-- Connect to the db
\c tuner;

-- Create a table for our songs
CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

