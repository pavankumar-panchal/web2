import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Models from "@/components/Models";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen galaxy-bg">
      <Header />
      <main>
        <div className="parallel-anim"><Hero /></div>
        <div className="parallel-anim" style={{animationDelay:'120ms'}}><About /></div>
        <div className="parallel-anim" style={{animationDelay:'240ms'}}><Models /></div>
        <div className="parallel-anim" style={{animationDelay:'360ms'}}><Video /></div>
        <div className="parallel-anim" style={{animationDelay:'480ms'}}><Services /></div>
        <div className="parallel-anim" style={{animationDelay:'600ms'}}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
