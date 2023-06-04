import { Controller, Get, Post,Delete,Patch,Body,Dependencies,Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
@Dependencies(UserService)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user : User ) {
    return this.userService.create(user);
  }
  @UseGuards(AuthGuard)
  Delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}