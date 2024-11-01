import React from 'react'

const PrivacyPolicySection = ({title,content}) => {
  return (
    <div className="mb-8 last:mb-0 w-full max-w-5xl mx-auto">
    <div>
        <h2 className=" text-lg md:text-2xl font-semibold text-gray-900 mb-4 pb-2">
            {title}
        </h2>
        <div className="text-gray-700 space-y-3 pl-1">
            {Array.isArray(content) ? (
                <ul className="list-disc pl-5 space-y-3">
                    {content.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="leading-relaxed">{content}</p>
            )}
            <div className='border-b pt-2 border-gray-400'></div>
        </div>
    </div>
</div>
  )
}

export default PrivacyPolicySection