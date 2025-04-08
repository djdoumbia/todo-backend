import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TaskController from './Controllers/TaskController';
import { PrismaService } from './PrismaService';
import TaskRepository from './Repositories/TaskRepository';
import UseCaseFactory from './UseCase/UseCaseFactory';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, UseCaseFactory],
})
export class AppModule {}
