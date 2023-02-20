// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map( (film) => film.director );
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesDirector = array.filter( (film) => film.director === director );
  console.log("EXERCICE 2 ->", moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director, genre) {
  let selectedMovies = array;

  if ( director ) {
    selectedMovies = getMoviesFromDirector(array, director);
  }

  if ( genre ) {
    selectedMovies = array.filter( (film) => film.genre.find( (element) => element === genre));
  }
  
  const average = selectedMovies.reduce((sum, film) => sum + film.score, 0) / selectedMovies.filter( (film) => film.score !== '' ).length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const title20Films = [...array]
  .map(film => film.title)
  .sort()
  .slice(0, 20);
  console.log("EXERCICE 4 ->", title20Films);
  return title20Films;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const moviesByYear = [...array].sort((a, b) => {
    if ( a.year === b.year ) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
    });
  console.log("EXERCICE 5 ->", moviesByYear);
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const averageByGenre = moviesAverageOfDirector(array, '', genre)
  console.log("EXERCICE 6 ->", averageByGenre);
  return averageByGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const moviesDurationMinutes = array.map( film => {
    const durationParts = film.duration.split(' ');
    let totalMinutes = 0;
    for ( const part of durationParts ) {
      if ( part.includes('h') ) {
        totalMinutes += parseInt(part) * 60;
      } else if ( part.includes('min') ) {
        totalMinutes += parseInt(part);
      }
    }
    return {
      ...film,
      duration: totalMinutes
    };
  } );
  return moviesDurationMinutes;
}



// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
