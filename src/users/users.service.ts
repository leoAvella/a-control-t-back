import { Injectable } from '@nestjs/common';
import { ResponsePagination } from 'src/common/interfaces/params';
import { findWithPaginationAndFilters } from 'src/common/utils/query';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { userParams } from './params/userTableParams';
import { UserParamsDto } from './dto/user-params.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(params: UserParamsDto): Promise<ResponsePagination> {
    return findWithPaginationAndFilters(
      this.userRepository,
      params,
      'funcionario',
      userParams,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
