const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(function (req, res, next) {
  const d = Date(Date.now())
  console.log('Time:', d.toString());
  console.log('Request Type:', req.method);
  console.log('Request URL:', req.originalUrl)
  next();
});

app.get('/', (req, res) => {
  // res.send('列出全部 Todo')
  res.render('index')
})

app.get('/new', (req, res) => {
  // res.send('新增 Todo 頁面')
  res.render('index')
})

app.get('/:id', (req, res) => {
  // res.send('顯示一筆 Todo')
  res.render('index')
})

app.post('/', (req, res) => {
  // res.send('新增一筆  Todo')
  res.render('index')
})

app.listen(port, () => {
  console.log(`App running on port http:/localhost:${port}`)
})