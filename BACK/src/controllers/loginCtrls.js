const { User } = require('../db');


const userLogin = async (email, password) => {
    // console.log(email);
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if(user === null) {
            return false;
        };
        return (user.dataValues.password === password);
    } catch (error) {
        return { error: error.message };
    };
};


module.exports = userLogin;