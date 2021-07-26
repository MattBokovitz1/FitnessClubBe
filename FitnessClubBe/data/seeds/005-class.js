exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("class").insert([
        {
          id: 1,
          name: "yoga",
          instructor_name: "Josh",
          type: "yoga",
          intensity: "high",
          location: "vegas",
          max_size: 22,
          duration: 1.0,
          date: "02/10/2020",
          img_url:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1094&q=80",
        },
        {
          id: 2,
          name: "meditation",
          instructor_name: "James",
          type: "meditation",
          intensity: "low",
          location: "Atlanta",
          max_size: 12,
          duration: 2.4,
          date: "02/10/2020",
          img_url:
            "https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1022&q=80",
        },
        {
          id: 3,
          name: "cardio running",
          instructor_name: "Alexis",
          type: "cardio",
          intensity: "medium",
          location: "Nashville",
          max_size: 21,
          duration: 1.13,
          date: "02/10/2020",
          img_url:
            "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1063&q=80",
        },
      ]);
    });
};
