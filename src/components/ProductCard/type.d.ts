export interface ProductCardProps {
    size: "SMALL" | "MEDIUM" | "BIG";
    id: string;
    name: string;
    price: number;
    image: string;
}