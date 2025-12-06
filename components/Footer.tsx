import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a href={href} aria-label={label} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
        {children}
    </a>
);

const FooterLink: React.FC<{href: string; children: React.ReactNode}> = ({href, children}) => (
    <li>
        <a href={href} className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-3 h-3 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            {children}
        </a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#0A0A0E] text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* About */}
                    <div className="space-y-4">
                         <a href="#" className="flex items-center space-x-2">
                            <svg className="h-10 w-10 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M32 5C47.464 5 60 17.536 60 33C60 48.464 47.464 61 32 61C16.536 61 4 48.464 4 33C4 17.536 16.536 5 32 5Z" stroke="white" strokeWidth="2.5"/>
                              <path d="M22.4 34.6C22.4 34.6 26.6 32.2 29.6 33.4C32.6 34.6 31.4 39.6 31.4 39.6M40.4 34.6C40.4 34.6 36.2 32.2 33.2 33.4C30.2 34.6 31.4 39.6 31.4 39.6M31.4 21.4V40.6M31.4 33.4L42.8 28.6M31.4 33.4L20 28.6" stroke="#00B2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="flex flex-col">
                              <span className="font-extrabold text-lg tracking-wider">HALA</span>
                              <span className="text-xs font-light tracking-widest">SMART TECHNOLOGIES</span>
                            </div>
                        </a>
                        <p className="text-gray-400">
                           At Hala Technology, we focus on providing tailored services that meet your needs and simplify your digital journey. Get in touch with us for expert consultancy and support, anytime.
                        </p>
                    </div>
                    
                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">Hala Technologies</a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">Hala Technologies</a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">Hala Technologies</a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">Hala Technologies</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center"><span className="mr-2 text-cyan-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span> +971 14 557 3906</li>
                            <li className="flex items-center"><span className="mr-2 text-cyan-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span> +971 58 613 9007</li>
                            <li className="flex items-start"><span className="mr-2 mt-1 text-cyan-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span> 1803, Latifa Tower, Sheikh Zayed Road, Dubai</li>
                            <li className="flex items-center"><span className="mr-2 text-cyan-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span> contact@halatechnology.ae</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                           <FooterLink href="#">Home</FooterLink>
                           <FooterLink href="#services">Services</FooterLink>
                           <FooterLink href="#">Blog</FooterLink>
                           <FooterLink href="#">Case Study</FooterLink>
                           <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;