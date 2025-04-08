import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from './SaveTask/SaveTaskDto';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import UpdateTask from './UpdateTask/UpdateTask';

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase | UpdateTask;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
