export type Product = {
  slug: string;
  nom: string;
  prix: number;
  categorie: string;
  description: string;
  variantes: string[];
  stock: number;
  image: string;
};

export const produits: Product[] = [
  {
    slug: "carafe-ambre",
    nom: "Carafe Ambre",
    prix: 42,
    categorie: "Verrerie",
    description:
      "Carafe soufflée à la main, verre teinté ambre. Chaque pièce est légèrement différente.",
    variantes: ["50cl", "1L"],
    stock: 14,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    slug: "bol-argile",
    nom: "Bol en argile crue",
    prix: 28,
    categorie: "Céramique",
    description: "Bol texturé, cuisson basse température, glaçure mate couleur terre.",
    variantes: ["S", "M", "L"],
    stock: 8,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
  },
  {
    slug: "plateau-noyer",
    nom: "Plateau en noyer massif",
    prix: 65,
    categorie: "Bois",
    description: "Plateau taillé dans une seule pièce de noyer, huilé à la main.",
    variantes: ["30cm", "45cm"],
    stock: 5,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
  },
  {
    slug: "vase-cannele",
    nom: "Vase cannelé",
    prix: 38,
    categorie: "Céramique",
    description: "Vase aux cannelures verticales, fini sablé, couleur pierre naturelle.",
    variantes: ["Unique"],
    stock: 11,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
  },
];

export function getProduit(slug: string) {
  return produits.find((p) => p.slug === slug);
}
