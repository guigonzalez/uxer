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
              <span className="text-foreground font-semibold">UXER é quem age.</span>{" "}
              Quem entra no sistema, entende o contexto e move a experiência para frente.
            </p>

            <p className="text-foreground-muted">
              Não desenhamos para admirar.{" "}
              <span className="text-foreground font-semibold">
                Desenhamos para funcionar, escalar e gerar resposta real no mundo.
              </span>
            </p>

            <p className="text-foreground-muted">
              Usamos tecnologia e Inteligência Artificial como alavanca.{" "}
              <span className="text-primary">
                Para enxergar padrões antes, testar mais rápido e decidir melhor.
              </span>{" "}
              Não para substituir o humano, mas para potencializar ação.
            </p>

            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="text-foreground font-medium">
                UXER não espera o &ldquo;momento ideal&rdquo;.
              </p>
              <p className="text-foreground-muted mt-2">
                Protótipo é decisão. Teste é compromisso. Entrega é responsabilidade.
              </p>
            </div>

            <p className="text-foreground-muted">
              Experiência não é o que parece.{" "}
              <span className="text-foreground font-semibold">
                É o que acontece quando alguém usa.
              </span>
            </p>

            <p className="text-foreground-muted">
              Se não muda comportamento, não é UX.{" "}
              <span className="text-primary font-semibold">
                Se não gera impacto, não é ER.
              </span>
            </p>

            <div className="pt-8 border-t border-border">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                UXER é ação aplicada à experiência.
                <br />
                <span className="text-primary text-glow">Todo dia. Em produção.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
