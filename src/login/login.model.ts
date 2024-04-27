import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserModule } from '../user/user.model'; // Importe o UserModule aqui

@Module({
  imports: [UserModule], // Adicione o UserModule aos imports
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}

