const navlinks = [
    { "title" : "Features", "links" : "#features" },
    { "title" : "Components" },
    { "title" : "Reviews" },
    { "title" : "FAQs" },
];

const social = [
    { "title" : "Github", "links" : "/" },
    { "title" : "LinkedIn", "links" : "/" },
    { "title" : "ProductHunt", "links" : "/" },
]

const Navbar = () => {
    return (
        <main>
            <section className="flex flex-row justify-between">
            <div>
                <h1 className="text-2xl">
                    Stream<span className="bg-black text-white px-2 py-2 rounded-lg">Ui</span>
                </h1>
            </div>
            <div>
                <ul className="flex gap-4 text-lg">
                {navlinks.map((item, index) => (
                    <li key={index}>
                        <a href={item.links}>{item.title}</a>
                    </li>
                ))}
                </ul>
            </div>
            <div className="flex gap-2">
                <p>Follow us on!</p>
                <ul className="flex gap-4">
                {social.map((item, index) => (
                   <li key={index}>
                    <a href={item.links}>{item.title}</a>
                   </li> 
                ))}
                </ul>
            </div>
            </section>
        </main>
    );
};

export default Navbar;