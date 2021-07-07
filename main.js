"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    if (a != '' && a != null && a.length <= 50 && b != null && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let j = 0;
// while (j < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", "");
//     const b = prompt("На сколько оцените его?", "");
//     if (a != '' && a != null && a.length <= 50 && b != null && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         j--;
//     }
//     j++;
// }

// let j = 0;
// do {
//     const a = prompt("Один из последних просмотренных фильмов?", "");
//     const b = prompt("На сколько оцените его?", "");
//     if (a != '' && a != null && a.length <= 50 && b != null && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         j--;
//     }
//     j++;
// } while (j < 2);

console.log(personalMovieDB);