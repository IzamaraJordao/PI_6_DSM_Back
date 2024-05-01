// genre.dto.ts

import { IsNotEmpty } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  genre!: string;

  @IsNotEmpty()
  movieId!: string;

  constructor(createGenreDto: CreateGenreDto) {
    Object.assign(this, createGenreDto);
  }
}

export class UpdateGenreDto {
  @IsNotEmpty()
  genre!: string;

  constructor(updateGenreDto: UpdateGenreDto) {
    Object.assign(this, updateGenreDto);
  }
}
