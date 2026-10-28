import React from "react";
import { WeddingHero } from "@/components/sections/WeddingHero";
import { ExperienceTrustSection } from "@/components/sections/ExperienceTrustSection";
import { PhotographyServicesShowcase } from "@/components/sections/PhotographyServicesShowcase";
import { IndianWeddingExperience } from "@/components/sections/IndianWeddingExperience";
import { PhotographyPackagesSection } from "@/components/sections/PhotographyPackagesSection";
import { WeddingInvitationShowcase } from "@/components/sections/WeddingInvitationShowcase";
import { CommercialPrintingSection } from "@/components/sections/CommercialPrintingSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WhyChooseAndProcessSection } from "@/components/sections/WhyChooseAndProcessSection";
import { AboutStudioSection } from "@/components/sections/AboutStudioSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. The Grand Wedding Hero */}
      <WeddingHero />

      {/* 2. 12 Years of Trust & Experience */}
      <ExperienceTrustSection />

      {/* 3. Photography, Videography & Editing Services */}
      <PhotographyServicesShowcase showAllDetails={false} />

      {/* 4. The Indian Wedding Experience (Ceremony Chapters) */}
      <IndianWeddingExperience />

      {/* 5. Three Photography Packages (No invented prices) */}
      <PhotographyPackagesSection />

      {/* 6. Wedding Invitation Cards & Craftsmanship */}
      <WeddingInvitationShowcase />

      {/* 7. Other Printing & Graphics Services */}
      <CommercialPrintingSection />

      {/* 8. Visual Inspirations & Preview Gallery with Lightbox */}
      <GallerySection />

      {/* 9 & 10. Why Choose the Studio & 4-Step Enquiry Process */}
      <WhyChooseAndProcessSection />

      {/* 11. About the Studio */}
      <AboutStudioSection isFullPage={false} />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Contact & Validated WhatsApp Enquiry Form */}
      <ContactEnquirySection />
    </>
  );
}

