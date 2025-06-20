import { motion } from "framer-motion";
import { Typography, Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Footer = () => {
  const socialLinks = [
    {
      icon: <GithubOutlined className="text-xl" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <LinkedinOutlined className="text-xl" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <TwitterOutlined className="text-xl" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <MailOutlined className="text-xl" />,
      href: "#",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-teal-900/50 border-t border-emerald-400/20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Title
            level={3}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent flex items-center justify-center gap-2"
          >
            <span className="text-3xl">🤝</span>
            Let's Connect
          </Title>

          <Paragraph className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Thank you for visiting my portfolio. I'm always open to discussing
            new opportunities and interesting projects.
          </Paragraph>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  type="text"
                  href={link.href}
                  className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50"
                  aria-label={link.label}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">{link.emoji}</span>
                    {link.icon}
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-emerald-400/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Paragraph className="text-gray-400 text-sm flex items-center justify-center gap-1">
              <span>© {new Date().getFullYear()} Mark Anthony</span>
              <span className="mx-1">|</span>
              <span>All rights reserved.</span>
            </Paragraph>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
