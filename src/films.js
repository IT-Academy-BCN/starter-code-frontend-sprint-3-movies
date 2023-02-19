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
  return array.map( film => {
    const durationHoursMinutes = film.duration.split(" ");
    let durationMinutes = 0;
    if ( durationHoursMinutes.length === 2 ) {
      durationMinutes += Number(durationHoursMinutes[0] * 60);
    }
    durationMinutes += Number(durationHoursMinutes[durationHoursMinutes - 2]);
    film.duration = durationMinutes.toString();
    return {
      ...movie,
      duration: durationMinutes
    };
  });
}

// // Exercise 7: Modify the duration of movies to minutes
// function hoursToMinutes(array) {
//   const newArray = array.map( function(film) {
//     const deleteLetters = film.duration.replace("h","").replace("min","").replace(" ",",").split(",");
//     let durationMinutes = 0;
//     if ( deleteLetters.length > 1 ) {
//       const hours = Number(deleteLetters[0]);
//       const minutes = Number(deleteLetters[1]);
//       durationMinutes = hours * 60 + minutes;
//     }
//     else {
//       durationMinutes = Number(deleteLetters[0]);
//     } 
//     film.duration = durationMinutes.toString();
//   });

//   return newArray;
// }

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
