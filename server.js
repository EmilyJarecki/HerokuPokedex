const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

//need to establish this connection
require('./config/db.connection')

const pokemonController = require('./controllers/pokemon_controller')

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes middleware, this variable comes from THIS page on line 6
app.use('/pokemon', pokemonController)


//root route (redirect)
app.get('/', (req,res)=>{
    res.redirect('/pokemon')
})

// basic error handling for bad product indexes
app.get('/error', (req,res)=>{
    res.status(500).send('something went wrong...')
})

// error handling using the next argument + middleware
// next(Error('message'))
app.use((error, req,res,next)=>{
    console.error("inside middleware")
    if(error){
        return res.status(404).send(error.message)
    }
    next()
})

// wild card / 404 if not using error handling middleware 
app.get('*', (req,res,next)=>{
    if(req.error){
        res.status(404).send(`Error: ${req.error.message}`)
    }else {
        res.redirect('/error/')
    }
})


app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`))

