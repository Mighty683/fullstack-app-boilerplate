import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1610799535688 implements MigrationInterface {
    name = 'CreateUserTable1610799535688'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "user_name" character varying(255) NOT NULL, "mail" character varying(255) NOT NULL, "password_hash" text NOT NULL, "role" character varying(255) NOT NULL, CONSTRAINT "UQ_7395ecde6cda2e7fe90253ec59f" UNIQUE ("mail"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "user"`);
    }

}
