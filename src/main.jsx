import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ArrowDown, Mail, MapPin, Phone, Code2, Braces, Cloud, BrainCircuit, ExternalLink, Moon, Sun } from "lucide-react";
import "./styles.css";

const Tag = ({children}) => <span className="tag">{children}</span>;

const projects = [
  {
    number:"01", type:"FLAGSHIP PRODUCT ENGINEERING",
    title:"Sales Enablement Platform",
    text:"Worked for nearly three years on a large-scale US sales enablement and CRM platform, contributing across backend and full-stack development. Built and maintained Node.js services, REST APIs, microservices, database-driven functionality, AWS integrations and performance improvements including Redis caching for high-traffic workflows.",
    tags:["Node.js","TypeScript","JavaScript","Microservices","REST APIs","AWS","Redis","MongoDB","PostgreSQL"]
  },
  {
    number:"02", type:"CONTENTSTACK / DATA",
    title:"CMS Migration & Connector Work",
    text:"Helped clients move complex content from other CMS platforms into Contentstack through configurable mapping and custom scripts, and independently built a Contentstack-to-Contentstack migration connector.",
    tags:["Node.js","TypeScript","REST APIs","Data Mapping","CMS"]
  },
  {
    number:"03", type:"LLM APPLICATION",
    title:"AI Sync-Up Agent",
    text:"Built a standalone AI application that conducts team sync-ups, understands updates and uses Jira APIs to update ticket status, comments and assignments.",
    tags:["OpenAI","Gemini","LangChain","LangGraph","Jira REST API"]
  },
  {
    number:"04", type:"AGENTIC WORKFLOW",
    title:"Multi-Agent Engineering Workflow",
    text:"Designed specialized agents for planning, test generation, implementation, validation and documentation, including decomposition of larger tasks into smaller sub-agents.",
    tags:["LangGraph","OpenAI","Gemini","Playwright","Agentic AI"]
  },
  {
    number:"05", type:"HACKATHON WINNER / AI POC",
    title:"Real-Time AI Sales Assistant",
    text:"Built a proof of concept for an existing sales platform that transcribed live conversations, analysed interaction direction and surfaced guidance to sales agents.",
    tags:["AWS Transcribe","OpenAI","Real-Time AI","Generative AI"]
  }
];


function Loader({ loaded }) {
  return (
    <div className={`loader-screen ${loaded ? "loader-screen--hide" : ""}`} aria-live="polite">
      <div className="loader-inner">
        <div className="loader-mark">CN<span>_</span></div>
        <div className="loader-track"><div className="loader-progress" /></div>
        <p>LOADING PORTFOLIO</p>
      </div>
    </div>
  );
}

function App(){
 const [loaded, setLoaded] = useState(false);
 const [darkMode, setDarkMode] = useState(() => localStorage.getItem("chetan-theme") === "dark");
 useEffect(() => {
   document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
   localStorage.setItem("chetan-theme", darkMode ? "dark" : "light");
 }, [darkMode]);
 useEffect(() => {
   const finish = () => setTimeout(() => setLoaded(true), 350);
   if (document.readyState === "complete") finish();
   else window.addEventListener("load", finish, { once: true });
   const fallback = setTimeout(() => setLoaded(true), 4000);
   return () => { window.removeEventListener("load", finish); clearTimeout(fallback); };
 }, []);
 return (
   <>
     <Loader loaded={loaded} />
     <div className="site">
       <header className="topbar">
         <a className="logo" href="#home">
           CN<span>_</span>
         </a>
         <nav>
           <a href="#about">About</a>
           <a href="#experience">Experience</a>
           <a href="#work">Selected work</a>
         </nav>
         <div className="header-actions">
           <button
             className="theme-toggle"
             onClick={() => setDarkMode(!darkMode)}
             aria-label="Toggle dark mode"
           >
             {darkMode ? <Sun size={16} /> : <Moon size={16} />}
             <span>{darkMode ? "LIGHT" : "DARK"}</span>
           </button>
           <a
             className="resume-link"
             href={`${import.meta.env.BASE_URL}Chetan-Narkhede-Resume.pdf`}
             download
           >
             Resume <ArrowDown size={15} />
           </a>
           <a className="talk" href="#contact">
             Let's talk <ArrowUpRight size={15} />
           </a>
         </div>
       </header>

       <main>
         <section id="home" className="hero">
           <div className="hero-index">01 — INTRODUCTION</div>
           <div className="hero-main">
             <p className="availability">
               <i /> AVAILABLE FOR NEW OPPORTUNITIES
             </p>
             <h1>
               <span>Hello, I'm</span>
               <strong>
                 Chetan
                 <br />
                 Narkhede.
               </strong>
             </h1>
             <div className="role-row">
               <p>
                 Software Engineer
                 <br />
                 <em>Backend · Full Stack · GenAI</em>
               </p>
               <a
                 href="#about"
                 className="circle-link"
                 aria-label="Scroll to about"
               >
                 <ArrowDown size={24} />
               </a>
             </div>
           </div>
           <aside className="hero-note">
             <span className="note-label">BASED IN</span>
             <b>Pune, India</b>
             <p>
               Building backend systems, cloud solutions, integrations and
               AI-powered workflows.
             </p>
           </aside>
           <div className="hero-line" />
         </section>

         <section id="about" className="about section">
           <div className="section-num">02</div>
           <div className="section-title">
             <span>ABOUT ME</span>
           </div>
           <div className="about-copy">
             <h2>
               I build the systems that make <em>products work.</em>
             </h2>
             <p>
               I'm a backend-focused full stack engineer with nearly five years
               of experience. I enjoy taking a problem from an unclear
               requirement to a working solution—whether that means designing
               APIs, building integrations, working with cloud infrastructure or
               connecting an interface to the systems underneath.
             </p>
             <p>
               My recent work has expanded into CMS migrations and practical
               GenAI applications, including LLM-powered automation and
               multi-agent engineering workflows.
             </p>
           </div>
           <div className="strengths">
             <article>
               <Code2 />
               <b>Backend engineering</b>
               <span>APIs, services, integrations & system design</span>
             </article>
             <article>
               <Cloud />
               <b>Cloud & production</b>
               <span>AWS, observability, deployments & incident work</span>
             </article>
             <article>
               <Braces />
               <b>Full-stack delivery</b>
               <span>From database and backend through to React UI</span>
             </article>
             <article>
               <BrainCircuit />
               <b>Applied GenAI</b>
               <span>LLMs, RAG, agents and workflow automation</span>
             </article>
           </div>
         </section>

         <section id="experience" className="experience section">
           <div className="section-num">03</div>
           <div className="section-title">
             <span>EXPERIENCE</span>
           </div>
           <div className="career">
             <article className="job">
               <div className="job-meta">
                 <span>2023 — 2026</span>
                 <span>PRODUCT ENGINEERING</span>
               </div>
               <div className="job-body">
                 <h2>Contentstack</h2>
                 <h3>Software Engineer I</h3>
                 <p>
                   Worked across backend systems, marketplace integrations, CMS
                   migrations, production support and AI-assisted engineering
                   workflows.
                 </p>
                 <div className="job-columns">
                   <div>
                     <b>CMS migration</b>
                     <span>
                       Data mapping, custom scripting and a
                       Contentstack-to-Contentstack migration connector.
                     </span>
                   </div>
                   <div>
                     <b>Integrations</b>
                     <span>
                       Translation and e-commerce platforms across backend APIs
                       and UI.
                     </span>
                   </div>
                   <div>
                     <b>AI workflows</b>
                     <span>
                       Agent-based processes for feature development, testing
                       and validation.
                     </span>
                   </div>
                 </div>
                 <div className="tags">
                   <Tag>Node.js</Tag>
                   <Tag>TypeScript</Tag>
                   <Tag>React</Tag>
                   <Tag>AWS</Tag>
                   <Tag>OpenAI</Tag>
                   <Tag>LangGraph</Tag>
                 </div>
               </div>
             </article>
             <article className="job">
               <div className="job-meta">
                 <span>2020 — 2023</span>
                 <span>CONSULTING / ENGINEERING</span>
               </div>
               <div className="job-body">
                 <h2>Coditas</h2>
                 <h3>Software Engineer</h3>
                 <p>
                   Built backend and full-stack features for a large sales
                   enablement platform while working with microservices, AWS,
                   performance improvements and early GenAI POCs.
                 </p>
                 <div className="job-columns">
                   <div>
                     <b>Core platform</b>
                     <span>
                       Node.js services, REST APIs and full-stack features for a
                       large production sales enablement platform.
                     </span>
                   </div>
                   <div>
                     <b>Architecture & performance</b>
                     <span>
                       Microservices work, Redis caching and database
                       optimizations for performance-sensitive endpoints.
                     </span>
                   </div>
                   <div>
                     <b>AI POCs</b>
                     <span>
                       OpenAI, Gemini, RAG, vector databases and a
                       hackathon-winning AI enhancement for the same platform.
                     </span>
                   </div>
                 </div>
                 <div className="tags">
                   <Tag>Node.js</Tag>
                   <Tag>TypeScript</Tag>
                   <Tag>AWS</Tag>
                   <Tag>Redis</Tag>
                   <Tag>MongoDB</Tag>
                   <Tag>RAG</Tag>
                 </div>
               </div>
             </article>
           </div>
         </section>

         <section id="work" className="work section">
           <div className="work-head">
             <div>
               <span className="section-num inline">04</span>
               <p className="section-title-text">SELECTED WORK</p>
             </div>
             <h2>
               Things I've actually <em>built.</em>
             </h2>
           </div>
           <div className="project-list">
             {projects.map((p) => (
               <article className="project" key={p.number}>
                 <div className="project-number">{p.number}</div>
                 <div className="project-type">{p.type}</div>
                 <div className="project-content">
                   <h3>{p.title}</h3>
                   <p>{p.text}</p>
                   <div className="tags">
                     {p.tags.map((x) => (
                       <Tag key={x}>{x}</Tag>
                     ))}
                   </div>
                 </div>
                 <ArrowUpRight className="project-arrow" size={23} />
               </article>
             ))}
           </div>
         </section>

         <section className="stack section">
           <div className="section-num">05</div>
           <div className="section-title">
             <span>TOOLKIT</span>
           </div>
           <div className="stack-grid">
             <Stack
               title="Backend"
               items="Node.js · TypeScript · NestJS · Express · REST APIs · Microservices"
             />
             <Stack
               title="Frontend"
               items="React · JavaScript · Component Design · HTML · CSS"
             />
             <Stack
               title="Cloud & Data"
               items="AWS · Lambda · ECS · SQS · S3 · CloudWatch · MongoDB · PostgreSQL · Redis"
             />
             <Stack
               title="AI & Integrations"
               items="OpenAI · Gemini · LangChain · LangGraph · RAG · Vector DBs · Jira APIs"
             />
           </div>
         </section>

         <section id="contact" className="contact">
           <div className="contact-grid">
             <div>
               <p className="contact-kicker">HAVE A ROLE IN MIND?</p>
               <h2>
                 Let's build
                 <br />
                 <em>something good.</em>
               </h2>
               <p className="contact-intro">
                 I'm currently open to backend, full-stack and AI-focused
                 engineering opportunities.
               </p>
             </div>
             <div className="contact-details">
               <a
                 className="contact-item contact-email"
                 href="mailto:narkhedechetan20@gmail.com"
               >
                 <Mail size={22} />
                 <span>
                   <small>EMAIL</small>
                   <strong>narkhedechetan20@gmail.com</strong>
                 </span>
                 <ArrowUpRight size={20} />
               </a>
               <a className="contact-item" href="tel:+917276679740">
                 <Phone size={21} />
                 <span>
                   <small>PHONE</small>
                   <strong>+91 72766 79740</strong>
                 </span>
               </a>
               <a
                 className="contact-item"
                 href="https://www.linkedin.com/in/chetan-narkhede-81b6a415a/"
                 target="_blank"
                 rel="noreferrer"
               >
                 <ExternalLink size={20} />
                 <span>
                   <small>LINKEDIN</small>
                   <strong>Connect with me</strong>
                 </span>
                 <ArrowUpRight size={18} />
               </a>
               <div className="contact-item">
                 <MapPin size={21} />
                 <span>
                   <small>LOCATION</small>
                   <strong>Pune, India</strong>
                 </span>
               </div>
             </div>
           </div>
           <footer>© {new Date().getFullYear()} CHETAN NARKHEDE</footer>
         </section>
       </main>
     </div>
   </>
 );
}
function Stack({title,items}){return <article><h3>{title}</h3><p>{items}</p></article>}
createRoot(document.getElementById("root")).render(<App/>);
