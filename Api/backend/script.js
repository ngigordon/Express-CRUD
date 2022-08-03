const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
// const cors = require('cors');
const info = require('./data.json');
// console.log(info.posts);

app.use(express.json())


app.get('/',(request,response) =>{
    response.send('<a href="./ui/index.html">Welcome</a>')
})

app.get('/ui/*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname,req.url))
    // console.log(__dirname);
})

app.post('/api/register',(req,res) => {
    const data = req.body
    let finame = 1
    console.log(req.body); 
    fs.writeFile(`./store/user${finame}.json`,JSON.stringify(data),(err)=>{
        if(err) throw Error(err)
    })                 
    // res.send("hello world")
    finame++
    console.log(finame);
})

app.post('/api/login',(req,res) => {
    console.log("i have been hit");
    const folderName = req.body.username
    console.log('*****************************');
    // console.log(`url of request is :${req.url}`);
    // console.log(__filename);
    // console.log(__dirname);
    // console.log(req.headers['content-type']);
    console.log(path.join(__dirname,`users/${folderName}/info.json`));
    console.log('*****************************');

    try{
        const userData = require(path.join(__dirname,`users/${folderName}/info.json`))
      if(userData.password === req.body.password){
        console.log('you are in my bro');
        res.send({
            status:true,
            msg:"you can go on you are login to this system"
        })
        
      }else{
        console.log('out are you my bro dont worry next time you gonna be in');
        res.send({
            status:false,
            msg:"sorry dude you are not a member of this committee"
        })
      }
    }catch(err){
        console.log(err);
        res.send({
            status:false,
            msg:"sorry dude you are not a member of this committee"
        })
    }

  
})

app.listen(5500, (err) => {
        // if(err) throw new Error(err)
        console.log(`http://localhost:5500/`)
    })

app.post('/api/posts', (req, res) => {
    let { body, title } = req.body
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