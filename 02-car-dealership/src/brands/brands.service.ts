import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {


  private brands: Brand[]= [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime()
    // }
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if (!brand){
      throw new NotFoundException(`No se encontro el brand con el id ${id}`)
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brandDB = this.findOne(id);

    const updatedBrand: Brand = {
      ...brandDB,
      ...updateBrandDto,
      updatedAt: new Date().getTime(),
    };

    this.brands = this.brands.map(brand => brand.id === id ? updatedBrand : brand);

    return updatedBrand;
  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id);
    return;
  }


    fillBrandsWithSeedData(brands: Brand[]){
      this.brands = brands;
    }
}
