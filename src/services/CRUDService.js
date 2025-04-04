const connection = require("../config/database")
const User = require("../models/user")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userId) => {

    let results = await User.findById(userId).exec();
    console.log(results);
    // let user = results && results.length > 0 ? results[0] : {}

    return results;
}

const updateUserById = async (email, myname, city, userId) => {
    const res = await User.updateOne({ _id: userId }, { email: email, name: myname, city: city });
}

const deleteUserById = async (userId) => {
    // const [results, fields] = await connection.execute(
    //     `DELETE FROM Users WHERE id = ?`,
    //     [userId],
    // );

    await User.deleteOne({ _id: userId });
}



module.exports = {
    getAllUsers, getUserById,
    updateUserById, deleteUserById
}