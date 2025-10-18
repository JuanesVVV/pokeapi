function Informativa() {
  document.getElementById("root").innerHTML = `
    <section class="c-detalle">
      <h2>¿Qué es esta app?</h2>
      <img src="Imagenes/pokemon.jpeg" 
           alt="Celebración 25 años Pokémon" 
           class="imagen-informativa">
      <p>Esta aplicación te permite explorar el mundo de Pokémon usando la <strong>PokéAPI</strong>. Puedes buscar, capturar y guardar tus favoritos.</p>
      <ul>
        <li><strong>Home:</strong> Lista completa de Pokémon con buscador por nombre.</li>
        <li><strong>Favoritos:</strong> Guarda tus Pokémon preferidos para verlos rápidamente.</li>
        <li><strong>Capturados:</strong> Simula capturas aleatorias y guarda tu colección.</li>
        <li><strong>Detalle:</strong> Muestra estadísticas, tipo, peso, altura y habilidades.</li>
      </ul>
      <p>La app usa imágenes oficiales y datos en tiempo real desde <a href="https://pokeapi.co" target="_blank">pokeapi.co</a>.</p>
      <p>Inspirada en la experiencia de los juegos clásicos, con protagonistas de todas las generaciones y consolas emblemáticas como Game Boy, DS y Switch.</p>
      <button onclick="Home()">Volver</button>
    </section>
  `;
}