import { useState } from "react";

const projectsData = [
  { title: "Image Filter in C", category: "C/C++" },
  { title: "React Portfolio Site", category: "React" },
  { title: "Python Stock Analyzer", category: "Python" },
  { title: "Real-Time Chat App", category: "React" },
];

const categories = ["All", "React", "C/C++", "Python"];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
          <p className="text-lg text-gray-600">
            Full-Stack Developer | Passionate about clean code, performance, and solving real-world problems
          </p>
        </section>
  
        {/* Project Filter Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
  
          <div className="flex gap-4 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  export default Home;