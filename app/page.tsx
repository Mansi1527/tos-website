import { AboutUs, Hero, Navbar, Services, Footer, ContactForm } from "@/components";

import { FAQSection } from "@/components/main/faq/faq";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      
        <Hero/>
        <Services/>
        <AboutUs/>
        <FAQSection/>
        <ContactForm/>
        <Footer/>
      
    </div>    
  );
}
