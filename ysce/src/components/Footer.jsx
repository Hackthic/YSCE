import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import footerLogo from '../assets/footer-logo.png';

const quickLinks = [
  {
    title: "About Us",
    links: [
      { name: "About YSCE", path: "/about-ysce" },
      { name: "Our Management", path: "/management" },
      { name: "Our Coaches", path: "/coaches" },
      { name: "Our Centers", path: "/centers" },
    ]
  },
  {
    title: "Our Programs",
    links: [
      { name: "Domestic Exposure", path: "/programs/domestic" },
      { name: "International Exposure", path: "/programs/international" },
      { name: "Summer Camps", path: "/programs/summer-camps" },
      { name: "YSCE League", path: "/ysce-league" }
    ]
  },
  {
    title: "Get Involved",
    links: [
      { name: "Contact Us", path: "/contact" },
      { name: "Become a Franchisee", path: "/franchisee" },
      { name: "For Admission", path: "/admission" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Academy Logo and Info */}
          <div className="flex flex-col items-start">
            <img 
              src={footerLogo} 
              alt="YSCE Logo" 
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-bold text-yellow-400 mb-4 whitespace-pre-line leading-snug tracking-wide">
              YUVRAJ SINGH{'\n'}CENTRES OF{'\n'}EXCELLENCE
            </h3>
            <div className="space-y-2">
              <a 
                href="tel:+919667033811" 
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">+91 9667033811</span>
              </a>
              <a 
                href="mailto:info@ysce.in" 
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">info@ysce.in</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">Gurugram, Haryana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-base font-bold text-white mb-4 tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-end mt-8 border-t border-gray-800 pt-6">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-gray-400 text-sm">
            © 2024 YSCE Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
