"use strict";

let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


	
	do{
		personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

		if (personalMovieDB.count == '' || personalMovieDB.count == null){
			alert ('Введите число фильмов');
		}
		
	}
	while(personalMovieDB.count == '');
	
		if ( personalMovieDB.count < 10 ){

			alert('Просмотренно довольно мало фильмов');
		
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		
			alert('Вы классический зритель');
		
		} else if (personalMovieDB.count >= 30) {
		
			alert('Вы киноман');
		
		} else {
		
			alert('Произошла ошибка');
		
		}

	let lustOfFilmsFirst, ratingOfFilmsFirst;

	for (let i = 0; i < 2; i++) {
		do{
			lustOfFilmsFirst = prompt('Один из последних просмотренных фильмов?', '');
			// console.log(lustOfFilmsFirst.length);
			if (lustOfFilmsFirst == '' || lustOfFilmsFirst == null){
				alert('Введите значение');
			} else if(lustOfFilmsFirst.length > 50) {
				alert('Слишком длинное название');
			}
		}
		while(lustOfFilmsFirst == '' || lustOfFilmsFirst == null || lustOfFilmsFirst.length > 50);
	
		do{
			ratingOfFilmsFirst = +prompt('На сколько оценете его?', '');
			if (ratingOfFilmsFirst == ''){
				alert('Введите значение');
			}
		}
		while(ratingOfFilmsFirst == '' || ratingOfFilmsFirst == null || ratingOfFilmsFirst == null);
	
		personalMovieDB.movies[lustOfFilmsFirst] = ratingOfFilmsFirst;
	
	}










console.log(personalMovieDB);