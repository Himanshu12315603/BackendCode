import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('You are succesfully Loged in!')
})

app.get('/jokes', (req, res) => {

  const jokes = [
      {
        "id": "1",
        "firstName": "Tom",
        "lastName": "Cruise",
        "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
      },
      {
        "id": "2",
        "firstName": "Maria",
        "lastName": "Sharapova",
        "photo": "https://jsonformatter.org/img/Maria-Sharapova.jpg"
      },
      {
        "id": "3",
        "firstName": "Robert",
        "lastName": "Downey Jr.",
        "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
      }
  ]
  res.send(jokes);
})

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})
