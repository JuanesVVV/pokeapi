let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function Conexion(UnFiltro) {
  try {
    if (UnFiltro === "All") {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
      const data = await res.json();
      return data.results;
    } else {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
      const data = await res.json();
      return data.pokemon.map(p => p.pokemon);
    }
  } catch (error) {
    console.error("Error en la conexión:", error);
    return [];
  }
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await Conexion("All");
  }
  Home(pokemones);
  console.log(pokemones[2].name);
}

General();

async function FiltroConexion(filtroelegido) {
  const pokesFiltrados = await Conexion(filtroelegido);
  document.getElementById("la-lista").innerHTML = "";
  const listaFiltro = GenerarLista(pokesFiltrados);
  document.getElementById("la-lista").innerHTML = listaFiltro;
}