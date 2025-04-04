import './App.css'
import { Card } from './Components/Card'
import { useFoodData } from './hooks/useFoodData'
import "./styles.css"
import { CreateModal } from './Components/Create-Modal/Create-modal'



function App() {
  const { data } = useFoodData()



  return (

    <div className="d-flex flex-column align-items-center justify-content-center custom">
      <h1 className='mb-4'>Cardápio</h1>
      <div className="card-grid" >
        {data?.map(foodData =>
          <Card
            id={foodData.id}
            key={foodData.id}
            title={foodData.title}
            image={foodData.image}
            price={foodData.price} />)}
      </div>
      <CreateModal />
      <button className="btn btn-primary mt-4 mb-2" data-bs-toggle="modal" data-bs-target="#reg-modal">Novo item</button>

    </div>


  )
}

export default App
