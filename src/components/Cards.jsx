import { useEffect, useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaStar, 
  FaCodeBranch, 
  FaExternalLinkAlt, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma, 
  SiTailwindcss, 
  SiNestjs 
} from "react-icons/si";

function Cards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stack de tecnologías actuales
  const TECH_STACK = [
    { name: "React / React Native", icon: FaReact, color: "text-cyan-400", level: "Avanzado" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: "Avanzado" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: "Dominio" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500", level: "Intermedio/Avanzado" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400", level: "Avanzado" },
    { name: "Prisma ORM", icon: SiPrisma, color: "text-emerald-400", level: "Avanzado" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300", level: "Avanzado" },
    { name: "Docker & Linux", icon: FaDocker, color: "text-blue-500", level: "Intermedio" },
  ];

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/JeyFernandez/repos?sort=updated&per_page=6");
        const data = await res.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (err) {
        console.error("Error cargando repositorios de GitHub:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  return (
    <div className="space-y-12">
      {/* 1. Tech Stack Matrix */}
      <div className="space-y-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">&gt;</span> Tech Stack & Herramientas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex items-center gap-3 shadow-lg"
              >
                <Icon className={`text-2xl ${tech.color}`} />
                <div>
                  <h3 className="font-semibold text-sm text-slate-200">{tech.name}</h3>
                  <span className="text-xs text-slate-400">{tech.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Repositorios de GitHub en Tiempo Real */}
      <div className="space-y-6" data-aos="fade-up">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FaGithub className="text-cyan-400" /> Repositorios Recientes
          </h2>
          <a
            href="https://github.com/JeyFernandez"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cyan-400 hover:underline flex items-center gap-1 font-medium"
          >
            Ver GitHub <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        {loading ? (
          <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800 animate-pulse">
            Sincronizando repositorios de GitHub...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex flex-col justify-between transition-all group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 p-1"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    {repo.description || "Proyecto registrado en GitHub."}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 font-medium text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-amber-400" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;