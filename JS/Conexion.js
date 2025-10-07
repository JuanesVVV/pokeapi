let pokemones = [];
let totalPokes = 151;

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

async function General() {
  pokemones = await Conexion("All");
  Home();
}

General(); // Mostrar Pokémon desde el inicio