import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to Take the <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Next Step?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-400 max-w-2xl mx-auto">
                    Let's make things happen together! Reach out to us and let <b className="text-white">Hala Technology</b> provide the tailored solutions you need to succeed. Our team is eager to assist you.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 rounded-lg shadow-sm text-base font-medium text-white bg-transparent hover:bg-gray-800/50 hover:border-cyan-500 transition-colors"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;