exports.up = function (knex) {
  return knex.schema.createTable("class", (tbl) => {
    tbl.increments();

    tbl.string("name").notNullable().unique().index();

    tbl.string("instructor_name").notNullable();

    tbl.string("type").notNullable();

    tbl.string("intensity").notNullable().index();

    tbl.string("date").notNullable().index();

    tbl.string("location").notNullable().index();

    tbl.integer("max_size").notNullable();
    tbl.float("duration").notNullable();
    tbl.integer("signedUp").defaultTo("0");
    tbl.integer("current_members").defaultTo(0);
    tbl.string("img_url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("class");
};
