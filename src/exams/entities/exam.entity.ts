import { Question } from 'src/questions/entities/question.entity';
import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'exams' })
export class Exam {
  @PrimaryColumn('uuid')
  id: string;

  @ManyToMany(() => Question, (question) => question.exams)
  @JoinTable()
  questions: Question[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
