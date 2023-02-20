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
  let minutes = [];
  const convertToMinutes = hours => hours * 60;
  let filmDurations = array.map( film => film.duration.split('h'));

  filmDurations.forEach( film => {
    let newDuration = {};
    if( film.length > 1 && film[1].includes('min') ) {
      newDuration.duration = convertToMinutes(Number(film[0])) + Number(film[1].replace('min', ''));
    } else if ( film[0].includes('min') ) {
      newDuration.duration = Number(film[0].replace('min', ''));
    } else {
      newDuration.duration = convertToMinutes(Number(film[0])); 
    }
    minutes.push(newDuration);
  });
  
  return minutes;
}


//function hoursToMinutes(array) {
//   return array.map( film => {
//     const durationHoursMinutes = film.duration.split(" ");
//     let durationMinutes = 0;
//     if ( durationHoursMinutes.length === 2 ) {
//       durationMinutes += Number(durationHoursMinutes[0] * 60);
//     }
//     durationMinutes += Number(durationHoursMinutes[durationHoursMinutes - 2]);
//     film.duration = durationMinutes.toString();
//     return {
//       ...movie,
//       duration: durationMinutes
//     };
//   });
// }

// Exercise 7: Modify the duration of movies to minutes
//   const newDuration = array.map( function(film) {
//     let matchesNumbers = /(\d+)/g;
//     let result = film.duration.match(matchesNumbers);
//     let durationMinutes = result.length === 2 ? 
//       (parseInt(result[0]) * 60) + parseInt(result[1]) :
//       (parseInt(result[0]) * 60);
    
//     result = durationMinutes;
//   });

//   return newDuration;
// }

// function hoursToMinutes(array) {
  
//   const newDuration = [...array].map(({...film}) => { 
//     let totalMin = 0;
//     let chkDuration = film.duration;  
//     if (film.duration.length === 2){
//       totalMin = Number.parseInt(chkDuration.slice(0,-1)) * 60;
//     }else if(film.duration.length === 7){
//       totalMin = (Number.parseInt(chkDuration.slice(0,-1)) * 60) + Number.parseInt(chkDuration.slice(-4,-3));
//     }else if(film.duration.length === 8){
//       totalMin = (Number.parseInt(chkDuration.slice(0,-1)) * 60) + Number.parseInt(chkDuration.slice(-5,-3));
//     }
//     film.duration = totalMin;
//     return film
//   });
//   // console.log('EXERCICE 7 ->',newDuration);
//   return newDuration;
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
