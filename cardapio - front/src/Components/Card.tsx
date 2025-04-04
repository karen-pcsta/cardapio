import "../styles.css"
import { updateFoodData } from "../hooks/updateFoodData";
import { deleteFoodData } from "../hooks/deleteFoodData";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


interface CardProps {
    id: number,
    price: number,
    title: string,
    image: string
}

export function Card({ id, price, image, title }: CardProps) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedFood, setEditedFood] = useState(() => ({
        id,
        title,
        price,
        image,
    }));

    const updateFoodMutation = updateFoodData();
    const deleteFoodMutation = deleteFoodData();

    const handleEdit = () => {
        setShowEditModal(true);
    };

    const handleDelete = () => {
        if (window.confirm("Tem certeza que deseja excluir este item?")) {
            deleteFoodMutation.mutate(id);
        }
    };

    const handleSubmitEdit = (event: React.FormEvent) => {
        event.preventDefault();

        updateFoodMutation.mutate(editedFood);
        setShowEditModal(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setEditedFood(prev => ({
            ...prev,
            [name]: name === "price" ? parseFloat(value) : value
        }));
    };


    return (
        <>
            <div className="custom-card rounded shadow transition">
                <img src={image} alt={`Foto ${title}`} />
                <h2 className="text-center fs-5 pt-2">{title}</h2>
                <p className="text-center"><b>Preço: </b>R$ {price}</p>

                <div className="d-flex justify-content-center pb-2">
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={handleEdit}>
                        Editar
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={handleDelete}>
                        Excluir
                    </Button>
                </div>
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitEdit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={editedFood.title}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Imagem (URL)</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={editedFood.image}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                name="price"
                                value={editedFood.price}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-2" onClick={() => setShowEditModal(false)}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit">
                                Salvar
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );

}