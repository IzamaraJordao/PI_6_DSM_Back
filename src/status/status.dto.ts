// status.dto.ts

import { IsNotEmpty } from 'class-validator';

export class CreateStatusDto {
  @IsNotEmpty()
  status!: string;

  @IsNotEmpty()
  movieId!: string;

  constructor(createStatusDto: CreateStatusDto) {
    Object.assign(this, createStatusDto);
  }
}

export class UpdateStatusDto {
  @IsNotEmpty()
  status!: string;

  constructor(updateStatusDto: UpdateStatusDto) {
    Object.assign(this, updateStatusDto);
  }
}
