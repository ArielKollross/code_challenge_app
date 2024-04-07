import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>
  ) {}

  async create(createExamDto: CreateExamDto) {
    const exam = this.examRepository.create();

    await this.examRepository.save(exam);

    return exam;
  }

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find();
  }

  async findOne(id: string): Promise<Exam | undefined> {
    return await this.examRepository.findOne({ where: { id } });
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  async remove(id: number): Promise<void> {
    await this.examRepository.softDelete(id);
  }
}
