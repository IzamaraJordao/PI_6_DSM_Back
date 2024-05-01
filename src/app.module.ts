import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.model';
import { UserModule } from './user/user.model';
import { GenreModule} from './genre/genre.model';
import { MoviesModule } from './movies/movies.model';
import { StatusModule } from './status/status.model';

@Module({
  imports: [LoginModule, UserModule, GenreModule, MoviesModule, StatusModule],
})
export class AppModule {}