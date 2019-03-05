const db = require("../../models/index");
let filterBy = {};
const AllUserTables = {
  attributes: [["id", "userId"], "username", "firstName", "lastName", "email"],
  include: [
    {
      model: db.UserCompany,
      // required: true, // <-- JOIN to only return User where there is a matching UserCompany
      include: [
        {
          model: db.Company
        },
        {
          model: db.UserRole,
          include: [
            {
              model: db.UserRight,
              through: {
                attributes: []
              }
            }
          ]
        }
      ]
    }
  ],
  where: filterBy
};

function getUserData(userId) {
  if (userId) {
    filterBy = { id: req.userId };
  }
  db.User.findAll(AllUserTables).then(users => {
    console.log(users);
    return users;
    // res.json(users);
  });
}

module.exports = getUserData;
