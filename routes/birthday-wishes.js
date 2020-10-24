const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();

router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { name, msgTitle, msgContent } = req.body;
    let x = new Date();
    console.log(x.toDateString())
    const newUser = new User({
        msgTitle,
        name,
        msgContent,
        date: x.toDateString()
    });
    console.log(newUser)
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            msgTitle,
            msgContent
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}).sort({date:1});
        console.log(typeof users)
        return res.json(
            users
        );
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.post('/delete', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { messageId } = req.body;
    try {
        await User.deleteOne({_id:messageId});
        res.json({
            message: 'Data successfully deleted',
            statusCode: 200
        });
        console.log('deleted')
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});

module.exports = router;