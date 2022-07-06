import { Observable } from 'rxjs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { IndexUserSwagger } from './swagger/index-user.swagger';
import { LoginDTO, ResponseLoginDTO } from './dtos/login.dto';
import { CreateUserDTO, UserDTO, ResponseUserDTO } from './dtos/User.dto';
import { IndexLoginSwagger } from './swagger/index-login.swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('ping')
  @ApiOperation({ summary: 'It is a dummy enpoint just for connection tests' })
  @ApiResponse({ status: 200, description: 'Returns a dummy pong word' })
  ping() {
    return this.userService.ping();
  }

  @Get('login')
  @ApiOperation({ summary: 'System login' })
  @ApiResponse({ status: 200, description: 'The update was done successfully', type: IndexLoginSwagger})
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'Bank account not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  login(@Body() login: LoginDTO): Observable<ResponseLoginDTO> {
    return this.userService.login(login);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Gets the user`s information' })
  @ApiResponse({ status: 200, description: 'The update was done successfully', type: IndexUserSwagger})
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findUserById(@Param('id') id: string): Observable<ResponseUserDTO> {
    return this.userService.findUserById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Creates a new user' })
  @ApiResponse({ status: 200, description: 'The update was done successfully', type: IndexUserSwagger})
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createUser(@Body() User: CreateUserDTO): Observable<ResponseUserDTO> {
    return this.userService.createUser(User);
  }

  @Put()
  @ApiOperation({ summary: 'Updates the user`s information' })
  @ApiResponse({ status: 200, description: 'The update was done successfully', type: IndexUserSwagger})
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  updateUser(@Body() User: UserDTO): Observable<ResponseUserDTO> {
    return this.userService.updateUser(User);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes an user' })
  @ApiResponse({status: 204, description: 'The update was done successfully'})
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteUser(@Param('id') id: string): Observable<ResponseUserDTO> {
    return this.userService.deleteUser(id);
  }
}
