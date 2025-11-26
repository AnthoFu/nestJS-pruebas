const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args); 
                }
                return wrapperFn;
            }
        }
    }   
}


/* class NewPokemon {
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
} */

// No entiendo muy bien como funcionan los decoradores, necesito mas practica
// const MyDecorator = () => {
//     return (target: Function) => {
//         return NewPokemon;
//     }
// }

// Esto es el decorador
// @MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!`)
    }

    @Deprecated('Deberias utilizar el metodo Speak2 en vez de este')
    speak() {
        console.log(`${ this.name }, ${ this.name }!`)
    }

    speak2(){
        console.log(`${this.name}, ${this.name}!`)
    }

}

export const charmander = new Pokemon(4, 'Charmander');

charmander.speak();