// src/pages/ChatPage.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ChatMessage from "../components/ChatMessage/ChatMessage";
import ChatInput from "../components/ChatInput/ChatInput";
import { generateAssistantResponse } from "../data/chatHistory";
import { sampleQuestions } from "../data/courtCases";
import { BalanceScaleIcon } from "../components/Icons/Icons";
import "./ChatPage.css";

const ChatPage = ({ 
  currentConversation, 
  onNewConversation, 
  onUpdateConversation 
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const initialQuestionHandled = useRef(false);
  const conversationIdRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load conversation messages when switching conversations
  useEffect(() => {
    if (currentConversation) {
      setMessages(currentConversation.messages);
      conversationIdRef.current = currentConversation.id;
    } else {
      setMessages([]);
      conversationIdRef.current = null;
    }
    initialQuestionHandled.current = false;
  }, [currentConversation]);

  const handleSendMessage = useCallback((content) => {
    const userMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prevMessages => {
      const newMessages = [...prevMessages, userMessage];
      
      // Create new conversation if this is the first message
      let convId = conversationIdRef.current;
      if (!convId) {
        const title = content.length > 40 ? content.substring(0, 40) + "..." : content;
        const newConv = onNewConversation(title, newMessages);
        convId = newConv.id;
        conversationIdRef.current = convId;
      } else {
        onUpdateConversation(convId, newMessages);
      }

      return newMessages;
    });
    
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const response = generateAssistantResponse(content);
      const assistantMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: response.content,
        sources: response.sources,
        timestamp: new Date().toISOString()
      };

      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, assistantMessage];
        const convId = conversationIdRef.current;
        if (convId) {
          onUpdateConversation(convId, updatedMessages);
        }
        return updatedMessages;
      });
      
      setIsTyping(false);
    }, 1500);
  }, [onNewConversation, onUpdateConversation]);

  // Handle initial question from URL
  useEffect(() => {
    const initialQuestion = searchParams.get("q");
    if (initialQuestion && !initialQuestionHandled.current && !currentConversation) {
      initialQuestionHandled.current = true;
      setSearchParams({});
      handleSendMessage(initialQuestion);
    }
  }, [searchParams, currentConversation, handleSendMessage, setSearchParams]);

  const handleSampleQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="chat-page">
      <div className="chat-page__main">
        <div className="chat-page__messages-wrapper">
          {messages.length === 0 ? (
            <div className="chat-page__empty">
              <div className="chat-page__empty-icon">
                <BalanceScaleIcon size={40} />
              </div>
              <h2 className="chat-page__empty-title">Vitajte v Právnom asistentovi</h2>
              <p className="chat-page__empty-description">
                Položte mi právnu otázku a ja vám poskytnem odpoveď 
                založenú na slovenských súdnych rozhodnutiach.
              </p>
              <div className="chat-page__suggestions">
                <p className="chat-page__suggestions-label">Skúste napríklad:</p>
                <div className="chat-page__suggestions-grid">
                  {sampleQuestions.slice(0, 4).map((question, index) => (
                    <button
                      key={index}
                      className="chat-page__suggestion-btn"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="chat-page__messages">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="chat-page__typing">
                  <div className="chat-page__typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="chat-page__typing-text">Právny asistent píše...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatPage;