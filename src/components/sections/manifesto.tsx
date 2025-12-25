"use client"

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
            Manifesto
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground-muted">
              <span className="text-foreground font-semibold">UXER \u00e9 quem age.</span>{" "}
              Quem entra no sistema, entende o contexto e move a experi\u00eancia para frente.
            </p>

            <p className="text-foreground-muted">
              N\u00e3o desenhamos para admirar.{" "}
              <span className="text-foreground font-semibold">
                Desenhamos para funcionar, escalar e gerar resposta real no mundo.
              </span>
            </p>

            <p className="text-foreground-muted">
              Usamos tecnologia e Intelig\u00eancia Artificial como alavanca.{" "}
              <span className="text-primary">
                Para enxergar padr\u00f5es antes, testar mais r\u00e1pido e decidir melhor.
              </span>{" "}
              N\u00e3o para substituir o humano, mas para potencializar a\u00e7\u00e3o.
            </p>

            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="text-foreground font-medium">
                UXER n\u00e3o espera o &ldquo;momento ideal&rdquo;.
              </p>
              <p className="text-foreground-muted mt-2">
                Prot\u00f3tipo \u00e9 decis\u00e3o. Teste \u00e9 compromisso. Entrega \u00e9 responsabilidade.
              </p>
            </div>

            <p className="text-foreground-muted">
              Experi\u00eancia n\u00e3o \u00e9 o que parece.{" "}
              <span className="text-foreground font-semibold">
                \u00c9 o que acontece quando algu\u00e9m usa.
              </span>
            </p>

            <p className="text-foreground-muted">
              Se n\u00e3o muda comportamento, n\u00e3o \u00e9 UX.{" "}
              <span className="text-primary font-semibold">
                Se n\u00e3o gera impacto, n\u00e3o \u00e9 ER.
              </span>
            </p>

            <div className="pt-8 border-t border-border">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                UXER \u00e9 a\u00e7\u00e3o aplicada \u00e0 experi\u00eancia.
                <br />
                <span className="text-primary text-glow">Todo dia. Em produ\u00e7\u00e3o.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
