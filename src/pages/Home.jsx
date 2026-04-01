import AppCtaSection from "../components/home/AppCta";
import FoodCategorySection from "../components/home/Categories";
import FastdeliverySection from "../components/home/Fastdelivery";
import FeaturesSection from "../components/home/Features";

import Banner from "../components/home/FoodBanner";
import FoodLine from "../components/home/FoodLine";
// import FoodHero from "../components/home/FoodLine";
import HeroSection from "../components/home/HeroBanner";
import HygieneSection from "../components/home/Hygiene";
import TestimonialSection from "../components/home/Testimonial";

export default function Home() {
  
  return (
    <>
     <HeroSection />
     <FoodLine />
     <FastdeliverySection />
     <FoodCategorySection />
     <Banner /> 
     <AppCtaSection />
     <HygieneSection />
     <TestimonialSection />
    </>
  );
}
