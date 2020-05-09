module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'todolist',
  entities: ['src/app/models/**/*.ts'],
  migrations: ['src/db/migrate/**/*.ts'],
  logging: true,
  cli: {
    migrationsDir: 'src/db/migrate',
    entitiesDir: 'src/app/models',
  },
};