import './App.css'
import Joke from './Joke'
import JokeForm from './JokeForm'

function App() {
  const jokes = [
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered."
    },
    {
      id: 2, 
      text: "I used to be addicted to soap, but I'm clean now."
    }
  ]

  const handleAddJoke = (text) => {
    console.log("New Joke:", text)
  }

  return (
    <div className="">
      <h1>Dad Jokes</h1>

      {jokes.map(joke => (
        <Joke key={joke.id} id={joke.id} text={joke.text} />
      ))}

      <JokeForm onAddJoke={handleAddJoke} />

    </div>
  )
}

export default App
