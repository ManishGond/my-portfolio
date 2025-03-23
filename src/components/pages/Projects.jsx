import { useState, useEffect } from "react";
import Section from "../common/Section";
import Heading from "../common/Heading";
import Button from "../common/Button";

import jsIcon from "../../assets/icons/js.png";
import tsIcon from "../../assets/icons/typescript.png";
import pythonIcon from "../../assets/icons/python.png";
import dartIcon from "../../assets/icons/dart.svg";
import jupyterIcon from "../../assets/icons/jupyter.svg";
import cplusIcon from "../../assets/icons/c-.png";
import csharpIcon from "../../assets/icons/c-sharp.png";
import htmlIcon from "../../assets/icons/html.png";
import kotlinIcon from "../../assets/icons/java.png";
import alIcon from "../../assets/icons/al.png";

const getTechIcon = (language) => {
  const icons = {
    JavaScript: jsIcon,
    TypeScript: tsIcon,
    Python: pythonIcon,
    Dart: dartIcon,
    "Jupyter Notebook": jupyterIcon,
    "C++": cplusIcon,
    "C#": csharpIcon,
    HTML: htmlIcon,
    Kotlin: kotlinIcon,
    AL: alIcon,
  };
  return icons[language] || null;
};

const getLargeIcon = (language) => {
  const icons = {
    JavaScript: jsIcon,
    TypeScript: tsIcon,
    Python: pythonIcon,
    Dart: dartIcon,
    "Jupyter Notebook": jupyterIcon,
    "C++": cplusIcon,
    "C#": csharpIcon,
    HTML: htmlIcon,
    Kotlin: kotlinIcon,
    AL: alIcon,
  };
  return icons[language] || null;
};

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const getTechnologyCounts = (projects) => {
  const counts = {};
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (tech) {
        counts[tech] = (counts[tech] || 0) + 1;
      }
    });
  });
  return counts;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Add filtered projects
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/manishgond/repos?sort=created&direction=desc"
        );
        const data = await response.json();

        // Filter out forked repositories and map to our project structure
        const filteredProjects = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description available",
            technologies: [repo.language].filter(Boolean), // Add main language
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            githubLink: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics || [],
          }));

        setProjects(filteredProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Section id="projects">
        <div className="container">
          <Heading className="md:max-w-md lg:max-w-2xl" title="My Projects" />
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-color-1"></div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects">
      <div className="container">
        <Heading className="md:max-w-md lg:max-w-2xl" title="My Projects" />

        <div className="max-w-4xl mx-auto mb-8 mt-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-n-7 rounded-lg border border-n-6 
                focus:outline-none focus:border-color-1 transition-colors
                text-n-1 placeholder-n-3"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-n-3">
              🔍
            </span>
          </div>

          {/* Technology Counts */}
          <div className="flex flex-wrap gap-3 items-center">
            {Object.entries(getTechnologyCounts(projects)).map(
              ([tech, count]) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1.5 bg-n-7 rounded-full border border-n-6"
                >
                  <img
                    src={getTechIcon(tech)}
                    alt={tech}
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-n-1/80 text-sm">{count}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-n-8 rounded-2xl p-6 transition-all duration-300 
              before:absolute before:inset-0 before:border before:border-n-6 before:rounded-2xl
              hover:before:border-color-1 hover:before:border-2
              after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:transition-opacity
              after:bg-gradient-to-b after:from-color-1/25 after:to-n-8/25
              hover:after:opacity-100 overflow-hidden"
            >
              {/* Background Tech Icon */}
              {project.technologies[0] && (
                <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform translate-x-1/4 translate-y-1/4">
                  <img
                    src={getLargeIcon(project.technologies[0])}
                    alt=""
                    className="w-64 h-64"
                  />
                </div>
              )}

              {/* Existing content */}
              <div className="relative z-10">
                <h4 className="h4 mb-4">{truncateText(project.title, 15)}</h4>
                <p className="body-2 text-n-4 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                {project.technologies[0] && (
                  <div className="flex items-center gap-3 mb-4 p-2 bg-n-7 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10">
                      <img
                        src={getTechIcon(project.technologies[0])}
                        alt={project.technologies[0]}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-n-1/80">
                      {project.technologies[0]}
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-n-6 rounded-full text-n-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4 text-n-4">
                  <span>⭐ {project.stars}</span>
                  <span>🔄 {project.forks}</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.homepage && (
                    <Button href={project.homepage}>Live Demo</Button>
                  )}
                  <Button href={project.githubLink} white>
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
