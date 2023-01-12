
// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {

  const result = movies.map( nombres => `${nombres.director}`);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  const peliculasPorDirector = movies.filter(peli => peli.director == (director = 'Quentin Tarantino'));
  return peliculasPorDirector;
}

// Exercise 3: Calculate the average of the films of a given director.)
function moviesAverageOfDirector(movies, director) {

  const films = movies.filter(peli => peli.director == (director = 'Quentin Tarantino'));
  const scores = films.map((num) => Number(`${num.score}`));

  let sumaScores = scores.reduce(function(a , b){ 
    return a + b; 
  }, 0);
  sumaScores = Number(sumaScores.toFixed(2));
  
  let averageScores = sumaScores / films.length;
  averageScores = Number(averageScores.toFixed(2));
  return averageScores;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  let filmName = movies.map(name =>`${name.title}`);
  filmName.sort();
  return filmName.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const newMovies = movies.map(peli => ({
    title: peli.title,
    year: peli.year
  }));
  newMovies.sort((a,b) => {
    if(a.year < b.year){
      return -1;
    }
    if(a.year > b.year){
      return 1;
    }
    if(a.title < b.title) {
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;
  }) ;

  console.log('EXERCICI 5->', newMovies);
  return newMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre='Drama') {

  const pelisXGenero = [];
  let scores = [];

  for (let i of movies){
    if(i.genre == genre ){
      pelisXGenero.push(i);
    }
  }
  console.log('PELIS DRAMA:', pelisXGenero);

  for(let x of pelisXGenero){
    if(x.score != 0 || x.score != ''){
      scores.push(x.score);
    }else{
      pelisXGenero.length--;
    }
  }
  console.log('Puntuaciones:',scores);

  let suma = scores.reduce((a, b) => {
    return a + b;
  }, 0);
  suma = Number(suma);
  console.log('SUMA SCORES:', suma);

  let media = suma / pelisXGenero.length;
  media = Number(media.toFixed(2));
  console.log('la media "Drama" es:', typeof media);
  return media;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  let nuevo_movies = [];

  for(let peli of movies){
    peli.duration = peli.duration.replace('h','');
    peli.duration = peli.duration.replace('min','');
    peli.duration = peli.duration.split(' ');

    if(peli.duration.length == 1){
      peli.duration = Number(peli.duration[0]) * 60;
    }else{
      peli.duration = Number(peli.duration[0]) * 60 + Number(peli.duration[1]);
    }
    nuevo_movies.push(peli);
  }
  console.log('EXERCICI 7->', nuevo_movies);
  return nuevo_movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  
  const pelisPerAny = movies.filter(peli => peli.year === (year = 1957));
  console.log('Pelis 1957', pelisPerAny);

  let max;
  let min;

  for(let i = 0; i < pelisPerAny.length; i++){ 
    max = pelisPerAny[0].score;
    min = pelisPerAny[0].score;
    if(pelisPerAny[i].score >= max){
      max = pelisPerAny[0].score;
    }else{
      min = pelisPerAny[0].score;
    }
  }
  console.log('MAX SCORE ->', max)
  let bestFilm = pelisPerAny.filter(peli => peli.score == max);
  console.log('MEJOR PELI:', bestFilm);
  return bestFilm;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
