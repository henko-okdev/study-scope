import Sequelize from 'sequelize';
import sequelizeConnection from './../utils/sequelize-connection';

const User = sequelizeConnection.define('user', {
  username: {
    type: Sequelize.STRING,
    field: 'username'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  },
  schoolId: {
    type: Sequelize.INTEGER,
    field: 'school_id'
  },
  type: {
    type: Sequelize.STRING,
    field: 'type'
  },
  studentKey: {
    type: Sequelize.STRING,
    field: 'student_key'
  }
}, {
  freezeTableName: true
});

User.findByUsername = function(username, callback) {
  User.find({
    where: { username : username }
  }).then((user) => callback(user, null));
};

User.comparePassword = function (candidatePassword, password, callback) {
  callback(null, candidatePassword == password);
};

User.sync();

module.exports = User;