const { User } = require('../db');


const userLogin = async (email, password) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return false;
        };
        return (user.password === password);
        // const passwordMatch = (user.password === password);
        // return passwordMatch;
    } catch (error) {
        return { error: error.message };
    };
};


module.exports = userLogin;