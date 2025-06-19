import { motion } from "framer-motion";
import { Input, Button, Typography, Card, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const contactInfo = [
    {
      icon: <MailOutlined className="text-2xl text-emerald-400" />,
      title: "Email",
      value: "markanthonyaguirre1234@gmail.com",
      link: "mailto:markanthonyaguirre1234@gmail.com",
    },
    {
      icon: <PhoneOutlined className="text-2xl text-cyan-400" />,
      title: "Phone",
      value: "+63 9934253793",
      link: "tel:+639934253793",
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-teal-400" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative overflow-hidden"
    >
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title
            level={2}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </Title>
          <Paragraph className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </Paragraph>
        </motion.div>

        <Row gutter={[48, 48]} align="middle">
          {/* Contact Form */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <form
                  action="https://formsubmit.co/markanthonyaguirre1234@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/#contact"
                  />

                  <label className="text-white block">Name</label>
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white"
                  />

                  <label className="text-white block">Email</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white"
                  />

                  <label className="text-white block">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Discussion"
                    className="bg-white/10 border-white/20 text-white"
                  />

                  <label className="text-white block">Message</label>
                  <TextArea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project..."
                    className="bg-white/10 border-white/20 text-white"
                  />

                  <Button
                    htmlType="submit"
                    type="primary"
                    icon={<SendOutlined />}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 border-none hover:from-emerald-700 hover:to-teal-700 h-12 shadow-lg hover:shadow-emerald-500/25"
                  >
                    Send Message 🚀
                  </Button>
                </form>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Info Cards */}
          <Col xs={24} lg={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-4">
                      <div>
                        <Title
                          level={5}
                          className="text-white mb-1 flex items-center gap-2"
                        >
                          {info.icon}
                          {info.title}
                        </Title>
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
