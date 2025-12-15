import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ConditionsPage from "./pages/ConditionsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);

  const handleNewConversation = useCallback((title, messages) => {
    const newConv = {
      id: `conv-${Date.now()}`,
      title,
      timestamp: new Date().toISOString(),
      messages
    };
    setConversations(prev => [newConv, ...prev]);
    setCurrentConversation(newConv);
    return newConv;
  }, []);

  const handleUpdateConversation = useCallback((convId, messages) => {
    setConversations(prev => 
      prev.map(conv => 
        conv.id === convId 
          ? { ...conv, messages } 
          : conv
      )
    );
    setCurrentConversation(prev => 
      prev?.id === convId 
        ? { ...prev, messages } 
        : prev
    );
  }, []);

  const handleSelectConversation = useCallback((conv) => {
    setCurrentConversation(conv);
  }, []);

  const handleNewChat = useCallback(() => {
    setCurrentConversation(null);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout 
              conversations={conversations}
              onSelectConversation={handleSelectConversation}
              onNewChat={handleNewChat}
              currentConversationId={currentConversation?.id}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route 
            path="chat" 
            element={
              <ChatPage 
                currentConversation={currentConversation}
                onNewConversation={handleNewConversation}
                onUpdateConversation={handleUpdateConversation}
              />
            } 
          />
          <Route path="podmienky" element={<ConditionsPage />} />
          <Route path="ochrana-sukromia" element={<PrivacyPage />} />
          <Route path="kontakt" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;