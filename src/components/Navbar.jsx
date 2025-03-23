import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ysce-logo.png";
import EnrollmentForm from './shared/EnrollmentForm';
import FranchiseForm from './shared/FranchiseForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showFranchiseForm, setShowFranchiseForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleItemClick = (item) => {
    if (item === "Get Enrolled") {
      setShowEnrollForm(true);
    } else if (item === "Franchise Partner") {
      setShowFranchiseForm(true);
    } else if (item === "Home") {
      navigate("/");
    } else if (item === "About Us") {
      navigate("/about-ysce");
    } else if (item === "Our Management") {
      navigate("/our-management");
    } else if (item === "Our Coaches") {
      navigate("/coaches");
    } else if (item === "Our Programs") {
      navigate("/programs");
    } else if (item === "Our Center") {
      navigate("/our-center");
    } else {
      console.log("Clicked:", item);
    }
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const dropdowns = [
    {
      title: "Who We Are",
      items: ["About Us", "Our Management", "Our Coaches"]
    },
    {
      title: "What We Do",
      items: ["Our Programs", "Our Center"]
    },
    {
      title: "Contact Us",
      items: ["Get Enrolled", "Franchise Partner"]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1 
            className="text-xl font-bold cursor-pointer relative z-10" 
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" ref={dropdownRef}>
            <NavItem title="Home" onClick={() => handleItemClick("Home")} />
            <Dropdown 
              title="Who We Are" 
              items={["About Us", "Our Management", "Our Coaches"]} 
              isOpen={activeDropdown === "Who We Are"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
            <Dropdown 
              title="Our Program" 
              items={[
                "Advanced Training Program",
                "Coaching Sessions",
                "Domestic Camps",
                "International Camps",
                "High-Performance Camp with Yuvraj Singh",
                "Domestic Tours",
                "International Tours",
                "Tournaments"
              ]} 
              isOpen={activeDropdown === "Our Program"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
            <NavItem title="Our Center" onClick={() => handleItemClick("Our Center")} />
            <NavItem title="Blog & Insight" onClick={() => handleItemClick("Blog & Insight")} />
            <Dropdown 
              title="Contact Us" 
              items={["Get Enrolled", "Franchise Partner"]} 
              isOpen={activeDropdown === "Contact Us"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col bg-gray-800 p-4 space-y-4 text-white">
            <NavItem title="Home" onClick={() => handleItemClick("Home")} />
            <MobileDropdown 
              title="Who We Are" 
              items={["About Us", "Our Management", "Our Coaches"]} 
              isOpen={activeDropdown === "Who We Are"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
            <MobileDropdown 
              title="Our Program" 
              items={[
                "Advanced Training Program",
                "Coaching Sessions",
                "Domestic Camps",
                "International Camps",
                "High-Performance Camp with Yuvraj Singh",
                "Domestic Tours",
                "International Tours",
                "Tournaments"
              ]} 
              isOpen={activeDropdown === "Our Program"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
            <NavItem title="Our Center" onClick={() => handleItemClick("Our Center")} />
            <NavItem title="Blog & Insight" onClick={() => handleItemClick("Blog & Insight")} />
            <MobileDropdown 
              title="Contact Us" 
              items={["Get Enrolled", "Franchise Partner"]} 
              isOpen={activeDropdown === "Contact Us"} 
              toggleDropdown={toggleDropdown}
              onItemClick={handleItemClick} 
            />
          </div>
        )}
      </nav>

      <EnrollmentForm 
        isOpen={showEnrollForm} 
        onClose={() => setShowEnrollForm(false)} 
      />
      
      <FranchiseForm 
        isOpen={showFranchiseForm} 
        onClose={() => setShowFranchiseForm(false)} 
      />
    </>
  );
};

const NavItem = ({ title, onClick }) => (
  <div 
    className="cursor-pointer text-white/90 hover:text-yellow-400 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
    onClick={onClick}
  >
    {title}
  </div>
);

// Desktop dropdown component
const Dropdown = ({ title, items, isOpen, toggleDropdown, onItemClick }) => {
  const isContactMenu = title === "Contact Us";
  
  return (
    <div className="relative">
      <div 
        className={`cursor-pointer text-white hover:text-yellow-400 flex items-center py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${isOpen ? 'text-yellow-400' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown(isOpen ? null : title);
        }}
      >
        {title}
        <span className={`ml-1 text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      
      {isOpen && (
        <div 
          className={`absolute top-12 bg-gray-800 text-white rounded-lg shadow-xl w-64 p-2 space-y-1 z-50 ${
            isContactMenu ? 'right-0' : 'left-0'
          }`}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer rounded-md transition-colors duration-200 text-sm"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile-specific dropdown component
const MobileDropdown = ({ title, items, isOpen, toggleDropdown, onItemClick }) => {
  return (
    <div className="w-full">
      <div 
        className={`cursor-pointer text-white hover:text-yellow-400 flex items-center justify-between py-2 text-sm font-medium tracking-wide ${isOpen ? 'text-yellow-400' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown(title);
        }}
      >
        <span>{title}</span>
        <span className={`text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      
      {isOpen && (
        <div className="bg-gray-700 rounded-md mt-1 overflow-hidden">
          {items.map((item, index) => (
            <div 
              key={index}
              className="px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 cursor-pointer text-sm transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;