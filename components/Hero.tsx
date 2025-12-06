import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-left"
    >
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 1280px)" srcSet="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=2070&auto=format&fit=crop&fm=webp" />
          <source media="(min-width: 768px)" srcSet="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=1280&auto=format&fit=crop&fm=webp" />
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=768&auto=format&fit=crop&fm=webp" 
            alt="Digital marketing team working together"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold tracking-wider text-white uppercase">Hala Smart Technologies</p>
            <div className="w-20 h-0.5 bg-cyan-400 my-4"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Digital Marketing</span>
              <br/>
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">Company</span> In Dubai
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
              Hala Smart Technologies is one of the leading marketing agencies, delivering services such as SEO, PPC, Web Development, Social Media Marketing & WhatsApp Business Automation, along with many more solutions that enhance your brand visibility in Dubai and beyond. Wherever you want to grow your business, we are here to help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="bg-white text-gray-700 py-2 px-4 rounded-md flex items-center space-x-2 shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9 9.3999C21.9 8.7999 21.8 8.1999 21.7 7.6999H12V13.2H17.6C17.4 14.8 16.6 16.2 15.2 17.1V19.6H18.5C20.6 17.6 21.9 14.9 21.9 11.4V9.3999Z" fill="#4285F4"></path><path d="M12 22C14.7 22 17 21 18.5 19.6L15.2 17.1C14.2 17.8 13.2 18.2 12 18.2C9.6 18.2 7.5 16.6 6.7 14.4H3.2V16.9C4.7 19.9 8.1 22 12 22Z" fill="#34A853"></path><path d="M6.7 14.4C6.5 13.8 6.4 13.1 6.4 12.5C6.4 11.9 6.5 11.2 6.7 10.6V8.1H3.2C2.7 9.2 2.4 10.5 2.4 11.9C2.4 13.3 2.7 14.6 3.2 15.7L6.7 14.4Z" fill="#FBBC05"></path><path d="M12 6.8C13.4 6.8 14.8 7.3 15.8 8.3L18.6 5.5C16.9 3.9 14.7 3 12 3C8.1 3 4.7 5.1 3.2 8.1L6.7 10.6C7.5 8.4 9.6 6.8 12 6.8Z" fill="#EA4335"></path></svg>
                <span className="font-semibold">Google Partner</span>
              </div>
              <div className="bg-[#1877F2] text-white py-2 px-4 rounded-md flex items-center space-x-2 shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>
                <span className="font-semibold">Marketing Partner</span>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl animate-fade-in-up lg:delay-200">
            <h2 className="text-2xl font-bold text-white mb-6">
              Have any <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">questions?</span>
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="Enter Your Name?" className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"/>
              <input type="email" placeholder="Your Email?" className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"/>
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                 </div>
                 <input type="tel" placeholder="Enter your phone number" className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"/>
              </div>
              <div className="relative">
                <select className="appearance-none w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                  <option className="bg-slate-800" value="">What's your budget? *</option>
                  <option className="bg-slate-800" value="2k-5k">AED 2K - 5K</option>
                  <option className="bg-slate-800" value="5k-10k">AED 5K - 10K</option>
                  <option className="bg-slate-800" value="10k+">AED 10K+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <textarea placeholder="Tell us about the project" rows={4} className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 transform hover:scale-105 hover:brightness-110 active:scale-95">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;