import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from '../SaveTask/SaveTaskDto';
import { Prisma } from '@prisma/client';

@Injectable()
export default class UpdateTask
  implements UseCase<Promise<boolean>, [id: number, dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(id: number, dto: SaveTaskDto) {
    try {
      await this.taskRepository.save({ id, data:dto } as unknown as Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>);

      return true;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}