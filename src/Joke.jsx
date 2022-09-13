import { useState } from "react"

export default function Joke({ id, text, onFavorite }) {

  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleDislike = () => {
    setLikes(likes - 1)
  }

  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <p>Is Favorite: {favorite ? "Yes" : "No"}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
    </div>
  )
}