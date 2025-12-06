import React from 'react';

interface ProjectProps {
  title: string;
  gradientText: string;
  description: string;
  imageUrl: string;
  imageFirst?: boolean;
}

const Project: React.FC<ProjectProps> = ({ title, gradientText, description, imageUrl, imageFirst = false }) => (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${imageFirst ? 'md:grid-flow-row-dense' : ''}`}>
        <div className={`space-y-4 ${imageFirst ? 'md:col-start-2' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
                {title} <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">{gradientText}</span>
            </h3>
            <p className="text-gray-400">{description}</p>
        </div>
        <div className={`${imageFirst ? 'md:col-start-1' : ''}`}>
            <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl" />
        </div>
    </div>
);


const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'E-commerce',
            gradientText: 'Platform',
            description: 'To boost conversions, we built a unique e-commerce websites with a responsive, streamlined layout for all devices. Easy navigation gives customers a seamless shopping experience. A user-friendly design makes shopping easy, boosts sales, and keeps customers coming back.',
            imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop',
            imageFirst: false
        },
        {
            title: 'Corporate',
            gradientText: 'Website',
            description: 'We revamped a corporate website to give it a polished, brand-aligned look. Enhanced user flow makes it easier for visitors to find key information. Improved SEO boosts organic traffic and rankings, while mobile optimization ensures a smooth experience on all devices, reaching more users.',
            imageUrl: 'https://images.unsplash.com/photo-1559028006-44d08a5a3582?q=80&w=1932&auto=format&fit=crop',
            imageFirst: true
        },
        {
            title: 'Mobile App',
            gradientText: 'Development',
            description: 'We created a mobile app based on real user behavior. It combines attractive design with easy navigation, useful features, and a focus on simplicity. The result is an engaging app that keeps users coming back and improves customer satisfaction. Regular updates ensure it stays fast, secure, and relevant. Analytics tools help track performance and guide future improvements.',
            imageUrl: 'https://images.unsplash.com/photo-1601035232546-3694f71a011a?q=80&w=1974&auto=format&fit=crop',
            imageFirst: false
        }
    ];
    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <p className="text-purple-400 font-semibold">Our Work</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Real Projects, <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Real Impact.</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-3xl">
                        Hala Smart Technologies transforms ideas into powerful digital solutions that drive real results. We combine creativity with advanced technology to build products that help businesses grow. Our approach focuses on delivering an excellent user experience, ensuring every solution meets your customers' needs. From the first concept to the final launch, we provide scalable and effective digital strategies. Let's turn your vision into real, innovative solutions that drive your business forward.
                    </p>
                </div>
                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;