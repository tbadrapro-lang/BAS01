import { SITE } from "@/lib/site"

export const metadata = {
  title: "Conditions générales de vente — Bread & Smash",
}

export default function CGVPage() {
  return (
    <article className="bg-[#0a0a0a] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-black uppercase tracking-tight text-3xl sm:text-4xl">
          Conditions générales de vente
        </h1>

        <section className="mt-8 space-y-4 text-zinc-300 text-sm leading-relaxed">
          <h2 className="text-white font-bold text-lg">1. Objet</h2>
          <p>
            Les présentes conditions régissent les commandes passées auprès de Bread &amp; Smash,
            restaurant situé au {SITE.address}, pour une vente à emporter, à consommer sur place
            ou en livraison via WhatsApp, Uber Eats et Deliveroo.
          </p>

          <h2 className="text-white font-bold text-lg">2. Commandes</h2>
          <p>
            Les commandes peuvent être passées par téléphone ({SITE.phone}), via WhatsApp ou via
            les plateformes partenaires. Toute commande devient ferme après confirmation par notre
            équipe.
          </p>

          <h2 className="text-white font-bold text-lg">3. Prix</h2>
          <p>
            Les prix affichés sont en euros, TTC. Bread &amp; Smash se réserve le droit de modifier
            ses prix à tout moment, étant entendu que le prix appliqué sera celui en vigueur au
            moment de la commande.
          </p>

          <h2 className="text-white font-bold text-lg">4. Paiement</h2>
          <p>
            Le paiement s&apos;effectue au moment de la livraison ou du retrait, en espèces ou par
            carte bancaire. Pour les plateformes partenaires, le paiement suit les conditions de
            chaque plateforme.
          </p>

          <h2 className="text-white font-bold text-lg">5. Livraison</h2>
          <p>
            Les délais de livraison sont indicatifs et dépendent de l&apos;affluence. Bread &amp; Smash
            n&apos;est pas responsable des retards causés par les plateformes de livraison
            partenaires ou par des cas de force majeure.
          </p>

          <h2 className="text-white font-bold text-lg">6. Rétractation</h2>
          <p>
            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
            ne s&apos;applique pas aux denrées alimentaires périssables.
          </p>

          <h2 className="text-white font-bold text-lg">7. Code promo</h2>
          <p>
            Les codes promotionnels (ex. BREAD10) sont valables une seule fois par client, non
            cumulables, et ne s&apos;appliquent pas aux commandes via plateformes partenaires.
          </p>

          <h2 className="text-white font-bold text-lg">8. Réclamations</h2>
          <p>
            Toute réclamation doit être adressée dans les 24h suivant la commande au {SITE.phone}.
          </p>

          <h2 className="text-white font-bold text-lg">9. Litige</h2>
          <p>
            Les présentes CGV sont régies par le droit français. Tout litige sera soumis aux
            tribunaux français compétents.
          </p>
        </section>
      </div>
    </article>
  )
}
