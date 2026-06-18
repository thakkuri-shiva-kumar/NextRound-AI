import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">

      <Navbar />
      <Hero />
      <Features />
      <ChatBox/>
      <Footer />

    </div>
  );
}

export default Home;