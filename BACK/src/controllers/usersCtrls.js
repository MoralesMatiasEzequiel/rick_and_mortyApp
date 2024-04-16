const { User } = require('../db');

const getUsers = async() => {
    const users = await User.findAll();
    return users;
};

const getUsersId = async(id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("ID does not exist.");
        };        
        return usersId;
    } catch (error) {
        return { error: error.message };
    }
};

const postUser = async(name, nickname, email, emailVerified, password) => {
    try {
        const newUser = await User.create({
            name: name,
            nickname: nickname,
            email: email,
            emailVerified: emailVerified,
            password: password
        });
        return newUser;
        
    } catch (error) {
        return("Error creating user:", error);
    };
};

const putUser = async(id, name, nickname, email, emailVerified, password, active) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("User not found.");
        };
        const updatedUser = await user.update({
            name: name !== null && name !== false ? name : user.name,
            nickname: nickname !== null && nickname !== false ? nickname : user.nickname,
            email: email !== null && email !== false ? email : user.email,
            emailVerified: emailVerified !== undefined ? emailVerified : user.emailVerified,
            password: password !== null && password !== false ? password : user.password,
            active: active !== undefined ? active : user.active
        }, { where: { id: id }
        });
        return updatedUser;
        
    } catch (error) {
        return { error: error.message };
    }
};

const deleteUser = async(id) => {
    try {
        const user = await User.findByPk(id);
        if (!user || user == null) {
            throw new Error("User not found.");
        };
        const deleted = await User.destroy({ where: {id: id} });
        return `User deleted (ID: ${id}).`
    } catch (error) {
        return { error: error.message };

    }
};


module.exports = {
    getUsers,
    getUsersId,
    postUser,
    putUser,
    deleteUser
};