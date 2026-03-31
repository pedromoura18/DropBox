import Hero from "@/components/home/hero"
import ToolsIntro from "@/components/home/tools-intro"
import Plans from "@/components/home/plans"
import Support from "@/components/home/support"
import SocialProof from "@/components/home/social-proof"
import UseCases from "@/components/home/use-cases"
import FinalCTA from "@/components/home/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsIntro />
      <Plans />
      <Support />
      <SocialProof />
      <UseCases />
      <FinalCTA />
    </>
  )
}
