import { Controller, Get, Post,Delete,Patch,Body,Dependencies,Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
@Dependencies(UserService)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user : User ) {
    return this.userService.create( CreateUserDto.hashPassword(user));
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() user : User) {
    return this.userService.update(id,user);
  }
}