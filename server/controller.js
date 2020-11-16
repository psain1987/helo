const bcrypt = require ('bcrypt');

module.exports = {

    register: async (req, res) => {

        const db = req.app.get('db');
        const { username, password } = req.body;
        const [foundUser] = await db.check_user(username);
        if (foundUser) {
            return res.status(400).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( password, salt);
        const [newUser] = await db.add_user([username, profile_pic, hash]);
        req.session.user = {
            id: newUser.id,
            username: newUser.username,
            profile_pic: newUser.profile_pic
        }
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {

        const db = req.app.get('db');
        const { username, password } = req.body;
        const [foundUser] = db.check_user(username);
        if (!foundUser){
            return res.status(401).send('Login credentials incorrect')
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated){
            req.session.user = {
                id: foundUser.id,
                username: foundUser.username,
                profile_pic: foundUser.profile_pic
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Incorrect login credentials')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}