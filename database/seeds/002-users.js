
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('users').insert([
        {username: 'alberto', password:'pass', role_id: 4},
        {username: 'anthony', password:'pass', role_id: 4},
        {username: 'michael', password:'pass', role_id: 4}
      ]);
  
};
