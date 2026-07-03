import { Hero } from "@/components/landing/Hero";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Science } from "@/components/landing/Science";
import { MainDoc } from "@/components/landing/MainDoc";
import { Timeline } from "@/components/landing/Timeline";
import { Products } from "@/components/landing/Products";
import { QuizCTA } from "@/components/landing/QuizCTA";
import { Team } from "@/components/landing/Team";
import { Reviews } from "@/components/landing/Reviews";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export default function Homepage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <BeforeAfter />
      <Science />
      <Products />
      <Timeline />
      <MainDoc />
      <QuizCTA />
      <Team />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
}
