const fs = require('fs');

let peliculas = JSON.parse(fs.readFileSync(__dirname + '/../data/movies.json', 'utf-8'));

lasPeliculas = peliculas.movies;

let soloTitulos = lasPeliculas.map(function (unaMovie) {
	return unaMovie.title + '\n';
});

soloTitulos.sort();

let contenido = 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n';

contenido += `Total de películas en cartelera: ${peliculas.total_movies} \n\n`;

contenido += `Listado de películas:\n• ${soloTitulos.join('• ')}\n\n`;

contenido += '​\nRecordá que podés visitar las secciones: \n• En Cartelera\n• Más Votadas\n• Sucursales\n• Contacto\n• Preguntas Frecuentes';

module.exports = contenido;