import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid'
import { Car } from './interfaces/car.interface';

// Importamos y agregamos los id unicos de los carros como si vinieran de una base de datos

@Injectable()
export class CarsService {

    // Aqui agregamos la interfaz que hemos hecho y decimos 'este campo es un arreglo de la interfaz Car'
    // Esto nos dara errores de typescript si es que falta algun dato
            private cars: Car[] = [
                {
                id:uuid(),
                brand: 'Toyota',
                model: 'Corolla'
            },
            {
                id:uuid(),
                brand: 'Honda',
                model: 'Civic'
            },
            {
                id:uuid(),
                brand: 'Jeep',
                model: 'Cherokee'
            }
        ]


        public findAll(){
            return this.cars
        }

        public findOneById(id: string){
            const car = this.cars.find( car => car.id === id);
            
            if (!car) {
                throw new NotFoundException(`El carro con el id:${id} no fue encontrado.`);
            }
            return car;
        }
    }
