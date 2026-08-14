"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { produits } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function BoutiqueContenu() {
  const searchParams = useSearchParams();
  const [categorie, setCategorie] = useState(searchParams.get("categorie") ?? "Tous");
  const [recherche, setRecherche] = useState("");

  const categories = ["Tous", ...Array.from(new Set(produits.map((p) => p.categorie)))];

  const filtres = useMemo(() => {
    return produits.filter((p) => {
      const matchCategorie = categorie === "Tous" || p.categorie === categorie;
      const matchRecherche = p.nom.toLowerCase().includes(recherche.toLowerCase());
      return matchCategorie && matchRecherche;
    });
  }, [categorie, recherche]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl text-encre">Boutique</h1>

      <div className="mt-8 flex flex-col gap-4 border-b border-pierreclaire pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategorie(cat)}
              className={`rounded-full border px-4 py-1.5 font-body text-sm transition ${
                categorie === cat
                  ? "border-encre bg-encre text-papier"
                  : "border-pierreclaire text-encre/70 hover:border-mousse"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="w-full max-w-xs border border-pierreclaire bg-papier px-4 py-2 font-body text-sm focus:border-mousse focus:outline-none"
        />
      </div>

      {filtres.length === 0 ? (
        <p className="mt-16 font-body text-sm text-pierre">Aucun produit ne correspond à ta recherche.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {filtres.map((p) => (
            <ProductCard key={p.slug} produit={p} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function Boutique() {
  return (
    <Suspense fallback={null}>
      <BoutiqueContenu />
    </Suspense>
  );
}
