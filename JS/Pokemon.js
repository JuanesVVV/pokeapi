async function Detalle(parametro) {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando...</p>";

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();

    const tipoPoke = data.types.map(t => t.type.name).join(", ");

    root.innerHTML = `
      <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"
             alt="${data.name}" height="120" width="auto">
        <h2>${data.name} (#${data.id})</h2>
        <p><strong>Tipo:</strong> ${tipoPoke}</p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
        <ul>
          <li>HP: ${data.stats[0].base_stat}</li>
          <li>Velocidad: ${data.stats[5].base_stat}</li>
          <li>Ataque: ${data.stats[1].base_stat}</li>
          <li>Defensa: ${data.stats[2].base_stat}</li>
          <li>Ataque Especial: ${data.stats[3].base_stat}</li>
          <li>Defensa Especial: ${data.stats[4].base_stat}</li>
        </ul>
        <button onclick="Home()">Volver</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = `<p>Error al cargar el detalle del Pokémon.</p>`;
    console.error("Error en Detalle:", error);
  }
}