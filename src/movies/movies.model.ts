// movie.model.ts

import { Prisma } from '@prisma/client';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
    imports: [],
    controllers: [MoviesController],
    providers: [MoviesService],
})

export class MoviesModule {}