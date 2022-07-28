const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
// const cors = require('cors');
const info = require('./data.json');
// console.log(info.posts);

app.use(express.urlencoded({ extended: true }))


app.get('/',(request,response) =>{
    response.send('<a href="./ui/index.html">Welcome</a>')
})

app.get('/ui/*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname,req.url))
})

app.get('/api/posts',(req,res) =>{

}).listen(5000, () => {
        console.log(`http://localhost:5000/`)
    })

app.post('/api/posts', (req, res) => {
    let { body, title } = req.body
    app
    info.posts.push({
        id: info.posts[info.posts.length - 1].id + 1,
        body,
        title
    })
    fs.writeFile('data.json', JSON.stringify(info), (err) => {
        if (err) throw Error(err)
        console.log('File has been saved.');

    })

})