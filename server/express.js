if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
import express from 'express'
import Template from './../template'
import {compile} from './devBundle'
import path from 'path'
const CURRENT_WORKING_DIRECTORY = process.cwd()
const app = express()
compile(app)

app.use('/dist',express.static(path.join(CURRENT_WORKING_DIRECTORY,'dist')))
app.get('/',(req,res)=>{
    res.status(200).send(Template())
})


export default app