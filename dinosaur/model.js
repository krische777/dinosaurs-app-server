const Sequelize=require('sequelize')
const sequelize=require('../db')

const Dinosaur=sequelize.define('dinosaur', {
    dinosaurName: {
        type: Sequelize.STRING,
        allowNull:false
    },
    dinosaurPic: {
        type:Sequelize.STRING,
        allowNull:false
    }
    
})

module.exports=Dinosaur