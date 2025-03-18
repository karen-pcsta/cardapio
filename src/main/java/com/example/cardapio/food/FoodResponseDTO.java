package com.example.cardapio.food;

public record FoodResponseDTO(Long id, String image, Integer price, String title) {
    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getImage(), food.getPrice(), food.getTitle());
    }
}
