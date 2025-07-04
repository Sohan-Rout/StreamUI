import Link from "next/link";

const navlinks = [
    { "title" : "Features", "links" : "#features" },
    { "title" : "Components" },
    { "title" : "Reviews" },
    { "title" : "FAQs" },
]

const Navbar = () => {
    return (
        <main>
            <section>
            <div>
            </div>
            <div>
                {navlinks.map((item, index) => (
                    <ul key={index}>
                        <a href={item.links}>{item.title}</a>
                    </ul>
                ))}
            </div>
            <div>
            </div>
            </section>
        </main>
    );
};

export default Navbar;