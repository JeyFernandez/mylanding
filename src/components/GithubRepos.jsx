import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function GithubRepos({ username = "JeyFernandez" }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error("Error cargando repositorios de GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaGithub className="text-cyan-400" /> Repositorios Recientes
        </h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-cyan-400 hover:underline flex items-center gap-1 font-medium"
        >
          Ver todo en GitHub <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>

      {loading ? (
        <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800 animate-pulse">
          Sincronizando repositorios desde GitHub...
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
                  {repo.description || "Proyecto o módulo registrado en GitHub."}
                </p>
              </div>

              <div>
                {/* Topics / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Footer del card con lenguaje y stats */}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GithubRepos;