// Update with your config settings.

module.exports = {
  
    client: 'postgresql',
    connection: {
      database: 'startup-16',//startup-16
      user:     'postgres',
      password: 'karate02'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
