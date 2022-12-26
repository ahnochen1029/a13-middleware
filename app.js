const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(function (req, res, next) {
  console.log('-----------------------------')
  console.log('Request Type:', req.method);
  console.log('Request URL:', req.originalUrl)
  next();
});

app.get('/', function (req, res) {
  let dateReq = Date.now()
  console.log('Time Req:', Date(dateReq).toString());
  res.render('index');
  let dateRes = Date.now()
  console.log('Time Res:', Date(dateRes).toString());
  const time = dateRes - dateReq
  console.log('total time:', time, "ms")
  return
})


app.get('/new', (req, res) => {
  let dateReq = Date.now()
  console.log('Time Req:', Date(dateReq).toString());
  res.render('index');
  let dateRes = Date.now()
  console.log('Time Res:', Date(dateRes).toString());
  const time = dateRes - dateReq
  console.log('total time:', time, "ms")
  return
})

app.get('/:id', (req, res) => {
  let dateReq = Date.now()
  console.log('Time Req:', Date(dateReq).toString());
  res.render('index');
  let dateRes = Date.now()
  console.log('Time Res:', Date(dateRes).toString());
  const time = dateRes - dateReq
  console.log('total time:', time, "ms")
  return
})

app.post('/', (req, res) => {
  let dateReq = Date.now()
  console.log('Time Req:', Date(dateReq).toString());
  res.render('index');
  let dateRes = Date.now()
  console.log('Time Res:', Date(dateRes).toString());
  const time = dateRes - dateReq
  console.log('total time:', time, "ms")
  return
})

app.listen(port, () => {
  console.log(`App running on port http:/localhost:${port}`)
})