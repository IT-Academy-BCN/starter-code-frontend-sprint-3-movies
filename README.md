# Sprint 4 "MOVIES"
# INTRODUCCION:
-En este Sprint una empresa del sector audiovisual nos ha pedido una aplicación web, que permita a sus empleados encontrar rápidamente películas de una gran base de datos que poseen. El proceso se realiza actualmente de manera manual.

-Se nos proporciona la base del proyecto sobre el cual trabajar a través de GitHub. Es un array con 250 películas en un archico de JS. En el mismo cada elemento contiene la información de cada película

# RESOLUCION DE LOS EJERCICIOS:

## NIVEL 1:
## EJERCICIO 1:
-Se debe mostrar al usuario sólo los directores de las películas. 
Se ha resuelto mediante la realización de un map que recorre el array movies y devuelve un nuevo array con únicamente los directores.

## EJERCICIO 2:
-Se pide la posibilidad de mostrar todas las películas de determinado director.
La función recibe un parámetro con el nombre del director y devuelve un array con sus películas. Se ha implementado el métodos filter().

## EJERCICIO 3:
-Se pide calcular la media de las puntuaciones de las películas del director.
Filtramos las películas de cada director y usamos el método reduce() para acumular las puntuaciones y a partir de esto calcular el porcentaje.

## EJERCICIO 4: 
-Debemos ordenar las películas por título en orden alfabético y obtener las primers 20 películas de la lista.
Se crea una función en la cual utilizamos map para obtener todos los títulos de las películas y luego sort() para ordenarlas alfabéticamente. Luego utilizamos plit()para que el array no devuelva las primeras 20 películas de la lista.

## EJERCICIO 5:
-En este ejercicio debemos ordenar las películas por año teniendo en cuenta que muchas películas tienen el año repetido. Por lo que en ese caso deben ir también por orden alfanético.
Se resuelve utilizando nuevamente el método sort() y a continuación un condicional para que si el año es el mismo, se devuelva por orden alfabético.

## EJERCICIO 6:
-Hay que poder obtener la nota media de las películas de un genero determinado.
En este ejercicio se ha reutilizado el ejrcicio 3 para crear una funcion que recibe un array de películas y calcule su media. Se uso typeof para asegurarnos de que devuelva un número y toFixed(2) para que sea con dos decimales.

## NIVEL 2:

## EJERCICIO 7:
-A continuación debemos modificar el formato de duración de las películas para que se nos devuelva únicamente en minutos.
Utilizamos un map() que nos devuelva un array con la duracion de las películas y a través de un for of con un condicional que convierte las horas en minutos y los suma para devolvernos el resultado de la duración en minutos.

## EJERCICIO 8:
-Debemos encontrar la mejor película de cada año.
Utilizamos una función que recibe como parámetro el array de películas y el año elegido. Esta nos devuelve un array con los años fintrados y con sort() ordenados por puntuación.








