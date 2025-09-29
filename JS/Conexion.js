let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function Conexion(UnFiltro) {

  
  if(UnFiltro == "All"){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();
    return data.results;
  }else{
    const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
    const data = await res.json();
    
    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
  }

}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexionLista();
  }
  Home(pokemones);
  console.log(pokemones[2].name);
}

General()

async function FiltroConexion(filtroelegido){
    pokesFiltrados = await Conexion(filtroelegido);
    document.getElementById("la-lista").innerHTML = "";
    listaFiltro = GenerarLista(pokesFiltrados);
    document.getElementById("la-lista").innerHTML = listaFiltro;
}