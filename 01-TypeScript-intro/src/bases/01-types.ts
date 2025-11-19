// Si dejamos una constante con su valor, al dejarle el cursor encima podremos ver que 'name' sera igual a 'AnthoFu'
export const name='AnthoFu';

console.log('[name]: ', name);


// En cambio, si colocamos el tipado (en este caso seria age: number), al pasar por encima el cursor a la variable age dira que es number
export const age: number = 20;

console.log('[age]: ', age);

// Aquí podemos ver un error muy común
// Declaramos una variable tipo string o nùmero o undefined
let error: string | number | undefined

// Pero si intentamos asignarle un valor booleano directamente nos mandará un error

//error = true;
error = ''

// Beneficios del typescript, para ver errores en el còdigo antes de compilarlo

// Tambien se pueden exportar templateStrings

export const templateString = `Esto es un string 
multilinea
'' se pueden agregar comillas simples
"" o dobles
inyectar valores ${name}
numeros ${age}
entre otras cosas
`

console.log('[templateString]: ', templateString)