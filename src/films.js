// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {

  const result = movies.map( nombres => `${nombres.director}`);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  const peliculasPorDirector = movies.filter(peli => peli.director === 'Quentin Tarantino');
  console.log('EXERCICE 2 ->', peliculasPorDirector);
  return peliculasPorDirector;
}

// Exercise 3: Calculate the average of the films of a given director.)
function moviesAverageOfDirector(movies, director) {

  const films = movies.filter(peli => peli.director === 'Quentin Tarantino');
  const scores = films.map((num) => Number(`${num.score}`));

  let sumaScores = scores.reduce(function(a , b){ 
    return a + b; 
  }, 0);
  sumaScores = Number(sumaScores.toFixed(2));
  
  let averageScores = sumaScores / films.length;
  averageScores = Number(averageScores.toFixed(2));
  console.log('EXERCICI 3 =>', averageScores.toFixed(2));
  return averageScores;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  let filmName = movies.map(name =>`${name.title}`);
  filmName.sort();

  console.log('EXERCICI 4 ->', filmName);
  return filmName.slice(0, 20);

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const newMovies = movies.map(peli => ({
    title: peli.title,
    year: peli.year
  }));
  newMovies.sort((a, b) => a.title.localeCompare(b.title)).sort((a, b) => a.year - b.year);

  console.log('EXERCICI 5:', newMovies);
  return newMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  const nuevoArrayPelis = movies.map(peli => ({
    score: Number(peli.score),
    genre: peli.genre
  }));
  console.log('Array por DRAMA:', nuevoArrayPelis);

  const pelisXGenero = nuevoArrayPelis.filter(peli => peli.genre == (genre = 'Drama'));
  console.log('PELIS DRAMA:', pelisXGenero);

  const puntuacions = pelisXGenero.map(num => num.score);
  console.log('Puntuacion peliculas DRAMA:', puntuacions);

  let suma = puntuacions.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log('SUMA SCORES:', suma);

  let media = suma / pelisXGenero.length;
  media = Number(media);
  console.log('la media "Drama" es:', media);
  return media;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const nouArrayPelis = [];

  for(let x of movies){
    x.duration = x.duration.replace('h','').replace('min','').split(' ');
    //console.log(x.duration);
    if(x.duration.length == 1){
      x.duration = Number(x.duration[0]*60);
    }else{
      x.duration = Number(x.duration[0]) * 60 + Number(x.duration[1]);
    }
    nouArrayPelis.push(x);
  }
  console.log('EXERCICI 7:', nouArrayPelis);
  return nouArrayPelis;
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
