import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  create(@Body() data: any) {
    return this.loginService.create(data);
  }
}
