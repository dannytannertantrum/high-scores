exports.up = async (knex) => {
  await knex.schema.withSchema('high_scores').createTable('scores', (table) => {
    table.increments()
    table.string('name', 20).notNullable()
    table.bigInteger('score').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('scores')
};
