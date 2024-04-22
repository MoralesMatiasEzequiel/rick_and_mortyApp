const { User } = require('../db');

const getUsers = async() => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        return { error: error.message };
    }
};

const getUsersId = async(id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("There is no user related to that ID.");
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
        return { error: error.message };
    };
};

const putUser = async(id, name, nickname, email, emailVerified, password) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("User not found.");
        };

        const updatedUser = await user.update({
            name: name || user.name,  //Si algo en name se actualiza, si no hay nada (seria undefined) no hay modificación.
            nickname: nickname || user.nickname,
            email: email || user.email,
            emailVerified: emailVerified !== undefined ? emailVerified : user.emailVerified,
            password: password || user.password,
            // active: active !== undefined ? active : user.active
        }, { where: { id: id }
        });
        return updatedUser;       

    } catch (error) {
        return { error: error.message };
    }
};

const putUserBanned = async(id) => {
    try {
        const user = await User.findByPk(id);

        if (!user || user == null) {
            throw new Error("User not found.");
        };
        await user.update({ active: !user.active });
        console.log(user.active);
        if (user.active === false) {
            return 'Banned user.'
        };
        return "Active user."

    } catch (error) {
        return { error: error.message };
    }
}

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
    putUserBanned,
    deleteUser
};