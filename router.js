const contenidoSitio = require('./src/index');

const rutas = {
	elegida: (req, res) => {
		switch (req.url) {
			// Home
			case '/':
				res.end(contenidoSitio.homePage);
				break;

			// En cartelera
			case '/en-cartelera':
				res.end(contenidoSitio.enCartelera);
				break;

			// Más Votadas
			case '/mas-votadas':
				res.end(contenidoSitio.masVotadas);
				break;

			// Sucursales
			case '/sucursales':
				res.end('Sucursales');
				break;

			// Contacto
			case '/contacto':
				res.end('Contacto');
				break;

			// FAQs
			case '/preguntas-frecuentes':
				res.end('Preguntas Frecuentes');
				break;

			// Default
			default:
				res.end('404 not found')
		}
	}
}

module.exports = rutas;