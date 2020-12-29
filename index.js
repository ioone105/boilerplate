const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/key')

const {User} = require("./models/User");

// aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// appliction/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하쇼 잘되라12')
})

app.post('/resister', (req, res) => {

  // 회원가입할때 필요한 정보들을 client에서 가져오면
  // 그것을 데이터 베이스에 넣어준다

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})