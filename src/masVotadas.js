const fs = require('fs');

let peliculas = JSON.parse(fs.readFileSync(__dirname + '/../data/movies.json', 'utf-8'));

peliculas = peliculas.movies;

let pelisMasVotadas = peliculas.filter((unaMovie) => unaMovie.vote_average >= 7);

let ratingPromedio = pelisMasVotadas.reduce((acum, unaMovie) => {
	return acum + unaMovie.vote_average;
}, 0);

ratingPromedio = (ratingPromedio / pelisMasVotadas.length).toFixed(2);

let contenido = 'Más Votadas \n\n';

contenido += `Total de películas: ${pelisMasVotadas.length} \n\n`;

contenido += `Rating promedio: ${ratingPromedio} \n\n`;

contenido += `Listado de películas\n\n`;

pelisMasVotadas.forEach(unaPelicula => {
	contenido += `TITULO: ${unaPelicula.title}\n`;
	contenido += `RATING: ${unaPelicula.vote_average}\n`;
	contenido += `RESEÑA: ${unaPelicula.overview}\n\n`;
})

module.exports = contenido;