function Informativa() {
  document.getElementById("root").innerHTML = `
    <section>
      <h2>¿Qué es esta app?</h2>
      <p>Explora Pokémon con la PokeAPI. Puedes ver detalles, guardar favoritos y capturar aleatoriamente.</p>
      <ul style="list-style: none; padding-left: 0;">
        <li>Home: Lista y buscador</li>
        <li>Favoritos: Tus Pokémon favoritos</li>
        <li>Capturados: Pokémon que atrapaste</li>
        <li>Detalle: Estadísticas completas</li>
      </ul>
      <button onclick="Home()">Volver</button>
    </section>
  `;
}