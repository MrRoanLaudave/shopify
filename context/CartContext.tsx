"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  slug: string;
  nom: string;
  prix: number;
  variante: string;
  quantite: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  ajouter: (item: CartItem) => void;
  retirer: (slug: string, variante: string) => void;
  majQuantite: (slug: string, variante: string, quantite: number) => void;
  total: number;
  nombreArticles: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    const sauvegarde = window.localStorage.getItem("panier");
    if (sauvegarde) setItems(JSON.parse(sauvegarde));
    setPret(true);
  }, []);

  useEffect(() => {
    if (pret) window.localStorage.setItem("panier", JSON.stringify(items));
  }, [items, pret]);

  function ajouter(nouvel: CartItem) {
    setItems((prev) => {
      const existant = prev.find(
        (i) => i.slug === nouvel.slug && i.variante === nouvel.variante
      );
      if (existant) {
        return prev.map((i) =>
          i === existant ? { ...i, quantite: i.quantite + nouvel.quantite } : i
        );
      }
      return [...prev, nouvel];
    });
  }

  function retirer(slug: string, variante: string) {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.variante === variante)));
  }

  function majQuantite(slug: string, variante: string, quantite: number) {
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug && i.variante === variante ? { ...i, quantite } : i
      )
    );
  }

  const total = items.reduce((acc, i) => acc + i.prix * i.quantite, 0);
  const nombreArticles = items.reduce((acc, i) => acc + i.quantite, 0);

  return (
    <CartContext.Provider value={{ items, ajouter, retirer, majQuantite, total, nombreArticles }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
  return ctx;
}
