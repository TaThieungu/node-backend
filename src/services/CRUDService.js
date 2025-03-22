const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.execute('select * from Users Where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}

const updateUserById = async (email, myname, city, userId) => {
    const [results, fields] = await connection.execute(
        `UPDATE Users
        SET email = ? , name = ?, city = ?
        WHERE id = ?`,
        [email, myname, city, userId],

    );
}

module.exports = { getAllUsers, getUserById, updateUserById }