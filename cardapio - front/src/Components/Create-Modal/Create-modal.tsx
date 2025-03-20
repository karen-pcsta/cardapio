import { useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../Interfaces/FoodData"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} type="text" />
        </>
    )
}


export function CreateModal() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const { mutate } = useFoodDataMutate()


    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    return (
        <div >
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form action="" className="input-container">
                    <Input label="Produto" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />

                </form>
                <button className="btn btn-secondary" onClick={submit}>Adicionar</button>
            </div>

        </div>
    )
}