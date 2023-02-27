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

Make the `getAllDirectors` function, which iterates over the movies array with `map` and creates a new array with the director of each movie.

##### ✅ Finished: 15/02/2023

**— Exercise 2**

Make the `getMoviesFromDirector` function, which iterates over the movies array with `filter` and creates a new array with the movies from the director that was passed as parameter.

##### ✅ Finished: 15/02/2023

**— Exercise 3**

Make the `moviesAverageOfDirector` function, which gets all the movies from a specific director, adds the score of all their movies, and divides the total sum by the number of movies in order to get the average score. The `reduce` method was used to iterate over the array of movies and add the scores to an accumulator.

##### ✅ Finished: 16/02/2023

**— Exercise 4**

Make the `orderAlphabetically` function, which gets all the movie titles, sorts them alphabetically, and returns only the 20 first ones.

##### ✅ Finished: 16/02/2023

**— Exercise 5**

Make the `orderByYear` function, which gets the array with all the movie and sorts them by their release year. Movies that were released in the same year are sorted alphabetically.

✏️**Notes:**

- This exercise helped me understand the `sort` method when used with a comparator function as an argument. When used this way, you can specify the comparison it should do between two elements in an array. If no function is passed in, by default it turns the elements into strings and sorts them alphabetically.
- I also learned about `localeCompare`. This method compares two strings and returns a negative value if the first string comes before the second one in alphabetical order, and a positive value if it's the other way around. It returns 0 if both strings are equal.

##### ✅ Finished: 17/02/2023

**— Exercise 6**

Make the `moviesAverageByCategory` function, which calculates the average score of all the movies from a specific genre.

##### ✅ Finished: 17/02/2023

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

### ⭐⭐ **Level 2** ⭐⭐

**— Exercise 7**

Make the `hoursToMinutes` function, which maps through the array of movies and creates a copy with the `duration` value of each movie object converted to minutes.

##### ✅ Finished: 22/02/2023

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

### ⭐⭐⭐ **Level 3** ⭐⭐⭐

**— Exercise 8**

Make the `bestFilmOfYear` function, which filters the movies from a given year and returns the one with the highest score.

##### ✅ Finished: 25/02/2023
