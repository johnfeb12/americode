module.exports = function (sequelize, DataTypes) {
    var contactMsg = sequelize.define("contactMsg", {
        name: {
            type: DataTypes.STRING,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            allownull: false
        },
        msgbody: {
            type: DataTypes.STRING,
            allownull: false
        },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        replied: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });


    return contactMsg;
};
//id
//full name
// email
// msgbody
//read: bool
//replied : bool