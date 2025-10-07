function GenerarLista(arraypokemones) {
  let listaPokes = "";
  for (let i = 0; i < arraypokemones.length; i++) {
    let id = arraypokemones[i].url.split("/")[6];
    listaPokes += `
      <div class="c-lista-pokemon poke-${id}" onclick="Detalle('${id}')">
        <p>#${id}</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
             width="auto" height="60" loading="lazy" alt="${arraypokemones[i].name}">
        <p>${arraypokemones[i].name}</p>
      </div>`;
  }
  return listaPokes;
}

function buscadorfuncion(asa) {
  const filtrados = asa.length >= 3
    ? pokemones.filter(p => p.name.toLowerCase().includes(asa.toLowerCase()))
    : pokemones;
  document.getElementById("la-lista").innerHTML = GenerarLista(filtrados);
}

function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const buscador = document.createElement("input");
  buscador.type = "text";
  buscador.placeholder = "Buscar Pokémon";
  buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

  const contenedorFiltro = document.createElement("div");
  const tipos = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
  tipos.forEach(tipo => {
    const btn = document.createElement("button");
    btn.textContent = tipo;
    btn.onclick = () => FiltroConexion(tipo);
    contenedorFiltro.appendChild(btn);
  });

  const contenedorLista = document.createElement("section");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = GenerarLista(pokemones);

  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorLista);
}

async function FiltroConexion(filtroelegido) {
  pokemones = await Conexion(filtroelegido);
  document.getElementById("la-lista").innerHTML = GenerarLista(pokemones);
}