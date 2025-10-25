
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { Product } from './entities/product.entity';

@Injectable() 
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(productDto);
    return this.productRepository.save(newProduct);
  }

  async update(id: number, productDto: UpdateProductDto): Promise<void> {
    await this.productRepository.update(id, productDto);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
