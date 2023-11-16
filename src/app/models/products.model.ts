export interface Producto {
  _id:           string;
  name_product:  string;
  description:   string;
  categoria:     string[];
  imageUrl:      string[];
  price:         number;
  regular_price: number;
  tag?:          string;
  create_at:     Date;
  update?:       Date;
}
