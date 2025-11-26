class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`NO QUIERO!!`);
    }

    speak() {
        console.log(`NO QUIERO HABLAR!!`);
    }
}

// No entiendo muy bien como funcionan los decoradores, necesito mas practica
const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon;
    }
}

// Esto es el decorador
@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!`)
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }!`)
    }

}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();