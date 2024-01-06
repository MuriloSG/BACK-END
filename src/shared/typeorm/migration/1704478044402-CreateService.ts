import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateService1704478044402 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    /* Create UUID postgress*/
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryRunner.createTable(new Table({
      name: 'service',
      columns: [
        {
          name: 'uuid',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'price',
          type: 'decimal',
          precision: 10,
          scale: 2
        },
        {
          name: 'duration',
          type: 'int'
        },
        {
          name: 'status',
          type: 'enum',
          enum: ['ACTIVE', 'INACTIVE'],
          default: "'ACTIVE'"
        },
        /*
        Create photos.
        {
          name: 'photos',
          type: ?
        }
        */
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('service');
  }
}
