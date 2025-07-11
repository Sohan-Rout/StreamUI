import React from 'react';
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";

export default function Grid1({ cards }) {
    const defaultCards = [
        <div key="1" className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center w-full h-auto">
            <div className='flex items-start mb-6'>
                <div className='rounded-md bg-neutral-200 px-1 py-1'>
                    <RiNextjsFill className='text-5xl dark:text-black'/>
                </div>
            </div>
            <h2 className="text-lg font-semibold">Next.Js</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Library built using Next.js.</p>
        </div>,
        <div key="2" className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center w-full h-auto">
            <div className='flex items-start mb-6'>
                <div className='rounded-md bg-neutral-200 px-1 py-1'>
                    <RiTailwindCssFill className='text-5xl text-blue-600'/>
                </div>
            </div>
            <h2 className="text-lg font-semibold">Tailwind CSS</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Styled using Tailwind CSS.</p>
        </div>,
        <div key="3" className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center w-full h-auto">
            <div className='flex items-start mb-6'>
                <div className='rounded-md bg-neutral-200 px-1 py-1'>
                    <RiVercelFill className='text-5xl text-black'/>
                </div>
            </div>
            <h2 className="text-lg font-semibold">Vercel</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Deployed on Vercel.</p>
        </div>
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {(cards && cards.length > 0 ? cards : defaultCards).map((card, idx) => (
                <div key={idx}>
                    {card}
                </div>
            ))}
        </div>
    );
}