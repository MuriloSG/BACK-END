import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('service')
class Service {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column('int')
  duration: number;

  @Column(
    {
      type: 'enum',
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE'
    }
  )
  status: string;

  /*
    Create atribute image.
  */
}
