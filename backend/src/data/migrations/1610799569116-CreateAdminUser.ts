import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdminUser1610799569116 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public."user" (user_name, mail, password_hash, "role") VALUES('Admin', 'tomasz93szarek@gmail.com', '$2b$10$xfddnyPxX0ey1SSyXyTT1OUATH/7Pf3XhJbKhRcuaJ.fWBu.Yu77W', 'admin');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public."user" WHERE mail = 'tomasz93szarek@gmail.com';`);
  }
}
