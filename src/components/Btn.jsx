import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Btn() {
  const LINKS = [
    {
      icon: FaWhatsapp,
      url: "https://api.whatsapp.com/send?phone=50555031540",
      label: "WhatsApp",
      hover: "hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/40",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/jasson-fernandez-4b19a2259/",
      label: "LinkedIn",
      hover: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/40",
    },
    {
      icon: FaGithub,
      url: "https://github.com/JeyFernandez",
      label: "GitHub",
      hover: "hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/40",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/jasson.fernandez.714",
      label: "Facebook",
      hover: "hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/40",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={`p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all ${item.hover}`}
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
}

export default Btn;