import { useEffect } from "react";
import Hero from "../../Component/Home/Hero";
import InfoSection from "../../Component/Home/InfoSection";
import MessageSlider from "../../Component/Home/MessageSlider";
import FeatureCards from "../../Component/Home/FeatureCards";
import ResearchSection from "../../Component/Home/ResearchSection";
import EventsSlider from "../../Component/Home/EventsSlider";
import NoticeSection from "../../Component/Home/NoticeSection";
import LiveCounter from "../../Component/Home/CounterItem";
const Home = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার পর স্মুথ স্ক্রল অ্যানিমেশন
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero></Hero>
      <InfoSection></InfoSection>
      <MessageSlider></MessageSlider>
      <FeatureCards></FeatureCards>
      <ResearchSection></ResearchSection>
      <EventsSlider></EventsSlider>
      <NoticeSection></NoticeSection>
      <LiveCounter></LiveCounter>
    </div>
  );
};

export default Home;