const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;

const expenses = [
  {id: 1, description: 'Groceries on 5 Aug', price: 368.46},
  {id: 2, description: 'Groceries on 19 Aug', price: 480.85},
  {id: 3, description: 'Groceries on 1 Sept', price: 289.12},
  {id: 4, description: 'Groceries on 3 Oct', price: 189.56},
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/expenses/list', (req, res) => {
  res.send(expenses);
});

app.get('/expenses/:id', (req, res) => {

  const id = parseInt(req.params.id);
  if (id <= 0) {
    return res.status(400).send({message: 'Id is invalid'});
  }

  const expense = expenses.find((expense) => {
    return expense.id === id;
  });

  if (expense === undefined) {
    return res.status(404).send({message: 'Id not found'});
  }

  return res.send(expense);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});