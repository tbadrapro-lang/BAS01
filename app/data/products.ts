export type Category =
  | "smash"
  | "baguettes"
  | "sandwiches"
  | "hot-dog"
  | "accompagnements"
  | "boissons"

export interface Product {
  id: number
  name: string
  description: string
  price: number
  menuPrice?: number
  image: string
  category: Category
  isHalal: boolean
  isBestSeller?: boolean
  spiceLevel?: 0 | 1 | 2 | 3
}

export const CATEGORY_LABELS: Record<Category, string> = {
  smash: "🍔 Smash Burgers",
  baguettes: "🥖 Baguettes",
  sandwiches: "🥙 Sandwiches",
  "hot-dog": "🌭 Hot Dogs",
  accompagnements: "🍟 Accompagnements",
  boissons: "🥤 Boissons",
}

export const CATEGORY_ORDER: Category[] = [
  "smash",
  "baguettes",
  "sandwiches",
  "hot-dog",
  "accompagnements",
  "boissons",
]

export const products: Product[] = [
  { id: 1, name: "Original Smash", description: "Steak maison 120g écrasé à la plancha, cheddar, oignons grillés, sauce maison", price: 8.5, menuPrice: 12.5, image: "/smash/Original_Smash_8.50euro.webp", category: "smash", isHalal: true, isBestSeller: true },
  { id: 2, name: "Bacon Smash", description: "Double steak, bacon de bœuf croustillant, cheddar fondu, oignons caramélisés", price: 9.0, menuPrice: 13.0, image: "/smash/Bacon_Smash_9.00euro.webp", category: "smash", isHalal: true },
  { id: 3, name: "Chic'n Smash", description: "Poulet pané croustillant, cheddar, salade, sauce yum yum maison", price: 8.5, menuPrice: 12.5, image: "/smash/Chicn_Smash_8.50euro.webp", category: "smash", isHalal: true },
  { id: 4, name: "Goat Smash", description: "Steak maison, fromage de chèvre fondant, miel, roquette, oignons rouges", price: 9.0, menuPrice: 13.0, image: "/smash/Goat_Smash_9.00euro.webp", category: "smash", isHalal: true },
  { id: 5, name: "Pastrame Smash", description: "Pastrami de bœuf fumé, cheddar, cornichons, moutarde douce, oignons", price: 9.0, menuPrice: 13.0, image: "/smash/Pastrame_Smash_9.00euro.webp", category: "smash", isHalal: true, isBestSeller: true },

  { id: 6, name: "Bavette", description: "Bavette de bœuf grillée, oignons confits, sauce poivre, baguette artisanale", price: 10.9, menuPrice: 14.9, image: "/baguettes/Bavette_10.90euro.png", category: "baguettes", isHalal: true, isBestSeller: true },
  { id: 7, name: "Bread Baguette Kiri", description: "Steak haché, Kiri fondant, salade, tomate, oignons sur baguette croustillante", price: 9.0, menuPrice: 13.0, image: "/baguettes/Bread_Baguette_Kiri_9.00euro.png", category: "baguettes", isHalal: true },
  { id: 8, name: "Brochette Mix", description: "Brochette de bœuf et agneau, sauce blanche, salade, frites", price: 9.0, menuPrice: 13.0, image: "/baguettes/Brochette_Mix_9.00euro.png", category: "baguettes", isHalal: true },
  { id: 9, name: "Kefta Baguette", description: "Kefta maison épicée, sauce algérienne, oignons, salade fraîche", price: 8.5, menuPrice: 12.5, image: "/baguettes/Kefta_Baguette_8.50euro.png", category: "baguettes", isHalal: true, spiceLevel: 2 },
  { id: 10, name: "Merguez Baguette", description: "Merguez grillées, sauce harissa douce, oignons, salade", price: 8.5, menuPrice: 12.5, image: "/baguettes/Merguez_Baguette_8.50euro.png", category: "baguettes", isHalal: true, spiceLevel: 2 },
  { id: 11, name: "Méditerranéen", description: "Poulet mariné aux herbes, fromage, tomates confites, salade roquette", price: 8.5, menuPrice: 12.5, image: "/baguettes/Mediterraneen_8.50euro.png", category: "baguettes", isHalal: true },
  { id: 12, name: "Noix De Veau", description: "Noix de veau tendre grillée, sauce champignons, oignons confits", price: 10.9, menuPrice: 14.9, image: "/baguettes/Noix_De_Veau_10.90euro.png", category: "baguettes", isHalal: true },
  { id: 13, name: "Parigo Baguette", description: "Steak haché, jambon de dinde, fromage, salade, tomate, oignons", price: 9.0, menuPrice: 13.0, image: "/baguettes/Parigo_Baguette_9.00euro.png", category: "baguettes", isHalal: true },

  { id: 14, name: "Boursin", description: "Poulet pané, Boursin ail et fines herbes, salade, tomate", price: 8.0, menuPrice: 12.0, image: "/sandwiches/Boursin_8.00euro.png", category: "sandwiches", isHalal: true },
  { id: 15, name: "Chicken Curry", description: "Poulet mariné curry doux, oignons, salade, sauce blanche", price: 7.4, menuPrice: 11.4, image: "/sandwiches/Chicken_Curry_7.40euro.png", category: "sandwiches", isHalal: true, spiceLevel: 1 },
  { id: 16, name: "Chicken Tandoori", description: "Poulet mariné tandoori, sauce yaourt menthe, oignons rouges", price: 7.4, menuPrice: 11.4, image: "/sandwiches/Chicken_Tandoori_7.40euro.png", category: "sandwiches", isHalal: true, spiceLevel: 2 },
  { id: 17, name: "Mix De Luxe", description: "Mix viandes grillées, oignons confits, sauce maison, salade", price: 8.0, menuPrice: 12.0, image: "/sandwiches/Mix_De_Luxe_8.00euro.png", category: "sandwiches", isHalal: true, isBestSeller: true },
  { id: 18, name: "Radical", description: "Triple viande, double fromage, sauce harissa, le plus généreux", price: 8.0, menuPrice: 12.0, image: "/sandwiches/Radical_8.00euro.png", category: "sandwiches", isHalal: true, spiceLevel: 3 },
  { id: 19, name: "Savoureux", description: "Steak haché, cheddar, oignons grillés, sauce barbecue", price: 7.4, menuPrice: 11.4, image: "/sandwiches/Savoureux_7.40euro.png", category: "sandwiches", isHalal: true },
  { id: 20, name: "Triple Steak", description: "Trois steaks hachés maison, fromage, salade, tomate, oignons", price: 7.0, menuPrice: 11.0, image: "/sandwiches/Triple_Steak_7.00euro.png", category: "sandwiches", isHalal: true },

  { id: 21, name: "Hot Dog", description: "Saucisse de bœuf, oignons grillés, fromage fondu, sauce moutarde-ketchup", price: 4.0, image: "/hot-dog/Hot_Dog_4.00euro.webp", category: "hot-dog", isHalal: true },

  { id: 22, name: "Frites Maison", description: "Frites fraîches coupées chaque matin, double cuisson", price: 3.5, image: "/accompagnements/Frites_Maison_3.5euros.webp", category: "accompagnements", isHalal: true, isBestSeller: true },
  { id: 23, name: "Frites Cheddar", description: "Frites maison nappées de cheddar fondu", price: 4.0, image: "/accompagnements/Frites_Cheddar_4.00euro.webp", category: "accompagnements", isHalal: true },
  { id: 24, name: "Frites Cheddar Bacon", description: "Frites maison, cheddar fondu, bacon de bœuf croustillant", price: 4.9, image: "/accompagnements/Frites_Cheddar_Bacon_4.90euro.webp", category: "accompagnements", isHalal: true },

  { id: 25, name: "Sodas", description: "Coca-Cola, Sprite, Fanta — 33cl", price: 2.0, image: "/boissons/cold_drinks_sprite_cola_fanta.svg", category: "boissons", isHalal: true },
  { id: 26, name: "Red Bull", description: "Red Bull Energy Drink — 25cl", price: 3.5, image: "/boissons/redbull.svg", category: "boissons", isHalal: true },
]
