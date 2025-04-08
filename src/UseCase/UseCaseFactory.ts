import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';

type UseCases = GetAllTasksUseCase | DeleteTask;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
