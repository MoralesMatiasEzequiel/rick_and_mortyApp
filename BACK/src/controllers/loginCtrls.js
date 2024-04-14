const { User } = require('../db');


const userLogin = async(req, res) => {
    const { email, password } = req.params;
    const user = await User.findOne({where: { email }, default:{ password }});
    return user;
}


module.exports = userLogin;