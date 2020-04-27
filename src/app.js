const express = require('express')
const path = require('path')
const hbs = require('hbs')
const findhospital = require('./utils/hospitaldata')
const srilankaInfor = require('./utils/srilankaInfo')

const port = process.env.PORT || 3000

const app = express()

const partialPath = path.join(__dirname, '../templates/partials')
const viewpath = path.join(__dirname, '../templates/views')
const publicPath = path.join(__dirname, '../public/')

hbs.registerPartials(partialPath)
app.set('views', viewpath)
app.set('view engine', 'hbs')

app.use(express.static(publicPath))

app.get('/hospital', (req, res) => {
    res.render('hospital' ,{
        title : "Covid-19",
        name : "Ishanka Divanjana"
    })
})

app.get('', (req,res) => {
    res.render('index', {
        title : "Covid-19",
        name: "Ishanka Divanjana",
        description: "Covid-19 local / global status"
    })
})

app.get('/srilanka', (req, res) => {
    srilankaInfor((data) => {
        return res.send(data)
    })
})

app.get('/hosname', (req, res) => {
    if(!req.query.address){
        return res.send("please enter location")
    }

    findhospital(req.query.address, (data) => {
        return res.send(data)
    })
})

app.listen(port, () => {
    console.log("server is up 3000" + port)
})