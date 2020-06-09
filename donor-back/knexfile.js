// Update with your config settings.

module.exports = {
  
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      database: 'startup-16',//startup-16
      user:     'postgres',
      password: 'discadora'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
