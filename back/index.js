const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res, next) => {
    res.send({ text: '안녕하세요~!!' })
})

app.listen(3010, () => {
    console.log('3010번에서 실행중입니다')
})
