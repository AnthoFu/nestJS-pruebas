import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
@Controller('cars') // Si agregamos los pipes aca en el controlador, todos los metodos podran utilizar este pipe
@UsePipes(ValidationPipe)
export class CarsController {

        constructor(
            private readonly carsService: CarsService
        ){}

        @Get() 
        getAllCars(){
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param ('id', new ParseUUIDPipe( {version: '4'} )) id:string){
        console.log('getCarById:', {id})
        return this.carsService.findOneById(id);
    }

    @Post() // También podemos agregar los pipes directamente en los metodos
    //@UsePipes(ValidationPipe)
    createCar( @Body() createCarDto:CreateCarDto ){
        return createCarDto;
    }

    @Patch(':id')
    updateCar( 
        @Param ('id', ParseIntPipe) id: number,
        @Body() body:any ){
        return body;
    }

    @Delete('id')
    deleteCar( @Param ('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        } 
        
    }
}
