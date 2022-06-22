import {
  Inject,
  Provide,
  Controller,
  Post,
  Body,
  ALL,
  Query,
  Get,
  Param,
} from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate';

import { CreateClassroomDTO } from '../dto/class';
import { QueryParamDTO } from '../dto/base';
import { ClassroomService } from '../service/classroom';
import { BaseController } from '../../core/baseController';

@Provide()
@Controller('/classroom', {
  tagName: 'Classroom',
  description: '班级管理控制器',
})
export class ClassroomController extends BaseController {
  @Inject()
  protected service: ClassroomService;

  @Post('/', { summary: '添加班级', description: '' })
  @Validate()
  async create(
    @Body(ALL)
    createParams: CreateClassroomDTO
  ) {
    const classroom = await this.service.create(createParams);
    return classroom;
  }

  @Get('/', { summary: '分页获取班级列表', description: '' })
  @Validate()
  async index(
    @Query(ALL)
    queryParam: QueryParamDTO
  ) {
    const { page, limit } = queryParam;
    const users = await this.service.findAll(page, limit);
    return users;
  }

  @Get('/destroy/:classroomId', {
    summary: '删除管理员',
    description: '删除管理员',
  })
  @Validate()
  async destroy(@Param('classroomId') classroomId: number) {
    const res = await this.service.destroyClassroomAndUser(classroomId);
    return this.success(res);
  }
}
