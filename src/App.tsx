import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ConfigProvider, theme } from 'antd';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" forcedTheme="dark">
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#10b981',
          colorPrimaryHover: '#059669',
          colorPrimaryActive: '#047857',
          colorBgBase: '#0f172a',
          colorBgContainer: '#1e293b',
          colorBgElevated: '#334155',
          colorText: '#f1f5f9',
          colorTextSecondary: '#94a3b8',
          colorTextTertiary: '#64748b',
          borderRadius: 12,
          colorBorder: '#334155',
          colorBorderSecondary: '#475569',
          colorFill: '#1e293b',
          colorFillSecondary: '#334155',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 14,
          fontSizeHeading1: 38,
          fontSizeHeading2: 30,
          fontSizeHeading3: 24,
          fontSizeHeading4: 20,
          fontSizeHeading5: 16,
        },
        components: {
          Card: {
            colorBgContainer: '#1e293b',
            colorBorder: '#334155',
          },
          Button: {
            colorPrimary: '#10b981',
            colorPrimaryHover: '#059669',
            colorPrimaryActive: '#047857',
          },
          Input: {
            colorBgContainer: '#334155',
            colorBorder: '#475569',
            colorText: '#f1f5f9',
          },
          Menu: {
            colorBgContainer: 'transparent',
            colorItemText: '#94a3b8',
            colorItemTextHover: '#10b981',
            colorItemBgHover: 'rgba(16, 185, 129, 0.1)',
          },
          Tag: {
            colorBgContainer: '#334155',
            colorBorder: '#475569',
            colorText: '#f1f5f9',
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </ThemeProvider>
);

export default App;