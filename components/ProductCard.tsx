import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ produit }: { produit: Product }) {
  return (
    <Link href={`/produit/${produit.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-pierreclaire">
        <Image
          src={produit.image}
          alt={produit.nom}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between font-body">
        <div>
          <p className="text-sm text-encre">{produit.nom}</p>
          <p className="text-xs text-pierre">{produit.categorie}</p>
        </div>
        <p className="text-sm text-encre">{produit.prix} €</p>
      </div>
    </Link>
  );
}
