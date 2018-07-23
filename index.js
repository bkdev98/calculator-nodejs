const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));

const calculator = require('./calculator');

app.get('/', (req, res) => res.render('calculator', {
  title: 'Simple Calculator',
}))

app.post('/calculate', (req, res) => {
  const { operand1, operator, operand2 } = req.body;
  res.render('calculator', {
    title: 'Simple Calculator',
    result: calculator[operator](operand1, operand2),
    operand1,
    operand2,
    operator,
  })
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))