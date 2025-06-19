import React from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAppContext } from "@/contexts/AppContext";
import { useIsMobile } from "@/hooks/use-mobile";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <Button
            icon={<MenuOutlined />}
            onClick={toggleSidebar}
            type="primary"
            shape="circle"
          />
        </div>
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <Drawer
          title="Navigation"
          placement="left"
          closable
          onClose={toggleSidebar}
          open={sidebarOpen}
          className="md:hidden"
          bodyStyle={{ padding: 0, background: "#0f172a" }}
        >
          {/* Navigation links or sidebar content */}
          <ul className="p-4 text-white space-y-4">
            <li>
              <a href="#home" onClick={toggleSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleSidebar}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </Drawer>
      )}

      {/* Page content */}
      <main className="pt-16">{children}</main>
    </>
  );
};

export default AppLayout;
