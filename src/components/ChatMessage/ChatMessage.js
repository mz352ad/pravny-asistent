import React, { useState } from "react";
import { UserIcon, BalanceScaleIcon, CopyIcon, ThumbsUpIcon, ThumbsDownIcon } from "../Icons/Icons";
import SourceCard from "../SourceCard/SourceCard";
import "./ChatMessage.css";

const ChatMessage = ({ message }) => {
  const [feedback, setFeedback] = useState(null);
  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  return (
    <div className={`chat-message ${isUser ? "chat-message--user" : "chat-message--assistant"}`}>
      <div className="chat-message__avatar">
        {isUser ? (
          <UserIcon size={20} />
        ) : (
          <BalanceScaleIcon size={20} />
        )}
      </div>
      
      <div className="chat-message__content">
        <div className="chat-message__header">
          <span className="chat-message__sender">
            {isUser ? "Vy" : "Právny asistent"}
          </span>
        </div>
        
        <div className="chat-message__text">
          {message.content.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="chat-message__sources">
            <h4 className="chat-message__sources-title">Citované zdroje:</h4>
            <div className="chat-message__sources-list">
              {message.sources.map((source) => (
                <SourceCard key={source.id} source={source} />
              ))}
            </div>
          </div>
        )}

        {!isUser && (
          <div className="chat-message__actions">
            <button
              className={`chat-message__action-btn ${copied ? "chat-message__action-btn--active" : ""}`}
              onClick={handleCopy}
              aria-label="Kopírovať odpoveď"
              title="Kopírovať"
            >
              <CopyIcon size={16} />
              {copied && <span className="chat-message__action-tooltip">Skopírované!</span>}
            </button>
            <button
              className={`chat-message__action-btn ${feedback === "up" ? "chat-message__action-btn--active" : ""}`}
              onClick={() => handleFeedback("up")}
              aria-label="Užitočná odpoveď"
              title="Užitočné"
            >
              <ThumbsUpIcon size={16} />
            </button>
            <button
              className={`chat-message__action-btn ${feedback === "down" ? "chat-message__action-btn--active" : ""}`}
              onClick={() => handleFeedback("down")}
              aria-label="Neužitočná odpoveď"
              title="Neužitočné"
            >
              <ThumbsDownIcon size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;