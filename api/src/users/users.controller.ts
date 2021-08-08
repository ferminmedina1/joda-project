import { Controller, Get, Param, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Users } from './users.entity';
import { UserService } from './users.service';
import { hash, compare } from 'bcrypt'
@Controller('users')
export class UsersController {
    constructor(private service: UserService){}
    @Post()
    async create(@Body('user') user: Users) {
        user.password = await hash(user.password.toString(), 10);
        
        return await this.service.create(user).catch(err => {
            throw new HttpException({
              message: "Email already taken"
            }, HttpStatus.BAD_REQUEST);
          })
    }
    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string) {
        const user = await this.service.findByEmail(email);
        if (user)
            return await compare(password, user.password);
        
        throw new HttpException({
            message: "User not found"
        }, HttpStatus.FORBIDDEN);
    }
}
