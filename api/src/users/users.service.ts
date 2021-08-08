import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private repository: Repository<Users>){}

    findByEmail(email: string): Promise<Users> {
        return this.repository.findOne({email:email});
    }
    create(user: Users) {
        return this.repository.save(user);    
    }
    update(user: Users) {
        this.repository.update(user.id, user);
    }
}
