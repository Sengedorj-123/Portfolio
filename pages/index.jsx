import React from "react";

const App = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/sengeenee.sengee",
      icon: "→",
    },
    {
      name: "GitHub",
      url: "https://github.com/Sengedorj-123",
      icon: "→",
    },
    {
      name: "Vercel",
      url: "https://vercel.com/sengedorjs-projects",
      icon: "→",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100 px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <section className="relative mb-16 md:mb-32">
          <div className="absolute -top-8 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <img
                  src="download.jpeg"
                  alt="sengedorj ulziibayar"
                  className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 text-zinc-100">
                Sengedorj
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                  Ulziibayar
                </span>
              </h1>
              <div className="space-y-3 mb-8">
                <p className="text-lg md:text-xl text-zinc-400">
                  Frontend and Backend Developer
                </p>
                <p className="text-zinc-500 flex items-center justify-center md:justify-start gap-2">
                  <span>📍</span> Ulaanbaatar, Mongolia
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 px-5 py-2.5 rounded-full transition-all duration-300 text-zinc-100 hover:shadow-lg hover:shadow-purple-500/10"
                    >
                      <span>{link.name}</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-100 border-b border-zinc-800 pb-4">
            About
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Driven, skilled, and eager to excel, I bring a fresh perspective and
            an unwavering passion for growth. As my professional journey
            unfolds, my dedication to continuous learning and development sets
            me apart. I am strongly committed to honing my skills, especially in
            front-end development, and thrive on tackling challenges and
            expanding my expertise. Highly organized and dependable, I excel at
            managing multiple priorities with a positive and proactive attitude.
            I embrace opportunities to take on additional responsibilities to
            contribute to team success. As a hardworking and passionate
            professional, I aim to secure a mid-level Front-End Developer
            position where I can leverage my strong organizational skills and
            enthusiasm for creating exceptional user experiences.
          </p>
        </section>

        <section className="mb-16 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "JavaScript",
              "HTML",
              "CSS",
              "TailwindCSS",
              "SASS/SCSS",
              "Figma",
              "PostgreSQL",
              "Git",
              "MongoDB",
              "Express JS",
              "Node JS",
              "Daisy UI",
              "MUI",
            ].map((skill) => (
              <div
                key={skill}
                className="group relative bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
                <p className="relative z-10 text-zinc-100 text-sm md:text-base text-center">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-0.5 h-full bg-zinc-800 group-hover:bg-purple-500/50 transition-colors"></div>
              <div className="pl-8">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-zinc-100">
                  Frontend and Backend Developer
                </h3>
                <p className="text-zinc-400 mb-1">Pinecone Academy</p>
                <p className="text-zinc-500 text-sm mb-3">2024 - Present</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
            Education
          </h2>
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-0.5 h-full bg-zinc-800 group-hover:bg-purple-500/50 transition-colors"></div>
              <div className="pl-8">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-zinc-100">
                  Frontend and Backend Developer
                </h3>
                <p className="text-zinc-400 mb-1">
                  Khumuun high school Diploma
                </p>
                <p className="text-zinc-500 text-sm mb-3">2024 - Present</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expense Tracker",
                description: "Personal finance management application",
                tags: [
                  "Next.js",
                  "Node.js",
                  "React.js",
                  "Express.js",
                  "Git",
                  "Tailwindcss",
                  "Daisyui",
                  "Npm",
                  "Vercel",
                  "MySQL",
                  "Postqre",
                ],
                link: "https://expense-tracker-lime-sigma.vercel.app/",
              },
              {
                title: "Food Delivery",
                description: "Online food ordering platform",
                tags: [
                  "Next.js",
                  "Node.js",
                  "React.js",
                  "Express.js",
                  "Git",
                  "Tailwindcss",
                  "Daisyui",
                  "Npm",
                  "Vercel",
                  "MySQL",
                  "Postqre",
                  "Mongoose",
                  "MongoDB",
                  "MUI",
                ],
                link: "https://frontend-navy-xi-93.vercel.app/",
              },
              {
                title: "Blog Web",
                description: "Content management system",
                tags: [
                  "React.Js",
                  "Next.js",
                  "CSS",
                  "Tailwind Css",
                  "Daisyui",
                  "Vercel",
                  "Node.js",
                  "HTML",
                ],
                link: "https://blogpost-one.vercel.app/",
              },
              {
                title: "Portfolio",
                description: "Personal portfolio website",
                tags: [
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Vercel",
                  "Tailwind css",
                  "Git",
                ],
                link: "https://sengedorj-portfolio.vercel.app/",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-zinc-900/50 rounded-full text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
