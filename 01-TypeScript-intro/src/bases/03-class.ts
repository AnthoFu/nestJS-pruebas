// Las interfaces sirven para hacer moldes, mientras que las clases permiten crear instancias, es decir, las clases son mas poderosas que una interfaz.
export class Pokemon{

    // Getter para obtener la imageURL (retorna la URL del sprite front_default desde la API; si falla, retorna la URL del endpoint)
    get imageUrl(): Promise<string> {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        return fetch(apiUrl)
            .then(res => {
                if (!res.ok) throw new Error('Error de conexion');
                return res.json();
            })
            .then((data: any) => data?.sprites?.front_default ?? apiUrl)
            .catch(() => apiUrl);
    }

    public id: number = 0;
    public name: string = 'Sin nombre asignado';
    //public imageUrl: string = 'Sin URL asignada'

    // El metodo constructor es lo que se ejecuta cuando se crea una instancia de la clase
    constructor(
        id:number, 
        name:string, 
        //imageUrl:string
    ){
        this.id = id
        this.name = name
        console.log('[Pokemon creado] ID:', this.id, 'NAME:', this.name, 'IMGURL:', this.imageUrl)
    }

    // Metodo del pokemon para 'gritar' el nombre del pokemon en mayusculas
    public scream(){
        console.log(`${this.name.toUpperCase()}!!`)
    }

    // Metodo que simula el habla de un Pokemon
    public speak(){
        console.log(`${this.name}, ${this.name}`)
    }
}

export const venusaur = new Pokemon(3, 'Venusaur')
console.log (venusaur)
venusaur.scream()
venusaur.speak()


// La forma mas corta de crear una clase es la siguiente:

// export class PokemonCorto {
//     constructor(
//         public readonly id: number, // La propiedad readonly permite no cambiar el id asignado, solo leerlo
//         public name:string
//     ) {}
// }

