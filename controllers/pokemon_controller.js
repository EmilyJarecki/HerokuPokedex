const express = require('express')
const router = express.Router()

const pokemonController = require('../models')

router.use(express.json())

//index - GET
router.get('/:id', async (req, res, next) => {
    try{
        const foundProduct = await pokemonController.Product.findById(req.params.id)
        console.log(foundProduct)
        res.status(200).json(foundProduct)
    }catch(error){
        console.error(error)
        return next(error)
        }
})

//show - GET
router.get('/', async(req, res, next)=>{
    try {
        const products = await pokemonController.Product.find({})
        return res.status(200).json(products)
    }catch(error){
        console.error(error)
        return next(error)
    }
})

//create - POST
router.post('/', async (req, res, next)=> {
    try{
        const createdProduct = await pokemonController.Product.create(req.body)
        console.log(createdProduct)
        res.status(201).json(createdProduct)
    }catch(error){
        console.log(error)
        return next(error)
    }
})

//update- PUT
router.put('/:id', async(req, res, next)=>{
    try{
        const updatedProduct = await pokemonController.Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedProduct)
        return res.status(200).json(updatedProduct)
    }catch(error){
        console.error(error)
        return next(error)
    }
})

//destroy- DELETE
router.delete('/:id', async(req,res, next)=> {
    try {
        const deletedProduct = await pokemonController.Product.findByIdAndDelete(req.params.id)
        console.log(deletedProduct)
        res.redirect('/pokemon')
    }catch(error){
        console.error(error)
        return next(error)
    }
    
})

module.exports = router