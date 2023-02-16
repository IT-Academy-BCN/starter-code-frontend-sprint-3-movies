# Front End Development with Vue.js - IT Academy

## **Sprint 4 - Video Management Tool**

This sprint focuses on the core concepts of ECMASCript 6, or ES6 for short. Below is the project brief:

> A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.
>
> You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

Also, this sprint introduces unit testing. The tests are already written for me in `film.specs.js` and I have to make sure my code passes them.

---

### ⭐ **Level 1** ⭐

**— Exercise 1**

Make the `getAllDirectors(array)` function, which iterates over the movies array with `map` and creates a new array with the director of each movie.

##### ✅ Finished: 15/02/2023

**— Exercise 2**

Make the `getMoviesFromDirector(array, director)` function, which iterates over the movies array with `filter` and creates a new array with the movies from the director that was passed as parameter.

##### ✅ Finished: 15/02/2023

**— Exercise 3**

Make the `moviesAverageOfDirector(array, director)` function, which gets all the movies from a specific director, adds the score of all their movies, and divides the total sum by the number of movies in order to get the average score. The `reduce` method was used to iterate over the array of movies and add the scores to an accumulator.

##### ✅ Finished: 16/02/2023
