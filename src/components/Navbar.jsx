
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const NavLink = ({ href, children, dropdown, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative group ${isMobile ? 'w-full' : ''}`}>
      <Link
        className={`nav-link p-2  font-semibold transition-colors duration-300 flex items-center justify-between ${isMobile ? 'w-full py-0 my-0 text-gray-900 hover:text-blue-500' : 'hover:text-blue-500'
          }`}
        href={href}
        onClick={toggleDropdown}
      >
        {children}
        {dropdown && (isMobile ? (isOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />) : <ChevronDown className="ml-1 w-4 h-4" />)}
      </Link>
      {dropdown && (
        <div className={`${isMobile
          ? 'mt-2 w-full bg-white transition-all duration-300'
          : 'lg:absolute lg:left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300'
          } ${isMobile
            ? (isOpen ? 'block' : 'hidden')
            : 'lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible w-56'
          }`}>
          <div className={isMobile ? '' : 'py-1'} role="menu">
            {dropdown}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full py-3 z-20 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/images/logo.png" alt="Company Logo" width={80} height={50} className="cursor-pointer" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <div className="flex items-baseline space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink
                  href="#"
                  dropdown={
                    <>

                      <Link href="/advisory-service" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Advisory Service</Link>
                      <Link href="/consulting-service" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Consulting Service</Link>
                    </>
                  }
                >
                  Services
                </NavLink>
                <NavLink href="/about-us">About Us</NavLink>
                <NavLink
                  href="#"
                  dropdown={
                    <>
                      <Link href="/blog" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Blogs</Link>
                      <Link href="/clients" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Clients</Link>
                      <Link href="/resource-center" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Resource Center</Link>
                      <Link href="/enablement" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">Solutions & Enablement</Link>
                      <Link href="/faqs" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100">FAQs</Link>
                    </>
                  }
                >
                  Explore
                </NavLink>
                <NavLink href="/contact-us">Contact</NavLink>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0  bg-gray-800 bg-opacity-75 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-x-0 top-0 h-screen bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="px-4 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Image src="/images/logo.png" alt="Company Logo" width={70} height={35} />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-5 nav-link">
                <Link href="/" className="block px-2   font-semibold text-gray-700 hover:text-blue-500 " onClick={handleLinkClick}>Home</Link>
                <NavLink
                  href="#"
                  dropdown={
                    <>
                      <Link href="/advisory-service" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100" onClick={handleLinkClick}>Advisory Service</Link>
                      <Link href="/consulting-service" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100" onClick={handleLinkClick}>Consulting Service</Link>
                    </>
                  }
                  isMobile
                >
                  Services
                </NavLink>
                <Link href="/about-us" className="block px-2   font-semibold text-gray-700 hover:text-blue-500 "onClick={handleLinkClick} >About Us</Link>
                <NavLink
                  href="#"
                  dropdown={
                    <>
                      <Link href="/blog" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100" onClick={handleLinkClick}>Blogs</Link>
                      <Link href="/clients" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100" onClick={handleLinkClick}>Clients</Link>
                      <Link href="/resource-center" className="block px-4 py-2  font-semibold text-gray-700 hover:bg-gray-100"onClick={handleLinkClick}>Resource Center</Link>
                      <Link href="/enablement" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100"onClick={handleLinkClick}>Solutions & Enablement</Link>
                      <Link href="/faqs" className="block px-4 py-2  font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-100"onClick={handleLinkClick}>FAQs</Link>
                    </>
                  }
                  isMobile
                >
                  Explore
                </NavLink>
                <Link href="/contact-us" className="block px-2   font-semibold text-gray-700 hover:text-blue-500 "onClick={handleLinkClick}>Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;