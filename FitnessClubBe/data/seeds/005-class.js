exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("class").insert([
        {}.
      ]);
    });
};
