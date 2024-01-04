export interface Category {
    id:         number;
    name:       Name;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

export type Name = "Clothes" | "Electronics" | "Hola a todos" | "Shoes" | "Miscellaneous";
