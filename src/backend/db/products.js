import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		name: "DUNE: The Graphic Novel, Book 1: Dune: Book 1 (Volume 1)",
		price: 5000,
		category: "books",
		rating: 3.5,
		discount: 23,
		src: "https://m.media-amazon.com/images/I/71SZk092xML._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Rick and Morty Wars Maxi Poster",
		price: 550,
		category: "wallart",
		rating: 4,
		discount: 55,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/725123-192724.jpg",
	},
	{
		_id: uuid(),
		name: "Vintage Coyboy bepop phone case - iphone 13",
		price: 2000,
		category: "accessories",
		rating: 1.6,
		discount: 35,
		src: "https://i.etsystatic.com/31026006/c/1024/817/0/131/il/95a5f9/3314639370/il_340x270.3314639370_4kvz.jpg",
	},
	{
		_id: uuid(),
		name: "Tokyo Maji gang mug",
		price: 2000,
		category: "lifestyle",
		rating: 1.6,
		discount: 35,
		src: "https://i.etsystatic.com/31026006/r/il/985a8d/3341304395/il_340x270.3341304395_hweb.jpg",
	},
	{
		_id: uuid(),
		name: "Starwars The Mandolorian Note Book",
		price: 1500,
		category: "stationery",
		rating: 2.3,
		discount: 30,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1060032-316057.jpg",
	},

	{
		_id: uuid(),
		name: "Back to the future Men's Tshirt",
		price: 3500,
		category: "clothing",
		rating: 3,
		discount: 45,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1077870-319062.jpg",
	},

	{
		_id: uuid(),
		name: "A wrinkle in time book (paperback)",
		price: 3500,
		category: "books",
		rating: 3,
		discount: 45,
		src: "https://m.media-amazon.com/images/I/81yap8yKGwL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Neon genesis evangelion you are (not) alone poster",
		price: 550,
		category: "wallart",
		rating: 4,
		discount: 55,
		src: "https://i.etsystatic.com/32641567/r/il/24daee/3655247025/il_340x270.3655247025_mhi4.jpg",
	},
	{
		_id: uuid(),
		name: "Astro boy neon light sign",
		price: 1000,
		category: "lifestyle",
		rating: 1.6,
		discount: 35,
		src: "https://i.etsystatic.com/32912272/r/il/f103e2/3588860211/il_794xN.3588860211_l4b3.jpg",
	},
];
