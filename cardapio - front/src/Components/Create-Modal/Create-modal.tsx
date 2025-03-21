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
            <label className="pt-2 pb-1 font-weight-bold" htmlFor="">{label}</label>
            <input value={value} className="form-control" onChange={e => updateValue(e.target.value)} type="text" />
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
        setTitle("")
        setPrice(0)
        setImage("")
    }

    return (
        <div className="modal fade" id="reg-modal" tabIndex={-1} aria-labelledby="modal-title" aria-hidden="false" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="modal-title">Cadastre um novo item no cardápio</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="input-container">
                            <div className="form-group">
                                <Input label="Produto" value={title} updateValue={setTitle} />
                            </div>
                            <div className="form-group">
                                <Input label="Preço" value={price} updateValue={setPrice} />
                            </div>
                            <div className="form-group">
                                <Input label="Imagem URL" value={image} updateValue={setImage} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={submit}>Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}