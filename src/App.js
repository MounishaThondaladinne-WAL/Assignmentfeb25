import './App.css';
import CardList from './CardList'
import { useState } from 'react'
import Form from './Form'
import './Cardfeb25.css'

const App = () => {
  const [cards, setCards] = useState([])
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className="Card">
      <h1>Information of user from GitHub</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
