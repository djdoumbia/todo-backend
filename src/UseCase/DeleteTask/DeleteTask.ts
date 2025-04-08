import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class DeleteTask
  implements UseCase<Promise<boolean>, [id: number]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(id: number) {
    try {
      await this.taskRepository.delete(id);

      return true;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
