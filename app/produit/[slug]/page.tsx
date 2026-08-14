"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { getProduit } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function PageProduit({ params }: { params: { slug: string } }) {
  const produit = getProduit(params.slug);
  const { ajouter } = useCart();
  const [variante, setVariante] = useState(produit?.variantes[0] ?? "");
  const [quantite, setQuantite] = useState(1);
  const [confirme, setConfirme] = useState(false);

  if (!produit) return notFound();

  function handleAjouter() {
    if (!produit) return;
    ajouter({
      slug: produit.slug,
      nom: produit.nom,
      prix: produit.prix,
      variante,
      quantite,
      image: produit.image,
    });
    setConfirme(true);
    setTimeout(() => setConfirme(false), 2000);
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-sm bg-pierreclaire">
          <img src={produit.image} alt={produit.nom} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-argile">
            {produit.categorie}
          </p>
          <h1 className="mt-3 font-display text-3xl text-encre">{produit.nom}</h1>
          <p className="mt-3 font-body text-xl text-encre">{produit.prix} €</p>
          <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-encre/70">
            {produit.description}
          </p>

          <div className="mt-8">
            <p className="mb-2 font-body text-sm text-encre">Variante</p>
            <div className="flex flex-wrap gap-2">
              {produit.variantes.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariante(v)}
                  className={`border px-4 py-1.5 font-body text-sm transition ${
                    variante === v
                      ? "border-encre bg-encre text-papier"
                      : "border-pierreclaire text-encre/70 hover:border-mousse"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <p className="font-body text-sm text-encre">Quantité</p>
            <div className="flex items-center border border-pierreclaire">
              <button
                onClick={() => setQuantite((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 font-body text-encre/70 hover:text-encre"
              >
                −
              </button>
              <span className="w-8 text-center font-body text-sm">{quantite}</span>
              <button
                onClick={() => setQuantite((q) => Math.min(produit.stock, q + 1))}
                className="px-3 py-1.5 font-body text-encre/70 hover:text-encre"
              >
                +
              </button>
            </div>
            <span className="font-body text-xs text-pierre">{produit.stock} en stock</span>
          </div>

          <button
            onClick={handleAjouter}
            className="mt-8 w-full bg-encre px-8 py-3.5 font-body text-sm text-papier transition hover:bg-mousse md:w-auto"
          >
            {confirme ? "Ajouté ✓" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </main>
  );
}
