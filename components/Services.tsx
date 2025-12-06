import React from 'react';

interface ServiceCardProps {
    // FIX: Specify that the icon prop accepts a className to resolve the TypeScript error with React.cloneElement.
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-[#0A0A0E] p-8 rounded-2xl group relative border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col h-full">
            <div className="text-cyan-400 mb-4 transition-colors duration-300 group-hover:text-white">
                {React.cloneElement(icon, { className: "h-12 w-12" })}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-6 flex-grow">{description}</p>
            <a href="#" className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-center w-fit">
              Explore More
            </a>
        </div>
    </div>
);

const services = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.456L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" /></svg>,
        title: 'Graphic Designing',
        description: 'Looking for professional graphic design services in Dubai that make your business stand out? At Hala Smart Technologies, we specialize in delivering eye-catching, innovative, and strategic designs that not only look stunning but also convert.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
        title: 'Web Development',
        description: 'Looking for professional web development services in Dubai that deliver results? At Hala Smart Technologies, we design and develop websites that don’t just look good they perform, convert, and scale with your business.'
    },
     {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
        title: 'Digital Marketing',
        description: 'Are you struggling to reach your target audience or convert clicks into customers? At Hala Smart Technologies, we provide professional digital marketing services in Dubai that help businesses grow smarter and faster.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
        title: 'Content Creation',
        description: 'Struggling to create content that grabs attention and drives results? At Hala Smart Technologies, we provide professional content creation services in Dubai designed to help businesses communicate their brand story effectively.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>,
        title: 'Video Editing',
        description: 'Looking for professional video editing services in Dubai that bring your stories to life? At Hala Smart Technologies, we specialize in transforming your raw footage into polished, engaging, and impactful videos.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5a2.25 2.25 0 002.25 2.25z" /></svg>,
        title: 'AI Agent',
        description: 'Looking to scale your business with the power of artificial intelligence? At Hala Smart Technologies, we provide advanced AI agent services in Dubai designed to automate repetitive tasks, boost efficiency, and improve customer experience.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>,
        title: 'WhatsApp Automation',
        description: 'At Hala Technology, we help businesses transform WhatsApp from a simple chat tool into a powerful automated communication channel.'
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Services</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Hala Technology considers the services offered to be solutions that build brands, grow them, and make ideas come to life. We blend creativity, strategy, and technology to deliver results that truly matter.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 6).map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-32 lg:px-56">
                    <div className="lg:col-start-2">
                        <ServiceCard {...services[6]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;