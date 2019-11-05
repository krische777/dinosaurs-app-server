const { Router } = require('express')
const Dinosaur = require('./model')
const auth=require('../auth/middleware')
const router = new Router()
const sequelize = require('../db')

router.get('/dinosaur', (req, res, next) => {

    Dinosaur
        .findAll({})
        .then(dinosaurs =>{
            res.status(200).send(dinosaurs)
        })
        .catch(next)
})


router.post('/dinosaur', auth, (req, res, next) => {
    let newDinosaur = {
        dinosaurName: req.body.dinosaurName,
        dinosaurPic: req.body.dinosaurPic,
    }
    if (req.body.dinosaurName) {
        Event
            .create(newDinosaur)
            .then(dinosaur => {
                res.status(200).send(dinosaur)
            })
            .catch(next)
    }
    else {
        res.status(400).end()
    }
    })

module.exports = router