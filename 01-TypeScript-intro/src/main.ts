import './style.css'
// import { age, name } from './bases/01-types.ts'
// import { pikachu, pokemonIds } from './bases/02-objects.ts'
// import { charmander } from './bases/02-objects.ts'
// import { venusaur } from './bases/03-class';
import {  } from "./bases/05-decorators";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Proyecto corriendo</h1>
    </div>
  `
// <h1>¡Hola ${name}!</h1>
//     <h2>Tengo ${age} años de edad</h2>
//     <p>${pokemonIds.join(' , ')}!!</p>
//     <p>El pokemon elegido es: <b>${pikachu.name}</b></p>
//     <p>El segundo pokemon elegido es: <b> ${charmander.name}</b></p>
//     <p>El tercer pokemon elegido es: <b> ${venusaur.name}</b></p>
//     <p><img id="venusaur-img" alt="venusaur"></p>
  

// función para cargar la img obtenida por el URL en la clase Pokemon
// async function init() {
//   try {
//     const url = await venusaur.imageUrl // resolver la Promise
//     const img = document.getElementById('venusaur-img') as HTMLImageElement | null //buscamos el id de la img
//     if (img) {
//       img.src = url
//       console.log('venusaur imageUrl:', url)
//     }
//   } catch (err) {
//     console.error('Error obteniendo imageUrl:', err)
//   }
// }

// init()
