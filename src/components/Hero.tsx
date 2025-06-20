import { motion } from "framer-motion";
import { Button, Typography } from "antd";
import { DownloadOutlined, GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #0891b2 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #10b981 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg opacity-20"
        animate={{ rotate: 360, y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-25"
        animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 transform rotate-45 opacity-20"
        animate={{ rotate: [45, 225, 45], y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Developer Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/profile-avatar.jpg"
              alt="Developer Avatar"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-emerald-400 shadow-lg"
            />
          </motion.div>
          <Title
            level={1}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent font-poppins"
          >
            Mark Anthony Aguirre
          </Title>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Paragraph className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-poppins">
              <strong>
                <em>Front-End Developer</em>
              </strong>
            </Paragraph>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/markanthonyaguirre.pdf" // Replace with the actual path to your PDF file
              download
            >
              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                className="px-4 py-2 h-auto text-base shadow-md hover:shadow-emerald-500/25 font-poppins"
              >
                Download CV
              </Button>
            </a>

            <a
              href="https://github.com/Maarrrkkkkk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="large"
                icon={<GithubOutlined />}
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-3 py-2 h-auto text-base backdrop-blur-sm bg-white/5 font-poppins"
              >
                View GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
