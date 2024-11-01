'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FAQItem from '../../components/faq/FAQItem';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const FaqContent = () => {
  const faqData = [
    {
      question: "What is Supply Chain Finance (SCF)?",
      answer: "Supply Chain Finance (SCF) is a set of financial solutions designed to improve cash flow efficiency by allowing businesses to extend payment terms while enabling suppliers to receive early payments, usually facilitated by a third-party financier."
    },
    {
      question: "How can SCF Strategies help my business?",
      answer: "We help businesses design, implement, and manage successful SCF programs. Our services include working capital analysis, supplier onboarding, go-to-market strategies, platform selection, and more."
    },
    {
      question: "What industries does SCF Strategies serve?",
      answer: "We serve a wide range of industries including manufacturing, retail, financial institutions, fintechs, and corporates. SCF Strategies provides solutions tailored to the unique needs of each industry."
    },
    {
      question: "What services does SCF Strategies offer?",
      answer: (<>
      Our services include:<br />
       <span className='ml-48'>
      - Working Capital Analytics<br />
       </span>
       <span className='ml-48'>
        - Program Design<br />
       </span>
       <span className='ml-48'>
        - Supplier Onboarding<br />
       </span>
       <span className='ml-48'>
        - Sales & Operations Enablement<br />
       </span>
       <span className='ml-48'>
        - Platform & Partner Selection<br />
       </span>
       <span className='ml-48'>
        - Accounting Treatment Guidance
       </span>
      </>)
    },
    {
      question: "How can SCF help my business’s working capital?",
      answer: "SCF can help improve your working capital by optimizing payment terms, unlocking cash tied up in the supply chain, and ensuring suppliers are paid early, resulting in greater financial efficiency for both buyers and suppliers."
    },
    {
      question: "What is Working Capital Analytics?",
      answer: "Working Capital Analytics involves analyzing supplier data, payment terms, and other financial factors to identify opportunities for improving working capital and generating revenue. SCF Strategies offers a unique Working Capital Benchmark Analytics Application."
    },
    {
      question: "How do you help with supplier onboarding?",
      answer: "We offer comprehensive supplier onboarding services through telephone, email, and mail outreach. We manage the process from outreach to onboarding, ensuring a smooth experience for both suppliers and buyers."
    },
    {
      question: "What is reverse factoring in SCF?",
      answer: "Reverse factoring allows suppliers to receive early payments at favorable rates based on the buyer’s credit risk, improving the supplier’s cash flow while allowing the buyer to extend payment terms."
    },
    {
      question: "What does SCF Strategies’ Go-to-Market Strategy include?",
      answer: "Our Go-to-Market Strategy includes market assessment, sales planning, and developing a client-focused approach to help businesses successfully enter the SCF market or enhance their existing offerings."
    },
    {
      question: "Can SCF Strategies help with platform selection?",
      answer: "Yes, we assist in selecting the right platform and technology partners for your SCF program. Our rigorous evaluation criteria ensure you choose the most suitable solution for your needs."
    },
    {
      question: "How do you assist with accounting treatment in SCF?",
      answer: "We help navigate complex accounting issues related to SCF programs, such as reclassifying commercial accounts payable into financial debt, while ensuring compliance with best practices and industry standards."
    },
    {
      question: "How do I know if SCF is right for my business?",
      answer: "SCF is beneficial for businesses looking to optimize cash flow and improve relationships with suppliers. We provide a detailed assessment to determine if SCF aligns with your business goals."
    },
    {
      question: "How can SCF Strategies help with sales enablement?",
      answer: "We provide training and enablement for sales and operations teams, ensuring they are equipped to compete effectively and implement SCF programs successfully."
    },
    {
      question: "What are the key benefits of SCF?",
      answer: "The key benefits of SCF include improved cash flow, reduced working capital requirements, stronger supplier relationships, and reduced financial risk."
    },
    {
      question: "Can SCF Strategies help financial institutions?",
      answer: "Yes, we work with banks and financial institutions to enhance their SCF offerings by providing market assessment, technology platform selection, and sales and operations enablement."
    },
    {
      question: "How can SCF Strategies help fintech companies?",
      answer: "We assist fintech companies with market analysis, technology audits, platform selection, and support for implementing and managing SCF programs."
    },
    {
      question: "What is involved in an SCF solution audit?",
      answer: "Our solution audit involves a detailed review of your current SCF platform’s functionality, features, strengths, and limitations, along with actionable recommendations for improvement."
    },
    {
      question: "How long does it take to implement an SCF program?",
      answer: "The timeline for implementation varies depending on the complexity of the program, but typically, a full SCF program can take 3 to 6 months to fully implement."
    },
    {
      question: "How does SCF improve supplier relationships?",
      answer: "SCF improves supplier relationships by providing early payments at lower financing costs, ensuring they receive timely cash flow, which builds trust and reliability."
    },
    {
      question: "Can SCF Strategies help design custom SCF programs?",
      answer: "Yes, we design custom SCF programs tailored to your business goals and supplier profiles, ensuring optimal results for both buyers and suppliers."
    },
    {
      question: "How do you evaluate partners for SCF programs?",
      answer: "We use objective selection criteria, detailed scoring methodologies, and rigorous evaluation processes to help you choose the best partners for your SCF program, whether it's for technology or financing."
    },
    {
      question: "Do you provide training for SCF programs?",
      answer: "Yes, we offer customized training programs for sales, operations, and procurement teams to ensure successful implementation and management of SCF programs."
    },
    {
      question: "What is SCF Strategies’ approach to program design?",
      answer: "We take a phased approach to program design, targeting suppliers with the highest propensity to join SCF programs and ensuring alignment with client objectives for optimal results."
    },
    {
      question: "What is your Working Capital Benchmark Analytics Application?",
      answer: "Our Working Capital Benchmark Analytics Application identifies opportunities to optimize working capital by assessing supplier data, payment terms, and working capital objectives."
    },
    {
      question: "How do I get in touch with SCF Strategies?",
      answer: "You can contact us via email at nsimek@scfstrategies.com  call us at +1 203 470 9377. We are here to assist with all your SCF needs."
    }
];


  return (

    <div className="text-gray-800 bg-primary">
      <AuroraBackgroundDemo  title={'FAQs'} description={'Any questions? We have answers.'} link={'Learn More'}/>

      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg p-1 bg-white"
        >
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FaqContent;