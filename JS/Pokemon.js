var esFavorito = false;

async function Detalle(parametro) {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando...</p>";

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(poke => poke.name === data.name);

    const tipoPoke = data.types.map(t => `<span>${t.type.name}</span>`).join(" ");

    root.innerHTML = `
      <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
             alt="${data.name}" height="120" width="auto">
        <h2>${data.name} (#${data.id})</h2>
        <p><strong>Tipo:</strong> ${tipoPoke}</p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>HP: ${data.stats[0].base_stat}</li>
          <li>Velocidad: ${data.stats[5].base_stat}</li>
          <li>Ataque: ${data.stats[1].base_stat}</li>
          <li>Defensa: ${data.stats[2].base_stat}</li>
          <li>Ataque Especial: ${data.stats[3].base_stat}</li>
          <li>Defensa Especial: ${data.stats[4].base_stat}</li>
        </ul>
        <button onclick="toggleFavorito(${data.id}, '${data.name}')">
          <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
        </button>
        <button onclick="Home()">Volver</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = `<p>Error al cargar el detalle del Pokémon.</p>`;
    console.error("Error en Detalle:", error);
  }
}

function toggleFavorito(paramid, paramname) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const index = favoritos.findIndex(poke => poke.name === paramname);

  if (index !== -1) {
    favoritos.splice(index, 1);
    esFavorito = false;
  } else {
    favoritos.push({
      name: paramname,
      url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
    });
    esFavorito = true;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  const boton = document.querySelector(`#corazon-${paramid}`);
  if (boton) {
    boton.textContent = esFavorito ? "❤️" : "🤍";
  }
}