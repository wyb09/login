"use strict";

export default (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {
    tableName: 'bz_admin',
    timestamps: false,
    classMethods: {
      associate(models) {

  }
}
});

return User;
};
