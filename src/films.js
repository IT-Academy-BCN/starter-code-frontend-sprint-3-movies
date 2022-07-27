// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const result =  array.map(element => element.director);

  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const result = array.filter(element => element.director === director);

  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  /* const result = array.filter(element => element.director === director);
  const average = result.reduce((totalScore, element) => totalScore + element.score);
  const numberMovies = result.length;
  const scoreAverage = Number((average / numberMovies).toFixed(2)); */

  // Resumit en una línia
  const result = Number((array.filter(element => element.director === director).reduce((previ, actual) => previ + actual.score, 0) / array.filter(element => element.director === director).length).toFixed(2));
  
  console.log("EXERCISE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const result = array.map(element => element.title).sort();
  console.log(result);
  if (result.length > 20) result.length = 20;

  console.log("EXERCISE 4 ->", result);
  return result;  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const result = array.map(element => ({...element})).sort((previ, actual) => {
    
    const ordre = previ.year - actual.year;

    if (ordre == 0) {
      if (previ.title < actual.title) return -1;
      else return 1;
      }  
    else return ordre;    
  });

  console.log("EXERCISE 5 ->", result);
  return result; 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
