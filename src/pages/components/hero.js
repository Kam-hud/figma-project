import { useState } from 'react';

const categories = [
    { name: 'Inspiration', title: 'Add a little spark to your files', subtitle: 'Dream bigger with these portfolios, presentations, mockups, and more.' },
    { name: 'Team syncs', title: 'Add a little fun to your files', subtitle: 'Make collaborating as a team more fun with workshop ideas, planning templates, and icebreakers' },
    { name: 'Design systems', title: 'Add a little structure to your files', subtitle: 'Get started faster with UI kits, wireframe templates, and more.' },
    { name: 'Visual assets', title: 'Add a little life to your files', subtitle: 'Bring designs to life with icons, illustrations, animations, and more.' },
    { name: 'Development', title: 'Add a little power to your files', subtitle: 'Make design implementation a breeze with plugins and other developer tools.' },
    { name: 'Icons', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
    { name: 'Accessibility', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
    { name: 'Web', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
    { name: 'Mobile', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
    { name: 'Wireframe', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
    { name: 'Other', title: 'Welcome to Figma Community', subtitle: 'Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea.' },
];

const Hero = () => {
    const [activeCategory, setActiveCategory] = useState(categories[10]);

    return (
        <div className="relative bg-gray-100 text-center py-10">
            {/* <div className={`absolute inset-0 bg-cover bg-center transition-all duration-300`} style={{ backgroundImage: `url(${activeCategory.background})` }} /> */}
            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">{activeCategory.title}</h1>
                <p className="text-lg mb-6">{activeCategory.subtitle}</p>

                {/* <div className="flex flex-wrap justify-center space-x-4"> */}
                <div className="grid grid-cols-5 gap-4 justify-center mt-10">
                    {categories.slice(0, 10).map((category, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveCategory(category)}
                            onMouseLeave={() => setActiveCategory(categories[10])}
                            className={`w-21 h-18 p-2 border border-black rounded-lg cursor-pointer mx-6 hover:bg-black hover:text-white ${activeCategory.name === category.name ? 'scale-105' : 'scale-100'}`}
                        >
                            <h2 className="text-sm font-semibold">{category.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;