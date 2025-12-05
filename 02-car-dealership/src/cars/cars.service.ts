import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

// Importamos y agregamos los id unicos de los carros como si vinieran de una base de datos

@Injectable()
export class CarsService {

    // Aqui agregamos la interfaz que hemos hecho y decimos 'este campo es un arreglo de la interfaz Car'
    // Esto nos dara errores de typescript si es que falta algun dato
            private cars: Car[] = [
            //     {
            //     id:uuid(),
            //     brand: 'Toyota',
            //     model: 'Corolla'
            // },
            // {
            //     id:uuid(),
            //     brand: 'Honda',
            //     model: 'Civic'
            // },
            // {
            //     id:uuid(),
            //     brand: 'Jeep',
            //     model: 'Cherokee'
            // }
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

        create ( createCarDto:CreateCarDto ){
            const car:Car = {
                id: uuid(),
                ...createCarDto
                // Tambien se puede hacer de la siguiente manera:
                // model: createCarDto.brand,
                // brand: createCarDto.model
            }
            
            // utilizamos el metodo push para agregarlos al array actual
            this.cars.push(car)

            return car;
        }

        update(id:string, updateCarDto:UpdateCarDto){
            let carDB = this.findOneById(id); // utilizamos el metodo de encontrar uno por el id que ya habiamos definido arriba

            if ( updateCarDto.id && updateCarDto.id !== id){
                throw new BadRequestException(`El id del cuerpo proporcionado no es valido`)
            }

            // como estamos trabajando en un array local debemos mapear el array local
            this.cars = this.cars.map( car => {
                if (car.id === id){
                    carDB = {
                        ...carDB,
                        ...updateCarDto,
                        id
                    }
                    
                    return carDB;
                }
                return car;
            })

            return carDB; // retornamos el carro actualizado
        }

        delete(id:string){
            const car = this.findOneById(id);
            this.cars = this.cars.filter(car => car.id !== id)
            return;
        }

        fillCarsWithSeedData(cars: Car[]){
            this.cars = cars;
        }
    }
