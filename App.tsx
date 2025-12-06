import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#030014] relative">
      {/* Grid background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Journey />
          <Portfolio />
          <Process />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
      
       {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-3 z-50">
        <a href="#" aria-label="Chat on WhatsApp" className="bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459l-6.354 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.888 9.89.001 2.235.822 4.355 2.409 5.912l-1.533 5.585 5.747-1.506zM12 4.545c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5zm.022 11.996l-.11.064c-1.33.766-2.855.53-3.963-.574-.959-.958-1.08-2.383-.34-3.553l.064-.11c.75-1.314 2.213-2.023 3.65-1.84.99.123 1.899.585 2.59 1.282.68.686 1.12 1.564 1.25 2.53.18 1.446-.53 2.918-1.84 3.65z"/>
          </svg>
        </a>
        <a href="mailto:example@example.com" aria-label="Send an email" className="bg-[#EA4335] hover:bg-[#D93025] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
        </a>
        <a href="tel:+1234567890" aria-label="Call us" className="bg-gray-600 hover:bg-gray-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;