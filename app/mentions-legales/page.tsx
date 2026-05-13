import { SITE } from "@/lib/site"

export const metadata = {
  title: "Mentions légales — Bread & Smash",
}

export default function MentionsLegalesPage() {
  return (
    <article className="bg-[#0a0a0a] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-invert prose-zinc">
        <h1 className="font-black uppercase tracking-tight text-3xl sm:text-4xl">
          Mentions légales
        </h1>

        <section className="mt-8 space-y-4 text-zinc-300 text-sm leading-relaxed">
          <h2 className="text-white font-bold text-lg">Éditeur du site</h2>
          <p>
            <strong>Bread &amp; Smash</strong>
            <br />
            {SITE.address}
            <br />
            Téléphone : {SITE.phone}
          </p>

          <h2 className="text-white font-bold text-lg">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>

          <h2 className="text-white font-bold text-lg">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, marques) est la propriété
            exclusive de Bread &amp; Smash et est protégé par le droit d&apos;auteur. Toute reproduction
            sans autorisation est interdite.
          </p>

          <h2 className="text-white font-bold text-lg">Données personnelles</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression des données vous concernant. Pour exercer ce droit, contactez-nous au {SITE.phone}.
            Les données collectées via le formulaire de commande ne sont utilisées que pour la prise en
            charge de votre commande et ne sont jamais transmises à des tiers.
          </p>

          <h2 className="text-white font-bold text-lg">Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement du panier
            (stockage local). Aucun cookie publicitaire ou de suivi n&apos;est déposé.
          </p>

          <h2 className="text-white font-bold text-lg">Allergènes</h2>
          <p>
            Pour toute information relative aux allergènes présents dans nos produits, contactez-nous
            directement au {SITE.phone} ou sur place.
          </p>
        </section>
      </div>
    </article>
  )
}
