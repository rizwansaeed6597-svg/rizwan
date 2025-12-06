import React from 'react';

const Feature: React.FC<{ icon: React.ReactElement<{ className?: string }>; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-cyan-400 mt-1">
            {React.cloneElement(icon, { className: "h-6 w-6" })}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="pr-0 lg:pr-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Why Choose <br/> 
                            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Hala Technology?</span>
                        </h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <Feature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.664 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.162 1.163-.188 1.743-.14a4.5 4.5 0 004.476-4.476 4.5 4.5 0 00-4.476-4.476c-.58.048-1.193.09-1.743.14m5.108-.233l-5.46-5.46m0 0l-5.46 5.46m5.46-5.46l5.46 5.46" /></svg>}
                                title="Real Results, Not Empty Promises"
                                description="We focus on delivering measurable growth for your business. From strategy and creativity to data-driven execution, every project is designed to achieve real outcomes, not just words on paper or in chats."
                            />
                             <Feature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>}
                                title="Innovation That Moves You Forward"
                                description="We stay ahead of trends so your business never falls behind. Our team builds smart, future-ready solutions designed for your specific needs, helping you stay competitive in today's fast changing market."
                            />
                        </div>
                        <div className="space-y-8">
                             <Feature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
                                title="Your Real Partner in Growth"
                                description="At Hala Technology, we listen first. We understand your goals and turn them into a clear, actionable plan. Our partnership approach ensures your success remains the focus of everything we do."
                            />
                             <Feature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.004-.014.004-.004.002-.003.002-.002.001-.001.001L2.25 10.5l.003-.001.002-.002.003-.002.004-.003.007-.004.014-.004.04-.012.12-.032.22-.056.28-.068.35-.08.41-.09.48-.1.95-.18 1.41-.25z" /></svg>}
                                title="Support That Truly Cares"
                                description="Need help or have a question? Our friendly support team is always just a call or click away. We provide fast, reliable assistance to keep your business running smoothly without interruptions."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;