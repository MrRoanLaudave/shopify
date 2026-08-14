export default function Footer() {
  return (
    <footer className="mt-24 border-t border-pierreclaire bg-pierreclaire/40">
      <div className="mx-auto max-w-6xl px-6 py-12 font-body text-sm text-encre/70">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-encre">Maison Faune</p>
            <p className="mt-2 max-w-xs">
              Objets façonnés à la main, pensés pour durer. Céramique, verre et bois.
            </p>
          </div>
          <div>
            <p className="mb-2 font-medium text-encre">Boutique</p>
            <ul className="space-y-1">
              <li>Tous les produits</li>
              <li>Nouveautés</li>
              <li>Livraison &amp; retours</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium text-encre">Aide</p>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Suivi de commande</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-encre/50">© 2026 Maison Faune. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
