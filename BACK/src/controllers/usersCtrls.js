const { User } = require('../db');

const getUsers = async() => {
    const users = await User.findAll();
    return users;
};

const postUser = async(name, nickname, email, emailVerified, password) => {
    // const [ user, created ] = await User.findOrCreate({where: { email }, defaults:{ password }});
    // return res.status(200).json({ user, created });

    // const user = new User({
    //     name,
    //     nickname,
    //     email,
    //     emailVerified
    // });
    const user = {
        name,
        nickname,
        email,
        emailVerified,
        password
    }
    const newUser = await User.create(user);
    return newUser;
};

const putUser = async(id, name, nickname, emailVerified, active) => {
    const update = {};

    if (name !== null && name !== false) {
        update.name = name;
    };

    if (nickname !== null && nickname !== false) {
        update.nickname = nickname;
    };

    if (emailVerified !== null && emailVerified !== false) {
        update.emailVerified = emailVerified;
    };

    if (active !== null && active !== false) {
        update.active = active;
    };

    // if (Array.isArray(favorites) && favorites.length > 0) {
    //     update.favorites = favorites;
    // };
    // const updated = await User.findOneAndUpdate({ _id }, update, { new: true });
    // const updated = await User.findOneAndUpdate({ id }, { $set: { active } }, { new: true });

    return update;
};

const deleteUser = async(id) => {
    // const deleted = await User.deleteOne({id});
    const deleted = await User.findByPk(id);
    return deleted;
};


module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
};