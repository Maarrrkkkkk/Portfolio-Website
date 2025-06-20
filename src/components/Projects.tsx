import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Typography, Tag } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

// 🔽 Inline See More / See Less Component
const ProjectDescription = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);
  const charLimit = 130;

  const isLong = description.length > charLimit;
  const displayText = expanded
    ? description
    : description.slice(0, charLimit).trim() + (isLong ? "..." : "");

  return (
    <Paragraph className="text-gray-300 mb-1">
      {displayText}
      {isLong && (
        <span
          onClick={() => setExpanded(!expanded)}
          className="text-emerald-400 cursor-pointer hover:underline ml-1"
        >
          {expanded ? "See less" : "See more"}
        </span>
      )}
    </Paragraph>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Online Academic Archive and Yearbook System",
      description:
        "A university-exclusive system for managing theses, dissertations, and re-entry papers. Features include uploads by students/admins, citation counters, and audit logging.",
      image: "/academic-archieve.jpg",
      technologies: [
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Capstone Management System",
      description:
        "A web-based system developed for EVSU’s IT Department to enhance the management of undergraduate capstone projects. Features include intelligent adviser recommendations using content-based filtering, automated grading for consistent evaluations, and optimized scheduling of hearings and panels using constraint-solving and heuristic algorithms. The platform improves efficiency, fairness, and overall project guidance quality.",
      image: "/capstone-project.jpg",
      technologies: [
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title className="text-white">Featured Projects</Title>
          <Paragraph className="text-gray-400">
            Projects that showcase my development skills and interest in solving
            academic challenges.
          </Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <Card
                hoverable={false}
                className="flex flex-col flex-grow bg-white/5 border border-white/10 text-white h-full"
                cover={
                  <img
                    alt={project.title}
                    src={project.image}
                    className="h-48 object-cover"
                  />
                }
              >
                <Meta
                  title={
                    <span className="text-white text-lg">{project.title}</span>
                  }
                  description={
                    <>
                      <ProjectDescription description={project.description} />

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <Tag
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-300/20"
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-4 h-4"
                            />
                            {tech.name}
                          </Tag>
                        ))}
                      </div>
                    </>
                  }
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
