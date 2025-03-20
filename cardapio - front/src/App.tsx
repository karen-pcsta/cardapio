import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'
import { FoodData } from './Interfaces/FoodData'
import { useFoodData } from './hooks/useFoodData'
import "./styles.css"
import { CreateModal } from './Components/Create-Modal/Create-modal'

function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpening = () => {
    setIsModalOpen(prevState => !prevState)
  }

  return (

    <div className="d-flex flex-column align-items-center justify-content-center custom">
      <h1 className='mb-4'>Cardápio</h1>
      <div className="card-grid" >
        {data?.map(foodData =>
          <Card
            key={foodData.id}
            title={foodData.title}
            image={foodData.image}
            price={foodData.price} />)}
      </div>
      {isModalOpen && <CreateModal />}
      <button className={isModalOpen === false ? "btn btn-primary" : "btn btn-secondary"} onClick={handleModalOpening}>{isModalOpen === false ? "Novo Item" : "Fechar"}</button>

    </div>


  )
}

export default App
