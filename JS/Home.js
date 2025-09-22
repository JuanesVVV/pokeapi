function Home(pokemones){
    
    for(var i = 0; i < 9; i++){
        id = [i];
        nombre = pokemones[i].name
        root.innerHTML += `
            <div class="un-pokemon" onclick="Detalle(${id})">
                <p>${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${nombre}">
            </div>
        `
    } 
}