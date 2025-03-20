import "../styles.css"

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title }: CardProps) {
    return (

        <div className="custom-card rounded shadow">
            <img src={image} alt={`Foto ${title}`} />
            <h2 className="text-center fs-5 pt-2">{title}</h2>
            <p className="text-center"><b>Preço: </b>R$ {price}</p>
        </div>

    )
}