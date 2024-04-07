import { Exam } from 'src/exams/entities/exam.entity';
import { 
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  body: string;

  @Column({ nullable: false, type: 'varchar' })
  answer: string;

  @ManyToMany(() => Exam, (exam) => exam.questions)
  exams: Exam[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
