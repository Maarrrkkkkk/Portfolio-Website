import { motion } from "framer-motion";
import { Card, Typography, Row, Col } from "antd";
import {
  CodeOutlined,
  DesktopOutlined,
  MobileOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import SkillIcon from "./SkillIcon";

const { Title, Paragraph } = Typography;

const About = () => {
  const services = [
    {
      icon: <CodeOutlined className="text-4xl text-emerald-400" />,
      title: "Front-End Development",
      description:
        "Building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
    },
    {
      icon: <DesktopOutlined className="text-4xl text-cyan-400" />,
      title: "UI/UX Implementation",
      description:
        "Designing clean, intuitive layouts and ensuring cross-browser compatibility for better user experience.",
    },
    {
      icon: <CloudOutlined className="text-4xl text-emerald-500" />,
      title: "Teamwork and Collaboration",
      description:
        "Collaborating with backend teams to integrate APIs and deliver smooth end-to-end functionality.",
    },
    {
      icon: <MobileOutlined className="text-4xl text-cyan-500" />,
      title: "Project-Based Learning",
      description:
        "Experience gained from building academic platforms, contributing to real-world solutions for academic departments.",
    },
  ];

  // Skills and Technologies (Sorted & Grouped)
  const skills = [
    // Frontend
    {
      name: "Ant Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },

    // Backend
    {
      name: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },

    // Database
    {
      name: "SQLite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },

    // Tools
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Vite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title
            level={2}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent font-poppins"
          >
            About Me
          </Title>
          <Paragraph className="text-xl text-slate-300 max-w-3xl mx-auto font-poppins rounded-xl  p-6 ">
            I'm a passionate{" "}
            <span className="text-emerald-400 font-semibold">
              Front-End Developer
            </span>{" "}
            who enjoys building clean, user-friendly web systems. I love turning
            ideas into{" "}
            <span className="text-cyan-400 font-semibold">
              Responsive, Modern Interfaces
            </span>{" "}
            that work.
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} className="mb-16">
          {services.map((service, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card
                  className="h-full min-h-[320px] flex flex-col justify-center"
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div className="text-center flex flex-col h-full justify-center">
                    <div className="mb-4">{service.icon}</div>
                    <Title level={4} className="mb-3 font-poppins">
                      {service.title}
                    </Title>
                    <Paragraph className="font-poppins flex-1">
                      {service.description}
                    </Paragraph>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Title
            level={3}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-poppins"
          >
            Skills & Technologies
          </Title>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon name={skill.name} logo={skill.logo} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
