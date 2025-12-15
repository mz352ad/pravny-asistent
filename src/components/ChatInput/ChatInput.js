import React, { useState, useRef } from "react";
import { SendIcon } from "../Icons/Icons";
import "./ChatInput.css";

const ChatInput = ({ onSend, disabled = false, placeholder = "Napíšte svoju právnu otázku..." }) => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage && !disabled) {
      onSend(trimmedMessage);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-input-container">
      <form 
        className={`chat-input ${isFocused ? "chat-input--focused" : ""}`} 
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type="text"
          className="chat-input__field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          aria-label="Správa"
        />
        <button
          type="submit"
          className="chat-input__send"
          disabled={!message.trim() || disabled}
          aria-label="Odoslať správu"
        >
          <SendIcon size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;