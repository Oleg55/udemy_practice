"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '100');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lustOfFilmsFirst = prompt('Один из последних просмотренных фильмов?', 'Титаник'),
			ratingOfFilmsFirst = +prompt('На сколько оценете его?', '100'),
			lustOfFilmsSecond = prompt('Один из последних просмотренных фильмов?', 'Титаник2'),
			ratingOfFilmsSecond = +prompt('На сколько оценете его?', '100');

personalMovieDB.movies[lustOfFilmsFirst] = ratingOfFilmsFirst;
personalMovieDB.movies[lustOfFilmsSecond] = ratingOfFilmsSecond;


console.log(personalMovieDB);