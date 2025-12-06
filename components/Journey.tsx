import React from 'react';

const Logo: React.FC<{ name: string; subtext?: string; imgSrc?: string; alt: string }> = ({ name, subtext, imgSrc, alt }) => (
    <div className="flex items-center justify-center p-4 h-24">
        {imgSrc ? (
            <img src={imgSrc} alt={alt} className="max-h-16 max-w-full" />
        ) : (
            <div className="text-center">
                <span className="text-xl font-bold text-gray-300">{name}</span>
                {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
            </div>
        )}
    </div>
);

const Journey: React.FC = () => {
    const logos = [
        { name: 'NELL GWYNNE', alt: 'Nell Gwynne Logo' },
        { name: 'MARINA', subtext: 'BYBLOS HOTEL', alt: 'Marina Byblos Hotel Logo' },
        { name: 'Green Crystal', subtext: 'Ventilators and Air Filters Trading L.L.C.', alt: 'Green Crystal Logo' },
        { name: 'GSBM', subtext: 'Gulf Special Building Material L.L.C.', alt: 'GSBM Logo' },
        { name: 'Sukhumvit 11', alt: 'Sukhumvit 11 Logo' },
        { name: 'MARANO SPA CENTER', alt: 'Marano Spa Center Logo' },
        { name: 'MADO', subtext: 'A REAL TASTE FEAST', alt: 'Mado Logo' },
        { name: 'ONZEE ON WEB', subtext: 'IT Solutions Digital Marketing Agency', alt: 'Onzee On Web Logo' },
    ];

    return (
        <section id="journey" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our Journey of <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Innovation & Impact</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                        At Hala Technology, innovation is at the core of everything we do. We work with both new startups and well-established companies to help them grow and succeed. No matter the size of the project, we stay focused on creating smart, effective solutions that support real business growth. When you work with us, you’re not just getting IT services, you’re getting a trusted partner who’s committed to your long-term success.
                    </p>
                </div>
                
                <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-cyan-500/50 to-transparent">
                    <div className="bg-[#030014] rounded-2xl p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                            {logos.map((logo, index) => (
                                <Logo key={index} {...logo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;