import { Controller, Get, Body, Param, Post, Redirect } from '@nestjs/common';
import { Request } from 'express';
import {CreateClassDto} from './create-cats.dto';


@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateClassDto) {
    return createCatDto;
  }

  @Get()
  findall(): string {
    return 'This action returns all cats!!!';
  }

  @Get(':name')
  hello(@Param('name') name): string {
    return `meow, ${name}`;
  }


}
  