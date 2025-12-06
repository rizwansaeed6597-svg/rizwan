import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Smart Marketing Solutions for <br/>
                <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Smart Businesses</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At Hala Smart Technologies, we specialize in <b className="text-white">Digital Marketing Services</b> to help your business grow and stand out in today's competitive market. From result-driven <b className="text-white">SEO Services</b> and high-performing <b className="text-white">PPC Campaigns</b> to creative <b className="text-white">Content marketing</b> and strategic <b className="text-white">Social Media Management</b>, we cover all aspects of online growth. Our expert team also provides <b className="text-white">Web Development</b> to ensure your brand has a strong online presence. With strategies built around your goals, we transform smart ideas into measurable business success.
            </p>
            <a href="#" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>
           <div>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" alt="Smart Business Solutions" className="rounded-lg shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;