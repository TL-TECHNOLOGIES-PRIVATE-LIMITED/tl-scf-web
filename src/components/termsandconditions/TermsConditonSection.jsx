import React from 'react';

const TermsConditionSection = ({ title, content }) => {
    // Function to determine if the content should be rendered as a bullet point list
    const isBulletPoint = (text) => text.startsWith('•');

    return (
        <div className="mb-8 last:mb-0 w-full max-w-5xl mx-auto">
            <div>
                <h2 className="text-lg md:text-2xl  font-semibold text-gray-900 mb-4 pb-2">
                    {title}
                </h2>
                <div className="text-gray-700 space-y-3 pl-1">
                    {Array.isArray(content) ? (
                        content.map((item, index) => (
                            <div key={index}>
                                {isBulletPoint(item) ? (
                                    <li className="list-disc pl-5 leading-relaxed">{item.slice(1).trim()}</li>
                                ) : (
                                    <p className="leading-relaxed">{item}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="leading-relaxed">{content}</p>
                    )}
                    <div className='border-b pt-2 border-gray-400'></div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionSection;
