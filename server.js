const express = require('express')
const app = express()

const { connectingdb, getDb } = require('./db')
let db = getDb;
connectingdb((err) => {
    if (!err) {
        app.listen(3000)
        console.log('app runnig');
    }
    db = getDb()

})
app.get('/', (req, res) => {
    res.send('its working')
})
app.get('/employe', (req, res) => {
    let employes = []
    db.collection('employe')
        .find()
        .sort({ name: 1})
        .forEach(employe => employes.push(employe))
        .then(() => {
            res.json(employes)
        })

})
