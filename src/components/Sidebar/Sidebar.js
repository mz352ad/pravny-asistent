// src/components/Sidebar/Sidebar.js
import React from "react";
import { ChatIcon } from "../Icons/Icons";
import Button from "../Button/Button";
import "./Sidebar.css";

const Sidebar = ({ 
  isOpen, 
  onClose, 
  conversations, 
  onSelectConversation, 
  onNewChat,
  currentConversationId 
}) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__header">
          <h2 className="sidebar__title">História</h2>
        </div>
        
        <div className="sidebar__actions">
          <Button 
            variant="primary" 
            size="small" 
            fullWidth 
            onClick={onNewChat}
            icon={<ChatIcon size={16} />}
          >
            Nový chat
          </Button>
        </div>

        <div className="sidebar__content">
          {conversations.length === 0 ? (
            <p className="sidebar__empty">
              Zatiaľ žiadne konverzácie. Položte prvú otázku!
            </p>
          ) : (
            <ul className="sidebar__list">
              {conversations.map((conv) => (
                <li key={conv.id}>
                  <button
                    className={`sidebar__item ${
                      currentConversationId === conv.id ? "sidebar__item--active" : ""
                    }`}
                    onClick={() => onSelectConversation(conv)}
                  >
                    <ChatIcon size={16} />
                    <span className="sidebar__item-title">{conv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
      
      {isOpen && (
        <div className="sidebar__overlay" onClick={onClose} />
      )}
    </>
  );
};

export default Sidebar;