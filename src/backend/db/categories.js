import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "accessories",
		src: "https://i.etsystatic.com/27637625/r/il/18552c/3601973387/il_340x270.3601973387_go3w.jpg",
	},
	{
		_id: uuid(),
		categoryName: "books",
		src: "https://m.media-amazon.com/images/I/71SZk092xML._AC_UY327_FMwebp_QL65_.jpg",
	},
	{
		_id: uuid(),
		categoryName: "clothing",
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/994811-299256.jpg",
	},

	{
		_id: uuid(),
		categoryName: "lifestyle",
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/871009-225484.jpg",
	},
	{
		_id: uuid(),
		categoryName: "stationery",
		src: "https://i.etsystatic.com/23080979/c/2521/2003/301/474/il/50220a/3763412059/il_340x270.3763412059_nl2h.jpg",
	},
	{
		_id: uuid(),
		categoryName: "wallart",
		src: "https://d1x7zurbps6occ.cloudfront.net/product/large/1064522-316716.jpg",
	},
];
