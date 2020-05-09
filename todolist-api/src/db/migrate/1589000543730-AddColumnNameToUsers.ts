import {MigrationInterface, QueryRunner, TableColumn, } from "typeorm";

export class AddColumnNameToUsers1589000543730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: false,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'name');
    }

}
