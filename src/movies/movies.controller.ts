
// movies.controller.ts

import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto, UpdateMovieDto } from './movies.dto';
import { movies } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<movies> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(): Promise<movies[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<movies | null> {
    return this.moviesService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Promise<movies | null> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<movies | null> {
    return this.moviesService.delete(id);
  }
}
