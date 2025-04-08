import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import DeleteTask from '../UseCase/DeleteTask/DeleteTask';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase'; // Assurez-vous d'avoir ce cas d'utilisation
import UseCaseFactory from '../UseCase/UseCaseFactory';
import UpdateTask from 'src/UseCase/UpdateTask/UpdateTask';

@Controller()
export default class TaskController {
  [x: string]: any;
  constructor(private readonly useCaseFactory: UseCaseFactory) {}

  @Get('/tasks')
  async getAll() {
    return (await this.useCaseFactory.create(GetAllTasksUseCase)).handle();
  }

  @Post('/tasks')
  async create(@Body() dto: SaveTaskDto) {
    return (await this.useCaseFactory.create(SaveTaskUseCase)).handle(dto);
  }

  @Put('/tasks/:id')
  async update(@Param('id') id: string, @Body() dto: SaveTaskDto) {
    return (await this.useCaseFactory.create(UpdateTask)).handle(Number(id), dto);
  }

  @Delete('/tasks/:id')
  async delete(@Param('id') id: string) {
    return (await this.useCaseFactory.create(DeleteTask)).handle(Number(id));
  }
  @Get('/search')
  async searchTasks(@Query('q') query: string) {
    return this.taskRepository.search(query);
  }
  
}
