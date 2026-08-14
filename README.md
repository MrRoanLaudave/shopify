# Maison Faune — boilerplate boutique e-commerce

Scaffold Next.js (App Router) + Tailwind reprenant l'architecture d'une boutique type Shopify :
accueil, boutique avec filtres/recherche, fiche produit avec variantes, panier persistant,
checkout en 3 étapes, compte client.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Structure

```
app/
  page.tsx              → Accueil
  boutique/page.tsx      → Liste produits + filtres + recherche
  produit/[slug]/page.tsx → Fiche produit
  panier/page.tsx        → Panier
  checkout/page.tsx      → Tunnel de paiement
  compte/page.tsx        → Connexion / commandes
components/               → Header, Footer, ProductCard
context/CartContext.tsx   → État panier (persisté en localStorage)
lib/products.ts           → Données produits (à remplacer par ta base de données)
```

## Ce qui est simulé (à connecter pour la prod)

- **Produits** : actuellement dans `lib/products.ts`. À remplacer par des requêtes vers ta
  base de données (PostgreSQL + un ORM comme Prisma, par exemple).
- **Panier** : stocké en `localStorage` côté client. Pour un vrai site, synchronise-le avec
  une table `panier` liée à la session/l'utilisateur.
- **Authentification** : le formulaire de connexion ne vérifie rien. Branche un système
  comme NextAuth.js ou Clerk.
- **Paiement** : le bouton "Payer" simule juste une confirmation. Intègre Stripe Checkout ou
  Stripe Elements pour un vrai encaissement.
- **Commandes** : à créer en base au moment de la confirmation de paiement (webhook Stripe
  côté serveur, jamais côté client).

## Prochaines étapes suggérées

1. Brancher une base de données (Prisma + PostgreSQL, ex. via Neon ou Supabase).
2. Remplacer `lib/products.ts` par des routes API (`app/api/produits/route.ts`).
3. Ajouter l'authentification.
4. Intégrer Stripe pour le paiement réel + webhook de confirmation de commande.
5. Déployer sur Vercel.
