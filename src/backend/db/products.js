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
		name: "The Mandalorian Coffee Mug",
		price: 1000,
		category: "lifestyle",
		rating: 1.6,
		discount: 35,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1071780-317673.jpg",
	},
	{
		_id: uuid(),
		name: "Vintage Coyboy bebop phone case - iphone 13",
		price: 2000,
		category: "accessories",
		rating: 3.6,
		discount: 15,
		src: "https://m.media-amazon.com/images/I/81ILf5dEM8L._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Tokyo Revengers Manjiro enamel pin",
		price: 2000,
		category: "accessories",
		rating: 1.6,
		discount: 35,
		src: "https://m.media-amazon.com/images/I/51AoBHBaPpL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Star Wars The Mandolorian Note Book",
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
		price: 2500,
		category: "books",
		rating: 3.2,
		discount: 9,
		src: "https://m.media-amazon.com/images/I/81yap8yKGwL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Neon genesis evangelion  poster",
		price: 1500,
		category: "wallart",
		rating: 2.5,
		discount: 15,
		src: "https://m.media-amazon.com/images/I/61MXLfB3SiL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Ghost in the Shell Motoko Kusanagi Figurine",
		price: 850,
		category: "accessories",
		rating: 4.2,
		discount: 35,
		src: "https://m.media-amazon.com/images/I/61jPfTXDsaL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Flowers for algernon Book (paperback)",
		price: 550,
		category: "books",
		rating: 1.7,
		discount: 25,
		src: "https://m.media-amazon.com/images/I/3108OHxY7IL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Steins gate hoodie",
		price: 4550,
		category: "clothing",
		rating: 4.7,
		discount: 60,
		src: "https://m.media-amazon.com/images/I/61vwUx+HMKL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Star Wars the Mandalorian Child bad",
		price: 2000,
		category: "lifestyle",
		rating: 4.6,
		discount: 15,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1106538-330116.jpg",
	},
	{
		_id: uuid(),
		name: "Serial Experiments Lain Glitch Cover NoteBook",
		price: 500,
		category: "stationery",
		rating: 3.6,
		discount: 85,
		src: "https://m.media-amazon.com/images/I/613-AD-2xnL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Star Wars Pencil case",
		price: 80,
		category: "stationery",
		rating: 4.7,
		discount: 5,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1060010-316060.jpg",
	},
	{
		_id: uuid(),
		name: "Steins gate Plushie",
		price: 1200,
		category: "lifestyle",
		rating: 3.9,
		discount: 33,
		src: "https://m.media-amazon.com/images/I/61OnqTDsruS._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Transformers autobot T-shirt",
		price: 2500,
		category: "clothing",
		rating: 2.9,
		discount: 64,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1099537-325662.jpg",
	},
	{
		_id: uuid(),
		name: "The Three body problem book 1",
		price: 4500,
		category: "books",
		rating: 4.9,
		discount: 27,
		src: "https://m.media-amazon.com/images/I/919XM42JQlL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "The Three body problem book 2",
		price: 2500,
		category: "books",
		rating: 2.5,
		discount: 17,
		src: "https://m.media-amazon.com/images/I/81015NXB2pL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "The Three body problem book 3",
		price: 1500,
		category: "books",
		rating: 3.9,
		discount: 77,
		src: "https://m.media-amazon.com/images/I/91MfIt8mhaL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "THe time machine HG Wells",
		price: 2000,
		category: "books",
		rating: 1.2,
		discount: 29,
		src: "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Te Mandalorian Poster",
		price: 520,
		category: "wallart",
		rating: 4,
		discount: 15,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1073474-317876.jpg",
	},
	{
		_id: uuid(),
		name: "The Mandalorian Coffee Mug",
		price: 1000,
		category: "lifestyle",
		rating: 1.6,
		discount: 35,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1071780-317673.jpg",
	},
	{
		_id: uuid(),
		name: "Stranger things door mat",
		price: 2700,
		category: "accessories",
		rating: 1.6,
		discount: 43,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/883747-229484.jpg",
	},
	{
		_id: uuid(),
		name: "Tokyo Revengers Manjiro enamel pin",
		price: 2000,
		category: "accessories",
		rating: 1.6,
		discount: 35,
		src: "https://m.media-amazon.com/images/I/51AoBHBaPpL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Loki TVA Badge Pack",
		price: 1500,
		category: "stationery",
		rating: 3.3,
		discount: 30,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1099546-325593.jpg",
	},

	{
		_id: uuid(),
		name: "Star wars women's T shirt",
		price: 2500,
		category: "clothing",
		rating: 3,
		discount: 45,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1016122-305322.jpg",
	},

	{
		_id: uuid(),
		name: "Asgard's secret : A sci-fi novel",
		price: 2500,
		category: "books",
		rating: 3.2,
		discount: 9,
		src: "https://m.media-amazon.com/images/I/71uvjCboPFL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Neon genesis evangelion  poster",
		price: 1500,
		category: "wallart",
		rating: 4.9,
		discount: 15,
		src: "https://m.media-amazon.com/images/I/71b+ca94UhL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Morty Keychain",
		price: 3550,
		category: "accessories",
		rating: 4.2,
		discount: 35,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/754060-203098.jpg",
	},
	{
		_id: uuid(),
		name: "Cowboy bebop Poster",
		price: 550,
		category: "wallart",
		rating: 1.7,
		discount: 25,
		src: "https://m.media-amazon.com/images/I/71A0Qi4fhCL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Cowboy bebop T shirt",
		price: 2350,
		category: "clothing",
		rating: 4.7,
		discount: 20,
		src: "https://m.media-amazon.com/images/I/61s116BBAVL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Netflix Dark Mug",
		price: 3300,
		category: "lifestyle",
		rating: 1.6,
		discount: 45,
		src: "https://m.media-amazon.com/images/I/51mR1GWYMhL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Elfin lied Lucy NoteBook",
		price: 800,
		category: "stationery",
		rating: 4.6,
		discount: 25,
		src: "https://m.media-amazon.com/images/I/510KaguQWeL._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Eva 001 Notebook",
		price: 640,
		category: "stationery",
		rating: 3.7,
		discount: 15,
		src: "https://m.media-amazon.com/images/I/710dCB0Jn4L._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Star Wars facemask set",
		price: 4500,
		category: "lifestyle",
		rating: 2.9,
		discount: 53,
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1106277-329758.jpg",
	},
	{
		_id: uuid(),
		name: "Ergo Proxy Notebook",
		price: 1500,
		category: "stationery",
		rating: 3.9,
		discount: 64,
		src: "https://m.media-amazon.com/images/I/517mEPfD0BS._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Psycho Pass",
		price: 500,
		category: "wallart",
		rating: 2.9,
		discount: 47,
		src: "https://m.media-amazon.com/images/I/712AFnn6vMS._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Cowboy bebop minimalist tshirt",
		price: 4500,
		category: "clothing",
		rating: 3.5,
		discount: 17,
		src: "https://m.media-amazon.com/images/I/61vkjyW-svL._AC_UL480_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		name: "Cowboy Bebop Notebook",
		price: 1500,
		category: "stationery",
		rating: 2.9,
		discount: 37,
		src: "https://m.media-amazon.com/images/I/71Ia-pjIj3L._AC_UL480_FMwebp_QL65_.jpg",
	},
];
