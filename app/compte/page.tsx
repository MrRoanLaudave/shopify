"use client";

import { useState } from "react";

export default function Compte() {
  const [connecte, setConnecte] = useState(false);

  if (!connecte) {
    return (
      <main className="mx-auto max-w-sm px-6 py-20">
        <h1 className="font-display text-2xl text-encre">Connexion</h1>
        <div className="mt-8 space-y-4">
          <input
            placeholder="E-mail"
            type="email"
            className="w-full border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none"
          />
          <input
            placeholder="Mot de passe"
            type="password"
            className="w-full border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none"
          />
          <button
            onClick={() => setConnecte(true)}
            className="w-full bg-encre px-8 py-3 font-body text-sm text-papier hover:bg-mousse"
          >
            Se connecter
          </button>
          <p className="text-center font-body text-xs text-pierre">
            Pas encore de compte ? <span className="text-mousse">Créer un compte</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="font-display text-2xl text-encre">Mon compte</h1>

      <section className="mt-10">
        <h2 className="font-body text-sm font-medium text-encre">Mes commandes</h2>
        <div className="mt-4 divide-y divide-pierreclaire border-y border-pierreclaire font-body text-sm">
          {[
            { id: "#1042", date: "2 août 2026", statut: "Livrée", total: "70,00 €" },
            { id: "#1017", date: "18 juillet 2026", statut: "Livrée", total: "42,00 €" },
          ].map((cmd) => (
            <div key={cmd.id} className="flex items-center justify-between py-4">
              <span className="text-encre">{cmd.id}</span>
              <span className="text-pierre">{cmd.date}</span>
              <span className="text-mousse">{cmd.statut}</span>
              <span className="text-encre">{cmd.total}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-body text-sm font-medium text-encre">Informations personnelles</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input placeholder="Prénom" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
          <input placeholder="Nom" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none" />
          <input placeholder="E-mail" className="border border-pierreclaire px-4 py-2.5 font-body text-sm focus:border-mousse focus:outline-none sm:col-span-2" />
        </div>
        <button className="mt-4 border border-pierreclaire px-6 py-2.5 font-body text-sm text-encre hover:border-mousse">
          Enregistrer
        </button>
      </section>
    </main>
  );
}
