
// Las interfaces sirven para hacer moldes, mientras que las clases permiten crear instancias, es decir, las clases son mas poderosas que una interfaz.
export class Pokemon{
    public id: number = 1;
    public name: string = 'Sin nombre';

    // El metodo constructor es lo que se ejecuta cuando se crea una instancia de la clase
    constructor(id:number, name:string){
        this.id = id
        this.name = name
        console.log('[Pokemon creado] ID:', this.id, 'NAME:', this.name)
    }
}

export const bulbasaur = new Pokemon(3, 'Bulbasaur')

// La forma mas corta de crear una clase es la siguiente:

// export class PokemonCorto {
//     constructor(
//         public readonly id: number, // La propiedad readonly permite no cambiar el id asignado, solo leerlo
//         public name:string
//     ) {}
// }