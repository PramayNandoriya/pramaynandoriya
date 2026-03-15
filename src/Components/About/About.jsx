import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IconCloud from "../ui/icon-cloud.jsx";
import { motion } from "framer-motion";

const skillCategories = [
  { category: "🧠 Programming", skills: ["JavaScript", "Python"], gradStart: "#facc15", gradEnd: "#f97316", glow: "rgba(250,204,21,.20)" },
  { category: "⚛️ Front-End", skills: ["React.js", "Redux.js", "CSS3", "SASS", "Tailwind CSS", "Bootstrap", "MUI"], gradStart: "#60a5fa", gradEnd: "#6366f1", glow: "rgba(99,102,241,.20)" },
  { category: "✨ UI & Animation", skills: ["GSAP", "Framer Motion"], gradStart: "#f472b6", gradEnd: "#a855f7", glow: "rgba(244,114,182,.20)" },
  { category: "🗄️ Backend & DB", skills: ["Node.js", "MongoDB", "MySQL"], gradStart: "#4ade80", gradEnd: "#14b8a6", glow: "rgba(74,222,128,.20)" },
  { category: "☁️ Cloud & Auth", skills: ["Microsoft Azure", "Firebase Auth"], gradStart: "#22d3ee", gradEnd: "#3b82f6", glow: "rgba(34,211,238,.20)" },
  { category: "🛠️ Tools & Tech", skills: ["Git & GitHub", "Docker", "Postman", "Jira", "JWT"], gradStart: "#f87171", gradEnd: "#818cf8", glow: "rgba(248,113,113,.20)" },
  { category: "🌐 Other Skills", skills: ["Responsive Design", "Web Performance", "Web Hosting", "QA & Testing", "CI/CD Pipeline"], gradStart: "#c084fc", gradEnd: "#f87171", glow: "rgba(192,132,252,.20)" },
];

const getEmoji = (str) => [...str][0];
const getName = (str) => str.replace(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\uFE0F?\s*/u, "").trim();

const About = () => {
  const slugs = [
    "typescript", "javascript", "python", "java", "react", "flutter",
    "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
    "prisma", "postgresql", "firebase", "vercel", "docker", "git",
    "redis", "flask", "gitlab", "vscode", "figma",
  ];

  return (
    <div id="about" className="about">

      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src="" alt="My Picture" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>1+</h1>
                <p>Years Of Experience</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>25+</h1>
                <p>Skills</p>
              </div>
            </div>
            <p>
              🚀 Front-End Developer | React.js | JavaScript | Building Fast &amp; Modern Web Applications
              <br /><br />
              ✨ I'm a React.js Front-End Developer with 1+ year of experience building responsive and
              scalable web applications. I enjoy turning complex ideas into clean, user-friendly interfaces
              with strong performance and modern UI.
              <br /><br />
              ✨ I've worked on multiple production projects for companies and freelance clients, focusing on
              performance optimisation, responsive design, and interactive user experiences.
            </p>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      {/* ── Skills Section ── */}
      <div id="skills" className="skills-section">
        <div className="skills-grid-bg" />
        <div className="skills-glow skills-glow--yellow" />
        <div className="skills-glow skills-glow--indigo" />
        <div className="skills-glow skills-glow--pink" />

        <div className="skills-header">
          <p className="skills-eyebrow">What I work with</p>
          <h2 className="skills-title">
            Skills &amp; <span className="skills-title-gradient">Expertise</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I use to build fast, beautiful, and scalable products
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="skill-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 130, damping: 18 }}
              whileHover={{ y: -7, scale: 1.013 }}
              style={{ "--grad-start": cat.gradStart, "--grad-end": cat.gradEnd, "--glow-color": cat.glow }}
            >
              <div className="skill-card__bar" />
              <div className="skill-card__glow-overlay" />

              <div className="skill-card__header">
                <div className="skill-card__icon">{getEmoji(cat.category)}</div>
                <span className="skill-card__name">{getName(cat.category)}</span>
                <span className="skill-card__count">{cat.skills.length} skills</span>
              </div>

              <div className="skill-card__divider" />

              <div className="skill-card__pills">
                {cat.skills.map((skill) => (
                  <motion.span key={skill} className="skill-pill" whileHover={{ scale: 1.08 }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;