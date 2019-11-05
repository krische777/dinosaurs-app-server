const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()

router.post('/signup', (req, res, next) => {
  const user = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  }

  if (user.username == null || user.password == null ||
    !user.username || !user.password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  } else {
    User.findOne({ where: { username: user.username } })
      .then(user1 => {
        if (!user1) {
          return User.create(user)
            .then(user2 => res.json(user2))
        } else {
          res.status(400).send({
            message: ' user exist'
          })
        }
      })
      .catch(next)
  }

})

module.exports = router