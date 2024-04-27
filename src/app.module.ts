import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.model';
import { UserModule } from './user/user.model';

@Module({
  imports: [LoginModule, UserModule],
})
export class AppModule {}