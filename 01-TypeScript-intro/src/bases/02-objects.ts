// Podemos tambien tipar los objetos
export const pokemonIds = [0,1,2,3,4]
// Por defecto este objeto sera de numeros

// Por ende, este comando dara error al intentar insertar un string
//pokemonIds.push('string')
// Pero igualmente se puede agregar strings aunque de error en el còdigo


// Tambien se pueden crear las interfaces, por asi decirlo las templates
interface Pokemon {
    id:number;
    name:string;
    age?:number; // Si le agregamos un ? al final puede tener o no puede tener este valor
}

export const pikachu:Pokemon = {
    id:1,
    name:'Pikachu'
}

// Si no rellenamos los campos de la interfaz Pokemon nos dara un error, o si lo agregamos con un valor inadecuado tambien
// Aqui solo agregamos el nombre y nos da error, porque nos falta el id

export const charmander: Pokemon ={
    id: 2,
    name:'Charmander',
    age:5
}

console.log('[Pikachu]: ', pikachu)


// Aqui declaramos que la variable pokemons es un array de la interfaz Pokemon
export const pokemons: Pokemon[] = [];

pokemons.push(pikachu, charmander)

console.log('[Pokemons]: ', pokemons)
