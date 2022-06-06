const playersRouter = require('express').Router()

module.exports = playersRouter

const data = require('../data/top100_NBA')
// console.log(Object.keys(data))
// const playerKeys = Object.keys(data).map((n) => {
//     return n.split(' ').join('').toLowerCase()
// })
// console.log(playerKeys.includes('stephcurry'))
// console.log(Object.keys(data).length)

playersRouter.param('playerName', (req,res,next,name) => {
    const playerKeys = Object.keys(data).filter((n) => {
        return data[n].player.toLowerCase().includes(name)
    })
    
    const playerObjects = {}
    playerKeys.forEach(element => {
        playerObjects[element] = data[element]
    })

    if (playerKeys){
        req.playerName = playerObjects
        next()
    } else {
        res.status(404).send();
    }
})


playersRouter.get('/', (req,res,next) => {
    res.send(data)
})

playersRouter.get('/:playerName', (req,res,next) => {
    res.send(req.playerName)
})

playersRouter.post('/', (req,res,next) => {
    // console.log(req.body)
    data[Object.keys(data).length + 1] = req.body
    // console.log(Object.keys(data).length)
    res.status(201).send(req.body)
})


