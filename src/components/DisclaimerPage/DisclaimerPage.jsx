'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Info, Shield, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const DisclaimerPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mobileOpenSection, setMobileOpenSection] = useState(0);

  const sections = [
    { title: "General Information", icon: <Info className="w-5 h-5" /> },
    { title: "No Warranties", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Limitations of Liability", icon: <Shield className="w-5 h-5" /> },
    { title: "Exceptions", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Reasonableness", icon: <Info className="w-5 h-5" /> },
    { title: "Other Parties", icon: <Shield className="w-5 h-5" /> },
    { title: "Unenforceable Provisions", icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  const handleMobileAccordionClick = (index) => {
    setMobileOpenSection(mobileOpenSection === index ? null : index);
  };

  useEffect(() => {
    setActiveSection(0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="col-span-1">
              <div className="space-y-2 sticky top-24">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === index 
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    <span className={`${activeSection === index ? 'text-white' : 'text-indigo-600'}`}>
                      {section.icon}
                    </span>
                    <span className="ml-3 font-medium">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Desktop Content */}
            <div className="col-span-3">
              <div className="prose max-w-none">
                <div>
                  <h1 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center">
                    {sections[activeSection].icon}
                    <span className="ml-3">{sections[activeSection].title}</span>
                  </h1>
                  <DisclaimerContent section={activeSection} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className={`w-full px-4 py-3 flex items-center justify-between ${
                    mobileOpenSection === index ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'
                  }`}
                  onClick={() => handleMobileAccordionClick(index)}
                >
                  <div className="flex items-center">
                    <span className={`${mobileOpenSection === index ? 'text-white' : 'text-indigo-600'}`}>
                      {section.icon}
                    </span>
                    <span className="ml-3 font-medium">{section.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      mobileOpenSection === index ? 'rotate-180 text-white' : 'text-gray-400'
                    }`} 
                  />
                </button>
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    mobileOpenSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-4 bg-white">
                    <DisclaimerContent section={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600">nsimek@scfstrategies.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+1 (203) 470-9377</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Visit Us</h3>
                <p className="text-gray-600">Bonita Springs, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisclaimerContent = ({ section }) => {
 
  const content = {
    0: (
      <p className="paragraph ">
        The information provided by SCF Strategies on our website (https://www.scfstrategies.com) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>
    ),
    1: (
      <>
        <p className="paragraph">
          This website is provided &quot;as is&quot; without any representations or warranties, express or implied. SCF Strategies makes no representations or warranties regarding this website or the information and materials provided on it.
        </p>
        <p className="mt-4 paragraph">
          SCF Strategies does not warrant that:
        </p>
        <ul className="list-disc list-inside mt-2 paragraph space-y-2">
          <li>This website will be continuously available, or available at all; or</li>
          <li>The information on this website is complete, true, accurate, or non-misleading.</li>
        </ul>
        <p className="mt-4 paragraph">
          Nothing on this website constitutes or is intended to constitute advice of any kind.
        </p>
      </>
    ),
    2: (
      <>
        <p className="paragraph">
          SCF Strategies will not be liable to you for any indirect, special, or consequential loss arising from the contents of, or use of, or otherwise in connection with this website, including but not limited to:
        </p>
        <ul className="list-disc list-inside mt-2 paragraph space-y-2">
          <li>Loss of revenue, income, profits, anticipated savings, contracts, business relationships, reputation, goodwill, or data.</li>
        </ul>
        <p className="mt-4 paragraph">
          These limitations of liability apply even if SCF Strategies has been expressly advised of the potential for such loss.
        </p>
      </>
    ),
    3: (
      <>
        <p className="paragraph">
          Nothing in this disclaimer excludes or limits any warranty implied by law where it would be unlawful to do so; nor does it exclude or limit SCF Strategies liability for:
        </p>
        <ul className="list-disc list-inside mt-2 paragraph space-y-2">
          <li>Death or personal injury caused by SCF Strategies negligence;</li>
          <li>Fraud or fraudulent misrepresentation on the part of SCF Strategies; or</li>
          <li>Any matter that it would be illegal or unlawful for SCF Strategies to exclude or limit, or to attempt to exclude or limit, liability.</li>
        </ul>
      </>
    ),
    4: (
      <p className="paragraph">
        By using this website, you agree that the exclusions and limitations of liability set out in this disclaimer are reasonable. If you do not believe they are reasonable, you must not use this website.
      </p>
    ),
    5: (
      <p className="paragraph">
        You acknowledge that SCF Strategies, as a limited liability entity, has an interest in limiting the personal liability of its officers and employees. Therefore, you agree not to bring any claim personally against SCF Strategies officers or employees concerning any losses suffered in connection with the website. The limitations of warranties and liability set out in this disclaimer will protect SCF Strategies officers, employees, agents, subsidiaries, successors, assigns, and subcontractors as well as SCF Strategies.
      </p>
    ),
    6: (
      <p className="paragraph">
        If any provision of this disclaimer is or is found to be unenforceable under applicable law, this will not affect the enforceability of the remaining provisions.
      </p>
    ),
  };

  return content[section];
};

export default DisclaimerPage;