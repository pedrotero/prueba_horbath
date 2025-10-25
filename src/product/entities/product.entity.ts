
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('varchar', { length: 500, nullable: true })
  description: string | null;

  @Column({
    type:'numeric',
    transformer: {
    to: (value: number) => value, // what to store
    from: (value: string) => Number(value), // what to return
  },
  })
  price: number;

  @Column('integer')
  quantity: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
} 
