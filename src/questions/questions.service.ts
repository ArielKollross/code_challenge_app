import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = this.questionsRepository.create({
      body: createQuestionDto.body,
      answer: createQuestionDto.answer,
    });

    await this.questionsRepository.save(question);

    return question;
  }

  async findAll(): Promise<Question[]> {
    return await this.questionsRepository.find();
  }

  async findOne(id: string): Promise<Question | undefined> {
    return await this.questionsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return await this.questionsRepository.update(id, {
      body: updateQuestionDto.body,
      answer: updateQuestionDto.body,
    });
  }

  async remove(id: string): Promise<void> {
    await this.questionsRepository.delete(id);
  }
}
