const { User } = require('../db');


const userLogin = async (email, password) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(user === null) {
            return false;
        };

        if(user.dataValues.active === false) {
            return "Banned user."
        };

        return (user.dataValues.password === password);
    } catch (error) {
        return { error: error.message };
    };
};


module.exports = userLogin;