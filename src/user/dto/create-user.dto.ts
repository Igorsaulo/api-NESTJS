import * as bcrypt from 'bcrypt';

export class CreateUserDto {
  constructor(
    public avatar: string,
    public name: string,
    public plan: string,
    public email: string,
    public password: string,
  ) {}

  static hashPassword(data: CreateUserDto): CreateUserDto {
    const hashedPassword = bcrypt.hashSync(data.password, 12);
    return new CreateUserDto(data.avatar, data.name, data.plan, data.email, hashedPassword);
  }
  static async comparePassword(password:string , hashedPassword: string) {
    return await bcrypt.compareSync(password, hashedPassword);
  }
}