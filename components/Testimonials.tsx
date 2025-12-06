import React, { useState } from 'react';

const testimonialData = [
    {
        quote: "Choosing Hala Technology for our digital marketing was a game changer. Their strategies increased our engagement and brought new clients to our door.",
        author: "Anna & Mark",
        role: "Business Owners"
    },
    {
        quote: "The web development team delivered a sleek, fast, and responsive website that has significantly improved our online presence. Highly recommended!",
        author: "John Doe",
        role: "CEO of Innovate Inc."
    },
    {
        quote: "Their social media management is top-notch. Our followers have doubled, and the content is always engaging and on-brand. A truly professional team.",
        author: "Jane Smith",
        role: "Marketing Director"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
            setIsAnimating(false);
        }, 300);
    };

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
            setIsAnimating(false);
        }, 300);
    };

    const currentTestimonial = testimonialData[currentIndex];

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Clients <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Testimonials</span>
                        </h2>
                        <p className="text-gray-400">
                            Our clients speak for our work. From digital makeovers to full-scale tech transformations, their feedback highlights the real value we deliver innovation, dedication, and results.
                        </p>
                    </div>

                    <div className="bg-[#0A0A0E] p-8 rounded-2xl shadow-2xl relative">
                        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            <p className="text-gray-300 italic min-h-[96px]">
                                "{currentTestimonial.quote}"
                            </p>
                            <div className="mt-6 text-right">
                                <p className="font-bold text-white">{currentTestimonial.author}</p>
                                <p className="text-sm text-cyan-400">{currentTestimonial.role}</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 right-8 flex space-x-2">
                             <button onClick={handlePrev} aria-label="Previous testimonial" className="h-10 w-10 rounded-full bg-gray-700/50 text-white hover:bg-gray-600 flex items-center justify-center transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                             </button>
                             <button onClick={handleNext} aria-label="Next testimonial" className="h-10 w-10 rounded-full bg-gray-700/50 text-white hover:bg-gray-600 flex items-center justify-center transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;