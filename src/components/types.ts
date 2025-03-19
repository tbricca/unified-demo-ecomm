export interface Product {
  name?: string;
  title?: string;
  price: string;
  color: string;
  image: string;
}

export interface TextHeroProps {
  text: string;
  className?: string;
}

export interface ProductCardProps extends Product {
  className?: string;
}

export interface ProductGridProps {
  products: Product[];
  className?: string;
}

export interface ShopSectionProps {
  title: string;
  products: Product[];
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export interface SimpleProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  color: string;
  className?: string;
}
