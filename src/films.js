// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 const result = array.filter(movie => movie.director === director);
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(arr) {
  return Number((arr.reduce((a, b) => a + b.score, 0) / arr.length).toFixed(2))
}

function moviesAverageOfDirector(array, director) {
  const moviesArrayByDirector = getMoviesFromDirector(array, director);
  const result = moviesAverage(moviesArrayByDirector)
  console.log("EXERCICE 3 ->", result);
  return result
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const newArray = array.map(movie => movie.title)
  const sortedArr = newArray.sort((a, b) => a.localeCompare(b))

  if (sortedArr.length <= 20) {
    console.log("EXERCICE 4 ->", sortedArr);
    return sortedArr
  } else {
    sortedArr.length = 20
    console.log("EXERCICE 4 ->", sortedArr);
    return sortedArr
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  const array = [...arr]
  const result = array.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
  console.log("EXERCICE 5 ->",result)
  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(arr, category) {
  const filteredByGenre = arr.filter(movie => movie.genre.includes(category) && movie.score !== '')
  const result = moviesAverage(filteredByGenre)
  console.log("EXERCICE 6 ->", result)
  return result
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
