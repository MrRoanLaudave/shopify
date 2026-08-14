import Link from "next/link";
import { produits } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Accueil() {
  const populaires = produits.slice(0, 4);
  const categories = Array.from(new Set(produits.map((p) => p.categorie)));

  return (
    <main>
      {/* Bannière */}
      <section className="border-b border-pierreclaire">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-argile">
              Nouvelle collection
            </p>
            <h1 className="font-display text-4xl leading-tight text-encre md:text-5xl">
              Des objets qui portent la trace de la main.
            </h1>
            <p className="mt-6 max-w-md font-body text-encre/70">
              Céramique, verre soufflé et bois massif — chaque pièce est façonnée par un artisan,
              en petite série, pour durer bien plus longtemps qu'une mode.
            </p>
            <Link
              href="/boutique"
              className="mt-8 inline-block bg-encre px-8 py-3 font-body text-sm text-papier transition hover:bg-mousse"
            >
              Découvrir la boutique
            </Link>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-pierreclaire">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1000"
              alt="Objets artisanaux en céramique et bois"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Produits populaires */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl text-encre">Les plus demandés</h2>
          <Link href="/boutique" className="font-body text-sm text-mousse hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {populaires.map((p) => (
            <ProductCard key={p.slug} produit={p} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="border-y border-pierreclaire bg-pierreclaire/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-display text-2xl text-encre">Collections</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/boutique?categorie=${cat}`}
                className="group flex items-center justify-between border border-pierreclaire bg-papier px-6 py-8 transition hover:border-mousse"
              >
                <span className="font-display text-lg text-encre">{cat}</span>
                <span className="text-mousse opacity-0 transition group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 font-display text-2xl text-encre">Ce qu'on en dit</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { nom: "Camille", avis: "La carafe est encore plus belle en vrai. Livraison rapide." },
            { nom: "Julien", avis: "Le plateau en noyer a une finition impeccable. Objet précieux." },
            { nom: "Anaïs", avis: "Service client réactif, et le bol est devenu mon préféré." },
          ].map((t) => (
            <div key={t.nom} className="border-l-2 border-argile pl-5">
              <p className="font-body text-sm text-encre/80">"{t.avis}"</p>
              <p className="mt-3 font-body text-xs uppercase tracking-wide text-pierre">{t.nom}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
        }
