"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatched1 = prompt("Один из последних просмотренных фильмов?", ""),
      lastRated1 = prompt("На сколько оцените его?", "");

const lastWatched2 = prompt("Один из последних просмотренных фильмов?", ""),
      lastRated2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastWatched1] = lastRated1;
personalMovieDB.movies[lastWatched2] = lastRated2;

console.log(personalMovieDB);