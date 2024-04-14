const userLogin = require('../controllers/loginCtrls');

const login = async(req, res) => {
    const { email, password } = req.params;
    try {
        if(!email || !password){
            return res.status(400).send('Missing data to log in');
        };
        
        const user = userLogin(email, password);
        if(!user){
            return res.status(404).send('User not found')
        };
        if(user.password !== password){
            return res.status(403).send('Incorrect password')
        };
        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


module.exports = {
    login
}