
exports.up = function(knex) {
    return knex.schema.createTable('telefone', table => {
        table.increments('id').primary()
        table.string('numero').notNull()
        table.integer('id_doadores').references('id').inTable('doadores')
        table.integer('id_agendamento').references('id').inTable('agendamentos')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefone')
  
};
