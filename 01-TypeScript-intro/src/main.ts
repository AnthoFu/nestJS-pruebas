import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { age, name } from './bases/01-types.ts'
import { pikachu, pokemonIds } from './bases/02-objects.ts'
import { charmander } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>¡Hola ${name}!</h1>
    <h2>Tengo ${age} años de edad</h2>
    <p>${pokemonIds.join(' , ')}!!</p>
    <p>El pokemon elegido es: <b>${pikachu.name}</b></p>
    <p>El segundo pokemon elegido es: <b> ${charmander.name}</b></p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
