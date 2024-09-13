const express = require('express');
const app = express();
const user =require('./routes/user')
app.use(express.json())

app.use(user)
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server runnning on  port 3000");
    }
})