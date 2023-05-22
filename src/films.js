// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director) //Itero el array de objetos para obtener el director de cada uno
  return result
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director)//Filtro por nombre de director para encontrar las peliculas de cada uno
  return result
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let resultMovies = array.filter(movie => movie.director === director).map(movie => movie.title) //Con filter obtengo los objetos del director, y con map obtengo los titulos de las peliculas de ese director
  let average = array.filter(movie => movie.director === director).map(movie => movie.score).reduce((acumulador,siguiente) => acumulador + siguiente) //Hago lo mismo que en la linea anterior pero con reduce sumo los valores de los puntps
  average = (average / resultMovies.length).toFixed(2)// Calculo la media dividiendo el resultado de average entre la longitud resultante de la variable resultMovies y lo pongo en dos decimales
  average = parseFloat(average) //Lo paso a número por que en la linea anterior el resultado queda en string
  return average
}
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let orderMovies = array.map(movie => movie.title)
  let orderedMovies = orderMovies.sort()
  let result = orderedMovies.slice(0,20)
  return result
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array] //con el operador de propagacion obtengo el array

  result.sort((a, b) => { 
    if (a.year !== b.year) {
      return a.year - b.year; //Ordenar por año
    } else {
      return a.title.localeCompare(b.title); //Ordenar alfabéticamente
    }
  });
  
  return result
};

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
 
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
