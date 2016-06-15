
exports.up = function(knex) {
  return knex.schema.createTable('accounts', table => {
    table.increments('id').primary();
    table.string('name', 127);
    table.enu('type', [
      'asset',
      'capital',
      'liability',
      'income',
      'expense'
    ]);
    table.integer('user_id').references('users.id');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
