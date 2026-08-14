"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const ETAPES = ["Coordonnées", "Livraison", "Paiement"];

export default function Checkout() {
  const { items, total } = useCart();
  const [etape, setEtape] = useState(0);
  const [commandeConfirmee, setCommandeConfirmee] = useState(false);

  if (commandeConfirmee) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="font-display text-3xl text-mousse">✓</p>
        <h1 className="mt-4 font-display text-2xl text-encre">Commande confirmée</h1>
        <p className="mt-3 font-body text-sm text-encre/60">
          Un e-mail de confirmation vient de t'être envoyé. Merci pour ta commande.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-3xl text-encre">Checkout</h1>

      <div className="mt-6 flex gap-6 font-body text-sm">
        {ETAPES.map((e, i) => (
          <span key={e} className={i === etape ? "text-encre" : "text-pierre"}>
            {i + 1}. {e}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {etape === 0 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Prénom" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
                <input placeholder="Nom" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              </div>
              <input placeholder="E-mail" type="email" className="w-full border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              <input placeholder="Adresse" className="w-full border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              <div className="grid gap-4 sm:grid-cols-3">
                <input placeholder="Ville" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
                <input placeholder="Code postal" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
                <input placeholder="Pays" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              </div>
            </div>
          )}

          {etape === 1 && (
            <div className="space-y-3 font-body text-sm">
              {[
                { nom: "Standard (3-5 jours)", prix: 5.9 },
                { nom: "Express (1-2 jours)", prix: 12.9 },
              ].map((opt) => (
                <label
                  key={opt.nom}
                  className="flex cursor-pointer items-center justify-between border border-pierreclaire px-4 py-3 has-[:checked]:border-mousse"
                >
                  <span className="flex items-center gap-3">
                    <input type="radio" name="livraison" defaultChecked={opt.nom.startsWith("Standard")} />
                    {opt.nom}
                  </span>
                  <span>{opt.prix.toFixed(2)} €</span>
                </label>
              ))}
            </div>
          )}

          {etape === 2 && (
            <div className="space-y-4">
              <input placeholder="Numéro de carte" className="w-full border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="MM / AA" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
                <input placeholder="CVC" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
              </div>
              <p className="font-body text-xs text-pierre">
                Paiement traité de façon sécurisée (ex. Stripe). Aucune donnée bancaire n'est stockée sur ce site.
              </p>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            {etape > 0 && (
              <button
                onClick={() => setEtape((e) => e - 1)}
                className="border border-pierreclaire px-6 py-3 font-body text-sm text-encre/70 hover:border-mousse"
              >
                Retour
              </button>
            )}
            <button
              onClick={() =>
                etape < ETAPES.length - 1 ? setEtape((e) => e + 1) : setCommandeConfirmee(true)
              }
              className="flex-1 bg-encre px-6 py-3 font-body text-sm text-papier hover:bg-mousse"
            >
              {etape < ETAPES.length - 1 ? "Continuer" : "Payer et confirmer"}
            </button>
          </div>
        </div>

        <aside className="border border-pierreclaire p-6">
          <p className="font-body text-sm font-medium text-encre">Résumé</p>
          <div className="mt-4 space-y-2 font-body text-sm text-encre/70">
            {items.map((i) => (
              <div key={`${i.slug}-${i.variante}`} className="flex justify-between">
                <span>{i.nom} × {i.quantite}</span>
                <span>{(i.prix * i.quantite).toFixed(2)} €</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-pierreclaire pt-3 font-body text-sm font-medium text-encre">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </aside>
      </div>
    </main>
  );
                }
