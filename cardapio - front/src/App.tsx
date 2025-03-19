import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card'
import { FoodData } from './Interfaces/FoodData'
import { useFoodData } from './hooks/useFoodData'

function App() {
  const { data } = useFoodData()

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData =>
            <Card
              key={foodData.id}
              title={foodData.title}
              image={foodData.image}
              price={foodData.price} />)}
        </div>

      </div>

    </>
  )
}

export default App
