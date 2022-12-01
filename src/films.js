// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(element => element.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(element => element.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

function moviesAverage(array){
  const result = Number((array.reduce((acc, act) => acc + act.score, 0) / array.length).toFixed(2));
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array,director);
  const result = moviesAverage(moviesDirector);

  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {  
  const result = array.map(element => element.title).sort().slice(0, 20);

  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array.map(element => element).sort((a, b) => {
    const dif = a.year - b.year;

    //si año es el mismo, ordena por título
    if (dif == 0){
      if(a.title < b.title) return -1;
      else return 1;
    }else return dif;
  });

  console.log("EXERCICE 5 ->", result);
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
