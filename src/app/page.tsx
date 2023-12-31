import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import SpeakersSection from '@/sections/SpeakersSection';
import CommunitiesSection from '@/sections/CommunitiesSection';
import VenueSection from '@/sections/VenueSection';
import { Box } from '@/styled-system/jsx';
import SponsorsSection from '@/sections/SponsorsSection';

import TicketSection from '@/sections/TicketSection';

import { getSiteData } from '@/services/site';
import CountdownSection from '@/sections/CountdownSection';
import AgendaSection from '@/sections/AgendaSection';
import PartnersSection from '@/sections/PartnersSection';
import FAQSection from '@/sections/FAQSection';
import SpeakerModal from '@/components/SpeakerModal';
import Footer from '@/components/Footer';

export const revalidate = 60;

export default async function Home() {
  const data = await getSiteData();
  return (
    <main>
      <HeroSection />
      <Box bg='secondary' position='relative' zIndex={2}>
        <CountdownSection />
        <AboutSection />
        <VenueSection />
      </Box>
      <Box bgColor='primary' position='relative' pt='24' zIndex={1}>
        {/* <SpeakersSection speakers={data.speakers} /> */}
      </Box>
      {/* {data.sponsors?.length > 0 && (
        <SponsorsSection sponsors={data.sponsors} />
      )} */}
      {/* {data.partners?.length > 0 && (
        <PartnersSection partners={data.partners} />
      )} */}
      <TicketSection />
      {/* <CommunitiesSection communities={data.communities} /> */}
      {/* <AgendaSection
        talks={data.talks}
        isActive={
          Boolean(data.activate_agenda) ||
          process.env.NODE_ENV === 'development'
        }
      /> */}
      {/* <FAQSection faq={data.faq} /> */}
      <SpeakerModal />
      <Footer />
    </main>
  );
}
