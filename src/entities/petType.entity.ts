import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PetType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  label: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDate: Date;
}
