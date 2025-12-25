import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Manifesto } from "@/components/sections/manifesto"
import { Services } from "@/components/sections/services"
import { AIAdvantage } from "@/components/sections/ai-advantage"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <AIAdvantage />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
