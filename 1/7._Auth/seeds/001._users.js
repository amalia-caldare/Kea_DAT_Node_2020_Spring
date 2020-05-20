
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'admin', password: '$2b$12$be6phplKjcm8XFbxVLBCVeaTM28QCzwgF8.OwLwMgJQWF2U4KNO/C'},
        {username: 'seconduser', password: '$2b$12$be6phplKjcm8XFbxVLBCVeaTM28QCzwgF8.OwLwMgJQWF2U4KNO/C'}
      ]);
};
