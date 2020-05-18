
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'admin', password: '1234'},
        {username: 'seconduser', password: '2200'}
      ]);
};
