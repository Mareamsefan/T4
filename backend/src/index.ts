import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Joke } from './types'
import { error } from 'console'
import { json } from 'stream/consumers'


const app = new Hono()

app.use('/*', cors())

const dadJokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!"
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!"
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  }
];

app.get('/', (c) => {
  return c.json(dadJokes)
})

//var egt usikker om jeg hadde skjønt oppgave 1 riktig her
app.post('/add', async (c) => {
  const body:Joke = await c.req.json();
  // hvis listen med vitser er tom gis joket id 1, ellers en økende id. 
  const newId = dadJokes.length ? dadJokes[dadJokes.length -1].id + 1:1; 
  const newJoke = {id: newId, ...body}
  dadJokes.push(newJoke)
  const joke = dadJokes.find((joke) => joke.id === Number(newId))
  if(joke) {
    return c.json(joke); 
  }
  else {
    return c.json({error: 'Joke not found :('}, 404)
  }
 
})


async function fetchJokes() {
  // Fetch data fra server og legg det til i listen over
  const dataFromServer = await fetch('http://localhost:3000').then(resp => resp.json())
  //const dataFromServer = await respons.json()
  if(!dataFromServer.length) return
  return [...dadJokes, ...dataFromServer];
}*/

/*
async function postJoke(joke) {
  const {title, answer}  = joke 
  console.log('Posting new joke:', joke);
  // Send data til server og legg til i listen under
  const createdJokeResponse = await fetch('http://localhost:3000', {method: 'POST', headers: {
    "Content-Type": "application/json"
  }, 
body: JSON.stringify(joke)
})

const DadJokesWithNewcreatedJoke = await createdJokeResponse.json()
  //dadJokes.push(createdJoke);
  displayJokes(DadJokesWithNewcreatedJoke);
}
*/

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
