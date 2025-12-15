import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = ({ 
  conversations, 
  onSelectConversation, 
  onNewChat,
  currentConversationId 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const showSidebar = location.pathname.startsWith("/chat");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSelectConversation = (conv) => {
    onSelectConversation(conv);
    closeSidebar();
  };

  const handleNewChat = () => {
    onNewChat();
    closeSidebar();
  };

  return (
    <div className="main-layout">
      <Header 
        onToggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
      />
      
      {showSidebar && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          conversations={conversations}
          onSelectConversation={handleSelectConversation}
          onNewChat={handleNewChat}
          currentConversationId={currentConversationId}
        />
      )}
      
      <main className={`main-layout__content ${showSidebar && isSidebarOpen ? "main-layout__content--sidebar-open" : ""}`}>
        <Outlet />
      </main>
      
      {!location.pathname.startsWith("/chat") && <Footer />}
    </div>
  );
};

export default MainLayout;