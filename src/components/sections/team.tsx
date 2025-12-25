"use client"

import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Gui Gonzalez",
    role: "Co-fundador",
    bio: "Designer de experiência com mais de 10 anos transformando produtos digitais. Especialista em pesquisa com usuários e design estratégico.",
    linkedin: "#",
  },
  {
    name: "Willian Kuester",
    role: "Co-fundador",
    bio: "Especialista em design de interfaces e sistemas de design. Foco em criar experiências escaláveis e consistentes.",
    linkedin: "#",
  },
]

export function Team() {
  return (
    <section id="quem-somos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Quem Somos
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Pessoas por trás da ação.
          </p>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            Uma equipe enxuta e focada. Menos burocracia, mais resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((person) => (
            <div
              key={person.name}
              className="p-8 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card transition-colors text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-primary text-sm mt-1">{person.role}</p>

              <p className="text-foreground-muted mt-4 text-sm leading-relaxed">
                {person.bio}
              </p>

              {person.linkedin !== "#" && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-foreground-muted hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
