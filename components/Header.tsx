"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { nombreArticles } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-pierreclaire bg-papier/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight text-encre">
          Maison Faune
        </Link>
        <nav className="hidden gap-8 font-body text-sm text-encre/80 md:flex">
          <Link href="/boutique" className="hover:text-mousse">Boutique</Link>
          <Link href="/boutique?categorie=Céramique" className="hover:text-mousse">Céramique</Link>
          <Link href="/boutique?categorie=Bois" className="hover:text-mousse">Bois</Link>
        </nav>
        <div className="flex items-center gap-4 font-body text-sm">
          <Link href="/compte" className="text-encre/80 hover:text-mousse">Compte</Link>
          <Link href="/panier" className="relative text-encre/80 hover:text-mousse">
            Panier
            {nombreArticles > 0 && (
              <span className="ml-1 rounded-full bg-argile px-2 py-0.5 text-xs text-papier">
                {nombreArticles}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
