exports.up = function (knex) {
  return knex.schema.createTable('users', (usersTable) => {
    usersTable.increments('user_id');
    usersTable.string('username').notNullable();
    usersTable.string('email').notNullable();
    usersTable.string('first_name').notNullable();
    usersTable.string('last_name').notNullable();
    usersTable.string('location').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
