// Esta funcion adaptadora sirve como un 'puente' de respaldo por si en algun momento la forma que se trabajan las peticiones
// http con axios cambia, siendo un metodo de respaldo

import axios from "axios";

export class PokeApiAdapter {

    private readonly axios = axios

    async get <T> ( url:string):Promise<T>{
        const { data } = await this.axios.get<T>(url)
        return data;
    }

    async post ( url:string, data:any){

    }

    async patch ( url:string, data:any){
        
    }

    async delete ( url:string, data:any){
        
    }
}

