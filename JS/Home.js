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
  if (asa.length >= 3) {
    const filtrados = pokemones.filter(p => p.name.toLowerCase().includes(asa.toLowerCase()));
    const listaHTML = GenerarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    const listaHTML = GenerarLista(pokemones);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}


function Home() {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Limpiar contenido anterior

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar pokemon";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Filtros
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("c-filtros");

  const tipos = [
    "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
    "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
    "dragon", "dark", "fairy", "stellar", "unknown"
  ];

  tipos.forEach(tipo => {
    const btn = document.createElement("button");
    btn.textContent = tipo;
    btn.addEventListener("click", () => {
      FiltroConexion(tipo);
    });
    contenedorFiltro.appendChild(btn);
  });

  // Lista
  const contenedorLista = document.createElement("section");
  contenedorLista.classList.add("c-lista");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = GenerarLista(pokemones);

  // Agregar al DOM
  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorLista);
}