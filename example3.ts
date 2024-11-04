// type buttonProps = {
//   text: string;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   className: string;
// };

// ** //

// export type ReviewsProps = {
//   reviews: Review[];
// };

// ** //

// type ProductProps = {
//   Id: number;
//   Name: string;
//   Category: string;
//   Price: number;
//   Image: string;
// };

// ** //

// export type Product = {
//   product_id: number;
//   product_name: string;
//   product_author: string;
//   product_description: string;
//   category: string;
//   price: number;
//   product_image: string;
//   stock: number;
//   quantity: number;
// };

// type ProductDetailCardProps = {
//   product_id: Product["product_id"];
//   product_name: Product["product_name"];
//   product_author: Product["product_author"];
//   category: Product["category"];
//   product_description: Product["product_description"];
//   price: Product["price"];
//   product_image: Product["product_image"];
// };

// type ProductDetailCardProps = Omit<Product, "product_id">;

type userName = string | undefined;
// interface Address = string;

const myAddress: userName = "tonylomax";
