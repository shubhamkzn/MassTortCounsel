import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoPur.png"; // Adjust the path as necessary
import { Instagram, Linkedin, ChevronDown, Check } from "lucide-react";
import { BsTwitterX } from "react-icons/bs"; // Importing Twitter icon from react-icons
import { FaFacebookF } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/AboutUs" },
  { name: "Services", hasDropdown: true },
  { name: "Contact Us", href: "/ContactUs" },
];

const LAWSUIT_TYPES = [
  { name: "Depo-Provera Lawsuit", href: "/Service/Depo-Provera-Lawsuit" },
  { name: "Paraquat Lawsuit", href: "/Service/Paraquat-Lawsuit" },
  { name: "Roundup Lawsuit", href: "/Service/Roundup-Lawsuit" },
  { name: "Toxic Baby Food Lawsuit", href: "/Service/Toxic-Baby-Food-Lawsuit" },
  { name: "Oxbryta Lawsuit", href: "/Service/Oxbryta-Lawsuit" },
  { name: "Talcum Powder Lawsuit", href: "/Service/Talcum-Powder-Lawsuit" },
  { name: " Bard PowerPort Lawsuit", href: "/Service/Bard-PowerPort-Lawsuit" },
  // { name: "Ultra-Processed Foods Lawsuit", href: "/UltraProcessedMain" },
  { name: "AFFF Firefighting Foam Lawsuit", href: "/Service/AFFF-Firefighting-Foam-Lawsuit" },
  { name: "PFAS Contamination Lawsuit", href: "/Service/PFAS-Contamination-Lawsuit" },
  { name: "Transvaginal Mesh Lawsuit", href: "/Service/Transvaginal-Mesh-Lawsuit" },
];

function DesktopNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "/  ") return "Home";
    if (path === "/AboutUs") return "About Us";
    if (path === "/ContactUs") return "Contact Us";
    if (path === "/Services") return "Services";
    // Check if it's a service page
    const isServicePage = LAWSUIT_TYPES.some(
      (lawsuit) => lawsuit.href === path
    );
    if (isServicePage) return "Services";
    return "Home";
  };

  const [activePage, setActivePage] = useState(getCurrentPage());

  // Handle mouse enter on services button
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // 150ms delay to prevent flickering
    setHoverTimeout(timeout);
  };

  // Handle mouse enter on dropdown
  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  // Handle mouse leave from dropdown
  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-3">
      {/* Logo */}

      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-32 xl:w-40 object-contain"
          />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={buttonRef}
                    className={`font-semibold hover:underline transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                      activePage === link.name
                        ? "text-[#4F2270]"
                        : "text-gray-600"
                    } hover:text-[#4F2270]`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    ref={dropdownRef}
                    className={`absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 z-50 transition-all duration-200 ease-in-out ${
                      dropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-2">
                      {LAWSUIT_TYPES.map((lawsuit, index) => (
                        <a
                          key={lawsuit.name}
                          href={lawsuit.href}
                          className="group block px-4 py-3 text-sm text-gray-700 hover:text-[#4F2270] hover:bg-gray-50 transition-all duration-200 relative flex items-center justify-between"
                          style={{
                            animationDelay: `${index * 20}ms`,
                          }}
                        >
                          <span className="font-medium">{lawsuit.name}</span>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-5 h-5 bg-[#4F2270]  rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`font-semibold hover:underline transition-all duration-200 ${
                    activePage === link.name
                      ? "text-[#4F2270]"
                      : "text-gray-600"
                  } hover:text-[#4F2270]`}
                  onClick={() => setActivePage(link.name)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

     {/* Call Now Tile */}
<div className="flex items-center">
  <div className="bg-[#4F2270] rounded-lg px-4 py-2 text-center shadow hover:bg-[#FDBA22]  hover:text-[#4F2270] transition-colors duration-200">
    <div className="text-white font-quicksand text-[12px] font-semibold uppercase tracking-[-0.48px]">
      CALL NOW
    </div>
    <div className="text-white font-quicksand text-lg font-semibold">
      (888) 202 1350 
    </div>
  </div>
</div>

    </nav>
  );
}

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const NAV_LINKS = [
    { name: "Home", href: "/  " },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", hasDropdown: true },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  // Define socialLinks here, matching the footer
  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: BsTwitterX, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "/  ") return "Home";
    if (path === "/AboutUs") return "About Us";
    if (path === "/ContactUs") return "Contact Us";
    if (path === "/Services") return "Services";
    // Check if it's a service page
    const isServicePage = LAWSUIT_TYPES.some(
      (lawsuit) => lawsuit.href === path
    );
    if (isServicePage) return "Services";
    return "Home";
  };

  const [active, setActive] = useState(getCurrentPage());

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest("nav")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav className="w-full bg-white shadow px-4 py-3 relative">
      <div
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <div className="flex flex-col items-start">
            <span className="block w-6 h-0.5 bg-[#4F2270] mb-1 rounded transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-[#4F2270] mb-1 rounded transition-all duration-300"></span>
            <span className="block w-3 h-0.5 bg-[#4F2270] rounded transition-all duration-300"></span>
          </div>
        </button>
      </div>

      <div className="flex justify-center items-center w-full">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[30px] w-auto" />
        </Link>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col font-quicksand transition-all duration-500 ease-in-out ${
          open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ transitionProperty: "transform, opacity" }}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
          <button
            className="text-[#4F2270] text-3xl font-bold focus:outline-none transition-all duration-200 hover:scale-110"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <img src={logo} alt="Mass Tort Counsel" className="h-[30px] w-auto" />
          <span className="w-8"></span>
        </div>

        <div className="flex-1 bg-[#4F22701A] overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <div className="flex-1">
              <ul className="flex flex-col w-full">
                {NAV_LINKS.map((link, idx) => (
                  <li key={link.name} className="w-full">
                    {link.hasDropdown ? (
                      <div className="w-full">
                        <button
                          className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${
                            active === link.name
                              ? "text-[#4F2270] bg-gray-300"
                              : "text-gray-600"
                          } hover:text-[#4F2270] flex items-center justify-between`}
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {servicesOpen && (
                          <div className="bg-gray-100">
                            {LAWSUIT_TYPES.map((lawsuit) => (
                              <a
                                key={lawsuit.name}
                                href={lawsuit.href}
                                className="block px-12 py-3 text-sm text-gray-700 hover:text-[#4F2270] hover:bg-gray-200 transition-colors duration-200"
                                onClick={() => setOpen(false)}
                              >
                                {lawsuit.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${
                          active === link.name
                            ? "text-[#4F2270]"
                            : "text-gray-600"
                        } hover:text-[#4F2270]`}
                        onClick={() => {
                          setActive(link.name);
                          setOpen(false);
                        }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 px-8 pb-8 bg-[#4F2270] ">
              <h3 className="text-white font-semibold text-lg mb-4 mt-8">
                Follow Us
              </h3>
              <div className="flex justify-left gap-8 mt-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white bg-[#4F2270]  hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Navbar = () => {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;

//     <nav className="w-full bg-white shadow flex items-center justify-between  px-4 py-3 relative">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-16 w-24 object-contain" />
//       </div>
//       <button
//         className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
//         onClick={() => setOpen((v) => !v)}
//         aria-label="Open menu"
//       >
//         <span className="block w-6 h-0.5 bg-[#4F2270] mb-1 rounded"></span>
//         <span className="block w-6 h-0.5 bg-[#4F2270] mb-1 rounded"></span>
//         <span className="block w-6 h-0.5 bg-[#4F2270] rounded"></span>
//       </button>

//      <div
//   className={`fixed inset-0 bg-white z-50 flex flex-col font-quicksand transition-all duration-500 ease-in-out ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
//   style={{ transitionProperty: 'transform, opacity' }}
// >

//         <div className="flex items-center justify-between px-4 py-4 bg-white">
//           <button
//             className="text-[#4F2270] text-3xl font-bold focus:outline-none"
//             onClick={() => setOpen(false)}
//             aria-label="Close menu"
//           >
//             &times;
//           </button>
//           <span className="text-[#4F2270] text-lg font-bold mx-auto">Mass Tort Counsel</span>
//           <span className="w-8"></span>
//         </div>

//         <div className="flex-1 bg-[#4F22701A] overflow-y-auto">
//           <div className="flex flex-col min-h-full">

//             <div className="flex-1">
//               <ul className="flex flex-col w-full">
//                 {NAV_LINKS.map((link, idx) => (
//                   <li key={link.name} className="w-full">
//                     {link.hasDropdown ? (
//                       <div className="w-full">
//                         <button
//                           className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${active === link.name ? 'text-[#4F2270] bg-gray-300' : 'text-gray-600'} hover:text-[#4F2270]  flex items-center justify-between`}
//                           onClick={() => setServicesOpen(!servicesOpen)}
//                         >
//                           {link.name}
//                           <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
//                         </button>
//                         {servicesOpen && (
//                           <div className="bg-gray-100">
//                             {LAWSUIT_TYPES.map((lawsuit) => (
//                               <a
//                                 key={lawsuit.name}
//                                 href={lawsuit.href}
//                                 className="block px-12 py-3 text-sm text-gray-700 hover:text-[#4F2270] hover:bg-gray-200 transition-colors duration-200"
//                                 onClick={() => setOpen(false)}
//                               >
//                                 {lawsuit.name}
//                               </a>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <a
//                         href={link.href}
//                         className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${active === link.name ? 'text-[#4F2270] ' : 'text-gray-600'} hover:text-[#4F2270] `}
//                         onClick={() => { setActive(link.name); setOpen(false); }}
//                       >
//                         {link.name}
//                       </a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-8 px-8 pb-8 bg-[#4F2270] ">
//               <h3 className="text-gray-700 font-semibold text-lg mb-4 text-white mt-8">Follow Us</h3>
//                  <div className="flex justify-left gap-8 mt-5 ">
//               {socialLinks.map(({ icon: Icon, href, label }) => (
//                <a
//   key={label}
//   href={href}
//   aria-label={label}
//   className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white bg-[#4F2270]  hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
// >
//   <Icon className="w-5 h-5 text-white" />
// </a>

//               ))}
//             </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
