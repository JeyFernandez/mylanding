import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaCode } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 text-slate-200 font-bold tracking-wide">
            <FaCode className="text-cyan-400" />
            <span>Jasson Fernández</span>
          </div>
          <p className="text-xs text-slate-500">
            Systems Engineering & Full-Stack Development • Nueva Guinea, Nicaragua
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com/JeyFernandez"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jasson-fernandez-4b19a2259/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=50555031540"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>© {currentYear} Jasson Ariel Fernández Espinoza.</p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Desarrollado con React, Tailwind CSS & GitHub API
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;