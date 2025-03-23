import { useState, useEffect } from "react";
import Section from "../common/Section";
import Heading from "../common/Heading";
import axios from "axios";

const About = () => {
  const [githubStats, setGithubStats] = useState(null);
  const username = "manishgond"; // Replace with your GitHub username

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setGithubStats(response.data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGithubStats();
  }, []);

  return (
    <Section id="about" className="pt-[8rem]">
      <div className="container">
        <Heading className="md:max-w-md lg:max-w-2xl" title="About Me" />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - About Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="h3 mb-4">Who I Am</h3>
            <p className="body-2 mb-8 text-n-4">
              I'm a passionate full-stack developer with a love for creating
              innovative web solutions. With experience in modern web
              technologies, I focus on building responsive and user-friendly
              applications.
            </p>
            <h3 className="h3 mb-4">My Journey</h3>
            <p className="body-2 mb-8 text-n-4">
              Started my journey in web development in 2018, I've worked on
              various projects ranging from small business websites to complex
              enterprise applications. My goal is to create impactful digital
              experiences that solve real-world problems.
            </p>
          </div>

          {/* Right Side - GitHub Stats */}
          <div className="w-full lg:w-1/2">
            <div className="bg-n-8 rounded-2xl p-6 border border-n-6">
              {githubStats && (
                <>
                  {/* Profile Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={githubStats.avatar_url}
                      alt="GitHub Avatar"
                      className="w-20 h-20 rounded-full border-2 border-color-1"
                    />
                    <div>
                      <h4 className="h4 mb-2">{githubStats.name}</h4>
                      <p className="text-n-4">@{githubStats.login}</p>
                    </div>
                  </div>

                  {/* GitHub Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-n-7 rounded-xl p-4">
                      <h5 className="text-n-1 text-xl mb-2">Repositories</h5>
                      <p className="h3 text-color-1">
                        {githubStats.public_repos}
                      </p>
                    </div>
                    <div className="bg-n-7 rounded-xl p-4">
                      <h5 className="text-n-1 text-xl mb-2">Followers</h5>
                      <p className="h3 text-color-1">{githubStats.followers}</p>
                    </div>
                  </div>

                  {/* GitHub Contribution Graph */}
                  <div className="mb-6">
                    <img
                      src={`https://ghchart.rshah.org/${username}`}
                      alt="GitHub Contributions"
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* Additional Stats Cards */}
                  <div className="space-y-4">
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=20232a&icon_color=AC6AFF&text_color=ffffff&title_color=AC6AFF`}
                      alt="GitHub Stats"
                      className="w-full rounded-xl"
                    />
                    <img
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=20232a&ring=AC6AFF&fire=AC6AFF&currStreakLabel=AC6AFF`}
                      alt="GitHub Streak"
                      className="w-full rounded-xl"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
