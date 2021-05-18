"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '100');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lustOfFilmsFirst, ratingOfFilmsFirst, lustOfFilmsSecond, ratingOfFilmsSecond;

// for (let i = 0; i < 2; i++) {

// }

do{
	lustOfFilmsFirst = prompt('Один из последних просмотренных фильмов?', '');
	if (lustOfFilmsFirst == ''){
		alert('Введите значение');
	}
}
while(lustOfFilmsFirst == '');


do{
	ratingOfFilmsFirst = +prompt('На сколько оценете его?', '');
	if (ratingOfFilmsFirst == ''){
		alert('Введите значение');
	}
}
while(ratingOfFilmsFirst == '');


do{
	lustOfFilmsSecond = prompt('Один из последних просмотренных фильмов?', '');
	if (lustOfFilmsSecond == ''){
		alert('Введите значение');
	}
}
while(lustOfFilmsSecond == '');


do{
	ratingOfFilmsSecond = +prompt('На сколько оценете его?', '');
	if (ratingOfFilmsSecond == ''){
		alert('Введите значение');
	}
}
while(ratingOfFilmsSecond == '');




personalMovieDB.movies[lustOfFilmsFirst] = ratingOfFilmsFirst;
personalMovieDB.movies[lustOfFilmsSecond] = ratingOfFilmsSecond;


console.log(personalMovieDB);