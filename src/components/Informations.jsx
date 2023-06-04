import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./css/Info.css";

const Info = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const SECTIONS = [
    {
      data: [
        {
          key: "1",

          info: "Hello everyone 🖐! My name is Jasson Fernandez, and I am a passionate student of Systems Engineering from Nueva Guinea, Nicaragua. I am also a talented graphic designer and UI designer. I love diving into the world of technology and web development.",
        },
        {
          key: "2",
          info: "As a student of Systems Engineering, I have acquired extensive knowledge in areas such as programming, databases, networks, and cybersecurity. I am constantly seeking technical challenges and enjoy solving complex problems to create innovative solutions.",
        },
        {
          key: "3",
          info: "As a graphic designer, my creativity and artistic skills allow me to create visually appealing and effective designs. From logos to advertising materials, I always strive to capture the essence of a project and present it in a striking way.",
        },
        {
          key: "4",
          info: "Furthermore, as a UI designer, I am passionate about creating intuitive and visually appealing digital experiences. I ensure that interfaces are user-friendly and visually appealing, thereby enhancing the user experience.",
        },
        {
          key: "5",
          info: "My interest in technology keeps me updated on the latest trends and advancements in the field. I am always excited to explore new technologies and apply them to my projects to deliver innovative and cutting-edge solutions.",
        },
        {
          key: "6",
          info: "With web development skills, I can bring my designs to life using languages like HTML, CSS, and JavaScript. My focus includes creating modern and responsive websites, optimizing performance, and implementing best practices for security.",
        },
        {
          key: "8",
          info: "I am excited to continue growing professionally in these fields and work on projects that combine my love for technology, design, and innovation. I look forward to contributing to making the digital world a more appealing and functional place!",
        },
      ],
    },
  ];

  return (
    <div>
      {SECTIONS.map((section) => (
        <div>
          {section.data.map((item) => (
            <div key={item.key}>
              <p data-aos="zoom-in-right" className="parrafo">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Info;
