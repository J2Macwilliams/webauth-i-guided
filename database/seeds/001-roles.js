
exports.seed = function(knex) {
 
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'admin'},
        {name: 'TLs'},
        {name: 'students'},
      ]);
    
};
