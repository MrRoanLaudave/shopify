"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const LIVRAISON = 5.9;
const SEUIL_GRATUIT = 80;

export default function Panier() {
  const { items, retirer, majQuantite, total } = useCart();
  const livraison = total >= SEUIL_GRATUIT || total === 0 ? 0 : LIVRAISON;

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl text-encre">Ton panier est vide</h1>
        <p className="mt-3 font-body text-sm text-encre/60">
          Parcours la boutique pour trouver ta prochaine pièce.
        </p>
        <Link
          href="/boutique"
          className="mt-8 inline-block bg-encre px-8 py-3 font-body text-sm text-papier hover:bg-mousse"
        >
          Voir la boutique
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-3xl text-encre">Panier</h1>

      <div className="mt-8 divide-y divide-pierreclaire border-y border-pierreclaire">
        {items.map((item) => (
          <div key={`${item.slug}-${item.variante}`} className="flex items-center gap-5 py-5">
            <img
              src={item.image}
              alt={item.nom}
              className="h-20 w-20 rounded-sm object-cover"
            />
            <div className="flex-1">
              <p className="font-body text-sm text-encre">{item.nom}</p>
              <p className="font-body text-xs text-pierre">{item.variante}</p>
              <button
                onClick={() => retirer(item.slug, item.variante)}
                className="mt-1 font-body text-xs text-argile hover:underline"
              >
                Retirer
              </button>
            </div>
            <div className="flex items-center border border-pierreclaire">
              <button
                onClick={() => majQuantite(item.slug, item.variante, Math.max(1, item.quantite - 1))}
                className="px-3 py-1 font-body text-encre/70 hover:text-encre"
              >
                −
              </button>
              <span className="w-8 text-center font-body text-sm">{item.quantite}</span>
              <button
                onClick={() => majQuantite(item.slug, item.variante, item.quantite + 1)}
                className="px-3 py-1 font-body text-encre/70 hover:text-encre"
              >
                +
              </button>
            </div>
            <p className="w-16 text-right font-body text-sm text-encre">
              {(item.prix * item.quantite).toFixed(2)} €
            </p>
          </div>
        ))}
      </div>

      <div className="ml-auto mt-8 max-w-xs space-y-2 font-body text-sm">
        <div className="flex justify-between text-encre/70">
          <span>Sous-total</span>
          <span>{total.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between text-encre/70">
          <span>Livraison</span>
          <span>{livraison === 0 ? "Offerte" : `${livraison.toFixed(2)} €`}</span>
        </div>
        {livraison > 0 && (
          <p className="text-xs text-pierre">
            Ajoute {(SEUIL_GRATUIT - total).toFixed(2)} € pour la livraison offerte.
          </p>
        )}
        <div className="flex justify-between border-t border-pierreclaire pt-2 font-medium text-encre">
          <span>Total</span>
          <span>{(total + livraison).toFixed(2)} €</span>
        </div>
        <Link
          href="/checkout"
          className="mt-4 block w-full bg-encre px-8 py-3.5 text-center text-papier transition hover:bg-mousse"
        >
          Passer au paiement
        </Link>
      </div>
    </main>
  );
}
