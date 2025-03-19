import "./styles.css"

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title }: CardProps) {
    return (
        <>
            <div className="card d-flex flex-column align-items-center justify-content-center custom-card">
                <img src={image} alt={`Foto ${title}`} />
                <h2>{title}</h2>
                <p><b>Valor: </b>{price}</p>
            </div>
        </>
    )
}