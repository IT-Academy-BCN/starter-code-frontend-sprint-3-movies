// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  [];
  array.map (movie => {
    if(result.length===0 || result.indexOf(movie.director)<0) result.push(movie.director)
  })
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director === director);
  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const dirMovies = getMoviesFromDirector(array,director);
  return dirMovies.reduce((res,film)=>res + parseFloat(film.score),0)/dirMovies.length
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
   return array.map(el=>el.title).sort().slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a,b)=>{
    if(a.year<b.year)return-1
    else if (a.year>b.year)return 1
    else{
      return a.title.localeCompare(b.title)
    }
  })
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