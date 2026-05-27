import {
  LandingAudience,
  LandingBenefits,
  LandingFaq,
  LandingFooter,
  LandingFtes,
  LandingHero,
  LandingMentor,
  LandingNav,
  LandingSchedule
} from "./sections";

/** Marketing landing for FTES Kì 1 course packages. */
export function FtesMasterLanding() {
  return (
    <div className="bg-st-surface font-sans text-st-on-background antialiased stitch-aurora-bg">
      <LandingNav />
      <main className="pt-14">
        <LandingHero />
        <LandingBenefits />
        <LandingAudience />
        <LandingSchedule />
        <LandingMentor />
        <LandingFaq />
        <LandingFtes />
      </main>
      <LandingFooter />
    </div>
  );
}
