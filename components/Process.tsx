import React from 'react';

const ProcessStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div>
        <h3 className="text-2xl font-bold text-white mb-2">
            <span className="text-cyan-400">{number}.</span> {title}
        </h3>
        <p className="text-gray-400 pl-8">{description}</p>
    </div>
);

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-purple-400 font-semibold">Our Process</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            How It <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Works</span>
                        </h2>
                        <p className="text-gray-400">
                            Our process is simple yet effective, starting with a Discovery Call, backed by Market Research, shaped into a clear Strategy, executed through Implementation, and continuously improved with Reporting & Optimization to drive lasting growth.
                        </p>
                        <a href="#" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                            Book Services
                        </a>
                    </div>
                    <div className="space-y-8">
                        <ProcessStep 
                            number="01"
                            title="Discovery Call"
                            description="Our journey begins with a friendly consultation where we learn about your goals, challenges, and vision. During this call, you'll share what you want to achieve, and we'll discuss how our digital solutions can help you get there. After the call, we prepare a tailored action plan designed for your business."
                        />
                        <ProcessStep 
                            number="02"
                            title="Market Research"
                            description="Before building any strategy, we dive deep into your industry. Our team studies your competitors, audience behavior, and market trends to uncover valuable insights. This research allows us to create a data-driven approach that aligns with your customer's needs and sets you apart in your industry."
                        />
                        <ProcessStep 
                            number="03"
                            title="Strategising"
                            description="With insights in hand, we build a clear roadmap that outlines every step toward achieving your goals. From branding and digital marketing to automation and growth, our experts craft a strategy that fits your business perfectly. Nothing is left unchecked we make sure every angle is covered for maximum impact."
                        />
                        <ProcessStep 
                            number="04"
                            title="Implementation"
                            description="This is where strategy comes alive. Our team executes the plan with precision, ensuring every campaign, design, and solution is implemented smoothly. We monitor results closely, optimize continuously, and keep you updated at every step so you see real progress and measurable growth."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;