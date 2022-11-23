const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routers/router.js');
const mongoose = require('mongoose');
const multer = require('multer')


app.use(bodyParser.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://functionup:K3OCHkFxsJsV53MA@cluster0.e4rwd2y.mongodb.net/group45-DB",
{
    useNewUrlParser: true //it will depriciate the vale of this links if this link hv some bugs so it will redirect to old link
})
.then( () => console.log("MongoDb is connected with Group 45"))
.catch ( err => console.log(err) );

app.use('/',route);

app.listen(process.env.PORT || 3000, (err)=> {
    console.log("Express is running on port ",(process.env.PORT || 3000))
});