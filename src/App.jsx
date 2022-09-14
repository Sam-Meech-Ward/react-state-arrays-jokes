import './App.css'
import Joke from './Joke'
import JokeForm from './JokeForm'

import { useState } from "react"

function App() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered.",
      likes: 0
    },
    {
      id: 2, 
      text: "I used to be addicted to soap, but I'm clean now.",
      likes: 0
    }
  ])

  const handleAddJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID(),
      likes: 0
    }
    // jokes.push(joke)
    setJokes([joke, ...jokes])
    console.log("New Joke:", text)
  }

  const handleDeleteJoke = (id) => {
    setJokes(jokes.filter(joke => joke.id !== id))
    console.log("delete joke", id)
  }

  const handleLike = (id) => {
    setJokes(jokes.map(joke => {
      if (joke.id === id) {
        return {...joke, likes: joke.likes + 1}
      } else {
        return joke
      }
    }))
  }

  const handleDislike = (id) => {
    setJokes(jokes.map(joke => {
      if (joke.id === id) {
        return {...joke, likes: joke.likes - 1}
      } else {
        return joke
      }
    }))
  }

  const handleSort = () => {
    setJokes([...jokes].sort((a, b) => b.likes - a.likes))
  }

  return (
    <div className="">
      <h1>Dad Jokes</h1>

      <button onClick={handleSort}>Sort</button>

      <JokeForm onAddJoke={handleAddJoke} />

      {jokes.map(joke => (
        <Joke 
        onDelete={handleDeleteJoke} 
        key={joke.id} 
        onLike={handleLike}
        onDislike={handleDislike}
        {...joke} />
      ))}


    </div>
  )
}

export default App
