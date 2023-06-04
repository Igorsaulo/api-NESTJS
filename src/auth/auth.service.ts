import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(email : string,password : string) {
    const user = await this.usersService.findOne(email);
    if (!await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = {
        id: user.id,
        avatar: user.avatar, 
        name: user.name,
        plan: user.plan,
        email: user.email,
       };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}