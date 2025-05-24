
import HeroSection from '@/components/HeroSection';
import CulinaryShowcase from '@/components/CulinaryShowcase';
import StorySection from '@/components/StorySection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ChefsPicks from '@/components/ChefsPicks';
import DineInStyleSection from '@/components/DineInStyleSection';
import ReservationCTA from '@/components/ReservationCTA';
import SeasonalSpotlight from '@/components/SeasonalSpotlight';
import GuestStories from '@/components/GuestStories';
import GiftExperiences from '@/components/GiftExperiences';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CulinaryShowcase />
      <WhyChooseUsSection />
      <ChefsPicks />
      <DineInStyleSection />
      <ReservationCTA />
      <SeasonalSpotlight />
      <GuestStories />
      <GiftExperiences />
    </div>
  );
};

export default Index;
