"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaProductHunt } from "react-icons/fa";

const navlinks = [
    { "title" : "Features", "links" : "#features" },
    { "title" : "Components", "links" : "#components" },
    { "title" : "Documentation", "links" : "/docs" },
    { "title" : "Reviews", "links" : "#reviews" },
];

const social = [
    { "title" : "Github", "links" : "/", "icon": <FaGithub size={20} /> },
    { "title" : "LinkedIn", "links" : "/", "icon": <FaLinkedin size={20} /> },
    { "title" : "ProductHunt", "links" : "/", "icon": <FaProductHunt size={20} /> },
];

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${isFixed ? "fixed top-4 left-1/2 -translate-x-1/2 z-50" : "relative"} w-full max-w-6xl mx-auto mt-4 mb-4 rounded-2xl border border-neutral-200 bg-white shadow-md backdrop-blur`}>
            <div className="px-10 flex items-center justify-between py-3">
                {/* Logo */}
                <div className="text-2xl font-medium text-neutral-900">
                    <a href="/">Stream<span className="bg-black text-white font-semibold px-2 py-2 rounded-lg">UI</span></a>
                </div>
                {/* Navlinks */}
                <nav>
                    <ul className="hidden md:flex gap-6 text-sm md:text-base text-neutral-500">
                        {navlinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.links}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Social links with icons */}
                <div className="hidden md:flex items-center gap-4 border border-neutral-300 rounded-full px-3 py-2 bg-neutral-800">
                    {social.map((item, index) => (
                        <a key={index} href={item.links} className="text-neutral-300 hover:text-blue-400 hover:duration-300 hover:scale-110 transition">
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;