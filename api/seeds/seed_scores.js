exports.seed = async (knex) => {
  await knex('scores').del()
  await knex('scores').insert([
    {
      id: 1,
      name: 'glc',
      score: 1728390000,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 2,
      name: 'alw',
      score: 238406873,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 3,
      name: 'onm',
      score: 37289059,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 4,
      name: 'yio',
      score: 1190486389,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 5,
      name: 'alw',
      score: 829045033,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }
  ])
}
