const { response } = require('express');
const User = require('../models/User');

const createUser = async( req, res = response ) => {
    console.log(req.body);
    

    try {
        const { email } = req.body;
        const creationDate = new Date();
        let user = await User.findOne({ email });

        if( user ){
            return res.status(400).json({
                ok:false,
                msg:'This user already exists.'
            });
        }

        user = new User( req.body );
        user.creationDate = creationDate;

        await user.save();

        res.status(201).json({
            ok: true,
            newUser: user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }

}

module.exports = { createUser }