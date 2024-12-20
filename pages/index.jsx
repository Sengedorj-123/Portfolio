const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <section className="relative mb-24">
          <div className="absolute -top-8 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col md:flex-row items-start gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <img
                  src="download.jpeg"
                  alt="sengedorj ulziibayar"
                  className="w-48 h-48 object-cover rounded-xl"
                />
              </div>
            </div>

            <div>
              <h1 className="text-7xl font-bold tracking-tight mb-4 text-zinc-100 gap-[20px] flex">
                Sengedorj
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                  Ulziibayar
                </span>
              </h1>
              <div className="space-y-2 mb-8">
                <p className="text-xl text-zinc-400">
                  Frontend and backend Developer
                </p>
                <p className="text-zinc-500">📍 Ulaanbaatar, Mongolia</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/sengeenee.sengee"
                    className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-full transition-all duration-300 text-zinc-100"
                  >
                    <span>Facebook</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                  <a
                    target="blank"
                    href="https://github.com/Sengedorj-123"
                    className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-full transition-all duration-300 text-zinc-100"
                  >
                    <span>GitHub</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="">
            <h2 className="text-3xl font-bold mb-6 text-zinc-100">About</h2>
            <p className="text-zinc-400 l ">
              Driven, skilled, and eager to excel, I bring a fresh perspective
              and an unwavering passion for growth. As my professional journey
              unfolds, my dedication to continuous learning and development sets
              me apart. I am strongly committed to honing my skills, especially
              in front-end development, and thrive on tackling challenges and
              expanding my expertise. Highly organized and dependable, I excel
              at managing multiple priorities with a positive and proactive
              attitude. I embrace opportunities to take on additional
              responsibilities to contribute to team success. As a hardworking
              and passionate professional, I aim to secure a mid-level Front-End
              Developer position where I can leverage my strong organizational
              skills and enthusiasm for creating exceptional user experiences.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-zinc-100">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "JavaScript",
              "HTML",
              "CSS",
              "TailwindCSS",
              "SASS/SCSS",
              "Styled Components",
              "Figma",
              "PostgreSQL",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="group relative bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
                <p className="relative z-10 text-zinc-100">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-zinc-100">Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "Frontend and Backend Developer",
                company: "Pinecone academy",
                period: "2024 - Present",
                description: "lorem hahahaah",
              },
            ].map((job, index) => (
              <div key={index} className="group relative">
                <div className="absolute -left-4 top-0 w-0.5 h-full bg-zinc-800 group-hover:bg-purple-500/50 transition-colors"></div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold mb-1 text-zinc-100">
                    {job.role}
                  </h3>
                  <p className="text-zinc-400 mb-2">{job.company}</p>
                  <p className="text-zinc-500 text-sm mb-3">{job.period}</p>
                  <p className="text-zinc-400">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-zinc-100">Education</h2>
          <div className="space-y-12">
            {[
              {
                role: "Frontend and Backend Developer",
                company: "Khumuun high school Diploma",
              },
            ].map((job, index) => (
              <div key={index} className="group relative">
                <div className="absolute -left-4 top-0 w-0.5 h-full bg-zinc-800 group-hover:bg-purple-500/50 transition-colors"></div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold mb-1 text-zinc-100">
                    {job.role}
                  </h3>
                  <p className="text-zinc-400 mb-2">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-zinc-100">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expense tracker",
                description: "sadasdasd",
                tags: ["Next.js"],
                link: "https://expense-tracker-lime-sigma.vercel.app/",
              },
              {
                title: "Food delivery",
                description: "sadasdasdasdasd",
                tags: ["Next.js", "TypeScript"],
                link: "https://frontend-navy-xi-93.vercel.app/",
              },
              {
                title: "Blog-web",
                description: "asdsadasdasdasdasdas",
                tags: ["React"],
                link: "https://blogpost-one.vercel.app/",
              },
              {
                title: "Portfolio",
                description: "asdasdasdsadasdasd",
                tags: ["React"],
                link: "https://sengedorj-portfolio.vercel.app/",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-zinc-900/50 rounded-full text-zinc-300"
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
