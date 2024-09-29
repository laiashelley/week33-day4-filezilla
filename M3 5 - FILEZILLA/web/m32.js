// // 1- Documenta un archivo JS simple (sin funciones):  anotaciones author, since, version, link, tutorial etc

// 2- Documenta un archivo JS más complejo que incluya varias funciones. Si no lo tienes, créalo o búscalo. 

// Que, en las funciones, incluya anotaciones params si los hay, y returns si hay return.

// Prueba a crear un JSdoc en línea. Después, prueba a crearlo con Node.js

// Por último, investiga en los enlaces definidos en la información de la clase del día de hoy en este campus, con videos y más información sobre la documentación en javascript.

/**
 * @author  Laia Galvez
 * @version 3.3 - version actual
 * @since 1.2 - modificando desde esta verison
 * artistas engloba todos los artistas presentados en la página principal
 * querySelecto
 */
let artistas = document.querySelectorAll("h3");

/**
 * @type {Object}
 * spotifyLinks engloba todos los links relacionados con los artistas de la pagina principal.
 */
const spotifyLinks = {
    "Oasis": "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4", "Arctic Monkeys": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH", "Foo Fighters": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD", "Metallica": "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB", "Bring Me the Horizon": "https://open.spotify.com/artist/1Ffb6ejR6Fe5IamqA5oRUF", "Slipknot": "https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8", "Dua Lipa": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we", "Miley Cyrus": "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6", "Bad Bunny": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
};

/**
 * bucle forEach para marcar que el cursor aparezca diferente al hacer click
 * @param artistas - artistas es lo que mostramos con el bucle forEach haciendo click.
 * @param artist - es para 
 */
artistas.forEach(artist => {
    artist.style.cursor = "pointer";
    /**
     * @event click
     * función para hacer que al hacer click en cualquiera de los h3, se abra la pagina correspondiente.
     * @param artistName - nos permite obtener el nombre del artista del h3.
     * @param spotifyURL - nos permite obtener el enlace desde el objeto.
     */
    artist.addEventListener('click', () => {
        const artistName = artist.textContent;
        const spotifyURL = spotifyLinks[artistName];
        /**
         * @condition {boolean} - true si existe enlace, false si no existe.
         * @param {string} spotifyURL - URL del artista
         * @param {string} "_blank" - indica que URL debe abrirse en ventana nueva.
         * @function window.open - abrir ventana nueva
         * @function alert - ventana emergente
         */
        if (spotifyURL) {
            window.open(spotifyURL, "_blank");
        } else {
            alert("El enlace no existe");
        }
    });
});