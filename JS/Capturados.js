var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

function Aleatorios() {
  document.getElementById("nuevos").innerHTML = "";
  let pokesAleatorios = "";

  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * totalPokes) + 1;

    // Verificar que pokemones esté cargado
    if (!pokemones || !pokemones[num - 1]) continue;

    pokesAleatorios += `
      <div class="c-lista-pokemon c-un_aleatorio">
        <p>${num}</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png"
             alt="${pokemones[num - 1].name}" width="60" height="60">
        <p>${pokemones[num - 1].name}</p>
      </div>`;

    let existe = misNumeros.includes(num);

    if (!existe) {
      misNumeros.push(num);
      localStorage.setItem("misNumeros", JSON.stringify(misNumeros));

      const celda = document.getElementById("c-unpoke-" + num);
      if (celda) {
        celda.innerHTML = `
          <div onclick="Detalle('${num}')">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png"
                 width="auto" height="45" loading="lazy" alt="${num}">
            <p>${num}</p>
          </div>`;
        celda.classList.add("c-mios-pokemon");
      }
    }
  }

  document.getElementById("nuevos").innerHTML += pokesAleatorios;
  document.getElementById("contador").innerHTML = `${misNumeros.length} / ${totalPokes}`;
}

function Capturados() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const capturaAleatorea = document.createElement("section");
  capturaAleatorea.classList.add("c-lista");
  capturaAleatorea.id = "nuevos";

  const boton = document.createElement("button");
  boton.textContent = "4 nuevos";
  boton.addEventListener("click", () => {
    Aleatorios();
  });

  const seccioncapturados = document.createElement("section");
  seccioncapturados.classList.add("c-lista");

  let misPokes = "";
  for (let i = 1; i <= totalPokes; i++) {
    if (misNumeros.includes(i)) {
      misPokes += `
        <div class="c-unpoke c-mios-pokemon poke-${i}" onclick="Detalle('${i}')">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
               width="auto" height="45" loading="lazy" alt="${i}">
          <p>${i}</p>
        </div>`;
    } else {
      misPokes += `
        <div class="c-unpoke" id="c-unpoke-${i}">
          <p>${i}</p>
        </div>`;
    }
  }

  seccioncapturados.innerHTML = misPokes;

  const contador = document.createElement("p");
  contador.textContent = `${misNumeros.length} / ${totalPokes}`;
  contador.id = "contador";

  root.appendChild(contador);
  root.appendChild(boton);
  root.appendChild(capturaAleatorea);
  root.appendChild(seccioncapturados);
}