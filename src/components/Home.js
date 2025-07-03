import { useState } from "react";
import firstImg from "../data/images/0_l1Wxf8h2AkXqYiEf.jpg"

const projectsData = [
  { title: "Image Filter in C", category: "C/C++", Link:"https://github.com/Obekauri/ImageFilter.c/blob/main/ImageFilter.c" },
  { title: "Netflix Clone APP", category: "React", Link:"" },
  { title: "Learner's App", category: "Python", Link:"https://github.com/me50/Obekauri" },
  { title: "Human Rights First: Asylum Report Generator", category: "React", Link:"https://asylum-rg-fe.vercel.app/" },
];

const categories = ["All", "React", "C/C++", "Python"];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  function Projects(link){
    window.open(link, "_blank")
  }

  return (
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Omar Bekauri</h1>
          <p className="text-lg">
            Full-Stack Developer <br />
            <br />
            You're not just looking at a portfolio, you're exploring a full React application
            <br />
            In this web app, you can browse through several projects I've built using different programming languages

          </p>
        </section>

        <img src={firstImg} alt="Project preview" />
  
        {/* Project Filter Section */}
        <section>
          <h2 className="text-2xl -bold mb-4">Projects</h2>
  
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
                <button onClick={() => Projects(project.Link)}
                  className="ButtonHover">
                  <h3 className="-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  export default Home;