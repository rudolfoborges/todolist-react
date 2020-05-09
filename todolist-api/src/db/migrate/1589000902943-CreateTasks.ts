import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTasks1589000902943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false
          },
          {
            name: 'user_id',
            type: 'int',
            isNullable: false,
          }
        ]
      }));

      await queryRunner.createForeignKey(
        'tasks',
        new TableForeignKey({
          name: 'tasks_users_fk',
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('tasks', 'tasks_users_fk');
      await queryRunner.dropTable('tasks');
    }

}
