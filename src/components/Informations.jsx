import { useEffect } from "react";
import AOS from "aos";
import { 
  FaServer, 
  FaMobileAlt, 
  FaUserCheck,
  FaLayerGroup
} from "react-icons/fa";

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const FEATURED_PROJECTS = [
    {
      id: "zigo-dt",
      title: "ZIGO - DT",
      subtitle: "Sistema de Gestión Comercial, Punto de Venta & Logística",
      description:
        "Plataforma offline-first diseñada para la distribución comercial de productos en ruta. Integra control de inventarios en tiempo real, facturación, sincronización de rutas de reparto y gestión multicanal de ventas.",
      type: "Enterprise / Distribución",
      tags: ["NestJS", "React", "PostgreSQL", "Prisma ORM", "TypeScript"],
      highlights: [
        "Sincronización e inventario en tiempo real",
        "Control de rutas de distribución e itinerarios",
        "Punto de Venta (POS) optimizado para operativas de alta frecuencia"
      ],
      icon: FaServer,
      borderColor: "border-cyan-500/30 hover:border-cyan-500/60",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
    },
    {
      id: "breteya",
      title: "BreteYá",
      subtitle: "Plataforma Mobile de Servicios Locales en Nicaragua",
      description:
        "Ecosistema móvil diseñado para conectar directamente a trabajadores de servicios independientes con clientes en tiempo real, priorizando la geolocalización precisa y la facilidad de contacto.",
      type: "Mobile App / On-Demand Services",
      tags: ["React Native", "Expo", "TypeScript", "Mapbox", "Tailwind CSS"],
      highlights: [
        "Búsqueda geolocalizada e integración interactiva de mapas",
        "Perfiles profesionales con sistema de reputación",
        "UI/UX fluida enfocada en la conversión y agilidad de contratación"
      ],
      icon: FaMobileAlt,
      borderColor: "border-emerald-500/30 hover:border-emerald-500/60",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    }
  ];

  return (
    <div className="space-y-12">
      {/* 1. Perfil Profesional & Biografía */}
      <div 
        data-aos="fade-up" 
        className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4"
      >
        <div className="flex items-center gap-3 text-cyan-400 font-semibold text-lg">
          <FaUserCheck className="text-xl" />
          <h2>Perfil Profesional</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
          <strong className="text-white">Ingeniero de Sistemas Egresado</strong> de URACCAN (Nueva Guinea, Nicaragua) y <strong className="text-white">Desarrollador Full-Stack & UI/UX</strong>. Especializado en la ingeniería de software comercial, desarrollo de arquitecturas en la nube escalables y creación de aplicaciones móviles con enfoque en usabilidad.
        </p>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Cuento con experiencia práctica en la implementación de soluciones empresariales completas utilizando <span className="text-cyan-300">React, Next.js, NestJS, PostgreSQL y Prisma ORM</span>, abarcando desde la concepción de bases de datos relacionales hasta el despliegue e integración en entornos de producción.
        </p>
      </div>

      {/* 2. Proyectos Destacados */}
      <div className="space-y-6">
        <div className="flex items-center justify-between" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FaLayerGroup className="text-cyan-400" /> Proyectos Principales
          </h2>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">
            Full-Stack & Mobile
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-aos="fade-up"
                className={`p-6 rounded-2xl bg-slate-900/90 border transition-all duration-300 flex flex-col justify-between shadow-xl ${project.borderColor}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 text-xl">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white">{project.title}</h3>
                        <span className="text-xs text-slate-400">{project.type}</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${project.badgeColor}`}>
                      Destacado
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 font-medium leading-snug">
                    {project.subtitle}
                  </p>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-semibold text-slate-200">Aportes Clave:</span>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="marker:text-cyan-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;