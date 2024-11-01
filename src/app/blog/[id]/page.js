"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BsCalendar2Date, BsArrowLeft, BsPerson } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ReactMarkdown from 'react-markdown';

const blogPosts = [
    {
        id: 'roundtable-txf-ny-2018',
        title: 'Roundtable on Supply Chain Finance at TXF in New York',
        author: 'SCF Strategies',
        date: 'September 17, 2018',
        image: '/images/blog/1.png',
        excerpt: 'SCF Strategies participated in the TXF Conference in New York, discussing emerging trends and the impact of trade dynamics.',
        content: `SCF Strategies is excited to announce our participation in the TXF Conference held in New York on September 13. This conference covered the latest transformations in Supply Chain Finance (SCF) influenced by technology and new approaches. Eric Riddle, Managing Partner of SCF Strategies, moderated the panel titled "Profiling the Supply Chain Finance of the Future," which discussed trade wars, new agreements, and impacts on global supply chains. Experts from organizations like Bank of America Merrill Lynch, Nokia, and HSBC shared insights.`
    },
    {
        id: 'baft-scf-bootcamp-2018',
        title: 'SCF Strategies at the BAFT Supply Chain Finance Bootcamp',
        author: 'SCF Strategies',
        date: 'September 17, 2018',
        image: '/images/blog/2.png',
        excerpt: 'SCF Strategies attended the BAFT Bootcamp, focusing on technological innovations and best practices in SCF programs.',
        content: `SCF Strategies joined the 28th Annual BAFT Supply Chain Finance Bootcamp on September 26 in Chicago, a key part of the Annual Conference on International Trade. The event covered critical aspects of SCF, including technological advancements, stakeholder roles, and third-party platform utilization. Attendees learned best practices and explored case studies in implementing effective SCF programs.`
    },
    {
        id: '4-key-success-factors-scf',
        title: '4 Key Success Factors for Effective Supply Chain Finance',
        author: 'SCF Strategies',
        date: 'October 30, 2018',
        image: '/images/blog/3.png',
        excerpt: 'This post outlines four essential success factors for SCF programs, including setting clear targets and selecting the right structure.',
        content: `SCF programs are critical for managing risks and freeing up cash in complex supply chains. This post discusses four factors for successful SCF implementation:

1. **Set Clear Targets**: Define goals like liquidity or extended payment terms.
2. **Analyze Opportunities**: Conduct a spend and working capital analysis to understand realistic payment terms.
3. **Involve Stakeholders**: Cross-functional collaboration with departments like procurement and IT is essential.
4. **Select the Right Structure**: Choose the right SCF platform, whether in-house, bank, or multi-bank options, to align with long-term goals.`
    },
    {
        id: 'supplier-onboarding-guide',
        title: "Supplier Onboarding - It's Not as Tough as You Think",
        author: 'SCF Strategies',
        date: 'October 6, 2018',
        image: '/images/blog/4.png',
        excerpt: 'An introduction to the importance of effective supplier onboarding in SCF, highlighting challenges and best practices.',
        content: `Onboarding suppliers is essential to SCF success, yet challenges often arise due to KYC requirements, lack of automation, and unclear communication. Education on SCF's benefits is critical, as is understanding suppliers' needs. SCF Strategies helped a commercial bank by analyzing buyer spend and segmenting suppliers to identify high-impact candidates. By addressing KYC challenges and focusing on segments most likely to join, the onboarding process gained momentum and achieved improved outcomes.`
    },
    {
        id: 'critical-need-scf-2018',
        title: 'Filling a Critical Need in Supply Chain Finance',
        author: 'SCF Strategies',
        date: 'September 25, 2018',
        image: '/images/blog/5.png',
        excerpt: 'SCF Strategies emphasizes the need for comprehensive knowledge in SCF, showcasing a case study on supplier engagement.',
        content: `Founded in 2015, SCF Strategies addresses gaps in SCF by combining technology, funding, and expertise. A case study highlights a Fortune 500 retailer that partnered with a bank for SCF but failed due to generic solutions and poor supplier engagement. SCF Strategies' approach emphasizes customized support, supplier analysis, and internal training to ensure successful program outcomes. Through hands-on guidance, SCF Strategies enables clients to achieve significant results in working capital and supplier satisfaction.`
    }
];

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const id = params?.id;
    if (id) {
      const foundPost = blogPosts.find((post) => post.id === id);
      setPost(foundPost);
    }
  }, [params]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuroraBackgroundDemo title="Blog" description="Post not found" />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
          >
            <BsArrowLeft />
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuroraBackgroundDemo title="Blog Details" description={post.title} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold mb-4 text-title">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <BsCalendar2Date className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <BsPerson className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-lg text-gray-700 font-medium border-l-4 border-blue-500 pl-4 mb-8">
              {post.excerpt}
            </div>
            
            <ReactMarkdown
              className="text-gray-700"
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold my-6" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold my-5" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold my-4" {...props} />,
                p: ({node, ...props}) => <p className="my-4 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside my-4 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside my-4 space-y-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <footer className="border-t border-gray-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <BsArrowLeft className="w-4 h-4" />
              Back to Blog List
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}