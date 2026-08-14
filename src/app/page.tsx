import { Hero } from "@/components/hero";
import { ImageCarousel } from "@/components/image-carousel";
import { SectionCta } from "@/components/section-cta";
import { SectionHighlights } from "@/components/section-highlights";
import { SectionProblem } from "@/components/section-problem";
import { SectionProduct } from "@/components/section-product";
import { SectionWhy } from "@/components/section-why";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <SectionProblem />
      <SectionProduct />
      <SectionHighlights />
      <SectionWhy />
      <SectionCta />
    </>
  );
}
